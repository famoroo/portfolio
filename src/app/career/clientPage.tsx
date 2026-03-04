"use client";

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
    Container,
    Typography,
    Stack,
    useMediaQuery
} from '@mui/material';
import PageTitle from "@/components/PageTitle";

import ListContentForCareer from "./ListContent";
import GridContentForCareer from "./GridContent";

import { careers } from "@/constants/careers";

export default function ClientPageForCareers() {
    const isMobile = useMediaQuery("(max-width: 600px)");

    return (
        <Container
            maxWidth="lg"
            sx={{ paddingTop: "100px" }}
            >
            <PageTitle
                title="career"
                subtitle="やってきたこと"
                />

            {isMobile
            ? (
                <Stack spacing={2}>
                    {careers.map((career) => (
                        <>
                        {career.item
                            ?
                            <ListContentForCareer item={career.item} year={career.year} />
                            :
                            <GridContentForCareer career={career} year={career.year} />
                        }
                        </>
                    ))}
                </Stack>
            ) : (
                <Timeline
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.1,
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
                                            fontSize: "1.5rem",
                                        }}
                                        >
                                        {career.year}年
                                    </Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color="success" />
                                    <TimelineConnector sx={{ bgcolor: 'success.light' }}/>
                                </TimelineSeparator>
                                <TimelineContent sx={{ my: 2 }}>
                                    {career.item
                                        ?
                                        <ListContentForCareer item={career.item} />
                                        :
                                        <GridContentForCareer career={career} />
                                    }
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            )}
        </Container>
    );
}
