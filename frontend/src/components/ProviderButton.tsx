"use strict"
"use client"

import { ClientSafeProvider, signIn } from "next-auth/react"
import { Roboto } from "next/font/google"
import Image from "next/image"

const rob = Roboto({
	subsets: ['latin'],
	weight: '400'
})

function ProviderButton({ provider, index }: { provider: ClientSafeProvider, index: number }): JSX.Element {
	return (
		<div style={{ animation: `1s ease-in-out ${1 + .2 * index}s forwards appear` }} className="provider-buttons group flex flex-row items-center text-black">

			{/* Particles (left) */}
			<div className="flex flex-col">
				<div className="transition-all my-2 origin-top-right rotate-[24deg] group-hover:w-7 w-0 h-2 group-active:bg-[#bf60ef] bg-[#dab3b3aa]" />
				<div className="relative transition-all my-2 right-[0.40rem] group-hover:w-7 w-0 h-2 group-active:bg-[#bf60ef] bg-[#dab3b3aa]" />
				<div className="transition-all my-2 origin-bottom-right -rotate-[24deg] group-hover:w-7 w-0 h-2 group-active:bg-[#bf60ef] bg-[#dab3b3aa]" />
			</div>

			<button className={`transition duration-300 w-64 h-16 m-1 flex justify-start items-center bg-white rounded-lg hover:border-opacity-0 border-[#D9D9D9] border-[3px] active:opacity-80 ` + rob.className} onClick={() => signIn(provider.id)}>
				<Image className="mx-3" src={`/svg/${provider.id}_logo.svg`} width={33} height={33} alt={`${provider.name} logo`} />
				<p>Continue with {provider.name}</p>
			</button>

			{/* Particles (right) */}
			<div className="flex flex-col">
				<div className="transition-all my-2 origin-top-left -rotate-[24deg] group-hover:w-7 w-0 h-2 group-active:bg-[#bf60ef] bg-[#dab3b3aa] " />
				<div className="relative transition-all my-2 left-[0.40rem] group-hover:w-7 w-0 h-2 group-active:bg-[#bf60ef] bg-[#dab3b3aa] " />
				<div className="transition-all my-2 origin-bottom-left rotate-[24deg] group-hover:w-7 w-0 h-2 group-active:bg-[#bf60ef] bg-[#dab3b3aa] " />
			</div>

		</div>
	)
}

export default ProviderButton
