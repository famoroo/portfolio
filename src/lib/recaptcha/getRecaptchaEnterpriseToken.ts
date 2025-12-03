export async function getRecaptchaEnterpriseToken() {
    if (typeof window === "undefined") return "";

    const grecaptcha = window.grecaptcha;

    if (!grecaptcha?.enterprise) return "";

    return await grecaptcha.enterprise.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: "submit_form" }
    );
}
