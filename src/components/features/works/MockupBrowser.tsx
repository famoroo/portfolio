"use client";

import {
	Box,
	Stack,
} from '@mui/material';

import Image from "next/image";

type Props = {
	src: string;
};

export default function MockupBrowser({
	src
}: Props) {
	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<Stack alignItems={"center"}>
				<Box sx={{ position: "relative" }}>
					<Box sx={{ zIndex: 2, position: "relative" }}>
						<Image
							className="dark:invert mx-auto"
							src={`/images/sample/website/laptop-mockup-body.png`}
							alt="mockup"
							width={640}
							height={600}
							priority
							/>
					</Box>
					<Box sx={{ px: 1, py: 2, zIndex: 1, content: '""', position: "absolute", width: "100%", height: "100%", top: 0, left: '50%', right: '50%', transform: "translateX(-50%)" }}>
						<Image
							className="dark:invert"
							src={src}
							alt="mockup"
							width={640}
							height={640}
							priority
							/>
					</Box>
				</Box>
				<Box>
				<Image
					className="dark:invert"
					src={`/images/sample/website/laptop-mockup-bottom.png`}
					alt="mockup"
					width={880}
					height={600}
					priority
					/>
				</Box>
			</Stack>
		</Box>
	);
}
