"use client";

import Image from "next/image";
import {
	Box,
} from "@mui/material";

import ClientPageContent from "./clientPageContent";

import { ParallaxSection } from "@/components/animations/ScrollSnap/ParallaxSection";
import { ScrollSnapContainer } from "@/components/animations/ScrollSnap/ScrollSnapContainer";
import { RotateWords } from "@/components/animations/RotateWords";
import { TextSplitAnimiation } from "@/components/animations/text";

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
						<TextSplitAnimiation
							text = "famoroo portfolio"
							/>
					</ParallaxSection>
				<ParallaxSection>
					<ClientPageContent />
				</ParallaxSection>
			</ScrollSnapContainer>
		</Box>
    );
}
