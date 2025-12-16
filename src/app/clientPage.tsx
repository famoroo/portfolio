"use client";

// import Image from "next/image";
import {
	Box,
	// Typography,
	// Stack,
} from "@mui/material";

// import SmokeImage from "@/components/SmokeImage";

import { ParallaxSection } from "@/components/animations/ScrollSnap/ParallaxSection";
import { ScrollSnapContainer } from "@/components/animations/ScrollSnap/ScrollSnapContainer";
import {
	RotateWords,
	// StaggeredFade,
	// TextSplitAnimiation,
	// GradualSpacing,
	// TypingEffect,
	// LettersPullUp,
	// WordsPullUp,
	// BlurIn,
	// TextFade,
	// ShimmeringText,
} from "@/components/animations/TextAnimiation";
import SectionSkills from "@/components/features/top/SectionSkills";
import SectionContact from "@/components/features/top/SectionContact";
import SectionInduction from "@/components/features/top/SectionInduction";
import CardCarousel from "@/components/animations/CardCarousel";
import CardCarouselBrowser from "@/components/animations/CardCarouselBrowser";

export default function ClientPage() {
	return (
		<Box>
			<ScrollSnapContainer>
				<ParallaxSection>
					<RotateWords
						text="20年の、"
						words={["実績", "経験", "進歩"]}
						// color="amber"
						ms={3000}
						/>
				</ParallaxSection>
				<ParallaxSection damping={false}>
					<SectionSkills />
				</ParallaxSection>

				<ParallaxSection>
					<SectionInduction />
				</ParallaxSection>

				<ParallaxSection>
					<CardCarousel
						items={[
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
						]}
						title="システム開発(DX)"
						subtitle="つくったもの"
					/>
				</ParallaxSection>

				<ParallaxSection
					damping={false}
					heightScale={1.5}
					>
					<CardCarouselBrowser
						title="ウェブサイト"
						subtitle="つくったもの"
						// items={[
						// 	{
						// 		id: 'gas-station',
						// 		title: 'ガソリンスタンド',
						// 		text: "フルサービス型 ガソリンスタンドのウェブサイトを制作",
						// 		src:"/images/sample/website/gas-station/eyecatch.png",
						// 		href: "/works/website/gas-station",
						// 		skills: ['laravel', 'vue.js'],
						// 	},
						// 	{
						// 		id: 'pet-salon',
						// 		title: "ペットサロン",
						// 		text: "個人経営の小型犬専用ペットサロンのウェブサイトを制作",
						// 		src:"/images/sample/website/pet-salon/eyecatch.png",
						// 		href: "/works/website/pet-salon",
						// 		skills: ['laravel', 'react.js'],
						// 	},
						// ]}
					/>
				</ParallaxSection>

				<ParallaxSection>
					<SectionContact />
				</ParallaxSection>

				{/*
				<ParallaxSection>
					<ShimmeringText
						text="famoroo portfolio"
						color="var(--color-cyan-500)"
						duration={3}
						// wave
						shimmeringColor="var(--color-red-500)"
						transition={{ ease: "backInOut" }}
						/>
				</ParallaxSection>
				<ParallaxSection>
					<TextSplitAnimiation text = "famoroo portfolio" />
					<Stack>
						<GradualSpacing text = "famoroo portfolio" />
						<TypingEffect text = "famoroo portfolio" />
						<StaggeredFade text = "famoroo portfolio" />
						<LettersPullUp text = "famoroo portfolio" />
						<WordsPullUp text = "famoroo portfolio" />
						<BlurIn>famoroo portfolio</BlurIn>
						<TextFade
							direction="down"
							className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
							>
							<Typography
								variant="h3"
								sx={{ fontWeight: "bold" }}
								className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[0rem] prose-h2:my-0">
								Fade Down
							</Typography>
							<Typography className="prose-p:my-1 text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit amet.
							</Typography>
						</TextFade>

						<TextFade
							direction="up"
							className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
							>
							<Typography
								variant="h3"
								sx={{ fontWeight: "bold" }}
								className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[0rem] prose-h2:my-0">
								Fade Up
							</Typography>
							<Typography className="prose-p:my-1 text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit amet.
							</Typography>
						</TextFade>
					</Stack>
				</ParallaxSection>
				<ParallaxSection>
					<Image
						className="dark:invert"
						src="/next.svg"
						alt="Next.js logo"
						width={100}
						height={20}
						priority
					/>
				</ParallaxSection>
				<ParallaxSection damping={false}>
					<SmokeImage
						src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/overview/map_pc.svg"
						alt="Vercel logomark"
						width={480}
						height={480}
						/>
				</ParallaxSection> */}

			</ScrollSnapContainer>
		</Box>
    );
}
