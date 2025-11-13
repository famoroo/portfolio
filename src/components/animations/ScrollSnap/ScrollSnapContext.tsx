"use client";

import React, { createContext, useContext, useRef } from "react";

type ScrollSnapContextType = {
    containerRef: React.RefObject<HTMLDivElement | null>;
};

const ScrollSnapContext = createContext<ScrollSnapContextType | null>(null);

export function ScrollSnapProvider({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <ScrollSnapContext.Provider value={{ containerRef }}>
            {children}
        </ScrollSnapContext.Provider>
    );
}

export function useScrollSnapContainer() {
    const ctx = useContext(ScrollSnapContext);
    if (!ctx) throw new Error("useScrollSnapContainer must be inside ScrollSnapProvider");
    return ctx.containerRef;
}
