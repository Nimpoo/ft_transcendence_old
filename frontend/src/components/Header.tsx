"use strict"
"use client"

export default function Header(): JSX.Element {

	return (

		<header className="
				bg-neutral-950 bg-opacity-[0.08]
				my-11
				xl:h-20 lg:h-16 
				flex justify-center items-center
				">

			<button>
				<img className="
					h-4 xl:h-20 lg:h-16 md:h-10 sm:h-6
					mr-3 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]" src="/mugiwara/ussop.png" alt="Sniperking !"
				/>
			</button>

			<button>
				<img className="
					h-4 xl:h-20 lg:h-16 md:h-10 sm:h-6
					mr-3 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]" src="/mugiwara/nami.png" alt="Tangarine !"
				/>
			</button>
			<p className="
				text-gray-900 dark:text-white
				xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl
				text-center drop-shadow-[4px_3px_1px_rgba(0,0,0,0.25)]
			">

				The Transcendence

			</p>
			<button>
				<img className="
					h-3 xl:h-[4.25rem] lg:h-[3.25rem] md:h-[2.25rem] sm:h-[1.5rem]
					ml-3 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]" src="/mugiwara/zoro.png" alt="Saber !"
				/>
			</button>

			<button>
				<img className="
					h-3 xl:h-[4.25rem] lg:h-[3.25rem] md:h-[2.25rem] sm:h-[1.5rem]
					ml-3 drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]" src="/mugiwara/luffy.png" alt="Meat !" />
			</button>

		</header>

	)
}
