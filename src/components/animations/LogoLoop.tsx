import Image from "next/image";

import styles from "./LogoLoop.module.scss";

export function LogoLoop({
    logos
} : {
    logos: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    }[]
}) {
    const doubledLogos = [...logos, ...logos];
    return (
        <div className={styles.scroll_wrap}>
            <div className={styles.scroll_track}>
                <ul className={styles.scroll_inner}>
                    {doubledLogos.map((logo, index) => (
                        <li
                            key={index}
                            className={styles.scroll_cont}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width ?? 100}
                                height={logo.height ?? 100}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.scroll_reverse_track}>
                <ul className={styles.scroll_inner}>
                    {doubledLogos.map((logo, index) => (
                        <li
                            key={index}
                            className={styles.scroll_cont}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width ?? 100}
                                height={logo.height ?? 100}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
