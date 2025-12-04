"use client";
import Link  from 'next/link'
import { LogoLoop } from "@/components/animations/LogoLoop";
import { Box, Button, Stack, Typography } from '@mui/material';

export default function SectionSkills() {
    const logos = [
        {
            "src": "/images/skill/apple-logo.svg",
            "alt": "Mac"
        },
        {
            "src": "/images/skill/Windows-logo.svg",
            "alt": "Windows"
        },
        {
            "src": "/images/skill/linux-logo.svg",
            "alt": "linux"
        },
        {
            "src": "/images/skill/apache-logo.svg",
            "alt": "Apache"
        },
        {
            "src": "/images/skill/html5-logo.svg",
            "alt": "HTML"
        },
        {
            "src": "/images/skill/css-logo.svg",
            "alt": "CSS"
        },
        {
            "src": "/images/skill/sass-logo.svg",
            "alt": "Sass"
        },
        {
            "src": "/images/skill/bootstrap-logo.svg",
            "alt": "Bootstrap"
        },
        {
            "src": "/images/skill/tailwind-logo.svg",
            "alt": "TailwindCSS"
        },
        {
            "src": "/images/skill/javascript-logo.svg",
            "alt": "JavaScript"
        },
        {
            "src": "/images/skill/typescript-logo.svg",
            "alt": "TypeScript"
        },
        {
            "src": "/images/skill/vue-logo.svg",
            "alt": "Vue.js"
        },
        {
            "src": "/images/skill/vuetify-logo.svg",
            "alt": "Vuetify"
        },
        {
            "src": "/images/skill/react-logo.svg",
            "alt": "React.js"
        },
        {
            "src": "/images/skill/mui-logo.svg",
            "alt": "MUI"
        },
        {
            "src": "/images/skill/gas-logo.svg",
            "alt": "Google Apps Script"
        },
        {
            "src": "/images/skill/php-logo.svg",
            "alt": "PHP"
        },
        {
            "src": "/images/skill/wordpress-logo.svg",
            "alt": "WordPress"
        },
        {
            "src": "/images/skill/laravel-logo.svg",
            "alt": "Laravel"
        },
        {
            "src": "/images/skill/python-logo.svg",
            "alt": "Python"
        },
        {
            "src": "/images/skill/mysql-logo.svg",
            "alt": "MySQL"
        },
        {
            "src": "/images/skill/mariadb-logo.svg",
            "alt": "MariaDB"
        },
        {
            "src": "/images/skill/sqlite-logo.svg",
            "alt": "SQLite"
        },
        {
            "src": "/images/skill/supabase-logo.svg",
            "alt": "supabase"
        },
        {
            "src": "/images/skill/next-logo.svg",
            "alt": "Next.js"
        },
        {
            "src": "/images/skill/amplify-logo.svg",
            "alt": "AWS"
        },
    ];

    return (
        <Stack sx={{ textAlign: "center" }}>
            <Typography
                sx={{ fontWeight: "bold", textTransform: "uppercase", mb: 2 }}
                variant="h5"
                >
                こんなことが、できます。
            </Typography>
            <LogoLoop
                logos={logos}
                />
            <Box
                sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                }}
                >
                <Link href="/skills">
                    <Button>
                        詳しく見る
                    </Button>
                </Link>
            </Box>
        </Stack>
    );
}
