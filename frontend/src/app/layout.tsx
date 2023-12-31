"use strict"

import Header from "@/components/Header"
import { Metadata } from "next"
import { Ubuntu } from "next/font/google"
import "tailwindcss/tailwind.css"
import "@/styles/Background.css"
import { Toaster } from "react-hot-toast"

const ubu = Ubuntu ({
	subsets: ["latin"],
	weight: "500"
})

export const metadata: Metadata = {
	title: "ft_transcendence",
	description: "a 42 project",
}

function RootLayout({
	children
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<html lang="en">
			<head>
			</head>
			<body className={ "bg-[url('/bg.png')] bg-cover bg-fixed bg-center bg-no-repeat text-white " + ubu.className }>
				<div className="m-auto max-w-7xl">
					<Toaster position="top-right" />
					<Header />
					{children}

					<div className="gradient-bg">
						<div className="gradient-container">
							<div className="g1" />
							<div className="g2" />
							<div className="g3" />
							<div className="g4" />
							<div className="g5" />
						</div>
					</div>

				</div>
			</body>
		</html>
	)
}

export default RootLayout
