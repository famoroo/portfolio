import WorksWebsiteSample from "../WebsiteSample";

export default function WebsiteSample() {
    return (
        <WorksWebsiteSample
            title="ガソリンスタンド"
            chips={["ウェブサイトサンプル", "Wordpress", "Bootstrap"]}
            images={[
                {
                    src:"/images/sample/website/gas-station/eyecatch.png",
                    alt:"sample"
                },
                {
                    src:"/images/sample/website/gas-station/cta.png",
                    alt:"sample"
                },
                {
                    src:"/images/sample/website/gas-station/app.png",
                    alt:"sample"
                },
                {
                    src:"/images/sample/website/gas-station/app-detail.png",
                    alt:"sample"
                },
            ]}
            webms={[
                {
                    src:"/images/sample/website/gas-station/lineup.webm",
                },
                {
                    src:"/images/sample/website/gas-station/oils.webm",
                },
                {
                    src:"/images/sample/website/gas-station/mobile-menu.webm",
                },
            ]}
            />
    );
}
