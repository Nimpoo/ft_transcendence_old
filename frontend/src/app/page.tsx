"use strict"
"use client"

import ProviderButton from "@/components/ProviderButton"
import Image from "next/image"
import { ClientSafeProvider, getProviders } from "next-auth/react"
import { useEffect, useState } from "react"
import Loading from "./loading"
import "@/styles/Home.css"

function Home(): JSX.Element {
	const [ providers, setProviders ] = useState<ClientSafeProvider[] | JSX.Element>(<Loading />)

	useEffect(() => {
		getProviders().then(p => p ? setProviders(Object.values(p)) : setProviders(<p>no providers</p>))
	}, [])

	return (
		<main className="pt-4">

			<div className="flex items-center justify-between">

				<h1 id="title" className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-5xl text-gray-900 dark:text-white text-start">
					<span>Welcome</span><br />
					<span>to our</span><br />
					<span>Final Project.</span>
				</h1>

				<div id="provider-button-list" className="items-center justify-center flex max-h-[384px] max-w-[500px] flex-col flex-grow flex-wrap text-center">
					{ providers ? Array.isArray(providers) ? providers.map((provider, index) => <ProviderButton index={index} key={provider.id} provider={provider} />) : providers : null }
				</div>

			</div>

			<div className="mt-44 animate-bounce">
				<Image className="opacity-60 m-auto" src="/svg/arrow.svg" width={37.5} height={37.5} alt="Scroll !" />
			</div>

		</main>
	)
}

export default Home
