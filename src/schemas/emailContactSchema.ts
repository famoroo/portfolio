import { z } from "zod";

/* =========================
 * 共通ベース
 * ========================= */
const baseSchema = z.object({
    title: z.string().min(1, "タイトルは必須です"),
    name: z.string().min(1, "お名前は必須です"),
    body: z.string().min(1, "内容は必須です"),
    recaptchaToken: z.string().optional(),
});

/* =========================
 * fetch(GET) 用（DBからの完全形）
 * ========================= */
export const emailContactFromDbSchema = z.object({
    id: z.uuid(),
    ...baseSchema.shape,
    created_at: z.date(),
    updated_at: z.date(),
});
export type EmailContactType = z.infer<typeof emailContactFromDbSchema>;

/* =========================
 * POST（新規登録）用
 * ========================= */
export const emailContactCreateSchema = baseSchema.safeExtend({
    // create は id を受け付けない（来たら弾く）
    id: z.never().optional(),
});
export type EmailContactCreateInput = z.infer<typeof emailContactCreateSchema>;

/* =========================
 * PUT（更新）用
 * - 部分更新にしたい場合は .partial() を適用し、id は必須
 * - 全項目必須更新にしたいなら .partial() を外す
 * ========================= */
export const emailContactUpdateSchema = baseSchema
    .partial()
    .extend({
        id: z.uuid(),
    });
export type EmailContactUpdateInput = z.infer<typeof emailContactUpdateSchema>;

export const emailContactUpdatePayloadSchema = emailContactUpdateSchema.omit({ id: true });
export type EmailContactUpdatePayload = z.infer<typeof emailContactUpdatePayloadSchema>;

/* =========================
 * 共通（create/update 両対応）: Union
 * - RHF の resolver を1本化したいときに便利
 * ========================= */
export const emailContactUpsertSchema = z.union([
    emailContactCreateSchema,
    emailContactUpdateSchema,
]);
export type EmailContactUpsertInput = z.infer<typeof emailContactUpsertSchema>;

/* =========================
 * Type Guard（分岐用）
 * ========================= */
export function isUpdateInput(
    v: EmailContactUpsertInput
): v is EmailContactUpdateInput {
    // id があれば更新とみなす
    return typeof (v)?.id === "string";
}
