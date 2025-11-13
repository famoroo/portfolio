"use client";

import { motion } from "motion/react"

import { useOnScreen } from "@/hooks/useOnScreen";

import { Box, Typography } from "@mui/material";

export function TextAnimiation({
    text,
}: {
    text: string;
}) {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    return (
        <>
        <Box
            ref={ref}
            className={`c01 ${isVisible ? "active" : ""}`}
            >
            {text}
        </Box>

        <style jsx>{`
            .c01 {
                position: relative;
                color: transparent;
            }

            /* 擬似要素は global スコープにしないと当たらない */
            :global(.c01::before) {
                content: "";
                position: absolute;
                z-index: 1;
                top: 0;
                right: 100%;
                bottom: 0;
                left: 0;
                background: #a675a5;
            }

            .c01.active {
                animation: kf_c01a 0s 0.5s forwards;
            }

            :global(.c01.active::before) {
                animation: kf_c01b 1s forwards;
            }

            @keyframes kf_c01a {
                100% {
                    color: inherit;
                }
            }

            @keyframes kf_c01b {
                50% {
                    left: 0%;
                    right: 0%;
                }
                100% {
                    left: 100%;
                    right: 0%;
                }
            }
        `}</style>
        </>
    );
}

export function TextSplitAnimiation({
    text,
}: {
    text: string;
}) {
    return (
        <Box
            sx={{
                p: 4,
                textAlign: "center",
            }}
            >
            <Typography
                variant="h6"
                >
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        viewport={{ once: true }}
                        >
                        {char}
                    </motion.span>
                ))}
            </Typography>
        </Box>
    )
}
