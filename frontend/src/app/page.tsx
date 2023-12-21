"use strict"
"use client"

import '@/styles/HomeTitle.css'

export default function Home(): JSX.Element {

	return (

		<div className="ml-20 flex items-start justify-start mt-24">
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
		</div>
	)
}
