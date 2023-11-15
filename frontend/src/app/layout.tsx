'use strict'

import { Metadata } from "next"
import "tailwindcss/tailwind.css"

export const metadata: Metadata = {
	title: 'ft_transcendence',
	description: 'a 42 project',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="bg-gray-900 text-gray-50">
				{children}
			</body>
		</html>
	)
}
