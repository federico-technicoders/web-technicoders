'use client'

import { useRef, useState } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Footer, Soluciones, TecnologiasSection, TextReveal } from '@/components'

export default function Home(){
    const [ activeNumber, setActiveNumber ] = useState("01")
    const sectionHero = useRef(null)
    const section2 = useRef(null)
    const contentSection2 = useRef(null)
    const section2b = useRef(null)
    const section3 = useRef(null)
    const section3a = useRef(null)
    const section3b = useRef(null)
    const section3c = useRef(null)
    const contentSection3 = useRef(null)
    const section4 = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        const sectionHeroCurrent = sectionHero.current
        const section2Current = section2.current
        const contentSection2Current = contentSection2.current
        const section2bCurrent = section2b.current
        const section3Current = section3.current
        const section3aCurrent = section3a.current
        const section3bCurrent = section3b.current
        const section3cCurrent = section3c.current

        const contentSection3Current = contentSection3.current
        const section4Current = section4.current

        // Mantiene el hero en la posición inicial
        ScrollTrigger.create({
            trigger: sectionHeroCurrent,
            start: "top top",
            endTrigger: section2bCurrent,
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
            // scale: 2,
            width: '100vw',
            height: '100vh',
            ease: "power1.inOut",
        })
        .to(contentSection3Current, {
            width: '100vw',
            height: '100vh',
            ease: "power1.inOut",
        },'<')
        .to(contentSection2Current,{
            width: '100vw',
            height: '100vh',
        })
        // .to(contentSection2Current,{
        //     width: '100vw',
        //     height: '100vh',
        // })
        .to(contentSection2Current, {
            width: '150px',
            height: '150px',
            ease: "power1.inOut",
        })
        .to(contentSection3Current, {
            width: '150px',
            height: '150px',
            ease: "power1.inOut",
        },'<')

        // Desaparece contentSection2 cuando la sección 3 se desplaza
        gsap.to(contentSection2Current, {
            scrollTrigger: {
                trigger: section2bCurrent,
                start: "center top",
                scrub: true,
                markers: true,
            },
            opacity: 0,
        })

        // Aparece contentSection3 cuando la sección 3 se desplaza
        gsap.to(contentSection3Current, {
            scrollTrigger: {
                trigger: section2bCurrent,
                start: "center top",
                scrub: true,
                markers: true,
            },
            opacity: 1,
        })

        // Mantiene la sección 3 fija hasta la sección 4
        // ScrollTrigger.create({
        //     trigger: section3Current,
        //     start: "top top",
        //     endTrigger: section4Current,
        //     end: "top top",
        //     pin: true,
        //     pinSpacing: false,
        //     markers: true,
        // })

        ScrollTrigger.create({
            trigger: section2bCurrent,
            start: "top top",
            endTrigger: section3Current,
            end: "top top",
            pin: true,
            pinSpacing: false,
            markers: true,
            onEnter: () => setActiveNumber("01"),
            onEnterBack: () => setActiveNumber("01"),
        })

        ScrollTrigger.create({
            trigger: section3Current,
            start: "top top",
            endTrigger: section3aCurrent,
            end: "top top",
            pin: true,
            pinSpacing: false,
            markers: true,
            onEnter: () => setActiveNumber("02"),
            onEnterBack: () => setActiveNumber("02"),
        })

        ScrollTrigger.create({
            trigger: section3aCurrent,
            start: "top top",
            endTrigger: section3bCurrent,
            end: "top top",
            pin: true,
            pinSpacing: false,
            markers: true,
            onEnter: () => setActiveNumber("03"),
            onEnterBack: () => setActiveNumber("03"),
        })
        ScrollTrigger.create({
            trigger: section3bCurrent,
            start: "top top",
            endTrigger: section3cCurrent,
            end: "top top",
            pin: true,
            pinSpacing: false,
            markers: true,
            onEnter: () => setActiveNumber("04"),
            onEnterBack: () => setActiveNumber("04"),
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: section4Current,
                start: "top bottom",
                end: "top top",
                scrub: true,
                markers: true,
            },
        })

        .to(contentSection3Current, {
            width: '100vw',
            height: '100vh',
            borderRadius: '0px',
            ease: "power1.inOut",
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: section4Current,
                start: "top top+=3%",
                end: "top top",
                scrub: true,
                markers: true,
            },
        })

        .to(section4Current, {
            display: 'flex'
        })

        .to(contentSection3Current, {
            opacity: 0,
        })       
        
       
    })
    
    return (
        <div className="relative items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] bg-green-300 -z-50">
            <main className="flex flex-col justify-start items-start sm:items-start w-full ">

                <section 
                    ref={sectionHero}
                    className="flex flex-col justify-center items-center w-full h-screen bg-black"
                >
                    {/* <h1 className="text-5xl font-bold">Sección Hero</h1>
                    <p className="text-xl">Este es el título de la sección</p>
                    <div className="flex justify-center items-center">
                        <span className='text-8xl font-bold'>+</span>
                    </div> */}
                    <div className="relative flex flex-col justify-center items-center w-full h-screen px-[5%] pt-[10%] ">                    
                        <div 
                            
                            className="relative flex flex-col gap-y-20 items-start justify-start w-[100%] h-screen"
                        >
                            <div className="absolute left-0 bottom-0 flex flex-col justify-end items-start w-[100%] h-full">
                                <h1 className="text-2xl">Agencia de marketing digital y diseño web</h1> 
                                <div className='flex flex-col items-start justify-start w-full '>
                                    <span 
                                        // ref={heroTitle1} 
                                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }} 
                                        className="text-[55px]  md:text-[152px]  xl:text-[220px] font-bold leading-none text-nowrap"
                                    >
                                        Impulsamos
                                    </span>  
                                    {/* text-transparent */}
                                    <span 
                                        className="text-[55px] md:text-[152px] xl:text-[220px] font-bold bg-clip-text  bg-gradient-to-r from-teal-400 to-cyan-400 text-nowrap"
                                        // ref={heroTitle2} 
                                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}} 
                                    >
                                        Tu Negocio
                                    </span>

                                </div>
                            </div>                       
                            {/* <button 
                                className="px-[20px] py-[5px] border-[3px] border-cyan-400 rounded-full"
                                
                            >
                                <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                    Quiero impulsar mi negocio
                                </span>
                            </button>                         */}
                        </div>
                        <video 
                            autoPlay={true} 
                            playsInline={true} 
                            muted={true} 
                            loop={true} 
                            preload="auto" 
                            poster="/assets/images/image2.webp" 
                            className="absolute top-0 left-0 w-full min-w-full h-full object-cover -z-10"
                        >
                           
                            <source src="/assets/videos/intro-factoria-video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </section>
          


                {/* esta es la sección del problema */}
                <section 
                    ref={section2}
                    className="flex flex-col justify-center items-center w-full h-screen bg-transparent z-0"
                >
                    <div 
                        ref={contentSection2}
                        className='absolute flex flex-col justify-center items-center w-[400px] h-[400px] bg-slate-200 rounded-2xl'
                        
                    >
                        {/* <div className='text-black'>
                            <h2 className="text-5xl font-bold">Sección 2</h2>
                            <p className="text-xl">Este es el título de la sección</p>
                        </div> */}
                        <div 
                            // ref={choeteSectionRef} 
                            className="relative px-[5%] py-[10%] w-full h-full  bg-[#0E1629]"
                        >
                            <div className="flex flex-col justify-start items-start gap-8">
                                <h2 className="text-[30px] md:text-[60px] lg:text-[90px] text-white leading-none font-semibold mt-16">
                                    Programa {' '}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                        despegue
                                    </span><br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                        empresarial
                                    </span> 
                                </h2>
                                <p className="text-xl">
                                    Texto provisional. Contenido de esta descripción: resumen de todo el programa + oferta<br /> 
                                    irresistible. ¿Sientes que tu negocio está estancado y no logras los resultados que esperabas?<br/>
                                    ¿Tienes una idea de negocio pero no sabes por dónde empezar? Muchos emprendedores y<br/>
                                    empresarios enfrentan estas frustraciones: la falta de crecimiento, la incertidumbre y el miedo al
                                </p>
                                <p className="font-semibold">
                                    + de 100 empresas despegadas
                                </p>
                                <p className="font-semibold">
                                    + de 150 campañas de SEO exitosas
                                </p>
                                <p className="font-semibold">
                                    + de 150% de visibilidad online
                                </p>
                                <p className="font-semibold">
                                    + de 95% de sastifacción de clientes
                                </p>
                                {/* <ButtonCto>
                                    Saber más
                                </ButtonCto> */}
                            </div>
                            <img 
                                src="/assets/images/cohete.webp" 
                                alt="logo" 
                                className="absolute -right-10 -bottom-24 z-100" 
                                data-scroll 
                                data-scroll-speed='.2' 
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* esta es la sección del problema */}
                    <div 
                        ref={contentSection3}
                        className='absolute flex flex-col justify-center items-center w-[400px] h-[400px] bg-slate-800 rounded-2xl opacity-0'
                        
                    >
                        <div className='text-white'>
                            <h2 className="text-8xl font-bold">{activeNumber}</h2>
                          
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
                    className="flex flex-col justify-center items-center w-full h-screen bg-transparent -z-10"
                >
                   <div 
                        className='flex justify-center items-center w-full h-full bg-black'
                    >
                        <div className='w-1/2 h-full'></div>
                        <div className='flex justify-center items-center w-1/2 h-full bg-slate-400 text-black'>
                            1ro columna
                        </div>
                   </div>
                </section>	
                <section 
                    ref={section3a}
                    className="flex flex-col justify-center items-center w-full h-screen bg-transparent -z-10"
                >
                   <div 
                        className='flex justify-center items-center w-full h-full bg-black'
                    >
                        <div className='w-1/2 h-full'></div>
                        <div className='flex justify-center items-center w-1/2 h-full bg-slate-50 text-black'>
                            2da columna
                        </div>
                   </div>
                </section>	
                <section 
                    ref={section3b}
                    className="flex flex-col justify-center items-center w-full h-screen bg-transparent -z-10"
                >
                   <div 
                        className='flex justify-center items-center w-full h-full bg-black'
                    >
                        <div className='w-1/2 h-full'></div>
                        <div className='flex justify-center items-center w-1/2 h-full bg-slate-200 text-black'>
                            3ra columna
                        </div>
                   </div>
                </section>	
                <section 
                    ref={section3c}
                    className="flex flex-col justify-center items-center w-full h-screen bg-transparent -z-10"
                >
                   <div 
                        className='flex justify-center items-center w-full h-full bg-black'
                    >
                        <div className='w-1/2 h-full'></div>
                        <div className='flex justify-center items-center w-1/2 h-full bg-slate-600 text-black'>
                            4ta columna
                        </div>
                   </div>
                </section>	

                <section 
                    // mirar la diferencia entre hidden y none, que hace que no funcinoes
                    className="flex flex-col justify-center items-center w-full h-screen bg-black"
                    >
                    <div 
                        ref={section4} 
                        className='hidden flex-col justify-center items-center w-full h-full bg-slate-400'
                    >
                        <h2 className="text-5xl font-bold">Video Presentación</h2>
                      
                    </div>
                
                </section>
                <Soluciones />
                <section                  
                    className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
                >
                    <div 
                        className='flex justify-center items-center w-full h-full bg-slate-200'
                    >
                        <h2 className="text-5xl text-black font-bold">

                            Sección video portfolio
                        </h2>
                    </div>
                </section>
                <TextReveal />
                <section                  
                    className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
                >
                    <div 
                        className='flex flex-col justify-center items-center w-full h-full bg-black'
                    >
                        <h2 className="text-5xl text-white font-bold mb-10">
                            Sección Equipo
                        </h2>
                        <div className='flex gap-1 justify-around items-center w-full'>
                            <div className='w-[23%] h-[500px] bg-white rounded-xl'></div>
                            <div className='w-[23%] h-[500px] bg-white rounded-xl'></div>
                            <div className='w-[23%] h-[500px] bg-white rounded-xl'></div>
                            <div className='w-[23%] h-[500px] bg-white rounded-xl'></div>
                        </div>
                    </div>
                </section>
                {/* <section                  
                    className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
                >

                    <div 
                        className='flex justify-center items-center w-full h-full bg-black'
                    >
                        <h2 className="text-5xl text-white font-bold">

                            Sección Tecnología
                        </h2>
                    </div>
                </section> */}
                <TecnologiasSection />
                <section                  
                    className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
                >
                    <div 
                        className='flex flex-col justify-center items-center w-full h-full bg-black'
                    >
                        <h2 className="text-5xl text-white font-bold">

                            Que dicen de nosotros
                        </h2>
                        <div className='flex justify-start items-start w-full h-screen'>
                            <div className='flex justify-end items-center w-[60%] h-full  rounded-xl p-2'>
                                <div className='flex justify-center items-center w-[60%] h-[60%] bg-slate-400 rounded-xl'>
                                    <div className='flex justify-center items-center rounded-full bg-[#FFFFFF40] w-12 h-12'>
                                        ▶️
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-start items-center w-[40%] h-full  rounded-xl p-2'>
                                <div className='flex justify-center items-center w-[60%] h-[60%] bg-white rounded-xl'>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                <section                  
                    className="flex flex-col justify-center items-center w-full min-h-screen bg-transparent"
                >
                    <div 
                        className='flex flex-col justify-center items-center w-full h-full bg-black'
                    >
                        <h2 className="text-5xl text-white font-bold mb-10">

                            Sección Contacto
                        </h2>
                        <div className='w-[70%] h-[800px] bg-[#ffffff20] rounded-xl mb-24'>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
