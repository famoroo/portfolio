"use client";

import Image from "next/image";
import { useOnScreen } from "@/hooks/useOnScreen";

import { Box } from "@mui/material";
import styles from "./SmokeImage.module.scss";

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

    return (
        <>
        <Box
            ref={ref}
            className={`${styles.smoke} ${isVisible ? styles.is_play : ""}`}
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
        </>
    );
}
