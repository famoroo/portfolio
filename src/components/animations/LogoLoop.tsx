"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";

import styles from "./LogoLoop.module.scss";
type LogoType = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function LogoLoop({
    logos,
} : {
    logos: LogoType[];
}) {
    // 初期状態はシャッフルせずに元の配列を使用
    const [items, setItems] = useState<LogoType[]>(logos);
    // クライアントサイドでマウント後にシャッフル
    useEffect(() => {
        setItems(shuffleArray(logos));
    }, [logos]);

    const aboveLogos = items.slice(0, logos.length / 2);
    const bellowLogos = items.slice(logos.length / 2);

    const doubledAboveLogos = [...aboveLogos, ...aboveLogos];
    const doubledBellowLogos = [...bellowLogos, ...bellowLogos];

    return (
        <div className={styles.scroll_wrap}>
            <div className={styles.scroll_track}>
                <ul className={styles.scroll_inner}>
                    {doubledAboveLogos.map((logo, index) => (
                        <li
                            key={index}
                            className={styles.scroll_cont}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width ?? 80}
                                height={logo.height ?? 80}
                                style={{
                                    maxWidth: logo.width ?? 80,
                                    maxHeight: logo.height ?? 80,
                                    objectFit: "contain",
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.scroll_reverse_track}>
                <ul className={styles.scroll_inner}>
                    {doubledBellowLogos.map((logo, index) => (
                        <li
                            key={index}
                            className={styles.scroll_cont}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width ?? 80}
                                height={logo.height ?? 80}
                                style={{
                                    maxWidth: logo.width,
                                    maxHeight: logo.height,
                                    minHeight: "120px",
                                    objectFit: "contain",
                                }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
