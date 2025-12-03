"use client";

import { motion } from "motion/react";
import SkillCard from "@/components/SkillCard";

import {
    Container,
    Box,
    Grid,
} from "@mui/material";

export default function ClientPageForSkills() {
    const skills = [
        {
            name: "Mac",
            category: "OS",
            src: "/images/skill/apple-logo.svg",
            star: 5,
            startYear: 2008,
            types: ["macOS運用", "シェル環境設定", "ハードウェア保守"],
            examples: ["Macの操作", "パソコンの設定やトラブル対応"],
        },
        {
            name: "Windows",
            category: "OS",
            src: "/images/skill/Windows-logo.svg",
            star: 5,
            startYear: 2007,
            types: ["Windows環境構築", "ローカルネットワーク設定", "ドメイン管理"],
            examples: ["Windowsの操作", "パソコン環境の整備"],
        },
        {
            name: "linux",
            category: "OS",
            src: "/images/skill/linux-logo.svg",
            star: 4,
            startYear: 2015,
            types: ["Linux運用管理", "シェルスクリプト", "パーミッション管理", "cron設定"],
            examples: ["UbuntuやCentOSの操作", "サーバーの設定・自動バックアップ", "ファイル権限やプロセス管理"],
        },
        {
            name: "Apache",
            category: "OS",
            src: "/images/skill/apache-logo.svg",
            star: 5,
            startYear: 2015,
            types: ["Webサーバー構築", "バーチャルホスト設定", "SSL/TLS導入"],
            examples: ["ホームページを動かす仕組みの設定", "サーバー管理"],
        },
        {
            name: "HTML",
            category: "デザイン系",
            src: "/images/skill/html5-logo.svg",
            star: 5,
            startYear: 2008,
            types: ["HTML5マークアップ", "アクセシビリティ設計", "構造的コーディング"],
            examples: ["Webページの土台づくり", "情報の整理と見やすい構造設計"],
        },
        {
            name: "CSS",
            category: "デザイン系",
            src: "/images/skill/css-logo.svg",
            star: 5,
            startYear: 2008,
            types: ["スタイル設計", "レスポンシブデザイン", "Grid/Flexレイアウト"],
            examples: ["デザインの調整", "色やレイアウトの設定"],
        },
        {
            name: "Sass",
            category: "デザイン系",
            src: "/images/skill/sass-logo.svg",
            star: 5,
            startYear: 2015,
            types: ["CSSプリプロセッサ", "変数/Mixin設計", "構造化スタイル管理"],
            examples: ["CSSを効率よく書く技術", "デザインの作業効率化"],
        },
        {
            name: "Bootstrap",
            category: "デザイン系",
            src: "/images/skill/bootstrap-logo.svg",
            star: 5,
            startYear: 2015,
            types: ["CSSフレームワーク", "UI/UX設計", "モバイルファーストデザイン"],
            examples: ["きれいなデザインを簡単に作る仕組み", "スマホ対応サイトづくり"],
        },
        {
            name: "TailwindCSS",
            category: "デザイン系",
            src: "/images/skill/tailwind-logo.svg",
            star: 5,
            startYear: 2015,
            types: ["CSSフレームワーク", "UI/UX設計", "モバイルファーストデザイン"],
            examples: ["きれいなデザインを簡単に作る仕組み", "スマホ対応サイトづくり"],
        },
        {
            name: "JavaScript",
            category: "プログラミング言語",
            src: "/images/skill/javascript-logo.svg",
            star: 5,
            startYear: 2012,
            types: ["フロントエンド開発", "非同期処理(Ajax/Fetch)", "イベント駆動設計"],
            examples: ["Webページを動かす仕組み", "動きのある画面づくり"],
        },
        {
            name: "TypeScript",
            category: "プログラミング言語",
            src: "/images/skill/typescript-logo.svg",
            star: 4,
            startYear: 2022,
            types: ["静的型付け", "型安全設計", "ジェネリクス・ユーティリティ型"],
            examples: ["JavaScriptをより安全に使う技術", "開発ミスを減らす仕組み"],
        },
        {
            name: "Vue.js",
            category: "フレームワーク",
            src: "/images/skill/vue-logo.svg",
            star: 5,
            startYear: 2016,
            types: ["SPA開発", "リアクティブデータバインディング", "コンポーネント設計"],
            examples: ["操作しやすいWebアプリの開発", "動的な画面づくり"],
        },
        {
            name: "Vuetify",
            category: "デザイン系",
            src: "/images/skill/vuetify-logo.svg",
            star: 5,
            startYear: 2016,
            types: ["UIコンポーネント設計", "マテリアルデザイン実装", "テーマカスタマイズ"],
            examples: ["デザイン部品を使って画面を作る技術", "統一感あるUIづくり"],
        },
        {
            name: "React.js",
            category: "フレームワーク",
            src: "/images/skill/react-logo.svg",
            star: 5,
            startYear: 2022,
            types: ["コンポーネント設計", "Hooks API", "状態管理", "パフォーマンス最適化"],
            examples: ["動きのあるWebアプリ開発", "再利用しやすいUIの構築", "データ連動型の画面づくり"],
        },
        {
            name: "MUI",
            category: "デザイン系",
            src: "/images/skill/mui-logo.svg",
            star: 5,
            startYear: 2022,
            types: ["UIコンポーネント設計", "マテリアルデザイン実装", "テーマカスタマイズ"],
            examples: ["デザイン部品を使って画面を作る技術", "統一感あるUIづくり"],
        },
        {
            name: "Google Apps Script",
            category: "クラウド",
            src: "/images/skill/gas-logo.svg",
            star: 5,
            startYear: 2014,
            types: ["GAS開発", "スプレッドシート連携", "Google Workspace自動化"],
            examples: ["GoogleスプレッドシートやGmailの自動化", "日常業務の効率化"],
        },
        {
            name: "PHP",
            category: "プログラミング言語",
            src: "/images/skill/php-logo.svg",
            star: 4.5,
            startYear: 2012,
            types: ["サーバーサイド開発", "REST API設計", "フォーム処理"],
            examples: ["Webの裏側を動かす言語", "問い合わせフォームやデータ保存の処理"],
        },
        {
            name: "WordPress",
            category: "フレームワーク",
            src: "/images/skill/wordpress-logo.svg",
            star: 5,
            startYear: 2014,
            types: ["CMS開発", "テーマ構築", "カスタムフィールド設計"],
            examples: ["ホームページ制作", "ブログ管理", "更新しやすいサイト構築"],
        },
        {
            name: "Laravel",
            category: "フレームワーク",
            src: "/images/skill/laravel-logo.svg",
            star: 5,
            startYear: 2015,
            types: ["PHPフレームワーク", "MVC設計", "Eloquent ORM", "API開発"],
            examples: ["効率的なWebシステム構築", "ログインやデータ管理機能の開発"],
        },
        {
            name: "Python",
            category: "プログラミング言語",
            src: "/images/skill/python-logo.svg",
            star: 3.5,
            startYear: 2021,
            types: ["データ処理(pandas)", "スクレイピング", "自動化スクリプト開発"],
            examples: ["データ整理や分析", "ネット上の情報収集や自動化"],
        },
        {
            name: "MySQL",
            category: "データベース",
            src: "/images/skill/mysql-logo.svg",
            star: 4.5,
            startYear: 2014,
            types: ["RDBMS", "クエリ最適化", "インデックス設計", "ERモデリング"],
            examples: ["データを管理する仕組み", "情報の保存・検索"],
        },
        {
            name: "MariaDB",
            category: "データベース",
            src: "/images/skill/mariadb-logo.svg",
            star: 3.5,
            startYear: 2022,
            types: ["MySQL互換RDBMS", "データ移行", "パフォーマンスチューニング"],
            examples: ["MySQLと同じデータベース管理", "業務データの保守・管理"],
        },
        {
            name: "SQLite",
            category: "データベース",
            src: "/images/skill/sqlite-logo.svg",
            star: 3.5,
            startYear: 2021,
            types: ["ローカルDB設計", "SQLクエリ構築", "スキーマ設計", "軽量データ管理"],
            examples: ["小規模なアプリのデータ保存", "ローカル環境でのデータ管理", "テスト用DB構築"],
        },
        {
            name: "supabase",
            category: "データベース",
            src: "/images/skill/supabase-logo.svg",
            star: 3.5,
            startYear: 2025,
            types: [
                "PostgreSQLスキーマ設計",
                "Edge Functions",
                "Auth/Storage実装",
                "RLSポリシー構築",
            ],
            examples: [
                "ログイン機能付きアプリ開発",
                "データベースとAPIの自動連携",
                "画像やPDFファイルの管理",
                "バックエンドレス開発環境の構築",
            ],
        },
        {
            name: "Next.js",
            category: "フレームワーク",
            src: "/images/skill/next-logo.svg",
            star: 3.5,
            startYear: 2025,
            types: ["App Router", "Server Actions", "SSR/SSG実装", "API Routes"],
            examples: ["高速なWebサイト開発", "SEOに強いWeb構築", "フルスタック開発"],
        },
        {
            name: "AWS amplify",
            category: "クラウド",
            src: "/images/skill/amplify-logo.svg",
            star: 3.5,
            startYear: 2025,
            types: ["ローカルDB設計", "SQLクエリ構築", "スキーマ設計", "軽量データ管理"],
            examples: ["小規模なアプリのデータ保存", "ローカル環境でのデータ管理", "テスト用DB構築"],
        },
    ];

    // for animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.55, // 各子の開始を0.15秒ずらす
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <Container
            maxWidth="xl"
            sx={{ paddingTop: "100px" }}
            >
            <Box
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0, margin: "0px 0px -100px 0px" }}
                sx={{ p: 2 }}
                >
                <Grid container spacing={2}>
                    {skills.map((skill, i) => (
                        <Grid
                            key={`${skill.name}_${i}`}
                            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                            sx={{ height: "auto", display: "flex" }}
                            >
                            <Box
                                component={motion.div}
                                variants={itemVariants}
                                transition={{ duration:0.4, ease: "easeOut"}}
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    textAlign: "center",
                                    bgcolor: "background.paper",
                                    boxShadow: 3,
                                    "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                                >
                                <SkillCard
                                    skill={skill}
                                    width={100}
                                    height={100}
                                    />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
