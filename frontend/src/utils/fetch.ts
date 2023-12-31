"use strict"
"use server"

export async function api(uri: string) {
	return await (await fetch(`http://pong:8000${uri}`)).json()
}
