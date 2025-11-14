"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Box } from "@mui/material";
import { useScrollSnapContainer } from "./ScrollSnapContext";

export function ParallaxSection({ children }: { children: React.ReactNode }) {
    const sectionRef = useRef(null);
    const containerRef = useScrollSnapContainer(); // ← ここで containerRef が取れる

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        container: containerRef,
        offset: ["start start", "end end"],
    });

    // const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 1]);
    
    const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const scale = useSpring(rawScale, {
        damping: 20,
        stiffness: 1000,
        mass: 2,
        velocity: 3,
    });

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
                background: `linear-gradient(to bottom right, #d9f99d 10%, #ecfccb 20%, #fff 70%)`
            }}
            // className="bg-gradient-to-br from-lime-200 from-10% via-lime-100 via-20% to-lime-5 to-70% "
        >
            <motion.div
                style={{
                    // y,
                    opacity,
                    scale
                }}
                >
                {children}
            </motion.div>
        </Box>
    );
}
