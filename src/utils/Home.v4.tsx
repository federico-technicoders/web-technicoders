'use client'
import { useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

export const CajaCuadrada = () => {
  const sectionHero = useRef(null)
  const section2 = useRef(null)
  const contentSection2 = useRef(null)
  const section2b = useRef(null)
  const section3 = useRef(null)
  const contentSection3 = useRef(null)
  const section4 = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const sectionHeroCurrent = sectionHero.current
    const section2Current = section2.current
    const contentSection2Current = contentSection2.current
    const section2bCurrent = section2b.current
    const section3Current = section3.current
    const contentSection3Current = contentSection3.current
    const section4Current = section4.current

    // Mantiene el hero en la posición inicial
    ScrollTrigger.create({
      trigger: sectionHeroCurrent,
      start: "top top",
      endTrigger: section2Current,
      end: "top top",
      pin: true,
      pinSpacing: false,
      markers: true,
    })

    // Mantiene la sección 2 fija hasta la sección 4
    ScrollTrigger.create({
      trigger: section2Current,
      start: "top top",
      endTrigger: section4Current,
      end: "top top",
      pin: true,
      pinSpacing: false,
      markers: true,
    })

    // Anima el escalado de contentSection2 para agrandarse y luego achicarse
    gsap.timeline({
      scrollTrigger: {
        trigger: section2bCurrent,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    })
    .to(contentSection2Current, {
      scale: 2,
      ease: "power1.inOut",
    })
    .to(contentSection2Current, {
      scale: 0.5,
      ease: "power1.inOut",
    })

    // Desaparece contentSection2 cuando la sección 3 se desplaza
    gsap.to(contentSection2Current, {
      scrollTrigger: {
        trigger: section3Current,
        start: "top top",
        scrub: true,
        markers: true,
      },
      opacity: 0,
    })

    // Aparece contentSection3 cuando la sección 3 se desplaza
    gsap.to(contentSection3Current, {
      scrollTrigger: {
        trigger: section3Current,
        start: "top top",
        scrub: true,
        markers: true,
      },
      opacity: 1,
    })

    // Mantiene la sección 3 fija hasta la sección 4
    ScrollTrigger.create({
      trigger: section3Current,
      start: "top top",
      endTrigger: section4Current,
      end: "top top",
      pin: true,
      pinSpacing: false,
      markers: true,
    })
  })

  return (
    <div className="relative items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify-start items-start sm:items-start w-full">
        <section 
          ref={sectionHero}
          className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
        >
          <h1 className="text-5xl font-bold">Sección Hero</h1>
          <p className="text-xl">Este es el título de la sección</p>
          <div className="flex justify-center items-center">
            <span className='text-8xl font-bold'>+</span>
          </div>
        </section>				
        <section 
          ref={section2}
          className="flex flex-col justify-center items-center w-full h-screen bg-transparent z-0"
        >
          <div 
            ref={contentSection2}
            className='flex flex-col justify-center items-center w-[400px] h-[400px] bg-slate-200 rounded-2xl'
            style={{ transform: 'scale(0.5)', transformOrigin: 'center center' }}
          >
            <div className='text-black'>
              <h1 className="text-5xl font-bold">Sección 2</h1>
              <p className="text-xl">Este es el título de la sección</p>
            </div>
          </div>
        </section>
        <section 
          ref={section2b}
          className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
        >
        </section>
        <section 
          ref={section3}
          className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
        >
          <div 
            ref={contentSection3}
            className='flex flex-col justify-center items-center w-[400px] h-[400px] bg-slate-800 rounded-2xl opacity-0 scale-50'
          >
            <h1 className="text-5xl font-bold">Sección 3</h1>
            <p className="text-xl">Este es el título de la sección</p>
          </div>
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
