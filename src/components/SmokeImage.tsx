"use client";

import Image from "next/image";
import { useOnScreen } from "@/hooks/useOnScreen";

import { Box } from "@mui/material";

type SmokeImageProps = {
    src: string;
    alt?: string;
    width: number;
    height: number;
};
export default function SmokeImage({
    src,
    alt="famoroo portfolio",
    width,
    height
}: SmokeImageProps) {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    const className = `dark:invert ${isVisible ? "is-play" : ""}`;

    return (
        <>
        <Box
            ref={ref}
            data-smoke
            className={className}
            sx={{ display: "flex", justifyContent: "center" }}
            >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{
                    maxWidth: width,
                    maxHeight: height,
                    minHeight: "120px",
                    objectFit: "contain",
                }}
            />
        </Box>

        <style jsx>{`
            [data-smoke] {
                -webkit-mask-image: url("/images/hooks/smoke_image.webp");
                mask-image: url("/images/hooks/smoke_image.webp");
                -webkit-mask-size: 100% 3600%;
                mask-size: 100% 3600%;
                -webkit-mask-position: 0 0;
                mask-position: 0 0;
                width: fit-content;
            }

            [data-smoke].is-play {
                -webkit-animation: mask-play 1.5s steps(35) 0.2s forwards;
                animation: mask-play 1.5s steps(35) 0.2s forwards;
            }

            @-webkit-keyframes mask-play {
                0% {
                    -webkit-mask-position: 0 0;
                    mask-position: 0 0;
                }
                100% {
                    -webkit-mask-position: 0 100%;
                    mask-position: 0 100%;
                }
            }

            @keyframes mask-play {
                0% {
                    -webkit-mask-position: 0 0;
                    mask-position: 0 0;
                }
                100% {
                    -webkit-mask-position: 0 100%;
                    mask-position: 0 100%;
                }
            }
        `}</style>
        </>
    );
}
