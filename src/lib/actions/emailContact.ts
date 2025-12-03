"use server";

import { db } from "@/lib/neon/db"; // Prisma Client
import {
    EmailContactCreateInput,
    EmailContactUpdatePayload,
} from "@/schemas/emailContactSchema";

import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';
const client = new RecaptchaEnterpriseServiceClient();
const PROJECT_ID = process.env.RECAPTCHA_PROJECT_ID; // GCPプロジェクトID

import { revalidatePath } from "next/cache";

// =======================
// 一覧取得
// =======================
export async function getEmailContact() {
    try {
        const data = await db.emailContact.findMany({
            orderBy: { createdAt: "asc" },
        });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("問い合わせ一覧の取得に失敗しました");
    }
}

// =======================
// 登録
// =======================
export async function createEmailContact(data: EmailContactCreateInput) {
    const { recaptchaToken, ...payload } = data;
    const expectedAction = 'submit_form';

    try {
        if( !recaptchaToken) {
            throw new Error("reCAPTCHAトークンが提供されていません");
        }
        // 1. reCAPTCHAトークンを検証
        const score = await verifyRecaptchaToken(recaptchaToken, expectedAction);

        // 2. スコアに基づいた処理の決定
        if (score < 0.5) {
            console.warn(`Low score received: ${score}. Blocking submission.`);
            throw new Error("不正なアクセスと判断されました");
            // return { success: false, message: 'Verification score too low, suspected bot.', score };
        }

        // 実際の処理 (モック)
        // await new Promise(resolve => setTimeout(resolve, 500));
        const created = await db.emailContact.create({ // 実際の処理
            data: payload,
        });

        revalidatePath("/");

        return created
    } catch (error) {
console.error('Action failed:', error);
        throw new Error("問い合わせメールの登録に失敗しました");
    }
}

// =======================
// 更新
// =======================
export async function updateEmailContact(
    id: string,
    data: EmailContactUpdatePayload
) {
    try {
        const payload = Object.fromEntries(
            Object.entries(data).filter(([, v]) => v !== undefined)
        );

        await db.emailContact.update({
            where: { id },
            data: payload,
        });

        revalidatePath("/");
    } catch (error) {
        console.error(error);
        throw new Error("問い合わせメールの更新に失敗しました");
    }
}


/**
 * reCAPTCHA Enterprise APIを呼び出してトークンを検証するヘルパー関数
 */
async function verifyRecaptchaToken(token: string, expectedAction: string) {
    if (!PROJECT_ID) {
        throw new Error('RECAPTCHA_PROJECT_ID is not defined.');
    }

    const assessmentName = client.projectPath(PROJECT_ID);

    const [assessment] = await client.createAssessment({
        parent: assessmentName,
        assessment: {
            event: {
                token: token,
                siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
                expectedAction: expectedAction,
            },
        },
    });

    // 検証結果のチェック
    if (!assessment.tokenProperties?.valid) {
        console.error('Invalid token:', assessment.tokenProperties?.invalidReason);
        throw new Error(`reCAPTCHA verification failed: ${assessment.tokenProperties?.invalidReason}`);
    }

    if (assessment.tokenProperties.action !== expectedAction) {
        throw new Error('Unexpected reCAPTCHA action.');
    }

    const score = assessment.riskAnalysis?.score || 0.0;
    return score;
}
