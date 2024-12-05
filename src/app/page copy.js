'use client'

import { useRef, useState, useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Lenis from '@studio-freight/lenis'
import { ButtonCto, ContactoSection, EquipoSection, Footer, Soluciones, SpanGradient, TecnologiasSection, TestimonioSection, TextReveal } from '@/components'
import Image from 'next/image'


export default function Home(){
    const [ activeNumber, setActiveNumber ] = useState(1)
    const sectionHero         = useRef(null)
    const section2            = useRef(null)
    const contentSection2     = useRef(null)
    const contentInfoSection2 = useRef(null)
    const section2b           = useRef(null)
    const section3            = useRef(null)
    const section3a           = useRef(null)
    const section3b           = useRef(null)
    const section3c           = useRef(null)
    const section3d           = useRef(null)
    const titleSection3       = useRef(null)

    const contentSection3 = useRef(null)
    const section4        = useRef(null)

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const lenis = new Lenis()
        lenis.on('scroll', ScrollTrigger.update)    
        gsap.ticker.add(time => {
            lenis.raf(time * 1000)
        }) 
        gsap.ticker.lagSmoothing(0)
    })

    useGSAP(() => {
        const sectionHeroCurrent = sectionHero.current
        const section2Current = section2.current
        const contentSection2Current = contentSection2.current
        const section2bCurrent = section2b.current
        const section3Current = section3.current
        const section3aCurrent = section3a.current
        const section3bCurrent = section3b.current
        const section3cCurrent = section3c.current
        // const section3dCurrent

        const contentSection3Current = contentSection3.current
        const section4Current = section4.current

        const contentInfoSection2Current = contentInfoSection2.current

        // Mantiene el hero en la posición inicial
        ScrollTrigger.create({
            trigger: sectionHeroCurrent,
            start: "top top",
            endTrigger: section2bCurrent,
            end: "top top",
            pin: true,
            pinSpacing: false,
            // markers: true,
        })

        // Mantiene la sección 2 fija hasta la sección 4
        ScrollTrigger.create({
            trigger: section2Current,
            start: "top top",
            endTrigger: section4Current,
            end: "top top",
            pin: true,
            pinSpacing: false,
            // markers: true,
        })

        // Anima el escalado de contentSection2 para agrandarse y luego achicarse
        gsap.timeline({
            scrollTrigger: {
                trigger: section2bCurrent,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true,
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
        .to(contentInfoSection2Current,{
            opacity: 1,
        },0)
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
                // markers: true,
            },
            opacity: 0,
        })

        // Aparece contentSection3 cuando la sección 3 se desplaza
        gsap.to(contentSection3Current, {
            scrollTrigger: {
                trigger: section2bCurrent,
                start: "center top",
                scrub: true,
                // markers: true,
            },
            opacity: 1,
        })
        gsap.timeline({
            scrollTrigger: {
                trigger: section4Current,
                start: "top bottom",
                end: "top top",
                scrub: true,
                // markers: true,
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
                // markers: true,
            },
        })

        .to(section4Current, {
            display: 'flex'
        })

        .to(contentSection3Current, {
            opacity: 0,
        })         
    })

    useGSAP(()=>{
        const section3current = section3.current
        const section3acurrent = section3a.current
        const section3bcurrent = section3b.current
        const section3ccurrent = section3c.current
        const section3dcurrent = section3d.current

        const sections = [section3current, section3acurrent, section3bcurrent, section3ccurrent, section3dcurrent]

        sections.forEach((section, index) => {
            if (!section || index === sections.length - 1) return;

            const nextSection = sections[index + 1];
            console.log(index)
            console.log(nextSection)

            // Pin efecto
            ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    endTrigger: nextSection,
                    end: 'top top',
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    onEnter: () => setActiveNumber(index + 1),
                    onEnterBack: () => setActiveNumber(index + 1),
                    // markers: true,
                },
                
            )

            // Efecto persiana
            if (nextSection) {
                gsap.fromTo(
                    nextSection,
                    { clipPath: 'inset(200% 0 0 0)' },
                    {
                        clipPath: 'inset(0% 0 0 0)',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: nextSection,
                            start: 'top bottom',
                            end: 'top top',
                            scrub: true,
                        },
                    }
                )

                // Efecto de alejamiento de la imagen
                const nextImage = nextSection.querySelector('img')

                if (nextImage) {
                    gsap.fromTo(
                        nextImage,
                        { scale: 1.2 },
                        {
                            scale: 1,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: nextSection,
                                start: 'top bottom',
                                end: 'top top',
                                scrub: true,
                            },
                        }
                    );
                }
            }
        })

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    })

    useGSAP(() => {
        const secttion3Current = section3.current
        const titleSection3Current = titleSection3.current
        const section4Current = section4.current

        gsap.to(titleSection3Current, {
            scrollTrigger: {
                trigger: secttion3Current,
                start: "top top",
                endTrigger: section4Current,
                end: "end end",
                scrub: true,
                markers: true,
            },
            display: 'flex',
            ease: "power1.inOut",
            // x: '100%',

            

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
                                        <SpanGradient>
                                            Tu Negocio
                                        </SpanGradient>
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
                        className='absolute flex flex-col justify-start items-start w-[400px] h-[400px] bg-[#0E1629] rounded-2xl overflow-hidden p-[5%]'
                        
                    >
                        {/* <div className='text-black'>
                            <h2 className="text-5xl font-bold">Sección 2</h2>
                            <p className="text-xl">Este es el título de la sección</p>
                        </div> */}
                        {/* <div 
                            // ref={choeteSectionRef} 
                            className="relative px-[5%] py-[10%] w-full h-full  bg-[#0E1629]"
                        > */}
                            <div
                                ref={contentInfoSection2}
                                className="flex flex-col justify-start items-start gap-8 opacity-0"
                            >
                                <h2 className="text-[30px] md:text-[55px] lg:text-[80px] text-white leading-none font-semibold mt-16">
                                    Somos tu {' '}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                        socio
                                    </span><br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                        digital {' '}
                                    </span> 
                                    <br />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                        estratégico
                                    </span> 
                                </h2>
                                <p className="text-xl w-[40%] text-balance">
                                    Al elegirnos como tu Socio Digital Estratégico para impulsar tu 
                                    negocio, el coste del desarrollo de tu nueva página web o 
                                    ecommerce lo asumimos nosotros.
                                </p>
                                <p className="text-xl">

                                </p>
                                <p className="text-xl">

                                </p>
                               
                                <ButtonCto>
                                    Saber más
                                </ButtonCto>
                                <div className='absolute top-24 right-24 flex flex-col gap-4 items-start justify-start '>
                                    <div className='flex justify-start items-center gap-1 bg-[#FFFFFF30] py-[8px] px-[16px] rounded-full w-full'>
                                        <span className='bg-[#0E1629] flex justify-center items-center rounded-full p-2 w-[40px] h-[40px]'>
                                            <img src="/flecha.svg" alt="logo" />
                                        </span>
                                        95% de sastifacción cliente
                                    </div>
                                    <div className='flex justify-start items-center gap-1 bg-[#FFFFFF30] py-[8px] px-[16px] rounded-full w-full'>
                                        <span className='bg-[#0E1629] flex justify-center items-center rounded-full p-2 w-[40px] h-[40px]'>
                                            <img src="/flecha.svg" alt="logo" />
                                        </span>
                                        Ayudamos a más de 100 empresas
                                    </div>
                                    <div className='flex justify-start items-center gap-1 bg-[#FFFFFF30] py-[8px] px-[16px] rounded-full w-full'>
                                        <span className='bg-[#0E1629] flex justify-center items-center rounded-full p-2 w-[40px] h-[40px]'>
                                            <img src="/flecha.svg" alt="logo" />
                                        </span>
                                        Metodología con garantía
                                    </div>
                                </div>
                            </div>
                            <img 
                                src="assets/images/cohete.webp" 
                                alt="choete" 
                                className="absolute -right-10 -bottom-24 z-100" 
                                // data-scroll 
                                // data-scroll-speed='.2' 
                                // loading="lazy"
                            />
                            {/* <Image src={'/assets/images/cohete.webp'} alt="choete" className="absolute -right-10 -bottom-24 z-100" fill /> */}
                        </div>
                    {/* </div> */}

                    {/* esta es la sección del problema */}
                    <div 
                        ref={contentSection3}
                        className='absolute flex flex-col justify-center items-center w-[400px] h-[400px] bg-slate-800 rounded-2xl opacity-0'
                        
                    >
                        <div className='text-white'>
                            <h2 className="text-8xl font-bold">{`0${activeNumber}`}</h2>
                          
                        </div>
                    </div>
                </section>                

                <section 
                    ref={section2b}
                    className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
                >
                </section>    
            
                <section
                    className='relativeflex flex-col w-full'
                >
                    <div className="fixed top-0 md:flex justify-start items-center  w-[40%] h-full p-[5%]">
                        <h2
                            ref={titleSection3}
                            className="hidden text-balance text-[80px] font-bold leading-none text-black w-full"
                        >
                            Estrategia,<br/>
                            acción, <br/>
                            {/* <SpanGradient> */}
                                resultados
                            {/* </SpanGradient> */}
                        </h2>
                    </div>

                    <div // section
                        ref={section3} 
                        className="relative flex items-center justify-center w-full h-screen bg-gray-100 -z-10"
                    >
                        <div 
                            className="flex justify-center items-center w-full h-full"
                        >
                            <div 
                                className='w-1/2 h-full'
                            >
                                {/* <h2 className="text-5xl text-black">Primera sección</h2> */}

                            </div>
                            <div 
                                className="relative flex justify-center items-center w-1/2 h-full overflow-hidden"
                            >
                                <Image
                                    src="/assets/images/image1.webp"
                                    fill
                                    alt="Imagen sección 1"
                                    style={{ objectFit: 'cover' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    <div ref={section3a} className="relative flex items-center justify-center w-full h-screen bg-gray-100 -z-10">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className='w-1/2 h-full'>
                            {/* <h2 className="text-5xl">Segunda sección</h2> */}

                            </div>
                            <div className="relative flex justify-center items-center w-1/2 h-full overflow-hidden">
                                <Image
                                    src="/assets/images/image2.webp"
                                    fill
                                    alt="Imagen sección 2"
                                    style={{ objectFit: 'cover' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    <div ref={section3b} className="relative flex items-center justify-center w-full h-screen bg-gray-100 -z-10">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className='w-1/2 h-full'>
                                {/* <h2 className="text-5xl">Tercera sección</h2> */}

                            </div>
                            <div className="relative flex justify-center items-center w-1/2 h-full overflow-hidden">
                                <Image
                                    src="/assets/images/image3.webp"
                                    fill
                                    alt="Imagen sección 3"
                                    style={{ objectFit: 'cover' }}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    <div ref={section3c} className="relative flex items-center justify-center w-full h-screen bg-gray-100 -z-10">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className='w-1/2 h-full'>
                                {/* <h2 className="text-5xl">Cuarta sección</h2> */}

                            </div>
                            <div className="relative flex justify-center items-center w-1/2 h-full overflow-hidden">
                            <Image
                                src="/assets/images/image4.webp"
                                fill
                                alt="Imagen sección 4"
                                style={{ objectFit: 'cover' }}
                                loading="lazy"
                            />
                            </div>
                        </div>
                    </div>

                    <div ref={section3d} className="relative flex items-center justify-center w-full h-screen bg-gray-100 -z-10">
                        <div className="flex justify-center items-center w-full h-full">
                            <div className='w-1/2 h-full'>
                            {/* <h2 className="text-5xl">Quinta sección</h2> */}

                            </div>
                            <div className="relative flex justify-center items-center w-1/2 h-full overflow-hidden">
                            <Image
                                src="/assets/images/image5.webp"
                                fill
                                alt="Imagen sección 5"
                                style={{ objectFit: 'cover' }}
                                loading="lazy"
                            />
                            </div>
                        </div>
                    </div>
                </section>

                <section 
                    // mirar la diferencia entre hidden y none, que hace que no funcinoes
                    className="flex flex-col justify-center items-center w-full h-screen bg-black"
                    >
                    <div 
                        ref={section4} 
                        className='hidden flex-col justify-center items-center w-full h-full'
                    >
                        <video 
                            autoPlay={true} 
                            playsInline={true} 
                            muted={true} 
                            loop={true} 
                            preload="auto" 
                            poster="/assets/images/image2.webp" 
                            className="w-full min-w-full h-full object-cover z-10"
                        >
                           
                            <source src="/assets/videos/intro-factoria-video.mp4" type="video/mp4" />
                        </video>
                      
                    </div>
                
                </section>
                <Soluciones />
                <section                  
                    className="flex flex-col justify-center items-center w-full h-screen bg-transparent"
                >
                    <div 
                        className='flex justify-center items-center w-full h-full bg-slate-200'
                    >
                       <video 
                            autoPlay={true} 
                            playsInline={true} 
                            muted={true} 
                            loop={true} 
                            preload="auto" 
                            poster="/assets/images/image2.webp" 
                            className="w-full min-w-full h-full object-cover z-10"
                        >
                           
                            <source src="/assets/videos/intro-factoria-video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </section>
                <TextReveal />
                <section                  
                    className="flex flex-col justify-center items-center w-full  bg-transparent"
                >
                    {/* <div 
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
                    </div> */}
                    <EquipoSection />
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
                {/* <section                  
                    className="flex flex-col justify-center items-center w-full bg-transparent"
                > */}
                    {/* <div 
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
                    </div> */}
                    <TestimonioSection />
                {/* </section> */}
                {/* <section                  
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
                </section> */}
                <ContactoSection />
            </main>
            <Footer />
        </div>
    )
}