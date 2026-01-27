"use client";
import * as React from 'react';
import { motion, AnimatePresence, useInView } from "motion/react"
import { cn } from '@/lib/utils';

import { Box } from "@mui/material";

// ui.indie
// https://ui.indie-starter.dev/docs/text-animation
type Props = {
    text: string;
    className?: string;
}
export function TextSplitAnimiation({ text }: Props) {
    return (
        <>
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
        </>
    )
}
export function GradualSpacing({ text }: Props) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="flex space-x-1 justify-center">
            <AnimatePresence>
                {text.split('').map((char, i) => (
                    <motion.p
                        ref={ref}
                        key={i}
                        initial={{ opacity: 0, x: -18 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        exit="hidden"
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
                        >
                        {char === ' ' ? <span>&nbsp;</span> : char}
                    </motion.p>
                ))}
            </AnimatePresence>
        </div>
    );
}
export function TypingEffect({ text, className }: Props) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <Box
            ref={ref}
            className={cn(
                'font-bold tracking-tighter text-xl text-center sm:text-4xl md:text-6xl md:leading-[4rem]',
                className,
            )}
            >
            {text.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                    {letter}
                </motion.span>
            ))}
        </Box>
    );
}
export function StaggeredFade({ text, className }: Props) {
    const variants = {
        hidden: { opacity: 0 },
        show: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * 0.07 },
        }),
    };

    const letters = text.split('');
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.h2
            ref={ref}
            initial="hidden"
            animate={isInView ? 'show' : ''}
            variants={variants}
            viewport={{ once: true }}
            className={cn(
                'text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[2rem]',
                className
            )}
        >
            {letters.map((word, i) => (
                <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
                    {word}
                </motion.span>
            ))}
        </motion.h2>
    );
};
export function RotateWords({
    text = "Rotate",
    words = ["Word 1", "Word 2", "Word 3"],
    // color = "primary",
    ms = 2000
}: {
    text: string
    words: string[]
    // color?: string
    ms?: number
}) {
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, ms)
        // Clean up interval on unmount
        return () => clearInterval(interval)
    }, [ms, words.length])

    return (
        <Box
            className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] w-fit flex items-center jusitfy-center mx-auto gap-1.5"
        >
            {text}
            <Box
                sx={{
                    py: 1,
                    px: 4,
                    borderRadius: 2
                }}
                className={`bg-linear-to-br from-lime-500 via-lime-400 via-70% to-lime-200`}
            >
                <AnimatePresence
                    mode="wait"
                >
                    <motion.div
                        key={words[index]}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block text-white"
                    >
                        {words[index]}
                    </motion.div>
                </AnimatePresence>
            </Box>
        </Box>
    )
}
export function LettersPullUp({ text, className }: Props) {
    const splittedText = text.split('');

    const pullupVariant = {
        initial: { y: 10, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.05,
            },
        }),
    };
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="flex justify-center">
            {splittedText.map((current, i) => (
                <motion.div
                    key={i}
                    ref={ref}
                    variants={pullupVariant}
                    initial="initial"
                    animate={isInView ? 'animate' : ''}
                    custom={i}
                    className={cn(
                        'text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]',
                        className
                    )}
                >
                    {current == ' ' ? <span>&nbsp;</span> : current}
                </motion.div>
            ))}
        </div>
    );
}
export function WordsPullUp({ text, className }: Props) {
    const splittedText = text.split(' ');

    const pullupVariant = {
        initial: { y: 20, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
            },
        }),
    };
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="flex justify-center">
            {splittedText.map((current, i) => (
                <motion.div
                    key={i}
                    ref={ref}
                    variants={pullupVariant}
                    initial="initial"
                    animate={isInView ? 'animate' : ''}
                    custom={i}
                    className={cn(
                        'text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]',
                        'pr-2', // class to sperate words
                        className
                    )}
                >
                    {current == '' ? <span>&nbsp;</span> : current}
                </motion.div>
            ))}
        </div>
    );
}
export const BlurIn = ({ children }: { children: React.ReactNode }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.h2
            ref={ref}
            initial={{ filter: 'blur(20px)', opacity: 0 }}
            animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
        >
            {children}
        </motion.h2>
    );
};
export function TextFade({
    direction,
    children,
    className = '',
    staggerChildren = 0.1,
}: {
    direction: 'up' | 'down';
    children: React.ReactNode;
    className?: string;
    staggerChildren?: number;
}) {
    const FADE = {
        show: { opacity: 1, y: 0, transition: { delay: 1, type: 'spring' } },
        hidden: { opacity: 0, y: direction === 'down' ? -18 : 18 },
    } as const;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'show' : ''}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: staggerChildren,
                    },
                },
            }}
            className={className}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child) ? (
                    <motion.div variants={FADE}>{child}</motion.div>
                ) : (
                    child
                )
            )}
        </motion.div>
    );
}



// shadcn.io
// https://www.shadcn.io/text
import { type HTMLMotionProps, type Transition } from 'motion/react';
type ShimmeringTextProps = {
    text: string;
    duration?: number;
    transition?: Transition;
    wave?: boolean;
    color?: string;
    shimmeringColor?: string;
} & Omit<HTMLMotionProps<'span'>, 'children'>;
export function ShimmeringText({
    text,
    duration = 1,
    transition,
    wave = false,
    className,
    color = 'var(--color-neutral-500)',
    shimmeringColor = 'var(--color-neutral-300)',
    ...props
}: ShimmeringTextProps) {
    return (
        <motion.span
            className={cn('relative inline-block [perspective:500px]', className)}
            style={
                {
                    '--shimmering-color': shimmeringColor,
                    '--color': color,
                    color: 'var(--color)',
                } as React.CSSProperties
            }
            {...props}
        >
            {text?.split('')?.map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block whitespace-pre [transform-style:preserve-3d]"
                    initial={{
                        ...(wave
                            ? {
                                scale: 1,
                                rotateY: 0,
                            }
                            : {}),
                        color: 'var(--color)',
                    }}
                    animate={{
                        ...(wave
                            ? {
                                x: [0, 5, 0],
                                y: [0, -5, 0],
                                scale: [1, 1.1, 1],
                                rotateY: [0, 15, 0],
                            }
                            : {}),
                        color: ['var(--color)', 'var(--shimmering-color)', 'var(--color)'],
                    }}
                    transition={{
                        duration,
                        repeat: Infinity,
                        repeatType: 'loop',
                        repeatDelay: text.length * 0.05,
                        delay: (i * duration) / text.length,
                        ease: 'easeInOut',
                        ...transition,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
}
