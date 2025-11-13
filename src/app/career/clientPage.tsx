"use client";

import { motion } from "motion/react"

import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import {
    Box,
    // ButtonGroup,
    Container,
    Toolbar,
    Paper,
    Button,
    Typography,
    Stack,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import DevicesIcon from '@mui/icons-material/Devices';

export default function ClientPageForCareers() {
    const careers = [
        {
            year: 2007,
            name: "ITソリューション企業(JASDAQ)",
            text: "アプリケーションテスターとして従事"
        },
        {
            year: 2010,
            name: "ソフトウェア開発企業",
            text: "ソフトウェア開発者として従事"
        },
        {
            year: 2012,
            name: "社内SE",
            text: "社内SEとして従事"
        },
    ]

    const MotionButton = motion(Button);

    return (
        <Box
            className="bg-gradient-to-br from-lime-200 from-10% via-lime-100 via-20% to-lime-5 to-70% "
            sx={{ height: "100vh", overflow: "auto" }}
            >
            <Container
                maxWidth="lg"
                >
                <Timeline
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                        },
                    }}
                    >
                    {
                        careers.map((career) => (
                            <TimelineItem key={career.year}>
                                <TimelineOppositeContent>
                                    <Typography
                                        color="success"
                                        sx={{
                                            fontWeight: "bold",
                                        }}
                                        >
                                        {career.year}年
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="success" />
                                    <TimelineConnector sx={{ bgcolor: 'success.light' }}/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper
                                        sx={{ mb: 8 }}
                                        elevation={8}
                                        >
                                        <Toolbar
                                            variant="dense"
                                            className="bg-gradient-to-b from-success-dark via-success-main to-success-light"
                                            sx={{
                                                color: "white",
                                                fontWeight: "bold",
                                            }}
                                            >
                                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                                {career.name}
                                            </Typography>
                                        </Toolbar>
                                        <Stack
                                            spacing={2}
                                            sx={{ p: 2 }}
                                            >
                                            <Box
                                                className="bg-lime-50"
                                                sx={{
                                                    borderRadius: 2,
                                                    p: 2,
                                                }}>
                                                <Typography variant="body1" color="text.secondary">
                                                    {career.text}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                {/* <ButtonGroup variant="contained"> */}
                                                    <MotionButton
                                                        color="success"
                                                        variant="contained"
                                                        startIcon={<GitHubIcon />}
                                                        sx={{ mr: 1 }}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.5 }}
                                                        >
                                                        github
                                                    </MotionButton>
                                                    <MotionButton
                                                        color="success"
                                                        variant="contained"
                                                        startIcon={<DevicesIcon />}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 1 }}
                                                        >
                                                        サンプル
                                                    </MotionButton>
                                                {/* </ButtonGroup> */}
                                            </Box>
                                            <Box>
                                                使用スキル
                                                人となりを掲載
                                                経歴、仕事
                                                家族
                                                趣味
                                                好きなこと
                                            </Box>
                                        </Stack>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            </Container>
        </Box>
    );
}
