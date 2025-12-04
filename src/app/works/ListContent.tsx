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
    Stack
} from '@mui/material';

import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
type Props = {
    works: string[];
    experiences: string[];
    comment: string;
}
export default function ListContentForCareer({item}: {item: Props}) {
    return (
        <Stack spacing={1}>
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
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                >
                {item.comment && (
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
                )}
            </motion.div>
        </Stack>
    );
}
