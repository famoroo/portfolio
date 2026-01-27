"use client";

import Image from "next/image";
import {
    Container,
    Stack,
    Paper,
    Typography,
    Box,
} from "@mui/material";

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
                    maxWidth="md"
                    >

                    <Stack spacing={1} sx={{ my: 2 }}>
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
                        <Stack spacing={4} sx={{ my: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>地元で20年</Typography>
                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>パソコンも、スマホもよくわからないよ・・・</Typography>

                            <Typography variant="body1">昭和生まれのおばあちゃんや、</Typography>
                            <Typography variant="body1">ITってな〜に？って経営者。</Typography>

                            <Typography variant="body1">苦手な方々とも話を重ねて、ウェブサイトやシステムを完成させてきました。</Typography>

                            <Typography variant="body1">思い返してみれば、20年以上も前の話。</Typography>

                            <Typography variant="body1">音楽が大好きで、ロックやパンクに没頭していた頃、</Typography>
                            <Typography variant="body1">所有していたCDを1枚1枚論評してページに起こしていた。</Typography>

                            <Typography variant="body1">ただのhtmlとcssで。</Typography>

                            <Typography variant="body1">公開して友達に見てもらえるだけで楽しかった頃。</Typography>

                            <Typography variant="body1">ブラウン管テレビのような分厚いディスプレイでステッカーをデザインして友達に配ってた頃。</Typography>

                            <Typography variant="body1">そんな性分なんですね。IT/デジタル、デザインは好きなんだと思います。</Typography>

                            <Typography variant="body1">子供にも恵まれ、テレビも聞こえないような賑やかな自宅で過ごす毎日。</Typography>
                        </Stack>
                    </Stack>
                </Container>
            </Paper>
        </Container>
    );
}
