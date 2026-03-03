"use client";

import { motion } from "motion/react"
import Link from 'next/link'
import {
	Box,
	Button,
	Typography,
	Container,
	Grid
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { TypingEffect } from "@/components/animations/TextAnimiation";
import CardBrowser from "@/components/features/works/CardBrowser";

import { sampleWebsiteType } from "@/schemas/sampleWebsiteSchema";

type props = {
	title?: string,
	subtitle?: string,
	href?: string,
	items: sampleWebsiteType[]
}
export default function CardCarouselBrowser({
	title,
	subtitle,
	href,
	items,
}: props) {
	return (
		<Container maxWidth="xl"
			sx={ (theme) => ({
                p: theme.breakpoints.down("md") ? 1 : 4,
            })}>
			<Box sx={{ borderBottom: "1px solid #eee", my: 4, mx: 1  }}>
				{subtitle &&
					<Typography component={'span'} variant="body1">
						<TypingEffect
							text={subtitle}
							className="text-left !text-sm sm:!text-sm md:!text-xl md:!leading-none mb-1 text-zinc-500"
							/>
					</Typography>
				}
				{title &&
					<Typography component={'span'} sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
						<TypingEffect
							text={title}
							className="text-left text-xl sm:text-2xl md:!text-5xl md:!leading-[3rem] text-zinc-500"
							/>
					</Typography>
				}
			</Box>

			{/* カルーセル */}
			{/* <Container> */}
				<Grid container spacing={3}>
					{items.map((item, index) => (
						<Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
							<motion.div
								animate={{
									y: [-8, 8, -8]
								}}
								transition={{
									duration: 5,
									delay: index * 0.3,
									ease: "easeInOut",
									repeat: Infinity,
								}}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
								style={{ width: "100%" }}
								>
								<Box
									key={item.id}
									sx={{
										flex: '0 0 auto',
										my: index%2==0 ? 0 : 2,
										borderRadius: 4
									}}
									>
									<CardBrowser
										// image={`https://picsum.photos/400/160?random=${index}`}
										image={`/images/sample/website/${item.key}/eyecatch.png`}
										href={item.href}
										title={item.title}
										text={item.text}
										skills={item.skills ? item.skills.split(",") : []}
										/>
								</Box>
							</motion.div>
						</Grid>
					))}
				</Grid>

				{/* もっと見るボタン */}
				{href &&
				<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
					<Link
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						>
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
					</Link>
				</Box>
				}
			{/* </Container> */}
		</Container>
	);
}
