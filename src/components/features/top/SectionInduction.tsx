"use client";

import {
    Box,
    Typography,
    Card, CardContent,
	// Avatar,
	Grid,
	Link,
	Stack,
} from '@mui/material';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ComputerIcon from '@mui/icons-material/Computer';
import StarRateIcon from '@mui/icons-material/StarRate';
import HistoryIcon from '@mui/icons-material/History';

import { lime } from "@mui/material/colors";

import { TypingEffect } from "@/components/animations/TextAnimiation";

export default function SectionInduction() {
    return (
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
                    text: "気になることはとことん調べて、つくりたくなったらすぐ手を動かすタイプです。「これ、もっと良くできそうだな…」と思えば提案して改善しはじめます。この習慣が、20年分染み付いています。",
                    icon: <PermIdentityIcon />,
                },
                {
                    href: "/works",
                    title: "WORKS",
                    subTitle: "つくったもの",
                    text: "ホームページから業務ツール、デスクトップアプリケーション、AIチャットボットまで、気づいたら色んなジャンルに手を出してました。サッと触ってわかる“ちょうどいい使い心地”を目指しています。",
                    icon: <ComputerIcon />,
                },
                {
                    href: "/skills",
                    title: "SKILLS",
                    subTitle: "できること",
                    text: "見た目の部分から裏側のロジックまで、ひと通りまとめてやります。「とりあえず相談してもらえれば何とかする」をずっと業務で行なってきました（やるしかなかったんです・・・けど経験値を貰えるチャンス）",
                    icon: <StarRateIcon />,
                },
                {
                    href: "/career",
                    title: "CAREER",
                    subTitle: "やってきたこと",
                    text: "現場の「あ、ここ困ってるんだな」を拾い集めて、ちょっとずつ便利にする仕事をしてきました。“便利になったわ！”と言ってもらえるのが一番うれしいところです。",
                    icon: <HistoryIcon />,
                },
            ].map((itm, idx) => (
                <Grid key={idx} size={{ xs: 12, md: 6 }}>
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
                                },
                                borderTop: "8px solid #4CAF50"
                            }}
                            >
                            <CardContent>
                                <Stack
                                    spacing={2}
                                    >
                                    <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
                                        <Typography component={'span'} variant="h4" sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
                                            <TypingEffect
                                                text={itm.title}
                                                className="text-left sm:text-xl md:text-2xl md:leading-none"
                                                />
                                        </Typography>
                                        <Typography component={'span'} variant="body1">
                                            <TypingEffect
                                                text={itm.subTitle}
                                                className="text-left sm:text-xl md:text-xl font-normal md:leading-none mt-3"
                                                />
                                        </Typography>
                                    </Box>
                                    <Box sx={{ px: 1 }}>
                                        <Typography variant="caption">
                                            {itm.text}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}
