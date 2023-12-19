"use strict"
"use client"

import { signIn, signOut, useSession } from "next-auth/react"

function Home(): JSX.Element {
	const { data: session } = useSession()

	return (
		<div>
			username: {session?.user?.name}<br />
			<button onClick={() => signIn()}>sign in</button><br />
			<button onClick={() => signOut()}>sign out</button>
		</div>
	)
}

export default Home
