'use client'
import { useRef } from 'react'
import { gsap }	from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

export default function Home() {
	const sectionHero = useRef(null)
	const buttonMas      = useRef(null)
	const mas            = useRef(null)
	const section2       = useRef(null)
	const tileSection2   = useRef(null)
	const section3    = useRef(null)
	const section4    = useRef(null)

	gsap.registerPlugin(ScrollTrigger)

	useGSAP(() => {
		const buttonMasCurrent = buttonMas.current
		// const masCurrent = mas.current
		// const sectionHeroCurrent = sectionHero.current
		const section2Current  = section2.current
		const titleSection2Current = tileSection2.current

		ScrollTrigger.create({
			trigger: buttonMasCurrent,
			start: "top top",
			endTrigger: section2Current,
			end: "bottom top",
			pin: true,
			pinSpacing: false,
			markers: true,
			
		})

		ScrollTrigger.create({
			trigger: buttonMasCurrent,
			start: "top top",
			endTrigger: section2Current,
			end: "bottom button",
			markers: true,
			onUpdate: (self) => {
				const rotation = self.progress * 360
				gsap.to(buttonMasCurrent, {rotation})
			}
			
		})

		ScrollTrigger.create({
			trigger: titleSection2Current,
			start: "top top+=10%",
			endTrigger: titleSection2Current,
			end: "bottom button-=10%",
			scrub: 1,
			markers: true,
			onUpdate: (self) => {
				const progress = self.progress
				const left = 50 + 13 * progress
				gsap.to(buttonMasCurrent, {
					left: `${left}%`,
					ease: "none",
					duration: 0
				})
			}
			
		})

	},[])

	return (
		<div className="relative items-center justify-items-center min-h-screen pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col justify-start items-start sm:items-start w-full">
				<section 
					ref={sectionHero}
					className="flex flex-col justify-center items-center w-full h-screen bg-[#F2F2F230]"
				>
					<h1 className="text-5xl font-bold">Sección Hero</h1>
					<p className="text-xl">Este es el título de la sección</p>
					<div 
						ref={buttonMas}
						className="flex justify-center items-center"
					>
						<span 
							ref={mas}
							className='text-8xl font-bold'>
							+
						</span>
					</div>
				</section>
				<section 
					ref={section2}
					className="flex flex-col justify-center items-center w-full h-screen bg-[#F2F2F240]"
				>
					<div 
						ref={tileSection2}
					>
						<h1 className="text-5xl font-bold">Sección 2</h1>
						<p className="text-xl">Este es el título de la sección</p>
					</div>
				</section>
				<section 
					ref={section3}
					className="flex flex-col justify-center items-center w-full h-screen bg-[#F2F2F230]"
				>
					<h1 className="text-5xl font-bold">Sección 3</h1>
					<p className="text-xl">Este es el título de la sección</p>
				</section>	
				<section 
					ref={section4}
					className="flex flex-col justify-center items-center w-full h-screen bg-[#F2F2F240]"
				>
					<h1 className="text-5xl font-bold">Sección 4</h1>
					<p className="text-xl">Este es el título de la sección</p>
				</section>
				
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center ">			
				<h2>Este es el título del footer</h2>
			</footer>
		</div>
	)
}
