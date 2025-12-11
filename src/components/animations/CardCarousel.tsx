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
// import CodeIcon from '@mui/icons-material/Code';
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

const items: itemItem[] = [
	{
		id: '1',
		title: 'ポータルサイト',
		text: 'グループ全体の情報を一元管理すべく、共有基盤を構築',
		skills: ['laravel', 'vue.js'],
	},
	{
		id: '2',
		title: "社内申請システム (ワークフロー)",
		text: "各種申請の電子化・申請から承認までのプロセスをDXで効率化",
		skills: ['laravel', 'vue.js'],
	},
	{
		id: '3',
		title: '稟議決裁システム (ワークフロー)',
		text: "稟議書の電子化・承認フローの自動化",
		skills: ['laravel', 'vue.js'],
	},
	{
		id: '4',
		title: "業績モニタリングシステム",
		text: "リアルタイムで業績データを可視化",
		skills: ['laravel', 'React'],
	},
	{
		id: '5',
		title: '社内監査システム',
		text: '内部監査プロセスのデジタル化・ログ管理の強化',
		skills: ['laravel', 'React'],
	},
	{
		id: '6',
		title: '改善提案システム',
		text: '改善提案書の提出・承認フローをデジタル化',
		skills: ['laravel', 'Next.js'],
	},
	{
		id: '7',
		title: '見積/請求書システム',
		text: '請求書のデジタル化',
		skills: ['laravel', 'Next.js'],
	},
];

export default function CardCarousel() {
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
			<Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
				<Typography component={'span'} variant="h4" sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
					<TypingEffect
						text="WORKS"
						className="text-left sm:text-xl md:text-2xl md:leading-none"
						/>
				</Typography>
				<Typography component={'span'} variant="body1">
					<TypingEffect
						text="つくったもの"
						className="text-left sm:text-xl md:text-xl font-normal md:leading-none mt-3"
						/>
				</Typography>
			</Box>

			{/* カルーセル */}
			<Box sx={{ position: 'relative', maxWidth: 1200, mx: 'auto' }}>
				<Box ref={emblaRef} sx={{ overflow: 'hidden' }}>
					<Box sx={{ display: 'flex', gap: 2 }}>
						{items.map((item) => (
							<Box
								key={item.id}
								sx={{
									flex: '0 0 auto',
									width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.333% - 11px)' },
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
												{/* <CodeIcon fontSize="small" color="action" sx={{ mt: 0.5 }} /> */}
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
					他の案件も見てみる
				</Button>
			</Box>
		</Box>
	);
}
