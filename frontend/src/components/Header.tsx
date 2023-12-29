"use strict"
"use client"

import Image from 'next/image';

function Header(): JSX.Element {

	function play(value: "luffy" | "zoro" | "nami" | "usopp") {
		let audioObject:HTMLAudioElement = new Audio(`sound/${value}.wav`);
		audioObject.volume = 0.3;
		audioObject.autoplay = true;
	}
	return (
		<header className="bg-neutral-950 bg-opacity-[0.08] my-11 xl:h-20 lg:h-16  flex justify-center items-center">

			<button onClick={ () => play("usopp") }>
				<Image className="mr-3 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]" 
					src={'/mugiwara/ussop.png'}
					width={68}
					height={68}
					alt="Sniperking !"
				/>
			</button>

			<button onClick={ () => play("nami") }>
				<Image className="mr-3 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]" 
					src={'/mugiwara/nami.png'}
					width={68}
					height={68}
					alt="Tangarine !"
				/>
			</button>

			<p className="text-gray-900 dark:text-white xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl text-center drop-shadow-[4px_3px_1px_rgba(0,0,0,0.25)]">
				The Transcendence
			</p>
			<button onClick={ () => play("zoro") }>
				<Image className="ml-3 w-auto h-auto drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]" 
					src={'/mugiwara/zoro.png'}
					width={60}
					height={60}
					alt="Saber !"
				/>
			</button>

			<button onClick={ () => play("luffy") }>
				<Image className="ml-3 w-auto h-auto drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]" 
					src={'/mugiwara/luffy.png'}
					width={60}
					height={60}
					alt="Meat !"
				/>
			</button>

			<button className="absolute right-32">
				<Image className="rounded-full"
					src={'https://thispersondoesnotexist.com'}
					width={80}
					height={80}
					alt="pfp"
				/>
			</button>

		</header>
	)
}

export default Header
