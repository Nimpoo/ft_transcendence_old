"use strict"

import { Metadata } from "next"

export const metadata: Metadata = {
	title: "ft_transcendence",
	description: "a 42 project",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	)
}
