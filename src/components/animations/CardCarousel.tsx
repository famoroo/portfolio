"use client";
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Typography,
	Chip,
	IconButton,
	Button,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GitHubIcon from '@mui/icons-material/GitHub';

import { TypingEffect } from "@/components/animations/TextAnimiation";

type itemItem = {
	id: string;
	isNew?: boolean;
	title: string;
	text: string;
	skills: string[];
};

type props = {
	items: itemItem[],
	title?: string,
	subtitle?: string,
}
export default function CardCarousel({items, title, subtitle}: props) {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			align: 'start',
			slidesToScroll: 1,
			containScroll: 'trimSnaps',
		},
		// [ Autoplay({ delay: 1000 })] //無限ループ
	);

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
		setPrevBtnEnabled(emblaApi.canScrollPrev());
		setNextBtnEnabled(emblaApi.canScrollNext());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;

		// イベントリスナーを先に登録
		emblaApi.on('select', onSelect);
		emblaApi.on('reInit', onSelect);

		// 初期状態を遅延実行
		const timer = setTimeout(() => {
			onSelect();
		}, 0);

		return () => {
			clearTimeout(timer);
			emblaApi.off('select', onSelect);
			emblaApi.off('reInit', onSelect);
		};
	}, [emblaApi, onSelect]);

	return (
		<Box sx={{ py: 6, px: 2 }}>
			<Box sx={{ borderBottom: "1px solid #eee", mb: 4 }}>
				{subtitle &&
					<Typography component={'span'} variant="body1">
						<TypingEffect
							text={subtitle}
							className="text-left sm:text-xl md:!text-xl md:!leading-none mb-3 text-zinc-500 mx-2"
							/>
					</Typography>
				}
				{title &&
					<Typography component={'span'} sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
						<TypingEffect
							text={title}
							className="text-left sm:text-xl md:!text-5xl md:!leading-[3rem] text-zinc-500"
							/>
					</Typography>
				}
			</Box>

			{/* カルーセル */}
			<Box sx={{ position: 'relative', maxWidth: 1200, mx: 'auto' }}>
				<Box ref={emblaRef} sx={{ overflow: 'hidden' }} >
					<Box sx={{ display: 'flex', justifyContent: 'start', gap: 2 }}>
						{items.map((item) => (
							<Box
								key={item.id}
								sx={{
									flex: '0 0 auto',
									width: { xs: 'calc(40%)', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 11px)' },
								}}
								>
								<Card
									sx={{
										height: '100%',
										display: 'flex',
										flexDirection: 'column',
										borderRadius: 3,
									}}
									variant='outlined'
									>
									<CardMedia
										component="img"
										height="194"
										image={`https://picsum.photos/400/160?random=${item.id}`}
										alt="Paella dish"
									/>
									<CardContent
										sx={{
											flexGrow: 1,
											transition: 'transform 0.2s',
											'&:hover': {
												transform: 'scale(1.01)',
											},
										}}
										>

										{/* タイトル */}
										<Typography
											variant="h6"
											sx={{
												fontWeight: 'bold',
												display: '-webkit-box',
												WebkitLineClamp: 2,
												WebkitBoxOrient: 'vertical',
												overflow: 'hidden',
											}}
											>
											{item.title}
										</Typography>

										<Typography
											variant="body2"
											sx={{
												my: 2,
											}}
											>
											{item.text}
										</Typography>

										{/* 詳細情報 */}
										<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
											<Box sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
												<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
													{item.skills.map((skill, idx) => (
														<Chip
															key={idx}
															label={skill}
															size="small"
															sx={{
																bgcolor: 'warning.main',
																color: 'white',
																fontWeight: 'bold',
																mb: 1,
															}}
														/>
													))}
												</Box>
											</Box>
										</Box>
									</CardContent>
									<CardActions>
										<Button
											disabled
											color="success"
											variant="contained"
											startIcon={<GitHubIcon />}
											sx={{ mx: 1 }}
											>
											github
										</Button>
									</CardActions>
								</Card>
							</Box>
						))}
					</Box>
				</Box>

				{/* ナビゲーションボタン */}
				<IconButton
					onClick={scrollPrev}
					disabled={!prevBtnEnabled}
					sx={{
						position: 'absolute',
						left: -20,
						top: '50%',
						transform: 'translateY(-50%)',
						bgcolor: 'white',
						boxShadow: 2,
						'&:hover': { bgcolor: 'grey.100' },
						'&.Mui-disabled': { display: 'none' },
					}}
					>
					<ChevronLeftIcon />
				</IconButton>

				<IconButton
					onClick={scrollNext}
					disabled={!nextBtnEnabled}
					sx={{
						position: 'absolute',
						right: -20,
						top: '50%',
						transform: 'translateY(-50%)',
						bgcolor: 'white',
						boxShadow: 2,
						'&:hover': { bgcolor: 'grey.100' },
						'&.Mui-disabled': { display: 'none' },
					}}
					>
					<ChevronRightIcon />
				</IconButton>
			</Box>

			{/* ドットインジケーター */}
			<Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
				{items.map((_, index) => (
					<Box
						key={index}
						onClick={() => emblaApi?.scrollTo(index)}
						sx={{
							width: 10,
							height: 10,
							borderRadius: '50%',
							bgcolor: selectedIndex === index ? 'success.main' : 'grey.300',
							cursor: 'pointer',
							transition: 'all 0.3s',
						}}
					/>
				))}
			</Box>

			{/* もっと見るボタン */}
			<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
				<Button
					variant="outlined"
					size="large"
					color='success'
					endIcon={<ChevronRightIcon />}
					sx={{
						borderRadius: 8,
						px: 4,
						py: 1.5,
						fontWeight: 'bold',
					}}
				>
					もっとみる
				</Button>
			</Box>
		</Box>
	);
}
