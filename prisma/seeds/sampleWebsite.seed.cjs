const { faker: fakerJA } = require("@faker-js/faker/locale/ja");
const { faker: fakerEN } = require("@faker-js/faker/locale/en");

async function seedSampleWebsite(prisma) {
    await prisma.sampleWebsite.deleteMany();
    await prisma.sampleWebsite.createMany({
        data: Array.from({ length: 10 }).map((_, i) => ({
            key: fakerEN.helpers.slugify(fakerEN.word.words(2)).toLowerCase(),
            title: fakerJA.lorem.words(),
            text: fakerJA.lorem.lines(3),
            src: fakerJA.internet.url(),
            href: fakerJA.internet.url(),
            skills: fakerJA.lorem.words(2).replace(" ", ","),
        })),
    });
}

module.exports = {
    seedSampleWebsite,
};
