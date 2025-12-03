"use client";

import {
    Alert,
    Box,
    Button,
    Container,
    Stack,
    Paper,
    Link,
    Typography,
} from "@mui/material";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useMemo, useTransition } from "react";

import { EmailContactCreateInput, emailContactCreateSchema } from "@/schemas/emailContactSchema";

import { notifyMailContact } from "@/lib/actions/sendEmail";
import { createEmailContact } from "@/lib/actions/emailContact";

import { toast } from "react-toastify";

import DialogConfirm from "@/components/DialogConfirm";
import TextInputField from "@/components/form/TextInputField";
import TextareaInputField from "@/components/form/TextareaInputField";

import { getRecaptchaEnterpriseToken } from "@/lib/recaptcha/recaptchaClient";

declare global {
    interface Window {
        grecaptcha: {
            enterprise: {
                ready: (callback: () => void) => void;
                execute: (siteKey: string, options: { action: string }) => Promise<string>;
            };
        };
    }
}

export default function ClientPageForContact({
    onSuccess,
}: {
    onSuccess?: () => void;
}) {
    const color = "primary";

    const baseDefaults = useMemo(() => ({
        title: "",
        name: "",
        body: "",
    }), []);

    const methods = useForm<EmailContactCreateInput>({
        resolver: zodResolver(emailContactCreateSchema),
        defaultValues: baseDefaults,
        mode: "onBlur",
    });

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [formData, setFormData] = useState<EmailContactCreateInput | null>(null);
    const handleConfirmSubmit = (data: EmailContactCreateInput) => {
        setFormData(data);
        setConfirmOpen(true);
    };
    const handleConfirmedSubmit = async () => {
        if (!formData) return;
        await onSubmit(formData);
        setConfirmOpen(false);
    };

    const [pending, start] = useTransition();
    const onSubmit = async (data: EmailContactCreateInput) => {
        try {
            // TODO swrにする？
            start(async () => {
                const token = await getRecaptchaEnterpriseToken();
                const payload = {
                    ...data,
                    recaptchaToken: token,
                };
                const created = await createEmailContact(payload);
                if(created) {
                    await notifyMailContact(created);

                    toast.success("問い合わせを受け付けました");
                    // router.replace(`/`);
                }

                methods.reset(); // フォームリセット
            });
        } catch (err) {
            toast.error(err instanceof Error ? err.message : "");
        } finally {
            setTimeout(() => {
                start(() => {
                    onSuccess?.();
                });
            }, 500);
        }
    };

    return (
        <Container
            maxWidth="lg"
            sx={{
                paddingTop: "100px",
            }}
            >
            <Paper
                variant="outlined"
                sx={{ py: 4, m: 1 }}
                >
                <Container
                    maxWidth="md"
                    >
                    <Box sx={{ my: 2, textAlign: "center" }}>
                        <Typography
                            sx={{ fontWeight: "bold" }}
                            color="text.secondary"
                            variant="h3"
                            >
                            CONTACT
                        </Typography>
                        <Typography
                            color="text.secondary"
                            variant="body1"
                            >
                            お問い合わせ
                        </Typography>
                    </Box>

                    <Stack spacing={1} sx={{ my: 2 }}>
                        <Alert
                            icon={false}
                            color="warning"
                            >
                            <Typography
                                sx={{ fontWeight: "bold", mb: 1 }}
                                color="text.secondary"
                                variant="h6"
                                >
                                「お仕事のご依頼、技術的なご相談など、お気軽にお声がけください！」
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                                sx={{ p: 1 }}
                                >
                                ポートフォリオをご覧いただきありがとうございます。
                                あなたの実現したいプロジェクトについて、ぜひ詳しく聞かせてください。もちろん、「この技術について聞きたい」「ざっくばらんに話してみたい」といったご相談も大歓迎です。
                                <span style={{ fontWeight: "bold" }}>内容を確認後、2営業日以内にご返信いたします。</span>
                            </Typography>
                        </Alert>
                    </Stack>

                    <Box sx={{ mb: 4 }}>
                        <FormProvider
                            {...methods}
                            >
                            <form onSubmit={methods.handleSubmit(handleConfirmSubmit)}>
                                <Stack spacing={3}>
                                    <TextInputField
                                        name="title"
                                        label="タイトル"
                                        />

                                    <TextInputField
                                        name="name"
                                        label="お名前"
                                        />

                                    <TextareaInputField
                                        name="body"
                                        label="内容"
                                        />

                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            mt: 4,
                                        }}
                                        >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            className={`g-recaptcha bg-gradient-to-br from-${color}-dark via-${color}-main to-${color}-light`}
                                            fullWidth
                                            size="large"
                                            disabled={true}
                                            // disabled={methods.formState.isSubmitting}
                                            sx={{
                                                fontWeight: "bold",
                                                fontSize: "1.4em",
                                                py: 2
                                            }}
                                            loading={pending}
                                            loadingPosition="start"
                                            >
                                            送信する
                                        </Button>
                                    </Box>

                                    <Alert icon={false} severity="info">
                                        このサイトは reCAPTCHA Enterprise によって保護されており、Google の 
                                        <Link href="https://policies.google.com/privacy" target="_blank">プライバシーポリシー</Link> と 
                                        <Link href="https://policies.google.com/terms" target="_blank">利用規約</Link> が適用されます。
                                    </Alert>
                                </Stack>
                            </form>
                        </FormProvider>
                    </Box>
                </Container>
            </Paper>

            <DialogConfirm
                isOpen={confirmOpen}
                onDone={handleConfirmedSubmit}
                onCancel={() => setConfirmOpen(false)}
                text={`問い合わせを送信しますか?`}
                okText={`送信する`}
                color={color}
                />
        </Container>
    );
}
