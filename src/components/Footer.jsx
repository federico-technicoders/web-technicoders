'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextParallax } from './TextParallax/TextParallax'

import { iconosRedes } from "@/utils/iconosRedes"


export const Footer = () => {
    const textFooter = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        const textFooterCurrent = textFooter.current
        gsap.from(textFooterCurrent, {            
            scrollTrigger: {
                trigger: textFooterCurrent,
                start: 'top center+=100',
                end: 'bottom center+=100',
                scrub: true,
                // markers: true,
                // toggleActions: 'play none none reverse'
            },
            y: '-50%',
            ease: 'power2.out',
        })
        // gsap
    })
    
    return (
        <footer className="flex flex-col justify-center items-center w-full bg-transparent">			
            <div
                className='flex flex-col justify-center items-start w-full h-full bg-[#0E1629] rounded-bl-xl rounded-br-xl pl-8'
            >
                <div className="flex flex-col lg:flex-row justify-start items-start lg:justify-between lg:items-center gap-5 w-full p-[5%]">
                    <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex justify-start items-center gap-[8px] mb-8">
                            {iconosRedes.map((item, index) => (
                                <img key={index} src={item.image} alt="icono redes sociales" />
                            ))}
                        </div>
                        <p className="text-nowrap text-[#93A2B8]">Copyright © 2024 Technincoders</p>
                        <div className="flex flex-col lg:flex-row gap-x-10 justify-start items-start lg:justify-around lg:items-center">
                            <p>Política de Privacidad</p>
                            <p>Términos y Condiciones</p>
                            <p>Política de Cookies</p>
                            <p>Aviso Legal</p>                            
                        </div>
                    </div>
                    <div className="">
                        <p>Barcelona</p>
                        <p className="text-nowrap text-[#93A2B8]">Calle Vilamarí 81, 7º - 3ª, Eixample</p>
                        <p className="text-[#93A2B8]">+34 123 456 789</p>
                    </div>
                </div>    
            </div>
            <div
                ref={textFooter}
                className='relative flex justify-start items-start w-full h-full bg-green-300 -z-10 mt-[-20px] pt-[20px]'
            >
                {/* <p className="text-[160px] text-white font-bold uppercase text-center text-wrap">
                    Comienza con tu futuro digital
                </p> */}
                <TextParallax text={'Comienza con tu futuro digital'} />
            </div>
        </footer>
    )
}
