"use client";

import { Box } from "@mui/material";
import { ScrollSnapProvider, useScrollSnapContainer } from "./ScrollSnapContext";

export function ScrollSnapContainer({ children }: { children: React.ReactNode }) {
    return (
        <ScrollSnapProvider>
            <ScrollSnapContainerInner>{children}</ScrollSnapContainerInner>
        </ScrollSnapProvider>
    );
}

function ScrollSnapContainerInner({ children }: { children: React.ReactNode }) {
    const containerRef = useScrollSnapContainer(); // ← ここで containerRef が取れる

    return (
        <Box
            ref={containerRef}
            sx={{
                height: "100vh",
                overflowY: "scroll",
                scrollSnapType: "y mandatory",
                scrollBehavior: "smooth",
            }}
        >
            {children}
        </Box>
    );
}
