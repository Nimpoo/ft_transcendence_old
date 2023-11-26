'use strict'

import PressButton from "@/components/PressButton"

export default function Home() {

	return (
		<div className="min-h-screen flex items-center justify-center">
			{/* <LoginButton /> */}
			<PressButton color="red">
				One Piece !
			</PressButton>
		</div>
	)
}
