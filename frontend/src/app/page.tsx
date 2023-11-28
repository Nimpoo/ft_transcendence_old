"use strict"
"use client"

import PressButton from "@/components/PressButton"

export default function Home() {

	return (
		<div className="min-h-screen flex items-center justify-center">
			{/* <LoginButton /> */}
			<PressButton color="red">
				Home
			</PressButton>
		</div>
	)
}
