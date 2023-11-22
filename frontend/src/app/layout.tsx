'use strict'

import { Metadata } from "next"
import "tailwindcss/tailwind.css"

export const metadata: Metadata = {
	title: 'ft_transcendence',
	description: 'a 42 project',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-[url('/background.gif')] bg-cover bg-fixed bg-center bg-no-repeat backdrop-brightness-50 w-full h-screen">
				{children}
			</body>
		</html>
	)
}
