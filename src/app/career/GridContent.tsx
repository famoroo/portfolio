"use client";

import React from "react";
import { motion } from "motion/react"

import {
    Box,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
    Alert,
    Grid,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import DevicesIcon from '@mui/icons-material/Devices';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {
    title: string;
    category: {
        subTitle: string;
        text: string[];
        actions?: string[];
    }[];
    experiences: string[];
    comment: string;
}

export default function GridContentForCareer({items} : {items: Props[]}) {
    const MotionButton = motion(Button);

    return (
    <Stack spacing={1}>
        {items.map((content, index) => (
            <Accordion
                key={index}
                variant="outlined"
                >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    // sx={{
                    //     position: 'relative',
                    //     '::before': {
                    //         top: 0,
                    //         left: 0,
                    //         right: 0,
                    //         bottom: 0,
                    //         width: 6,
                    //         content: '""',
                    //         position: 'absolute',
                    //         background: `linear-gradient(to right, #00882d 10%, #00992d 30%, #baf3d3ff 100%)`,
                    //     }
                    // }}
                    >
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            px: 1,
                        }}
                        >
                        {content.title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 }}
                        viewport={{ once: true }}
                        >
                        <Paper variant="outlined" sx={{ p: 2 }}>
                            {content.comment && (
                                <Alert
                                    sx={{
                                        mb: 2,
                                        p: 1
                                    }}
                                    >
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                        }}
                                        variant="body2"
                                        >
                                        {content.comment}
                                    </Typography>
                                </Alert>
                            )}

                            {content.category && content.category.length>0 && (
                                <Grid container spacing={2}>
                                {content.category.map((cat, index) => (
                                    <Grid size={{ xs: 12, sm: 6 }} key={index} sx={{ display: "flex", alignItems: "stretch" }} >
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.3 }}
                                            viewport={{ once: true }}
                                            style={{ width: "100%" }}
                                            >
                                            <Card variant="outlined" sx={{ borderRadius: 4, height: "100%" }}>
                                                <CardMedia
                                                    component="img"
                                                    height="194"
                                                    image={`https://picsum.photos/400/160?random=${index}`}
                                                    alt="Paella dish"
                                                />
                                                <CardContent>
                                                    <Typography
                                                        sx={{
                                                            fontWeight: "bold",
                                                            px: 1,
                                                        }}
                                                        variant="h6"
                                                        >
                                                        {cat.subTitle}
                                                    </Typography>
                                                    <List>
                                                    {cat.text.map((text, idx) => (
                                                        <React.Fragment key={idx}>
                                                            <ListItem sx={{ px: 1 }} dense>
                                                                <ListItemText primary={text} />
                                                            </ListItem>
                                                            <Divider component="li" />
                                                        </React.Fragment>
                                                    ))}
                                                    </List>
                                                    {cat.actions && (
                                                        <CardActions>
                                                            <Box>
                                                                {cat.actions.map((action, idx) => (
                                                                    <MotionButton
                                                                        key={idx}
                                                                        color="success"
                                                                        variant="contained"
                                                                        startIcon={action=="github" ? <GitHubIcon /> : <DevicesIcon /> }
                                                                        sx={{
                                                                            mr: 1,
                                                                        }}
                                                                        whileHover={{ scale: 1.05 }}
                                                                        whileTap={{ scale: 0.95 }}
                                                                        initial={{ opacity: 0 }}
                                                                        animate={{ opacity: 1 }}
                                                                        transition={{ duration: 0.5 }}
                                                                        disabled
                                                                        >
                                                                        {action}
                                                                    </MotionButton>
                                                                ))}
                                                            </Box>
                                                        </CardActions>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </Grid>
                                ))}
                                </Grid>
                            )}
                        </Paper>
                    </motion.div>
                </AccordionDetails>
            </Accordion>
        ))}
    </Stack>
    );
}
