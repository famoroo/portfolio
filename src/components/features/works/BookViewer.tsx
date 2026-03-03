"use client";

import { useMemo, useRef, useState } from "react";
import {
    Box,
    IconButton,
    Stack,
    Typography,
    LinearProgress,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Keyboard, Mousewheel } from "swiper/modules";

import "swiper/css";

type BookViewerProps = {
    title?: string;
    pages: string[];
    initialPage?: number; // 1始まり
};

export default function BookViewer({
    title = "車関係会社様",
    pages,
    initialPage = 1,
}: BookViewerProps) {
    const swiperRef = useRef<SwiperType | null>(null);
    const safeInitialIndex = Math.max(0, Math.min(initialPage - 1, pages.length - 1));
    const [currentIndex, setCurrentIndex] = useState(safeInitialIndex);

    const progress = useMemo(() => {
        if (pages.length === 0) return 0;
        return ((currentIndex + 1) / pages.length) * 100;
    }, [currentIndex, pages.length]);

    const goPrev = () => swiperRef.current?.slidePrev();
    const goNext = () => swiperRef.current?.slideNext();

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                overflow: "hidden",
                zIndex: 100000,
                background: "black",
                    // "linear-gradient(180deg, #3b4f67 0%, #607a98 35%, #7690ad 100%)",
            }}
        >
            {/* 背景のうっすら模様 */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.18), transparent 20%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12), transparent 25%)",
                    pointerEvents: "none",
                }}
            />

            {/* 上部 */}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    position: "relative",
                    zIndex: 2,
                    px: { xs: 2, md: 3 },
                    // pt: 2,
                }}
                >
                <Typography
                    variant="h6"
                    sx={{
                        color: "white",
                        // color: "#0b0b0b",
                        fontWeight: 700,
                        // backgroundColor: "rgba(111, 168, 255, 0.35)",
                        display: "inline-block",
                        p: 1.5,
                        lineHeight: 1.1,
                        fontSize: { xs: "1.6rem", md: "1.8rem" },
                    }}
                    >
                    {title}
                </Typography>

                {/* share button */}
                {/* <IconButton
                    sx={{
                        color: "#fff",
                        bgcolor: "rgba(20, 30, 45, 0.55)",
                        "&:hover": { bgcolor: "rgba(20, 30, 45, 0.75)" },
                    }}
                >
                    <Box
                        component="span"
                        sx={{ display: "flex", alignItems: "center", gap: 0.75, px: 0.5 }}
                    >
                        <ZoomInMapIcon fontSize="small" />
                        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>共有</Typography>
                    </Box>
                </IconButton> */}
            </Stack>

            {/* メインビュー */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    // pt: { xs: 2, md: 3 },
                    pb: 12,
                }}
            >
                <Swiper
                    modules={[Keyboard, Mousewheel]}
                    keyboard={{ enabled: true }}
                    mousewheel={{ forceToAxis: true }}
                    centeredSlides
                    slidesPerView="auto"
                    spaceBetween={28}
                    initialSlide={safeInitialIndex}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setCurrentIndex(swiper.activeIndex);
                    }}
                    style={{
                        paddingLeft: "24px",
                        paddingRight: "24px",
                    //     paddingTop: "12px",
                    //     paddingBottom: "12px",
                    }}
                    >
                    {pages.map((src, index) => {
                        const isActive = index === currentIndex;

                        return (
                            <SwiperSlide
                                key={`${src}-${index}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    // width: "min(400px, 72vw)",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                        transition: "transform 0.35s ease, opacity 0.35s ease, filter 0.35s ease",
                                        transform: isActive ? "scale(1)" : "scale(0.92)",
                                        opacity: isActive ? 1 : 0.45,
                                        filter: isActive ? "none" : "saturate(0.7)",
                                    }}
                                >
                                    {/* 白い誌面 */}
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            maxHeight: "85vh",
                                            aspectRatio: "9 / 16",
                                            bgcolor: "#fff",
                                            borderRadius: "2px",
                                            overflow: "hidden",
                                            boxShadow: isActive
                                                ? "0 16px 40px rgba(0,0,0,0.28)"
                                                : "0 10px 24px rgba(0,0,0,0.18)",
                                        }}
                                        >
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={`page-${index + 1}`}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                display: "block",
                                                userSelect: "none",
                                                WebkitUserDrag: "none",
                                            }}
                                        />

                                        {/* 非アクティブ時の暗幕感 */}
                                        {!isActive && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    bgcolor: "rgba(60, 95, 130, 0.28)",
                                                }}
                                            />
                                        )}
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>

            {/* 下部コントロール */}
            <Box
                sx={{
                    position: "fixed",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 3,
                    px: { xs: 2, md: 3 },
                    pb: 2,
                    // backgound: "linear-gradient(to top, var(#0f1015d9) 0, var(rgba(29,31,38,.45)) 60%, var(rgba(29,31,38,0)) 100%)",
                }}
            >
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <IconButton
                        onClick={goPrev}
                        sx={{
                            color: "#fff",
                            bgcolor: "transparent",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>

                    <Typography
                        sx={{
                            color: "#fff",
                            minWidth: 74,
                            textAlign: "center",
                            fontSize: 16,
                            fontWeight: 600,
                        }}
                    >
                        {currentIndex + 1} / {pages.length}
                    </Typography>

                    <IconButton
                        onClick={goNext}
                        sx={{
                            color: "#fff",
                            bgcolor: "transparent",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>

                    <Box sx={{ flex: 1, mx: 1 }}>
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                                height: 4,
                                borderRadius: 999,
                                bgcolor: "rgba(255,255,255,0.22)",
                                "& .MuiLinearProgress-bar": {
                                    borderRadius: 999,
                                    bgcolor: "#ffffff",
                                },
                            }}
                        />
                    </Box>

                    <IconButton
                        sx={{
                            color: "#fff",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
                        }}
                    >
                        <MoreHorizIcon />
                    </IconButton>

                    <IconButton
                        sx={{
                            color: "#fff",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
                        }}
                    >
                        <ZoomInMapIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    );
}
