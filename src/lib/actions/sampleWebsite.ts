"use server";

import { db } from "@/lib/neon/db"; // Prisma Client
import { sampleWebsiteType } from "@/schemas/sampleWebsiteSchema";

// =======================
// 一覧取得
// =======================
export async function getSampleWebsites(): Promise<sampleWebsiteType[]> {
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


export async function getSampleWebsiteByKey(key: string): Promise<sampleWebsiteType|null> {
    try {
        const data = await db.sampleWebsite.findFirst({
            where: { key },
        });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error("サンプルウェブサイトの取得に失敗しました");
    }
}
