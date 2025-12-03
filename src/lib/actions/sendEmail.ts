"use server";

import { resend } from "@/lib/resend/resend";

import { format } from "date-fns";
import { ja } from "date-fns/locale";

type NotifyMailContactParams = {
    id: string;
    title: string;
    name: string;
    body: string;
}
export async function notifyMailContact(params: NotifyMailContactParams) {
    try {
        const { title, name, body } = params
        const html = `
        <div>
            <p>${title}</p>
            <p>${name}</p>
            <p>${body}</p>
            <hr />
            <p>詳細は、以下よりご確認ください。</p>

            <p style={{ fontSize: "0.9em", color: "#666" }}>
                このメールはシステムから自動送信されています。
            </p>
        </div>`

        const data = await resend.emails.send({
            from: "Famoroo Portfolio <no-reply@famoroo.com>",
            to: process.env.TO_EMAIL!,
            subject: `ポートフォリオからお問い合わせがありました: ${format(new Date(), 'yyyy年MM月dd日 HH:mm', { locale: ja })}`,
            html: html,
        });

        return { success: true, data };
    } catch (error) {
        console.error("メール送信失敗:", error);
        return { success: false, error };
    }
}

