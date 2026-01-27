"use client";

import React from "react";
import { motion } from "motion/react";

import {
    Button,
    Chip,
    Paper,
    Divider,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Stack,
    Typography,
    Toolbar,
    Grid,
    Link,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';

import { getSampleWebsites } from "@/lib/actions/sampleWebsite";
type sampleWebsiteType = {
    createdAt: Date;
    updatedAt: Date;
    key: string;
    title: string;
    text: string;
    src: string;
    href: string;
    imageCount: number;
    webmCount: number;
    id: string;
    skills?: string | undefined;
}
export default function GridContentForWebsites() {
    const [items, setItems] = React.useState([] as sampleWebsiteType[]);
    React.useEffect(() => {
        (async () => {
            const items = await getSampleWebsites();
            setItems(items);
        })();
    }, []);

    // const MotionButton = motion(Button);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            >
            <Toolbar
                variant="dense"
                color="success"
                sx={{
                    backgroundColor: "success.main",
                    color: "white",
                    fontWeight: "bold",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                }}
                >
                ウェブサイト
            </Toolbar>
            <Paper
                variant="outlined"
                sx={{ p: 2 }}
                >
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index} sx={{ display: "flex", alignItems: "stretch" }} >
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
                                        height="300"
                                        image={`https://picsum.photos/400/240?random=${index}`}
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
                                            {item.title}
                                        </Typography>
                                        {item.skills?.split(",") && (
                                            <Stack direction="row" spacing={1} sx={{ p: 1 }} alignItems={"center"} flexWrap={"wrap"}>
                                                <Chip label={item.skills.split(",")[0]} color="success" size="small" variant="outlined" />
                                                <Chip label={item.skills.split(",")[1]} color="secondary" size="small" variant="outlined" />
                                            </Stack>
                                        )}
                                        <List>
                                            {item.text.split("\n").map((text, idx) => (
                                                <React.Fragment key={idx}>
                                                    <ListItem sx={{ px: 1 }} dense>
                                                        <ListItemText primary={text} />
                                                    </ListItem>
                                                    <Divider component="li" />
                                                </React.Fragment>
                                            ))}
                                        </List>
                                        {/* {cat.actions && (
                                            <CardActions>
                                                {cat.actions.map((action, idx) => (
                                                    <Link
                                                        key={`${action.url}${idx}`}
                                                        href={action.url??""}
                                                        rel="noopener noreferrer"
                                                        >
                                                        <MotionButton
                                                            disabled={!action.url}
                                                            color="success"
                                                            variant="contained"
                                                            startIcon={action.name === "GitHub" ? <GitHubIcon /> : action.name === "Devices" ? <DevicesIcon /> : <WebIcon />}
                                                            sx={{ mr: 1 }}
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 0.5 }}
                                                            >
                                                            {action.name ?? "sample"}
                                                        </MotionButton>
                                                    </Link>
                                                ))}
                                            </CardActions>
                                        )} */}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </motion.div>
    );
}
