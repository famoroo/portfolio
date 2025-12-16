"use client";
import Link from 'next/link'

import {
    Box,
    Button,
    Typography
} from '@mui/material';

export default function SectionContact() {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden", // blurによるはみ出し隠し
                "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url(/images/bg_contact.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // filter: "blur(1px)",
                    transform: "scale(1.05)", // ぼかしの隙間防止
                    zIndex: 0,
                },
            }}
            >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    height: "50%",
                    maxWidth: "960px",
                    maxHeight: "400px",
                    backgroundColor: "rgba(255,255,255, 0.8)",
                    p: 4,
                    borderRadius: 2,
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 2,
                            color: "text.primary",
                        }}
                        >
                        お問い合わせ、お仕事のご依頼は下記フォームよりお願いいたします。
                    </Typography>
                <Link
                    href="/contact"
                    >
                    <Button
                        color="success"
                        variant='contained'
                        size="large"
                        sx={{
                            fontWeight: "Bold",
                            fontSize: "1.2em",
                            background: `linear-gradient(to right bottom, #00882d 10%, #00992d 50%, #baf3d3ff 100%)`,
                            px: 4,
                            py: 2,
                            mt: 2
                        }}
                        >
                        お問い合わせはこちらから
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}
