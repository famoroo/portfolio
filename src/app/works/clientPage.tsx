"use client";

import { Container } from '@mui/material';

import GridContentForCareer from "./GridContent";
import PageTitle from "@/components/PageTitle";

export default function ClientPageForCareers() {
    const works = [
        {
            title:"ネットワーク/デバイス インフラ管理、ヘルプデスク等",
            // TODO
            // skills: [],
            category: [
                {
                    subTitle: "ハードウェア管理",
                    text: [
                        "PC (Windows/Mac) やモバイル端末 (iOS/Android) のセットアップ・保守・トラブル対応",
                        "デバイスの資産管理およびセキュリティ設定",
                        "社内端末の一元管理および利用状況のモニタリング",
                    ],
                    actions: [{ name: "github", url: "" }]
                },
                {
                    subTitle: "ソフトウェア管理",
                    text: [
                        "Google Workspace、オンラインストレージなどのアカウント管理/ユーザー権限の設定",
                        "ソフトウェアの更新/不具合対応 等",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "ネットワーク管理",
                    text: [
                        "社内ネットワーク (LAN/Wi-Fi) の構築/運用/トラブルシューティング",
                        "接続障害・通信不良の対応および改善",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "ヘルプデスク対応",
                    text: [
                        "社内からの問い合わせ対応/トラブルシューティング",
                        "PC/ネットワーク/ソフトウェアの障害対応および復旧作業",
                    ],
                    actions: [{ name: "", url: "" }]
                },
            ],
            experiences: [],
            comment: "社内SEとして、ハードウェアやソフトウェアの管理、ネットワーク運用、ヘルプデスク対応を通じて、社内IT環境の安定稼働とセキュリティ強化に貢献しました。特に、PCやモバイル端末のセットアップ・トラブル対応に加え、ネットワークの構築・運用を担当したことで、インフラ全体を理解し、迅速なトラブル対応や業務効率化を実現しました。また、Google Workspace やオンラインストレージの管理を通じて、アカウントや権限の適切な管理を行い、情報漏洩や不正アクセスの防止にも寄与しました。",
        },
        {
            title:"広告業務",
            category: [
                {
                    subTitle: "チラシ/広告/看板/名刺等デザイン",
                    text: [
                        "広告デザインを企画・制作",
                        "サービスや設置場所、配布媒体を考慮した視認性・デザイン調整",
                        "紙媒体・デジタル広告用デザインの制作および入稿データ作成",
                        "施設・店舗用看板のデザイン・レイアウト設計",
                    ],
                    actions: [{ name: "", url: "" }]
                },
            ],
            experiences: [
                "Adobe Illustrator を使用したロゴ・レイアウト・ベクターグラフィック作成スキル",
                "Adobe Photoshop を使用した画像編集・補正・加工スキル",
                "配色・フォント・レイアウトに関するデザインスキル",
                "DTP (印刷物) の入稿データ作成スキル (トンボ・CMYK・解像度管理など)",
                "印刷・加工に関する知識 (紙質・印刷方式・加工方法など)",
            ],
            comment: "社内のサービスブランディングに合わせ、広告や看板、チラシ、名刺などのDTPデザイン・制作を通じて、ターゲット層に応じた効果的なデザインを提供してきました。特に Adobe Illustrator や Photoshop を使用したデザインスキルを活かし制作、入稿までを一貫して担当しました。",
        },
        {
            title:"ウェブサイト開発",
            category: [
                {
                    subTitle: "コーポレートサイト",
                    text: [
                        "要件定義から設計・開発・テスト・デプロイ・運用まで一貫して対応",
                        "フロントエンドは Vue.js/React、バックエンドは Laravel/Wordpress を使用した開発",
                        "複数サイトのブログ機能や問い合わせフォームを共通システムに統合し、API経由でのデータ連携を実現",
                        "パフォーマンス改善やセキュリティ強化のためのリファクタリング・チューニング",
                        "システム障害対応やインシデント管理、ログ分析を通じた原因究明および改善",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "金属リサイクル業",
                    text: [
                        "要件定義から設計・開発・テスト・デプロイ・運用まで一貫して対応",
                        "フロントエンドは Vue.js/React、バックエンドは Laravel/Wordpress を使用した開発",
                        "複数サイトのブログ機能や問い合わせフォームを共通システムに統合し、API経由でのデータ連携を実現",
                        "パフォーマンス改善やセキュリティ強化のためのリファクタリング・チューニング",
                        "システム障害対応やインシデント管理、ログ分析を通じた原因究明および改善",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "産業廃棄物処分業",
                    text: [],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "解体工事業",
                    text: [],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "遺品整理業",
                    text: [],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "中古車/パーツ販売業",
                    text: [],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "金属加工業",
                    text: [],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "ガソリンスタンド",
                    text: [],
                    actions: [{
                        name: "sample",
                        url: "/works/website/gas-station"
                    }]
                },
                {
                    subTitle: "ペットサロン",
                    text: [],
                    actions: [{
                        name: "sample",
                        url: "/works/website/pet-salon"
                    }]
                },
                {
                    subTitle: "ホテル",
                    text: [],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "ドローン教室",
                    text: [],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "セミナー教室",
                    text: [],
                    actions: [{ name: "", url: "" }]
                },
            ],
            experiences: [
                "フロントエンド開発 (React, Vue.js, JavaScript, TypeScript)",
                "バックエンド開発 (Laravel, PHP)",
                "API設計・開発・デバッグ",
                "データベース設計・運用 (MySQL)",
                "CI/CD 環境構築・運用 (Git, GitHub Actions)",
                "パフォーマンス改善・セキュリティ対策",
                "サーバー管理 (Linux, Xserver)",
            ],
            comment: "グループ内の15社、20数サービスのウェブサイトを設計/開発/保守/運用。社内SEとして、グループ内のウェブサイトをフルスタックで設計・開発・運用する経験を通じて、システム全体の構成やデータ連携の仕組みを深く理解することができました。特に、複数のサイトで共通利用するブログや問い合わせフォームの統合開発により、コードの再利用性や保守性を大幅に向上させました。また、API設計・パフォーマンス改善・セキュリティ対策など、フルスタック開発に必要なスキルを幅広く習得しました。",
        },
        {
            title:"ウェブ系 DX化促進",
            category: [
                {
                    subTitle: "ポータルサイト",
                    text: [
                        "グループ全体の情報を一元管理すべく、共有基盤を構築",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "社内申請システム (ワークフロー)",
                    text: [
                        "各種申請の電子化・申請から承認までのプロセスをDXで効率化",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "稟議決裁システム (ワークフロー)",
                    text: [
                        "稟議書の電子化・承認フローの自動化"
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "業績モニタリングシステム",
                    text: [
                        "リアルタイムで業績データを可視化",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "スケジュール管理システム",
                    text: [
                        "部門別・個人別のスケジュールを一元管理",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "従業員工数管理システム",
                    text: [
                        "プロジェクト別の工数をリアルタイムで集計・分析",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "レンタカー予約システム",
                    text: [
                        "社用車の予約・管理をオンライン化",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "経費入力システム",
                    text: [
                        "経費の申請・承認フローをデジタル化",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "社内監査システム",
                    text: [
                        "内部監査プロセスのデジタル化・ログ管理の強化",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "改善提案システム",
                    text: [
                        "改善提案書の提出・承認フローをデジタル化",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "見積/請求書システム",
                    text: [
                        "見積/請求書のデジタル化",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "予算管理システム",
                    text: [
                        "各事業部の予算/実績(PL,BS)を管理、その数字を元に部門別月次レポート自動生成",
                    ],
                    actions: [{ name: "", url: "" }]
                },
            ],
            experiences: [
                "フロントエンド開発 (React, Vue.js, JavaScript, TypeScript)",
                "バックエンド開発 (Laravel, PHP)",
                "API設計・開発・デバッグ",
                "データベース設計・運用 (MySQL)",
                "CI/CD 環境構築・運用 (Git, GitHub Actions)",
                "パフォーマンス改善・セキュリティ対策",
                "サーバー管理 (Linux, Xserver)",
            ],
            comment: "社内DX化を推進するため、各部門の業務プロセスを見直し、システム化を通じて業務効率を大幅に改善しました。特に、ワークフローの自動化やリアルタイムな業績モニタリングにより、意思決定のスピードが向上しました。システム開発においては、React や Laravel を使用したフルスタック開発、API設計、セキュリティ対策を通じて、堅牢で拡張性の高いシステムを構築しました。また、CI/CD による自動化により、開発効率と品質が向上しました。",
        },
        {
            title:"デスクトップ系 DX化促進",
            category: [
                {
                    subTitle: "帳票自動生成システム",
                    text: [
                        "CSVデータをもとに、PL (損益計算書) や BS (貸借対照表)、実績推移表などを自動生成するデスクトップアプリを開発",
                        "データの読み込み・集計・フォーマット整形・出力処理を実装",
                        "帳票データを Excel 形式で出力可能にし、デザインのカスタマイズにも対応",
                    ],
                    actions: [{ name: "", url: "" }]
                },
                {
                    subTitle: "自動予約システム",
                    text: [
                        "Selenium を使用して、特定のWebサイトから自動で予約を行うシステムを開発",
                        "ログイン処理・ページ遷移・入力・確認・予約確定までの一連の処理を自動化",
                        "実行ログやエラーハンドリング機能を実装して安定稼働を確保",
                    ],
                    actions: [{ name: "", url: "" }]
                },
            ],
            experiences: [
                "Python を使用したデスクトップアプリケーション開発スキル",
                "データ集計・解析・帳票生成スキル (Pandas, openpyxl, numpy)",
                "Webスクレイピング・自動操作スキル (Selenium)",
                "Excel / PDF へのデータ出力およびフォーマット調整スキル",
                "例外処理・エラーハンドリングスキル",
            ],
            comment: "Python を使用して、データ集計や自動操作に関するデスクトップアプリを開発しました。帳票自動生成システムでは、CSVデータから PL・BS・実績推移表を自動生成し、業務効率を大幅に向上させました。また、自動予約システムでは Selenium を使用したブラウザ操作を実装し、予約作業の省力化に成功しました。エラーハンドリングやログ管理も含めた安定稼働を実現し、メンテナンス性・拡張性の高いシステムを構築しました。",
        },
    ]

    return (
        <Container
            maxWidth="xl"
            sx={{ paddingTop: "100px" }}
            >
            <PageTitle
                title="Works"
                subtitle="つくったもの"
                />
            <GridContentForCareer items={works} />
        </Container>
    );
}
