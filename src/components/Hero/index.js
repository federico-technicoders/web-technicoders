'use client'

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const Hero = () => {
    const sectionHero = useRef(null)

    gsap.registerPlugin(ScrollTrigger)
    
    useGSAP(() => {
        const sectionHeroCurrent = sectionHero.current

        ScrollTrigger.create({
            trigger: sectionHeroCurrent,
            start: "top top",
            // endTrigger: section2bCurrent,
            end: "top top",
            pin: true,
            pinSpacing: false,
            markers: true,
        })

    })

    return (
        <section 
            ref={sectionHero}
            className="flex flex-col justify-center items-center w-full h-screen bg-black"
        >
            <h1 className="text-5xl font-bold">Sección Hero</h1>
            <p className="text-xl">Este es el título de la sección</p>
            <div className="flex justify-center items-center">
                <span className='text-8xl font-bold'>+</span>
            </div>
        </section>
    )
}
