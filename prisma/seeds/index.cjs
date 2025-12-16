const { seedSampleWebsite } = require("./sampleWebsite.seed.cjs");

async function runSeeds(prisma) {

  await seedSampleWebsite(prisma);

  // 他の seed をここに追加
}

module.exports = {
  runSeeds,
};
