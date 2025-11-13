"use client";

import { useState, useEffect } from "react";
// import { motion } from "motion/react";
import { useOnScreen } from "@/hooks/useOnScreen";

import {
    Card,
    CardContent,
    Toolbar,
    Typography,
    Stack,
    Chip,
    Box,
    Rating,
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';

import { differenceInYears } from "date-fns";

import SmokeImage from "@/components/SmokeImage";

type SkillCardProps = {
    skill: {
        name: string;
        category: string;
        src: string;
        star: number;
        startYear: number;
        types: string[];
        examples: string[];
    };
    width: number;
    height: number;
};

export default function SkillCard({ skill, width, height }: SkillCardProps) {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    const [className, setClassName] = useState('opacity-0');
    useEffect(() => {
        if(isVisible) {
            const timer = setTimeout(() => {
                setClassName('opacity-100')
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <Card
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out ${className}`}
            variant="outlined"
            >
            <Toolbar
                variant="dense"
                sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    fontWeight: "bold",
                }}
                >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {skill.name}
                </Typography>
                <Chip label={skill.category} sx={{ bgcolor: "white", color: "primary.main", fontWeight: "bold" }} />
            </Toolbar>
            <CardContent>
                <Stack spacing={1}>
                    <Stack direction="row" spacing={0.5} sx={{ flexWrap: "wrap" }}>
                        {skill.types.map((type, index) => (
                            <Box key={index} sx={{ dusplay: "inline-block", fontWeight: "bold", m: "2px !important;" }} >
                                <Chip color="info" variant="outlined" size="small" label={type} sx={{ fontWeight: "bold" }} />
                            </Box>
                        ))}
                    </Stack>
                    <Box sx={{ p: 2 }}>
                        <SmokeImage
                            src={skill.src}
                            alt={skill.name}
                            width={width}
                            height={height}
                            />
                    </Box>
                    <TableContainer>
                        <Table size="small">
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell variant="head" size="small" padding="none" sx={{ minWidth: "4rem" }}>経験年数</TableCell>
                                    <TableCell>
                                        <Chip component="span" color="info" label={`${differenceInYears(new Date(), new Date(`${skill.startYear}-04-01`))} 年`} sx={{ fontWeight: "bold" }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell variant="head" size="small" padding="none" sx={{ minWidth: "4rem" }}>スキル</TableCell>
                                    <TableCell>
                                        <Rating name="half-rating" defaultValue={skill.star ?? 2.5} precision={0.5} />
                                    </TableCell>
                                </TableRow>
                                {/* <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell variant="head" size="small" padding="none" sx={{ minWidth: "4rem" }}>種別</TableCell>
                                    <TableCell>
                                        {skill.types.join(", ")}
                                    </TableCell>
                                </TableRow> */}
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell variant="head" size="small" padding="none" sx={{ minWidth: "4rem" }}>使用例</TableCell>
                                    <TableCell>
                                        {skill.examples.join("、 ")}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </CardContent>
        </Card>
    );
}
