import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StaggeredMenuWrapper from "@/components/ui/StaggeredMenuWrapper";

import Script from "next/script";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "famoroo Portfolio",
	description: "famoroo Portfolio - 私のポートフォリオです",
	robots: {
		index: false,
		follow: false,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<StaggeredMenuWrapper />
				<div
					style={{
						height: "100vh",
						overflow: "auto",
						background: `linear-gradient(to bottom right, #d9f99d 10%, #ecfccb 20%, #fff 70%)`,
						// paddingTop: "100px",
					}}>
					{children}

					<ToastContainer
						position="bottom-center"
						autoClose={3000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</div>

				{/* reCAPTCHA enterprise */}
				<Script
					src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
					strategy="afterInteractive"
					/>
			</body>
		</html>
	);
}
