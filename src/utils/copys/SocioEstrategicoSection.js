import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionPage } from "../SectionPage/SectionPage"

gsap.registerPlugin(ScrollTrigger)

export const SocioEstrategicoSection = () => {
    const sectionRef = useRef()

    useGSAP(()=>{
        const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
        const photos = gsap.utils.toArray(".desktopImage:not(:first-child)")
        const allPhotos = gsap.utils.toArray(".desktopImage")


        gsap.set(photos, { yPercent: 101 })
        ScrollTrigger.create({
            trigger: sectionRef.current,
            end: "bottom top",
            pin: true,
            scrub: 8,
            // markers: true
        });

        details.forEach((detail, index) => {
            let headline = detail.querySelector("h2")

            let animation = gsap.timeline()
                .to(photos[index], { yPercent: 0 })
                .set(allPhotos[index], { autoAlpha: 0 })

            ScrollTrigger.create({
                trigger: headline,
                start: "top 80%",
                end: "top 50%",
                animation: animation,
                scrub: true,
                // markers: true
            })
        })

    })

    return (
        <section  
            // ref={sectionRef}
            className="relative flex justify-start items-start w-full  text-white bg-[#0E1629] -z-0"
        >
            <div className="gallery flex w-full  bg-white text-black min-h-screen -z-20">
                <article className="relative flex flex-col  w-1/2 overflow-hidden ">
                    <div className="desktopContentSection flex flex-col gap-y-10 justify-center items-start w-full h-[952px]  px-[5%] py-[10%]">
                        <h2 className="text-[90px] leading-none font-semibold">
                            Pros del <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                programa
                            </span> 
                            
                        </h2>
                        <p className="text-xl">
                            Trabajamos a tu lado para impulsar tu marca y alcanzar tus metas. Se trata de un plan integral que maximiza cada oportunidad en el mundo digital.
                        </p>
                    
                        <button 
                            className="px-[20px] py-[5px] border-[2px] border-cyan-400 rounded-full"
                        >
                            <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                                Saber más
                            </span>
                        </button>
                    </div>
                   
                    
                                      
                </article>
                <aside className="desktopImages relative flex flex-col items-start justify-end gap-y-10 w-1/2  " ref={sectionRef}>                    
                    <div className="desktopImage absolute flex flex-col items-start justify-end gap-y-10 top-0 left-0 w-full h-screen px-[5%] py-16 z-0" >
                        <div className="flex flex-col justify-center items-start gap-5 z-10">
                            <h3 className="text-[32px] font-bold text-white leading-none z-10">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Tu equipo de marketing digital</span><br /> a tiempo completo
                            </h3>
                            <p className="text-xl text-white z-10">
                                Como tu partner digital estratégico, nos convertimos en tu equipo de marketing externo, sin la necesidad de aumentar tu personal. Nos encargamos de todo: desde la planificación de campañas hasta la gestión de redes sociales y la optimización de tu sitio web. Obtendrás acceso a expertos dedicados que trabajan en sinergia para alcanzar tus objetivos y potenciar tu marca.
                            </p>
                        </div>
                        <img src="/assets/images/image.webp" alt="imagen" className="absolute top-0 left-0 w-full h-screen -z-20"/>                        
                    </div>
                    <div className="desktopImage absolute flex flex-col items-start justify-end gap-y-10 top-0 left-0 w-full h-screen px-[5%] py-16 z-0" >
                        <div className="flex flex-col justify-center items-start gap-5 z-10">
                            <h3 className="text-[32px] font-bold text-white leading-none z-10">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Tu equipo de marketing digital</span><br /> a tiempo completo
                            </h3>
                            <p className="text-xl text-white z-10">
                                Como tu partner digital estratégico, nos convertimos en tu equipo de marketing externo, sin la necesidad de aumentar tu personal. Nos encargamos de todo: desde la planificación de campañas hasta la gestión de redes sociales y la optimización de tu sitio web. Obtendrás acceso a expertos dedicados que trabajan en sinergia para alcanzar tus objetivos y potenciar tu marca.
                            </p>
                        </div>
                        <img src="/assets/images/image.webp" alt="imagen" className="absolute top-0 left-0 w-full h-screen -z-20"/>                        
                    </div>
                    <div className="desktopImage absolute flex flex-col items-start justify-end gap-y-10 top-0 left-0 w-full h-screen px-[5%] py-16 z-0" >
                        <div className="flex flex-col justify-center items-start gap-5 z-10">
                            <h3 className="text-[32px] font-bold text-white leading-none z-10">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Tu equipo de marketing digital</span><br /> a tiempo completo
                            </h3>
                            <p className="text-xl text-white z-10">
                                Como tu partner digital estratégico, nos convertimos en tu equipo de marketing externo, sin la necesidad de aumentar tu personal. Nos encargamos de todo: desde la planificación de campañas hasta la gestión de redes sociales y la optimización de tu sitio web. Obtendrás acceso a expertos dedicados que trabajan en sinergia para alcanzar tus objetivos y potenciar tu marca.
                            </p>
                        </div>
                        <img src="/assets/images/image.webp" alt="imagen" className="absolute top-0 left-0 w-full h-screen -z-20"/>                        
                    </div>
                    <div className="desktopImage absolute flex flex-col items-start justify-end gap-y-10 top-0 left-0 w-full h-screen px-[5%] py-16 z-0" >
                        <div className="flex flex-col justify-center items-start gap-5 z-10">
                            <h3 className="text-[32px] font-bold text-white leading-none z-10">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Tu equipo de marketing digital</span><br /> a tiempo completo
                            </h3>
                            <p className="text-xl text-white z-10">
                                Como tu partner digital estratégico, nos convertimos en tu equipo de marketing externo, sin la necesidad de aumentar tu personal. Nos encargamos de todo: desde la planificación de campañas hasta la gestión de redes sociales y la optimización de tu sitio web. Obtendrás acceso a expertos dedicados que trabajan en sinergia para alcanzar tus objetivos y potenciar tu marca.
                            </p>
                        </div>
                        <img src="/assets/images/image.webp" alt="imagen" className="absolute top-0 left-0 w-full h-screen -z-20"/>                        
                    </div>
                  
                    
                    
                   
                    
                    
                    
                </aside>
                <div 
                    className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[107px] h-[127px] bg-black font-extrabold text-white text-4xl rounded-[30px] border border-cyan-400"
                >
                    1
                </div>
                <div 
                    className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[107px] h-[127px] bg-black font-extrabold text-white text-4xl rounded-[30px] border border-cyan-400"
                >
                    2
                </div>
                <div 
                    className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[107px] h-[127px] bg-black font-extrabold text-white text-4xl rounded-[30px] border border-cyan-400"
                >
                    3
                </div>
                <div 
                    className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[107px] h-[127px] bg-black font-extrabold text-white text-4xl rounded-[30px] border border-cyan-400"
                >
                    4
                </div>
            </div>
        </section>
    )
}
