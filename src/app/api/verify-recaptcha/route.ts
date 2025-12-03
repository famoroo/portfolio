import { NextRequest, NextResponse } from "next/server";
import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";

// サービスアカウント認証が設定されている環境で実行されます
const client = new RecaptchaEnterpriseServiceClient();
const PROJECT_ID = process.env.RECAPTCHA_PROJECT_ID; // GCPプロジェクトID

/**
 * reCAPTCHAトークンを検証し、スコアを取得します
 */
async function createAssessment(token: string, action: string) {
    if (!PROJECT_ID) {
        throw new Error("RECAPTCHA_PROJECT_ID is not set in environment variables.");
    }
    const assessmentName = client.projectPath(PROJECT_ID);

    const [response] = await client.createAssessment({
        parent: assessmentName,
        assessment: {
            event: {
                token: token,
                siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, // クライアントと同じサイトキー
                expectedAction: action,
            },
        },
    });

    return response;
}

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const recaptchaToken = formData.get("recaptchaToken") as string;
        const name = formData.get("name") as string;
        const expectedAction = "submit_form"; // クライアントサイドと一致させるアクション名

        if (!recaptchaToken) {
            return NextResponse.json(
                { success: false, message: "No reCAPTCHA token provided" },
                { status: 400 }
            );
        }

        const assessment = await createAssessment(
            recaptchaToken,
            expectedAction
        );

        // 検証結果のチェック
        if (!assessment.tokenProperties?.valid) {
            // トークンが無効な場合（期限切れ、キー不一致など）
            console.error(
                "Invalid token:",
                assessment.tokenProperties?.invalidReason
            );
            return NextResponse.json(
                { success: false, message: "reCAPTCHA verification failed" },
                { status: 403 }
            );
        }

        if (assessment.tokenProperties.action !== expectedAction) {
            // 予期しないアクション名の場合
            return NextResponse.json(
                { success: false, message: "Unexpected reCAPTCHA action" },
                { status: 403 }
            );
        }

        const score = assessment.riskAnalysis?.score || 0.0;

        // スコアに基づくロジック
        if (score < 0.5) {
            // 例: スコアが低い場合はブロックまたは追加認証を要求
            console.warn(
                `Low score received: ${score}. Blocking user ${name}.`
            );
            return NextResponse.json(
                {
                    success: false,
                    message: "Verification score too low",
                    score,
                },
                { status: 403 }
            );
        }

        // 検証成功
        return NextResponse.json({
            success: true,
            message: "Verification passed",
            score,
            name,
        });
    } catch (error) {
        console.error("Server error during reCAPTCHA verification:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}
