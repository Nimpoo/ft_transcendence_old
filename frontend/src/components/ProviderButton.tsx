"use strict"
"use client"

import React, { useState } from 'react';
import Image from 'next/image';

import { Roboto } from 'next/font/google'

const rob = Roboto ({
	subsets: ['latin'],
	weight: '400'
})

export default function ProviderButton( {provider} : {provider: "42" | "GitHub" | "Discord" | "Instagram" | "X"} ): JSX.Element {

	// <div className="transition-all
	// 			my-2
	// 			w-10 h-2 origin-top-right rotate-[24deg]
	// 			bg-right bg-gradient-to-l from-black to-black
	// 			bg-[length:0%_40px] bg-no-repeat group-hover:bg-[length:100%_40px]
	// 			">
	// 			</div>

	return (
		<div className="group flex flex-row items-center text-black">
			
			<div className="flex flex-col">
				<div className="transition-all
				my-2 origin-top-right rotate-[24deg]
				group-hover:w-7 w-0 h-2
				group-active:bg-[#bf60ef]
				bg-[#dab3b3aa]
				">
				</div>

				<div className="relative transition-all
				my-2 right-[0.40rem]
				group-hover:w-7 w-0 h-2
				group-active:bg-[#bf60ef]
				bg-[#dab3b3aa]
				">
				</div>
				<div className="transition-all
				my-2 origin-bottom-right -rotate-[24deg]
				group-hover:w-7 w-0 h-2
				group-active:bg-[#bf60ef]
				bg-[#dab3b3aa]
				">
				</div>
			</div>

			<button className={`transition duration-300
			w-64 h-16 m-1 flex justify-start items-center
			bg-white rounded-lg hover:border-opacity-0 border-[#D9D9D9] border-[3px]
			active:opacity-80 `
			+ rob.className
			}>
					
				<Image className="mx-3"
					src={`/svg/${provider}_logo.svg`}
					width={33}
					height={33}
					alt={`${provider} logo`}
				/>
				<p>Continue with {provider}</p>
			</button>

			<div className="flex flex-col">
				<div className="transition-all
				my-2 origin-top-left -rotate-[24deg]
				group-hover:w-7 w-0 h-2
				group-active:bg-[#bf60ef]
				bg-[#dab3b3aa]
				">
				</div>

				<div className="relative transition-all
				my-2 left-[0.40rem]
				group-hover:w-7 w-0 h-2
				group-active:bg-[#bf60ef]
				bg-[#dab3b3aa]
				">
				</div>
				<div className="transition-all
				my-2 origin-bottom-left rotate-[24deg]
				group-hover:w-7 w-0 h-2
				group-active:bg-[#bf60ef]
				bg-[#dab3b3aa]
				">
				</div>
			</div>
		</div>
	)
}
