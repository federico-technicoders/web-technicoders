'use client'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'


export const TextParallax = ({text=''}) => {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);

    let xPercent = 0  
    let direction = -1

    useGSAP( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.5,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {
        if(xPercent < -100){
            xPercent = 0;
        }else if(xPercent > 0){
            xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    }

    return (       
            <div 
                className='w-full overflow-hidden'
            >
                <div 
                    ref={slider} 
                    className='relative flex w-full whitespace-nowrap'
                >
                    <p 
                        className='m-0 text-white text-[240px] font-bold'
                        ref={firstText}
                    >
                        {text}{'-'}
                    </p>
                    <p 

                        ref={secondText}
                        className='m-0 text-white text-[240px] font-bold'
                    >
                        {text}{'-'}
                    </p>
                </div>
            </div>
    )
}