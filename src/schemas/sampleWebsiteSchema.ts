import { z } from "zod";

/* =========================
 * 共通ベース
 * ========================= */
const baseSchema = z.object({
    key: z.string().min(1, "キーは必須です"),
    title: z.string().min(1, "タイトルは必須です"),
    text: z.string().min(1, "内容は必須です"),
    src: z.string(),
    href: z.string(),
    skills: z.string().optional(),
});

/* =========================
 * fetch(GET) 用（DBからの完全形）
 * ========================= */
export const sampleWebsiteFromDbSchema = z.object({
    id: z.uuid(),
    ...baseSchema.shape,
    created_at: z.date(),
    updated_at: z.date(),
});
export type sampleWebsiteType = z.infer<typeof sampleWebsiteFromDbSchema>;

/* =========================
 * POST（新規登録）用
 * ========================= */
export const sampleWebsiteCreateSchema = baseSchema.safeExtend({
    // create は id を受け付けない（来たら弾く）
    id: z.never().optional(),
});
export type sampleWebsiteCreateInput = z.infer<typeof sampleWebsiteCreateSchema>;

/* =========================
 * PUT（更新）用
 * - 部分更新にしたい場合は .partial() を適用し、id は必須
 * - 全項目必須更新にしたいなら .partial() を外す
 * ========================= */
export const sampleWebsiteUpdateSchema = baseSchema
    .partial()
    .extend({
        id: z.uuid(),
    });
export type sampleWebsiteUpdateInput = z.infer<typeof sampleWebsiteUpdateSchema>;

export const sampleWebsiteUpdatePayloadSchema = sampleWebsiteUpdateSchema.omit({ id: true });
export type sampleWebsiteUpdatePayload = z.infer<typeof sampleWebsiteUpdatePayloadSchema>;

/* =========================
 * 共通（create/update 両対応）: Union
 * - RHF の resolver を1本化したいときに便利
 * ========================= */
export const sampleWebsiteUpsertSchema = z.union([
    sampleWebsiteCreateSchema,
    sampleWebsiteUpdateSchema,
]);
export type sampleWebsiteUpsertInput = z.infer<typeof sampleWebsiteUpsertSchema>;

/* =========================
 * Type Guard（分岐用）
 * ========================= */
export function isUpdateInput(
    v: sampleWebsiteUpsertInput
): v is sampleWebsiteUpdateInput {
    // id があれば更新とみなす
    return typeof (v)?.id === "string";
}
