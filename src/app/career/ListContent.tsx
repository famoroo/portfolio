"use client";
import React from "react";
import { motion } from "motion/react"

import {
    Alert,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemIcon,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
    Box,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';

import { TextSplitAnimiation } from "@/components/animations/TextAnimiation";

type Props = {
    period: string;
    text: string;
    works: string[];
    experiences: string[];
    comment: string;
}
export default function ListContentForCareer({item, year}: {item: Props, year?: number}) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                    position: 'relative',
                    py: 1,
                    pt: 2,
                    '::before': {
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 8,
                        borderRadius: '4px 4px 0 0',
                        content: '""',
                        position: 'absolute',
                        background: `linear-gradient(to right, #00882d 10%, #00992d 50%, #baf3d3ff 100%)`,
                    }
                }}
                >
                <Box>
                    { year && <Chip label={`${year}年〜`} color="success" size="small" sx={{ mx: 1 }} /> }
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            px: 1,
                        }}
                        >
                        <TextSplitAnimiation text={item.period} />
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
                <Stack spacing={1}>
                    {item.text &&
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            >
                            <Paper sx={{ mb: 2, p: 2 }}
                                variant="outlined"
                                >
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{
                                        p: 1,
                                    }}
                                    >
                                    {item.text}
                                </Typography>
                            </Paper>
                        </motion.div>
                    }

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        >
                        <Typography
                            sx={{ fontWeight: "bold", m: 1 }}
                            color="text.secondary"
                            variant="body2"
                            >
                            担当業務
                        </Typography>
                        <Paper variant="outlined" sx={{ px: 2 }}>
                            {item.works.length>0 && (
                                <List>
                                {item.works.map((li, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem sx={{ pl: 1 }} dense>
                                            <ListItemIcon><TaskAltRoundedIcon sx={{ fontSize: 20 }} color="success" /></ListItemIcon>
                                            <ListItemText primary={li} />
                                        </ListItem>
                                        <Divider component="li" />
                                    </React.Fragment>
                                ))}
                                </List>
                            )}
                        </Paper>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                        <Typography
                            sx={{ fontWeight: "bold", m: 1 }}
                            color="text.secondary"
                            variant="body2"
                            >
                            取得スキル
                        </Typography>
                        <Paper variant="outlined" sx={{ px: 2 }}>
                            {item.experiences.length>0 && (
                                <List>
                                {item.experiences.map((li, index) => (
                                    <React.Fragment key={index}>
                                        <ListItem sx={{ pl: 1 }} dense>
                                            <ListItemIcon><TaskAltRoundedIcon sx={{ fontSize: 20 }} color="success" /></ListItemIcon>
                                            <ListItemText primary={li} />
                                        </ListItem>
                                        <Divider component="li" />
                                    </React.Fragment>
                                ))}
                                </List>
                            )}
                        </Paper>
                    </motion.div>
                    {item.comment && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 }}
                            >
                            <Alert
                                sx={{
                                    mt: 2,
                                    p: 1
                                }}
                                >
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                    }}
                                    variant="body2"
                                    >
                                    {item.comment}
                                </Typography>
                            </Alert>
                        </motion.div>
                    )}
                </Stack>
            </AccordionDetails>
        </Accordion>
    );
}
