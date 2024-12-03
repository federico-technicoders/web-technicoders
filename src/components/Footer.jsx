'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextParallax } from './TextParallax/TextParallax'


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
                markers: true,
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
                className='flex flex-col justify-center items-start w-full h-full bg-black rounded-bl-xl rounded-br-xl pl-8'
            >
                {/* <h2 className="text-sm text-white font-bold">Info footer</h2>
                <h3 className="text-sm text-white font-bold">Info footer</h3>
                <h4 className="text-sm text-white font-bold">Info footer</h4> */}
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
