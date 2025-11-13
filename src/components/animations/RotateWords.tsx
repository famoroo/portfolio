"use client"
import * as React from "react"
import { AnimatePresence, motion } from "motion/react"

import { Box } from "@mui/material"

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
