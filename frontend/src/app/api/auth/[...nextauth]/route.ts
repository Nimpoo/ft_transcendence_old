import NextAuth from "next-auth/next";
import FortyTwo from "next-auth/providers/42-school";
import Discord from "next-auth/providers/discord";
import Github from "next-auth/providers/github";
import { Provider } from "next-auth/providers/index";

const handler = NextAuth({
	providers: ((): Provider[] => {
		const providers: Provider[] = []

		if (process.env["AUTH_FORTYTWO_ID"] && process.env["AUTH_FORTYTWO_SECRET"]) {
			providers.push(FortyTwo({
				clientId: process.env["AUTH_FORTYTWO_ID"],
				clientSecret: process.env["AUTH_FORTYTWO_SECRET"]
			}))
		}

		if (process.env["AUTH_GITHUB_ID"] && process.env["AUTH_GITHUB_SECRET"]) {
			providers.push(Github({
				clientId: process.env["AUTH_GITHUB_ID"],
				clientSecret: process.env["AUTH_GITHUB_SECRET"]
			}))
		}

		if (process.env["AUTH_DISCORD_ID"] && process.env["AUTH_DISCORD_SECRET"]) {
			providers.push(Discord({
				clientId: process.env["AUTH_DISCORD_ID"],
				clientSecret: process.env["AUTH_DISCORD_SECRET"]
			}))
		}

		return providers
	})(),
})

export { handler as GET, handler as POST }
