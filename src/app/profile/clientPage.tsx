"use client";

import Image from "next/image";
import {
    Container,
    Stack,
    Paper,
    Typography,
    Box,
    Chip,
    ListItem,
    ListItemText,
    Rating,
    Avatar,
    Divider,
} from "@mui/material";
import { skills } from "@/constants/skills";

import PageTitle from "@/components/PageTitle";

export default function ClientPageForContact() {

    return (
        <Container
            maxWidth="lg"
            sx={{
                paddingTop: "100px",
            }}
            >
            <PageTitle
                title="PROFILE"
                subtitle="プロフィール"
                />

            <Paper
                variant="outlined"
                sx={{ py: 4, m: 1 }}
                >
                <Container
                    maxWidth="lg"
                    >

                    <Stack spacing={1} sx={{ my: 2 }}>
                        <Stack spacing={2} sx={{ my: 2 }}>

                            <Paper sx={{ p: 2 }} variant="outlined">
                                <Typography variant="caption">経歴</Typography>
                                <Stack spacing={1} sx={{ my: 1 }}>
                                    {
                                        [
                                            {
                                                title: "ソフトウェアテスター",
                                                subtitle: "プリンタドライバ、バンドルアプリ等",
                                                period: 4,
                                            },
                                            {
                                                title: "フルスタックエンジニア",
                                                subtitle: "ウェブアプリ、ホームページ、デスクトップアプリ等の、設計から開発、保守/運用まで",
                                                period: 2010,
                                            },
                                            {
                                                title: "社内SE",
                                                subtitle: "ネットワーク/デバイス インフラ管理、ヘルプデスク等",
                                                period: 2012,
                                            },
                                        ].map((item:{title: string, period: number, subtitle?: string}, index) => (
                                            <Box key={index}>
                                                <ListItem alignItems="flex-start" key={index}>
                                                    <ListItemText
                                                        primary={
                                                            <Stack direction={"row"} alignItems={"center"}>
                                                                <Typography sx={{ fontWeight: "bold" }}>
                                                                    🧑‍💻 {item.title}
                                                                </Typography>
                                                                <Typography
                                                                    variant="caption"
                                                                    sx={{ ml: 1 }}
                                                                    >
                                                                    - {item.period.toString().length < 4 ? `${item.period}` : (new Date().getUTCFullYear() - item.period)}年
                                                                </Typography>
                                                            </Stack>
                                                        }
                                                        secondary={
                                                            item.subtitle &&
                                                                <Typography
                                                                    component="span"
                                                                    variant="body2"
                                                                    sx={{ color: 'text.primary', display: 'inline' }}
                                                                    >
                                                                    {item.subtitle}
                                                                </Typography>
                                                        }
                                                        />
                                                </ListItem>
                                                <Divider />
                                            </Box>
                                        ))
                                    }
                                </Stack>
                            </Paper>

                            <Paper sx={{ p: 2 }} variant="outlined">
                                <Typography variant="caption">OS・プログラミング言語・フレームワーク</Typography>
                                <Box>
                                    {
                                        skills.map((item) => (
                                            <Chip key={item.name} sx={{ my: 1, mx: 1 }} label={
                                                <Stack direction={"row"} alignItems={"center"} flexWrap={"wrap"}>
                                                    <Avatar alt={item.name} src={item.src} sx={{ width: 20, height: 20, mx: 2 }} />
                                                    <Typography sx={{ fontWeight: "bold" }}>
                                                        {item.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{ ml: 1 }}
                                                        >
                                                        - {new Date().getUTCFullYear() - item.startYear}年
                                                    </Typography>
                                                    <Rating name="half-rating" defaultValue={item.star ?? 2.5} precision={0.5} size="small" sx={{ mx: 2 }} />
                                                </Stack>
                                            }/>
                                        ))
                                    }
                                </Box>
                            </Paper>
                            <Paper sx={{ p: 2 }} variant="outlined">
                                <Typography variant="caption" gutterBottom>家族構成</Typography>
                                <Typography variant="body1"　sx={{ mx: 1 }}>妻 👩 / 姉 👧 / 兄 👦 双子 👦 弟</Typography>
                            </Paper>

                            <Paper sx={{ p: 2 }} variant="outlined">
                                <Typography variant="caption">趣味</Typography>
                                <Stack spacing={1} direction="row" sx={{ my: 1 }}>
                                    {
                                        ["音楽 🎵", "バスケ 🏀", "ウィスキー 🥃"].map((item, index) => (
                                            <Chip key={index} label={item} />
                                        ))
                                    }
                                </Stack>
                            </Paper>

                            <Paper sx={{ p: 2 }} variant="outlined">
                                <Typography variant="caption">コメント</Typography>
                                <Stack spacing={4} sx={{ my: 1 }}>
                                    <Stack spacing={1}>
                                        <Typography variant="body1">思い返してみれば、20年以上も前の話 🕰️</Typography>
                                    </Stack>

                                    <Stack spacing={1}>
                                        <Typography variant="body1">音楽が大好きで、ロック 🎸 や パンク 🥁 に没頭していた頃、</Typography>
                                        <Typography variant="body1">所有していたCDを1枚1枚論評してウェブサイトに起こしていたこともありました。</Typography>
                                    </Stack>

                                    <Stack spacing={1}>
                                        <Typography variant="body1">ただのhtmlとcssで。 💻</Typography>
                                    </Stack>

                                    <Stack spacing={1}>
                                        <Typography variant="body1">公開して友達に見てもらえるだけで楽しかったことを思い出します。</Typography>
                                        <Typography variant="body1">ブラウン管テレビ 📺 のような分厚いディスプレイでステッカーをデザインして友達に配ってた頃。</Typography>
                                        <Typography variant="body1">そんな性分なんですね。IT/デジタル、デザインは好きなんだと思います。</Typography>
                                    </Stack>

                                    <Stack spacing={1}>
                                        <Typography variant="body1">そんなこんなで約20年間、IT会社に勤務してきました。</Typography>
                                        <Typography variant="body1">昭和生まれのおばあちゃんや、ITってな〜に❓という経営者の方。</Typography>
                                        <Typography variant="body1" sx={{ fontWeight: "bold" }}>パソコン 💻 も、スマホ 📱 もよくわからないよ・・・</Typography>
                                        <Typography variant="body1">デジタルが苦手・・・な方々とも話を重ねて、ウェブサイトやシステムを完成させてきました。</Typography>
                                    </Stack>

                                    <Stack spacing={1}>
                                        <Typography variant="body1">よくわからないよ〜という場合でも、安心して、ご相談ください☺️</Typography>
                                    </Stack>

                                    <Stack spacing={1}>
                                        <Typography variant="body1">子供も少しずつ手が離れてきました。頂いたご要望には、のめり込んで対応します。</Typography>
                                    </Stack>

                                    <Box>
                                        <Image
                                            src="/images/profile/fam.png"
                                            width={480}
                                            height={100}
                                            alt="profile"
                                            style={{
                                                objectFit: "contain",
                                                borderRadius: "24px",
                                                margin: "0 auto"
                                            }}
                                            />
                                    </Box>

                                </Stack>
                            </Paper>
                        </Stack>
                    </Stack>
                </Container>
            </Paper>
        </Container>
    );
}
