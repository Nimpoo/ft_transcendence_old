"use strict"
"use client"

import { SessionProvider } from "next-auth/react"

function Template({
	children
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<SessionProvider>
			{children}
		</SessionProvider>
	)
}

export default Template
