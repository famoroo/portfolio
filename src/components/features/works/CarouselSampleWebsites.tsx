"use client";

import { useState, useEffect } from "react";

import CardCarousel from "@/components/animations/CardCarousel";

import { getSampleWebsites } from "@/lib/actions/sampleWebsite";

type itemItem = {
	id: string;
	isNew?: boolean;
	title: string;
	text: string;
	skills: string[];
	src?: string;
};
export default function CarouselSampleWebsites() {
    const [ sampleWebsites, setSampleWebsites ] = useState([] as itemItem[]);

    useEffect(() => {
        (async () => {
            const res = await getSampleWebsites();
            const data = res.map((item) => {
                const { id, title, text, skills, src } = item;
                return { id, title, text, src, skills: skills?.split(",") ?? [] };
            })
            setSampleWebsites(data);
        })();
    }, []);

    return (
        <CardCarousel
            items={sampleWebsites}
            title="ウェブサイト(DX)"
            subtitle="つくったもの"
            />
    );
}
