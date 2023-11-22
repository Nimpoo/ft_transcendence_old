"use strict"
"use client"

import React, { useState } from 'react';

export default function PressButton( {color, children} : {color: string, children: React.ReactNode} ) : JSX.Element {
	const [isHovered, setIsHovered] = useState(false);

	return (

		// BUTTON
		<button className="relative text-xl font-thin group">

			{/* BACKGROUND */}
			<div className={`absolute
			inset-0 h-full top-2 -bottom-2 left-2 -right-2
			bg-${color}-500
			border-r-2 border-b-2 border-${color}-900`}
			>
			</div>

			{/* ANGLE_1 */}
			<div className={`absolute 
			-z-10 -bottom-2 left-2 w-2 h-[calc(1.41421356237%+0.67rem)]
			bg-${color}-500 border-2 border-${color}-900
			origin-bottom-left -rotate-45 transition-all
			${isHovered ? 'group-hover:h-[calc(1.41421356237%+0.30rem)] group-active:w-0 group-active:opacity-0' : ''}
			`}
			>
			</div>

			{/* ANGLE_2 */}
			<div className={`absolute
			-z-10 top-2 -right-2 w-[calc(1.41421356237%+0.62rem)] h-2
			bg-${color}-500 border-2 border-${color}-900
			origin-top-right rotate-45 transition-all
			${isHovered ? 'group-hover:w-[calc(1.41421356237%+0.25rem)] group-active:h-0 group-active:opacity-0' : ''}
			`}
			>
			</div>

			{/* TEXT */}
			<div className={`relative flex justify-center items-center
			bg-gray-100
			border-2 border-black
			w-36 h-16 transition transform
			hover:translate-y-1 hover:translate-x-1 active:translate-y-2 active:translate-x-2
			hover:bg-${color}-300 active:bg-${color}-400`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>

				{children}
			</div>
		</button>

	)

}
