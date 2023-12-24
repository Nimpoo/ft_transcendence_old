"use strict"
"use client"

import Image from 'next/image';

import ProviderButton from '@/components/ProviderButton'

import '@/styles/HomeTitle.css'

export default function Home(): JSX.Element {

	//TODO	- Finir la page d'acceuil
	//TODO	- Commencer la page de connection (le Figma potentiellement)
	//TODO	- Merge authentification

	return (

		<main>
			<div className="pt-4 flex items-center justify-between max-h-[384px]">
				<h1 id="title" className="
					xl:text-9xl lg:text-8xl md:text-7xl sm:text-5xl
					text-gray-900 dark:text-white text-start
				">
					<span>
						Welcome<br />
					</span>
					<span>
						to our<br />
					</span>
					<span>
						Final Project.
					</span>
				</h1>
				<div className="
					items-center justify-center flex max-h-[384px] max-w-[500px]
					flex-col flex-grow flex-wrap text-center
				">
					<ProviderButton provider="42" />
					<ProviderButton provider="GitHub" />
					<ProviderButton provider="Discord" />
					<ProviderButton provider="Instagram" />
					<ProviderButton provider="X" />
				</div>
			</div>
			<div className="mt-44 animate-bounce">
				<Image className="opacity-60 m-auto"
					src={'/svg/arrow.svg'}
					width={37.5}
					height={37.5}
					alt="Scroll !"
				/>
			</div>
		</main>
	)
}
