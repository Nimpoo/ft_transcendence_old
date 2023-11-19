import Image from "next/image"

export default function NewButton(): JSX.Element {

	return (

		// BUTTON
		<button className="relative text-xl font-thin">

			{/* BACKGROUND */}
			<div className="absolute inset-0 h-full top-4 -bottom-4 left-4 -right-4 bg-red-500 border-b-2 border-r-2 border-red-900">
				{/* -rotate-45 */}
				<div className="absolute -z-10 bottom-0 left-0 w-4 h-[calc(5.65685424949%+1.19rem)] bg-red-500 border-l-2 border-red-900 origin-bottom-left -rotate-45">
				</div>
				<div className="absolute -z-10 top-0 right-0 w-[calc(5.65685424949%+0.78rem)] h-4 bg-red-500 border-t-2 border-red-900 origin-top-right rotate-45">
				</div>
			</div>

			{/* TEXT */}
			<div className="relative bg-gray-100 border border-gray-500 w-44 h-16 transition transform hover:translate-y-2 hover:translate-x-2 active:translate-y-4 active:translate-x-4">
				One Piece !
			</div>
		</button>

	)

}

// function Button({children, color}: {children: React.ReactNode, color?: string}): JSX.Element {
//     return (
//         <div className={`
// 		flex
// 		flex-row
// 		justify-evenly
// 		items-center
// 		m-auto
// 		mt-4
// 		bg-gray-100
// 		text-gray-900
// 		py-2
// 		w-28
// 		cursor-pointer
// 		transition
// 		hover:-translate-x-2
// 		hover:-translate-y-2
// 		hover:shadow-[8px_8px_0_gray]
// 		hover:bg-[${color}]
// 		active:-translate-x-1
// 		active:-translate-y-1
// 		active:shadow-[4px_4px_0_gray]
// 		`}>
//             {children}
//         </div>
//     )
// }

// function Home(): JSX.Element {
//     return (
//         <>
//             <h1 className="m-auto mt-40 text-center text-4xl">Hello, World!</h1>
//             <Button color="#1d1f21">
//                 Login with
//                 <Image alt="GitHub Logo" width={15} height={15} src="/GitHub_logo.svg" />
//             </Button>
//             <Button color="#00babc">
//                 Login with
//                 <Image className="fill-gray-900" alt="42 Logo" width={15} height={15} src="/42_logo.svg" />
//             </Button>
//         </>
//     )
// }

// export default Home
