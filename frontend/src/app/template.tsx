"use strict"
"use client"

import ProviderButton from "@/components/ProviderButton"
import { NextUIProvider } from "@nextui-org/react"

export default function Template({ children }: { children: React.ReactNode }) {

	return (
		<NextUIProvider>
			{children}
		</NextUIProvider>	
	)

}
