const { PrismaClient } = require("@prisma/client");
const { runSeeds } = require("./seeds/index.cjs");

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 seeding start");
    await runSeeds(prisma);
    console.log("✅ seeding done");
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
