// const { faker: fakerJA } = require("@faker-js/faker/locale/ja");
// const { faker: fakerEN } = require("@faker-js/faker/locale/en");

async function seedSampleWebsite(prisma) {
    await prisma.sampleWebsite.deleteMany();

    const items = [
        {
            "key": "pet-salon",
            "title": "ペットサロン",
            "text": "個人経営の小型犬専用ペットサロンのウェブサイトを制作",
            "src": "/images/sample/website/pet-salon/eyecatch.png",
            "href": "/works/website/pet-salon",
            "skills": "Laravel,React",
        },
        {
            "key": "gas-station",
            "title": "ガソリンスタンド",
            "text": "フルサービス型 ガソリンスタンドのウェブサイトを制作",
            "src": "/images/sample/website/gas-station/eyecatch.png",
            "href": "/works/website/gas-station",
            "skills": "Wordpress,Vue",
        },
        {
            "key": "drone-school",
            "title": "ドローン教室",
            "text": "フランチャイジー型 ドローン教室のウェブサイトを制作",
            "src": "/images/sample/website/drone-school/eyecatch.png",
            "href": "/works/website/drone-school",
            "skills": "Wordpress, Vue",
        }
    ]

    await prisma.sampleWebsite.createMany({
        data: items,
    });


    // await prisma.sampleWebsite.createMany({
    //     data: Array.from({ length: 10 }).map((_, i) => ({
    //         key: fakerEN.helpers.slugify(fakerEN.word.words(2)).toLowerCase(),
    //         title: fakerJA.lorem.words(),
    //         text: fakerJA.lorem.lines(3),
    //         src: fakerJA.internet.url(),
    //         href: fakerJA.internet.url(),
    //         skills: fakerJA.lorem.words(2).replace(" ", ","),
    //     })),
    // });
}

module.exports = {
    seedSampleWebsite,
};
