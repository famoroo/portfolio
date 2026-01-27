import {
    Box,
    Chip,
    Container,
    Stack,
    Link,
    Typography,
    Divider
} from '@mui/material';

import { StaggeredFade } from "@/components/animations/TextAnimiation";
import CardBrowser from "@/components/features/works/CardBrowser";
import CardCarouselBrowser from "@/components/animations/CardCarouselBrowser";
import MockupBrowser from '@/components/features/works/MockupBrowser';

import { getSampleWebsites } from "@/lib/actions/sampleWebsite";

export default async function WorksWebsiteSample(
    { params }: { params: Promise<{ key: string }> }
) {
    const { key } = await params

    const fetchItems = await getSampleWebsites();
    const fetchItem = fetchItems.find((item) => item.key === key);
    const otherItems = fetchItems.filter((item) => item.key !== key).slice(0, 3);
    if(!fetchItem) {
        return (
            <Container
                maxWidth="xl"
                sx={{
                    paddingTop: "100px",
                    background: "#fff"
                }}
                >
                <Box sx={{ my: 4 }}>
                    <Typography variant="h6">
                        データの取得に失敗しました
                    </Typography>
                    <Link href="/">トップページに戻る</Link>
                </Box>
            </Container>
        )
    }

    return (
        <>
        <Container
            maxWidth="lg"
            sx={{
                marginTop: "140px",
                padding: 8,
                background: "#fff",
                borderRadius: "16px",
            }}
            >
            <Box sx={{ mt: -13, mb: 8 }}>
                <StaggeredFade
                    text={fetchItem.title}
                    className="!md:text-xl"
                    />

                <Box sx={{
                    width: "100%",
                    my: 4,
                    display: "flex",
                    justifyContent: "center",
                    }}>
                    <Divider
                        sx={{
                            borderRadius: "16px",
                            height: "10px",
                            width: "50px",
                            borderWidth: "0px",
                        }}
                        color="#d9f99d"
                        />
                </Box>

                <Stack direction="row" spacing={1} justifyContent="center">
                    {fetchItem.skills?.split(',').map((chip, index) => (
                        <Chip key={index} label={chip} sx={{ borderRadius: "4px" }} />
                    ))}
                </Stack>

                <Container
                    maxWidth="md"
                    sx={{ mt: 4, backgroundColor: "oklch(92.9% 0.013 255.508)", borderRadius: "8px", p: 2 }}
                    >
                    <StaggeredFade
                        text={fetchItem.text?.split('\n').join('\n\n') }
                        className="!text-sm !text-zinc-600"
                        />
                </Container>
            </Box>

            <Stack spacing={10}>
                <MockupBrowser
                    src={`/images/sample/website/${fetchItem.key}/eyecatch.png`}
                    />

                {Array.from({ length: fetchItem.imageCount }).map((_, index) => (
                    <Box
                        key={`image${index}`}
                        sx={{ display: "flex", justifyContent: "center", p: 4 }}
                        >
                        <Box
                            className="shadow-xl"
                            style={{
                                maxWidth: "720px",
                            }}
                            >
                            <CardBrowser
                                image={`/images/sample/website/${fetchItem.key}/${index+1}.png`}
                                // image={`/images/sample/website/${fetchItem.key}/${index==0 ? "eyecatch" : index}.png`}
                                />

                            {/* <SmokeImage
                                src={item.src}
                                alt={item.alt}
                                width={880}
                                height={880}
                                sx={{
                                    borderRadius: "16px",
                                }}
                                /> */}
                        </Box>
                    </Box>
                ))}

                {Array.from({ length: fetchItem.webmCount }).map((_, index) => (
                    <Box key={`webm${index}`} sx={{ display: "flex", justifyContent: "center", p: 4 }}>
                        <Box className="shadow-xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    width: "680px",
                                    maxHeight: "70vh",
                                    borderRadius: "12px"
                                }}
                                >
                                <source src={`/images/sample/website/${fetchItem.key}/${index+1}.webm`} type="video/webm" />
                            </video>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Container>

        <Container
            maxWidth="lg"
            sx={{ py: 2 }}
            >
            <CardCarouselBrowser
                subtitle={"その他のウェブサイト"}
                items={otherItems}
                />
        </Container>
        </>
    );
}
