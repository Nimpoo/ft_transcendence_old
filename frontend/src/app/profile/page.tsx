"use strict"
"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Loading from "../loading"
import toast from "react-hot-toast"

function Profile(): JSX.Element {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated: () => {
			toast.error("You are not signed in.")
			redirect("/")
		},
	})

	if (status === "loading") {
		return <Loading />
	}

	return (
		<main>username: {session?.user?.name}</main>
	)
}

export default Profile
