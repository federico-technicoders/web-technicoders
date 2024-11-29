'use client'
import { useRef } from 'react'
import { gsap }	from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

export default function Home() {
	const sectionHero = useRef(null)
	// const buttonMas       = useRef(null)
	// const mas             = useRef(null)
	const section2        = useRef(null)
	const contentSection2 = useRef(null)
	const tileSection2    = useRef(null)
	const section3        = useRef(null)
	const section4        = useRef(null)

	gsap.registerPlugin(ScrollTrigger)


	// useGSAP(() => {
	// 	const buttonMasCurrent = buttonMas.current
	// 	const masCurrent = mas.current
	// 	const sectionHeroCurrent = sectionHero.current
	// 	const section2Current  = section2.current
	// 	const contentSection2Current = contentSection2.current
	// 	const titleSection2Current = tileSection2.current	
	// 	const section3Current = section3.current
	// 	const section4Current = section4.current

	// 	// funciona pero se ve el texto encimado 
	// 	ScrollTrigger.create({
	// 		trigger: contentSection2Current,
	// 		start: "top 25%",
	// 		endTrigger: section3Current,
	// 		end: "center center",
	// 		pin: true,
	// 		pinSpacing: false,
	// 		scrub: 1,	
	// 		markers: true,
	// 		onEnter: self => {
	// 			// expandir el contenedor de la sección 2 
	// 			const progress = self.progress
	// 			const scale =  1
	// 			const borderRadius= 0

	// 			gsap.to(contentSection2Current, {
	// 				scale,
	// 				borderRadius: `${borderRadius}px`
	// 			})

				
	// 		},
				

	// 	})

	// 	// ScrollTrigger.create({
	// 	// 	trigger: contentSection2Current,
	// 	// 	start: "top 25%",
	// 	// 	endTrigger: section3Current,
	// 	// 	end: "center center",
	// 	// 	pin: true,
	// 	// 	// pinSpacing: false,
	// 	// 	scrub: 1,	
	// 	// 	onEnterBack: () => {
	// 	// 		gsap.to(contentSection2Current, {
	// 	// 			scale: 0.5,
	// 	// 			borderRadius: "30px",
	// 	// 			duration: 1,
	// 	// 		});
	// 	// 	}
	// 	// })

	// })

	useGSAP(() => {
		const contentSection2Current = contentSection2.current;
		const section2Current = section2.current;
		const section3Current = section3.current;
	  
		// Pin del contenedor durante el scroll entre la sección 2 y 3
		ScrollTrigger.create({
		  trigger: section2Current,
		  start: "top top",
		  endTrigger: section3Current,
		  end: "top top",
		  pin: contentSection2Current,
		  pinSpacing: false,
		  scrub: true,
		  // markers: true, // Activa esto para ver los marcadores si lo deseas
		});
	  
		// Expansión del contenedor al entrar en la sección 2
		gsap.fromTo(
		  contentSection2Current,
		  {
			scale: 0.5,
			borderRadius: "30px",
		  },
		  {
			scale: 1,
			borderRadius: "0px",
			scrollTrigger: {
			  trigger: section2Current,
			  start: "top bottom",
			  end: "top top",
			  scrub: true,
			  // markers: true,
			},
		  }
		);
	  
		// Contracción del contenedor al acercarse al final de la sección 3
		gsap.fromTo(
		  contentSection2Current,
		  {
			scale: 1,
			borderRadius: "0px",
		  },
		  {
			scale: 0.5,
			borderRadius: "30px",
			scrollTrigger: {
			  trigger: section3Current,
			  start: "top bottom",
			  end: "top top",
			  scrub: true,
			  // markers: true,
			},
		  }
		);
	  });
	  

	return (
		<div className="relative items-center justify-items-center min-h-screen pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col justify-start items-start sm:items-start w-full">
				<section 
					ref={sectionHero}
					className="flex flex-col justify-center items-center w-full h-screen bg-black"
				>
					<h1 className="text-5xl font-bold">Sección Hero</h1>
					<p className="text-xl">Este es el título de la sección</p>
					<div 
						// ref={buttonMas}
						className="flex justify-center items-center"
					>
						<span 
							// ref={mas}
							className='text-8xl font-bold'>
							+
						</span>
					</div>
				</section>
				<section 
					ref={section2}
					className="flex flex-col justify-start items-start w-full h-[200vh] bg-transparent z-0"
				>
					<div 
						ref={contentSection2}
						className='flex flex-col justify-center items-center w-full h-screen bg-slate-200 scale-50 rounded-2xl'
					>
						<div 
							ref={tileSection2}
						>
							<h1 className="text-5xl font-bold">Sección 2</h1>
							<p className="text-xl">Este es el título de la sección</p>
						</div>
					</div>
				</section>
				<section 
					ref={section3}
					className="flex flex-col justify-center items-center w-full h-screen bg-black "
				>
					<h1 className="text-5xl font-bold">Sección 3</h1>
					<p className="text-xl">Este es el título de la sección</p>
				</section>	
				<section 
					ref={section4}
					className="flex flex-col justify-center items-center w-full h-screen bg-slate-400"
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
