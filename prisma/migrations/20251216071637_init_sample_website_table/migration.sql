-- CreateTable
CREATE TABLE "sample_website" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sample_website_pkey" PRIMARY KEY ("id")
);
