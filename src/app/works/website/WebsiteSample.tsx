import {
    Box,
    Chip,
    Container,
    Stack,
} from '@mui/material';

import SmokeImage from "@/components/SmokeImage";

import { StaggeredFade } from "@/components/animations/TextAnimiation";

type Props = {
    title: string;
    chips: string[];
    images?: {
        src: string;
        alt?: string;
    }[],
    webms?: {
        src: string;
    }[],
}
export default function WorksWebsiteSample({
    title,
    chips,
    images,
    webms,
}: Props) {
    return (
        <Container
            maxWidth="xl"
            sx={{
                paddingTop: "100px",
                background: "#fff"
            }}
            >
            <Stack direction="row" spacing={1} justifyContent="end">
                {chips.map((chip, index) => (
                    <Chip key={index} label={chip} />
                ))}
            </Stack>

            <Box sx={{ my: 4 }}>
                <StaggeredFade
                    text={title}
                    />
            </Box>
            <Stack spacing={10}>
                {images?.map((item, index) => (
                    <Box
                        key={`image${index}`}
                        sx={{ display: "flex", justifyContent: "center", p: 4 }}
                        >
                        <Box className="shadow-xl">
                            <SmokeImage
                                src={item.src}
                                alt={item.alt}
                                width={880}
                                height={880}
                                sx={{
                                    borderRadius: "16px",
                                }}
                                />
                        </Box>
                    </Box>
                ))}
                {webms?.map((item, index) => (
                    <Box key={`webm${index}`} sx={{ display: "flex", justifyContent: "center", p: 4 }}>
                        <Box className="shadow-xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    width: "680px",maxHeight: "70vh",
                                    borderRadius: "12px"
                                }}
                                >
                                <source src={item.src} type="video/webm" />
                            </video>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Container>
    );
}
