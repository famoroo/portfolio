"use client";

import { motion } from "motion/react";
import SkillCard from "@/components/SkillCard";

import {
    Container,
    Box,
    Grid,
} from "@mui/material";
import PageTitle from "@/components/PageTitle";

import { skills } from "@/constants/skills";

export default function ClientPageForSkills() {
    // for animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // 各子の開始を0.2秒ずらす
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <Container
            maxWidth="xl"
            sx={{ paddingTop: "100px" }}
            >
            <PageTitle
                title="Skills"
                subtitle="できること"
                />

            <Box
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0, margin: "0px 0px -100px 0px" }}
                sx={{ p: 2 }}
                >
                <Grid container spacing={2}>
                    {skills.map((skill, i) => (
                        <Grid
                            key={`${skill.name}_${i}`}
                            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                            sx={{ height: "auto", display: "flex" }}
                            >
                            <Box
                                component={motion.div}
                                variants={itemVariants}
                                transition={{ duration: 0.4, ease: "easeOut"}}
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    textAlign: "center",
                                    bgcolor: "background.paper",
                                    boxShadow: 3,
                                    "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                                >
                                <SkillCard
                                    skill={skill}
                                    width={100}
                                    height={100}
                                    />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
