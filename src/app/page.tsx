import Image from "next/image";

import SmokeImage from "@/components/SmokeImage";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={100}
					height={20}
					priority
				/>
				<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
					<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 text-transparent  bg-clip-text  bg-gradient-to-b from-primary-dark via-primary-main to-primary-light">
						To get started, edit the page.tsx file.
					</h1>
					<p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
						Looking for a starting point or more instructions? Head over to{" "}
						<a
							href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
							className="font-medium text-zinc-950 dark:text-zinc-50"
						>
							Templates
						</a>{" "}
						or the{" "}
						<a
							href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
							className="font-medium text-zinc-950 dark:text-zinc-50"
						>
							Learning
						</a>{" "}
						center.
					</p>
					<p>famoroo</p>
					<p className="text-primary">
						Lorem ipsum dolor sit amet...
					</p>
					<p className="text-primary bg-gradient-to-b from-primary-dark via-primary-main to-primary-light p-6">
						Lorem ipsum dolor sit amet...
					</p>
				</div>

				<div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
					<SmokeImage
						src="https://hotarutei.com/wp2023/wp-content/themes/hotarutei/assets/images/sections/index/overview/map_pc.svg"
						alt="Vercel logomark"
						width={1200}
						height={1200}
						/>
				</div>

				<div className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
				<div className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
				<div className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
				<div className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
				<div className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
				<div className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
			</main>
		</div>
	);
}
