"use client";
import {
    Stack,
    Typography
} from '@mui/material';

export default function PageTitle({
    title,
    subtitle,
}: {
    title: string
    subtitle?: string
}) {
    return (
        <Stack
            spacing={1}
            sx={{
                my: 3,
                mx: 1,
            }}
            >
            <Typography
                sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                color="text.secondary"
                variant="h2"
                >
                {title}
            </Typography>
            {subtitle && (
                <Typography
                    sx={{ fontWeight: "bold" }}
                    color="text.secondary"
                    variant="body1"
                    >
                    - {subtitle} -
                </Typography>
            )}
        </Stack>
    );
}
