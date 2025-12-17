import WorksWebsiteSample from "../WebsiteSample";

export default function WebsiteSample() {
    return (
        <WorksWebsiteSample
            title="ペットサロン"
            chips={["ウェブサイトサンプル", "Laravel", "React.js"]}
            images={[
                {
                    src:"/images/sample/website/pet-salon/eyecatch.png",
                    alt:"sample"
                },
                {
                    src:"/images/sample/website/pet-salon/introduction.png",
                    alt:"sample"
                },
                {
                    src:"/images/sample/website/pet-salon/lineup.png",
                    alt:"sample"
                },
                {
                    src:"/images/sample/website/pet-salon/table.png",
                    alt:"sample"
                },
                {
                    src:"/images/sample/website/pet-salon/option.png",
                    alt:"sample"
                },
                {
                    src:"/images/sample/website/pet-salon/cta.png",
                    alt:"sample"
                },
            ]}
            />
    );
}
