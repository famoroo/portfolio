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
                    text: "気になることはとことん調べて、つくりたくなったらすぐ手を動かすタイプです。便利なものを見つけたらシェアしたくなるし、「これ、もっと良くできるのに…」と思えば勝手に改善しはじめます。",
                    icon: <PermIdentityIcon />,
                },
                {
                    href: "/works",
                    title: "WORKS",
                    subTitle: "つくったもの",
                    text: "「これ不便だな…」と思ったら、とりあえず作ってみるタイプです。業務ツールから AI ボットまで、気づいたら色んなジャンルに手を出してました。サッと触ってわかる“ちょうどいい使い心地”を目指しています。",
                    icon: <ComputerIcon />,
                },
                {
                    href: "/skills",
                    title: "SKILLS",
                    subTitle: "できること",
                    text: "見た目の部分から裏側のロジックまで、ひと通りまとめてやります。Next.js や Supabase が得意ですが、必要なら何でも触ります。「とりあえず相談してもらえれば何とかする」がモットーです。",
                    icon: <StarRateIcon />,
                },
                {
                    href: "/career",
                    title: "CAREER",
                    subTitle: "やってきたこと",
                    text: "現場の「あ、ここ困ってるんだな」を拾い集めて、ちょっとずつ便利にする仕事をしてきました。“やってよかった！”と言ってもらえるのが一番うれしいところです。",
                    icon: <HistoryIcon />,
                },
            ].map((itm, idx) => (
                <Grid key={idx} size={6}>
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
