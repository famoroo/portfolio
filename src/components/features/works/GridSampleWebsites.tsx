"use client";

import { useState, useEffect } from "react";

import CardCarouselBrowser from "@/components/animations/CardCarouselBrowser";

import { getSampleWebsites } from "@/lib/actions/sampleWebsite";
import { sampleWebsiteType } from "@/schemas/sampleWebsiteSchema";

export default function GridSampleWebsites() {
    const [ sampleWebsites, setSampleWebsites ] = useState([] as sampleWebsiteType[]);

    useEffect(() => {
        (async () => {
            const res = await getSampleWebsites();
            setSampleWebsites(res.slice(0, 6));
        })();
    }, []);

    return (
        <CardCarouselBrowser
            title="ウェブサイト"
            subtitle="つくったもの"
            items={sampleWebsites}
            />
    );
}
