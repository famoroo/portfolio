declare global {
    interface Window {
        grecaptcha: {
            enterprise: {
                ready: (callback: () => void) => void;
                execute: (siteKey: string, options: { action: string }) => Promise<string>;
            };
        };
    }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

/**
 * reCAPTCHA Enterpriseのトークンを取得するクライアント関数
 * @param action - 実行するアクション名 (例: 'submit_contact')
 * @returns reCAPTCHAトークン
 */
export async function getRecaptchaEnterpriseToken(
    action: string = "submit_form"
): Promise<string> {
    if (!window.grecaptcha || !SITE_KEY) {
        throw new Error(
            "reCAPTCHA Enterprise script not loaded or site key missing."
        );
    }
console.log(window.grecaptcha.enterprise.execute(SITE_KEY, { action }))
    return window.grecaptcha.enterprise.execute(SITE_KEY, { action });
}
