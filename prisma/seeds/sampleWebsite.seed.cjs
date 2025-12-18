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
            "imageCount": 4,
            "webmCount": 0,
        },
        {
            "key": "gas-station",
            "title": "ガソリンスタンド",
            "text": "フルサービス型 ガソリンスタンドのウェブサイトを制作",
            "src": "/images/sample/website/gas-station/eyecatch.png",
            "href": "/works/website/gas-station",
            "skills": "Wordpress,Vue",
            "imageCount": 3,
            "webmCount": 3,
        },
        {
            "key": "drone-school",
            "title": "ドローン教室",
            "text": "フランチャイジー型 ドローン教室のウェブサイトを制作",
            "src": "/images/sample/website/drone-school/eyecatch.png",
            "href": "/works/website/drone-school",
            "skills": "Wordpress, Vue",
            "imageCount": 6,
            "webmCount": 0,
        },
        {
            "key": "tire-center",
            "title": "廃タイヤ処理専門工場",
            "text": "廃タイヤの処理に特化した産業廃処理専門工場のウェブサイトを制作",
            "src": "/images/sample/website/tire-center/eyecatch.png",
            "href": "/works/website/tire-center",
            "skills": "Wordpress, Bootstrap",
            "imageCount": 7,
            "webmCount": 0,
        },
        {
            "key": "car-recycle",
            "title": "廃車リサイクル工場",
            "text": "廃車買取、代行サービス企業様のウェブサイトを制作",
            "src": "/images/sample/website/car-recycle/eyecatch.png",
            "href": "/works/website/car-recycle",
            "skills": "Wordpress, Bootstrap",
            "imageCount": 6,
            "webmCount": 0,
        },
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
