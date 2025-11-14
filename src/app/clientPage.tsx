"use client";

import Image from "next/image";
import {
	Box,
	Typography,
} from "@mui/material";

import SmokeImage from "@/components/SmokeImage";

import { ParallaxSection } from "@/components/animations/ScrollSnap/ParallaxSection";
import { ScrollSnapContainer } from "@/components/animations/ScrollSnap/ScrollSnapContainer";
import {
	RotateWords,
	StaggeredFade,
	TextSplitAnimiation,
	GradualSpacing,
	TypingEffect,
	LettersPullUp,
	WordsPullUp,
	BlurIn,
	TextFade,
	ShimmeringText,
} from "@/components/animations/TextAnimiation";
import { LogoLoop } from "@/components/animations/LogoLoop";

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
				<ParallaxSection>
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
				<ParallaxSection>
					<SmokeImage
						src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/overview/map_pc.svg"
						alt="Vercel logomark"
						width={480}
						height={480}
						/>
				</ParallaxSection>
			</ScrollSnapContainer>
		</Box>
    );
}
