"use strict"

import Header from "@/components/Header"
import { Metadata } from "next"
import "tailwindcss/tailwind.css"

import '@/styles/Bg.scss'

import { Ubuntu } from 'next/font/google'

const ubu = Ubuntu ({
	subsets: ['latin'],
	weight: '500'
})

export const metadata: Metadata = {
	title: 'ft_transcendence',
	description: 'a 42 project',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
			</head>
			<body className={ "bg-[url('/bg.png')] bg-cover bg-fixed bg-center bg-no-repeat " + ubu.className }>
				<Header />
				<div className="gradient-bg">
					<div className="gradient-container">
						<div className="g1"></div>
						<div className="g2"></div>
						<div className="g3"></div>
						<div className="g4"></div>
						<div className="g5"></div>
					</div>
				</div>
				{children}
			</body>
		</html>
	)
}
