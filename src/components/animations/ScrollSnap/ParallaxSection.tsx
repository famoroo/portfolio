"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Box } from "@mui/material";
import { useScrollSnapContainer } from "./ScrollSnapContext";

export function ParallaxSection({
    children,
    damping=true
}: {
    children: React.ReactNode
    damping?: boolean
}) {
    const sectionRef = useRef(null);
    const containerRef = useScrollSnapContainer(); // ← ここで containerRef が取れる

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        container: containerRef,
        offset: ["start start", "end end"],
    });

    // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 1]);

    // 基本の scale（生の変換）
    const rawScale = useTransform(scrollYProgress, [0, 1], [1, damping ? 1.2 : 1]);
    // スプリング（柔らかく追従）
    const smoothScale = useSpring(rawScale, {
        damping: 20,
        stiffness: 1000,
        mass: 2,
        velocity: 3,
    });
    const scale = damping ? smoothScale : rawScale;

    return (
        <Box
            ref={sectionRef}
            sx={{
                height: "100vh",
                scrollSnapAlign: "start",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                background: `linear-gradient(to bottom right, #d9f99d 10%, #ecfccb 20%, #fff 70%)`
            }}
        >
            <motion.div
                style={{
                    // y,
                    opacity,
                    scale,
                    width: "100%",
                    display: "contents",
                }}
                >
                {children}
            </motion.div>
        </Box>
    );
}
