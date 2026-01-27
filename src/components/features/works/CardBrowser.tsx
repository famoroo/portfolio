"use client";
import {
	Chip,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Stack,
	Typography,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { grey } from "@mui/material/colors";
type Props = {
	image: string;
	href?: string;
	title?: string;
	text?: string;
	skills?: string[]
};

export default function CardBrowser({
	image = `https://picsum.photos/400/160?random=1`,
	href,
	title,
	text,
	skills
}: Props) {
	const cardContentBody = (
        <>
            <CardContent sx={{ backgroundColor: grey[200], maxHeight: "36px", minHeight: "24px", p: 1 }}>
                <Stack direction={"row"} spacing={1}>
                    <CircleIcon color="error" sx={{ fontSize: "12px" }} />
                    <CircleIcon color="warning" sx={{ fontSize: "12px" }} />
                    <CircleIcon color="success" sx={{ fontSize: "12px" }} />
                </Stack>
            </CardContent>
            <CardMedia
                component="img"
                height="194"
				sx={{ p: 0.5, objectFit: "contain", objectPosition: "center", transform: "scale(1.02)" }}
                image={image}
            />
			<CardContent
				sx={{
					backgroundColor: grey[100],
					pt: (skills || href) ? 1 : 0,
				}}
				>
				{skills && (
					<Stack direction="row" spacing={1} sx={{ my: 1}}>
						{skills.map((skill, idx) => (
							<Chip
								key={idx}
								label={skill}
								variant='outlined'
								color="warning"
								size="small"
								sx={{
									fontWeight: 'bold',
								}}
							/>
						))}
					</Stack>
				)}
				{href && (
					<>
					<Typography gutterBottom variant="body1" component="div" sx={{ fontWeight: "bold" }}>{title}</Typography>
					<Typography variant="body2" color="text.secondary">{text?.split("\n")[0]}</Typography>
					</>
				)}
			</CardContent>
        </>
    );
	return (
		<Card
			variant='outlined'
			sx={{
				borderRadius: "12px",
				"&:hover": {
					boxShadow: 4,
					transform: "scale(1.03)",
					transition: "all 0.3s ease-in-out",
				},
			}}
			>
			{href ? (
                <CardActionArea component="a" href={href}>
                    {cardContentBody}
                </CardActionArea>
            ) : (
                cardContentBody
            )}
		</Card>
	);
}
