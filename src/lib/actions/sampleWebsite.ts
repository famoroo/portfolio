"use server";

import { db } from "@/lib/neon/db"; // Prisma Client

// =======================
// 一覧取得
// =======================
export async function getSampleWebsite() {
    try {
        const data = await db.sampleWebsite.findMany({
            orderBy: { createdAt: "asc" },
        });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("サンプルウェブサイト一覧の取得に失敗しました");
    }
}
