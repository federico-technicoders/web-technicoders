'use client'
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export const TextReveal = () => {
    const [lettersRef, setlettersRef] = useArrayRef();
    const triggerRef = useRef(null)  

    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger)
    const text = "“Innovamos junto a marcas visionarias que no solo piensan en el futuro, lo construyen.”"

    useGSAP(()=>{
        gsap.to(
            lettersRef.current,
            {
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    // start: "top center",
                    // end: "bottom 85%",
                    start: "top bottom",
                    end: "bottom center",
                    markers: true,
                },
                color: "#2A2A2A",
                duration: 5,
                stagger: 1,
            }
        )

        // return () => {
        //     anim.kill()
        // }
    })
    
    return (       
        <section className="flex flex-col items-center justify-center w-full p-[5%] bg-[#0E1629]">
            <div className="flex flex-col items-center justify-start w-full h-full bg-white rounded-xl">
                <div 
                    className="w-full p-10"
                    ref={triggerRef}
                >
                    {
                        text.split("").map((letter, index) => (
                            <span 
                                key={index} 
                                // className="text-reveal text-8xl text-[#2A2A2A] font-extrabold"
                                className="text-[20px] md:text-[104px] font-extrabold text-wrap leading-tight"
                                ref={setlettersRef}
                            >
                                {letter}
                            </span>
                        ))
                    }
                </div>
                <div className="flex flex-col justify-start items-start text-black w-full p-10">
                    <p>Andres Arias</p>
                    <p>CEO Technicoders</p>
                </div>
            </div>
        </section>           
    )
}
