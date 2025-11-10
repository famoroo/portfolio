"use client";

import { useEffect, useRef, useState, RefObject } from "react";

/**
 * 要素の可視状態を監視するフック（1度でも表示されたら保持）
 * @param options IntersectionObserver のオプション
 * @returns [ref, isVisible]
 */
export function useOnScreen<T extends HTMLElement>(
    options?: IntersectionObserverInit
): [RefObject<T>, boolean] {

    const ref = useRef<T>(null!);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const current = ref.current;
        if (!current) return;

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setIsVisible(true);
                // observer.unobserve(current); // ← 一度で監視解除したいならコメント外す
            }
        }, options);

        observer.observe(current);

        return () => observer.unobserve(current);
    }, [options]);

    return [ref, isVisible];
}
