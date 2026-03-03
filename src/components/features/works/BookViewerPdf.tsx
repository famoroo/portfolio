"use client";

import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import {
    Box,
    CircularProgress,
    IconButton,
    LinearProgress,
    Stack,
    Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// react-pdf 公式の worker 設定パターン
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

type BookViewerPdfProps = {
    // title?: string;
    file: string;
    initialPage?: number; // 1始まり
};

export default function BookViewerPdf({
    // title = "PDF Viewer",
    file,
    initialPage = 1,
}: BookViewerPdfProps) {
    const [numPages, setNumPages] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(
        Math.max(0, initialPage - 1)
    );
    const [pageWidth, setPageWidth] = useState(900);

    const currentPage = currentIndex + 1;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    // 全画面切替
    const toggleFullscreen = async () => {
        try {
            if (!document.fullscreenElement) {
                await containerRef.current?.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch (error) {
            console.error("全画面切替に失敗しました", error);
        }
    };
    // 全画面状態を監視
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    useEffect(() => {
        const updateWidth = () => {
            // 画面サイズに応じて幅調整
            const width = Math.min(window.innerWidth - 80, 1100);
            setPageWidth(Math.max(280, width));
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const progress = useMemo(() => {
        if (numPages === 0) return 0;
        return (currentPage / numPages) * 100;
    }, [currentPage, numPages]);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }, []);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => Math.min(prev + 1, numPages - 1));
    }, [numPages]);

    const onLoadSuccess = (pdf: { numPages: number }) => {
        setNumPages(pdf.numPages);

        const safeIndex = Math.max(0, Math.min(initialPage - 1, pdf.numPages - 1));
        setCurrentIndex(safeIndex);
    };

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [numPages, currentIndex, goPrev, goNext]);

    return (
        <Box
            ref={containerRef}
            sx={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                overflow: "hidden",
                zIndex: 100000,
                background: "#000",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.10), transparent 20%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08), transparent 25%)",
                    pointerEvents: "none",
                }}
            />

            {/* <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    position: "relative",
                    zIndex: 2,
                    px: { xs: 2, md: 3 },
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: "white",
                        fontWeight: 700,
                        display: "inline-block",
                        p: 1.5,
                        lineHeight: 1.1,
                        fontSize: { xs: "1.6rem", md: "1.8rem" },
                    }}
                >
                    {title}
                </Typography>
            </Stack> */}

            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    minHeight: "calc(100vh - 140px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    pb: 8,
                }}
            >
                <Document
                    file={file}
                    onLoadSuccess={onLoadSuccess}
                    loading={
                        <Stack alignItems="center" spacing={2}>
                            <CircularProgress />
                            <Typography sx={{ color: "#fff" }}>
                                PDFを読み込み中...
                            </Typography>
                        </Stack>
                    }
                    error={
                        <Typography sx={{ color: "#fff" }}>
                            PDFの読み込みに失敗しました
                        </Typography>
                    }
                    >
                    {numPages > 0 && (
                        <Box
                            sx={{
                                // maxHeight: "90vh",
                                overflow: "auto",
                                bgcolor: "#fff",
                                boxShadow: "0 16px 40px rgba(0,0,0,0.28)",
                            }}
                        >
                            <Page
                                pageNumber={currentPage}
                                width={pageWidth}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        </Box>
                    )}
                </Document>
            </Box>

            <Box
                sx={{
                    position: "fixed",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 3,
                    px: { xs: 2, md: 3 },
                    pb: 2,
                }}
            >
                <Stack direction="row" alignItems="center" spacing={1.5}>
                    <IconButton
                        onClick={goPrev}
                        disabled={currentPage <= 1}
                        sx={{
                            pl: 6,
                            color: "#fff",
                            bgcolor: "transparent",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
                            "&.Mui-disabled": { color: "rgba(255,255,255,0.3)" },
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
                        {numPages === 0 ? "- / -" : `${currentPage} / ${numPages}`}
                    </Typography>

                    <IconButton
                        onClick={goNext}
                        disabled={numPages === 0 || currentPage >= numPages}
                        sx={{
                            color: "#fff",
                            bgcolor: "transparent",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
                            "&.Mui-disabled": { color: "rgba(255,255,255,0.3)" },
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

                    {/* <IconButton
                        sx={{
                            color: "#fff",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
                        }}
                    >
                        <MoreHorizIcon />
                    </IconButton> */}

                    <IconButton
                        onClick={toggleFullscreen}
                        sx={{
                            color: "#fff",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
                        }}
                        >
                        {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    );
}
