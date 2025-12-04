"use client";

// import Image from "next/image";
import {
	Box,
	Typography,
	Card, CardContent,
	Stack,
	Avatar,
	Grid,
	Link
} from "@mui/material";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ComputerIcon from '@mui/icons-material/Computer';
import StarRateIcon from '@mui/icons-material/StarRate';
import HistoryIcon from '@mui/icons-material/History';

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
import SectionContact from "@/components/SectionContact";

import { LogoLoop } from "@/components/animations/LogoLoop";

import { lime } from "@mui/material/colors";

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
					<LogoLoop
						logos={[
							{ src: "/images/skill/next-logo.svg", alt: "Next.js" },
							{ src: "/images/skill/react-logo.svg", alt: "React" },
							{ src: "/images/skill/supabase-logo.svg", alt: "Supabase" },
							{ src: "/images/skill/amplify-logo.svg", alt: "AWS" },
							{ src: "/images/skill/mui-logo.svg", alt: "MUI" },
							{ src: "/images/skill/javascript-logo.svg", alt: "javascript" },
							{ src: "/images/skill/bootstrap-logo.svg", alt: "bootstrap" },
							{ src: "/images/skill/apple-logo.svg", alt: "Apple" },
							{ src: "/images/skill/wordpress-logo.svg", alt: "wordpress" },
							{ src: "/images/skill/vue-logo.svg", alt: "vue" },
							{ src: "/images/skill/vuetify-logo.svg", alt: "vuetify" },
						]}
					/>
				</ParallaxSection>


				<ParallaxSection>
					<Grid
						container
						spacing={2}
						maxWidth={"lg"}
						>
						{[
							{
								href: "/profile",
								title: "PROFILE",
								subTitle: "わたしのこと",
								text: "気になることはとことん調べて、つくりたくなったらすぐ手を動かすタイプです。便利なものを見つけたらシェアしたくなるし、「これ、もっと良くできるのに…」と思えば勝手に改善しはじめます。",
								icon: <PermIdentityIcon />,
							},
							{
								href: "/works",
								title: "WORKS",
								subTitle: "制作物",
								text: "「これ不便だな…」と思ったら、とりあえず作ってみるタイプです。業務ツールから AI ボットまで、気づいたら色んなジャンルに手を出してました。サッと触ってわかる“ちょうどいい使い心地”を目指しています。",
								icon: <ComputerIcon />,
							},
							{
								href: "/skills",
								title: "SKILLS",
								subTitle: "技術",
								text: "見た目の部分から裏側のロジックまで、ひと通りまとめてやります。Next.js や Supabase が得意ですが、必要なら何でも触ります。「とりあえず相談してもらえれば何とかする」がモットーです。",
								icon: <StarRateIcon />,
							},
							{
								href: "/career",
								title: "CAREER",
								subTitle: "経歴",
								text: "現場の「あ、ここ困ってるんだな」を拾い集めて、ちょっとずつ便利にする仕事をしてきました。“やってよかった！”と言ってもらえるのが一番うれしいところです。",
								icon: <HistoryIcon />,
							},
						].map((itm, idx) => (
							<Grid key={idx} size={{ xs: 12, md: 6, lg: 3 }}>
								<Link
									href={itm.href}
									underline="none"
									>
									<Card
										variant="outlined"
										sx={{
											width: "100%",
											height: "100%",
											transition: "all .5s",
											"&:hover": {
												transform: "scale(1.05)",
												backgroundColor: lime[50],
											}
										}}
										>
										<CardContent>
											<Stack
												spacing={1}
												>
												<Avatar>
													{itm.icon}
												</Avatar>
												<Typography variant="h5" sx={{ textTransform: "uppercase", fontWeight: "bold" }}>{itm.title}</Typography>
												<Typography variant="body2">{itm.subTitle}</Typography>
												<Typography variant="caption">{itm.text}</Typography>
											</Stack>
										</CardContent>
									</Card>
								</Link>
							</Grid>
						))}
					</Grid>
				</ParallaxSection>

				{/* <ParallaxSection>
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

				<ParallaxSection>
					<SectionContact />
				</ParallaxSection>
			</ScrollSnapContainer>
		</Box>
    );
}
