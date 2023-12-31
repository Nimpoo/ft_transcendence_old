"use strict"
"use client"

import { useState } from "react"
import Loading from "../loading"
import { api } from "@/utils/fetch"

function Search(): JSX.Element {
	const [userList, setUserList] = useState<string[] | JSX.Element>()
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setUserList(<Loading />)

		if (timeoutId) {
			clearTimeout(timeoutId)
		}

		const newTimeoutId = setTimeout(() => fetchData(event.target.value), 1000);
		setTimeoutId(newTimeoutId);
	}

	const fetchData = async (query: string) => {
		try {
			setUserList((await api(`/users/search?q=${query}`))['result'])
		} catch (error) {
			console.error('Erreur lors de la requête', error)
		}
	}

	return (
		<main>
			<input className="text-gray-500" type="text" onChange={handleInputChange} max={30} />
			<ul>{ Array.isArray(userList) ? userList.map(u => <li key={u}>{u}</li>) : userList }</ul>
		</main>
	)
}

export default Search
