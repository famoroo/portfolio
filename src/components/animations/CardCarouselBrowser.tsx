"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react"

import {
	Box,
	Typography,
	Container,
	Grid
} from '@mui/material';

import { TypingEffect } from "@/components/animations/TextAnimiation";
import CardBrowser from "@/components/features/works/CardBrowser";

import { getSampleWebsite } from "@/lib/actions/sampleWebsite";
import { sampleWebsiteType } from "@/schemas/sampleWebsiteSchema";

type props = {
	title?: string,
	subtitle?: string,
}
export default function CardCarouselBrowser({
	title,
	subtitle
}: props) {

	const [items, setItems] = useState<sampleWebsiteType[]>([]);

	useEffect(() => {
		const fetchItems = async () => {
			const items = await getSampleWebsite();
			console.log(items)
			setItems(items?.slice(0, 6));
		};
		fetchItems();
	}, []);


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
			<Container>
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
										image={item.src}
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
			</Container>
		</Box>
	);
}
