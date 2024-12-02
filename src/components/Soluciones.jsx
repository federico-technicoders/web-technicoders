'use client'

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger, ScrollToPlugin } from "gsap/all"
import { useGSAP } from "@gsap/react"
import { TitleSection } from "./ui/TitleSection/TitleSection"
import { SpanGradient } from "./ui/SpanGradient/SpanGradient"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const Soluciones = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);
    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                pinSpacing: true,
                start: 'top top',
                end: '+=2000',
                scrub: 1,
            },
        });

        timeline.addLabel('card1');

        timeline.from(card1Ref.current, {
            yPercent: 75,
            opacity: 0,
        })
        timeline.to(card1Ref.current, {
            xPercent: 0,
            opacity: 1,
        });

        timeline.from(card2Ref.current, {
            yPercent: 75,
            opacity: 0,
        });
        timeline.addLabel('card2');

        timeline.to(
            card1Ref.current,
            {
                scale: 0.95,
                xPercent: -0.5,
                opacity: 0.5,
            },
            '-=0.3'
        );

        timeline.to(card2Ref.current, {
            xPercent: 0,
            opacity: 1,
        });

        timeline.from(card3Ref.current, {
            yPercent: 75,
            opacity: 0,
        });
        timeline.addLabel('card3');

        timeline.to(
            card2Ref.current,
            {
                scale: 0.98,
                xPercent: -0.4,
                opacity: 0.6,
            },
            '-=0.3'
        );

        timeline.to(card3Ref.current, {
            xPercent: 0,
            opacity: 1,
        });
    })

    return (
        <section ref={sectionRef} className="relative flex justify-start items-start w-full  text-white bg-[#0E1629] -z-0">
            <span className="absolute text-[#FFFFFF30] uppercase top-0 right-0 text-[104px] font-bold">Transformación</span>
            <div className="flex justify-center items-start w-full text-white px-[5%] py-[20%]">
                {/* Mitad izquierda fija */}
                <article className="flex flex-col justify-start items-start gap-[20px] w-1/2 bg-blue h-screen">
                    {/* <h2 className="text-white text-[80px] font-bold">Nuestras soluciones</h2> */}
                    <TitleSection>
                        Nuestras <SpanGradient>soluciones</SpanGradient>
                    </TitleSection>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
                </article>

                {/* Mitad derecha con múltiples secciones */}
                <aside className="bg-blue text-[#ff98a2] font-slussen w-1/2 min-h-screen">
                    <div
                        ref={cardsRef}
                        className="h-screen w-full m-auto relative flex justify-start items-start"
                    >
                        <div
                            ref={card1Ref}
                            className="absolute w-[80%] h-[50vh] bg-[#f1f1f1] flex flex-col justify-center items-center rounded-[50px] mb-[50px] left-20 top-[2%] text-black"
                        >
                            <div className="flex flex-col justify-start items-start w-full h-full p-[5%]">
                                <span >Diseño y desarrollo web</span>
                                <h2 className="text-[32px] font-black uppercase ">
                                    Creamos la web que impulsa tu negocio
                                </h2>
                                <p className="text-[16px]">Te Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
                                <button>
                                    Saber más
                                </button>
                            </div>
                            <div className="flex justify-beetwen items-center flex-wrap w-full h-full text-black  p-[5%] gap-3">
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>

                            </div>
                        </div>
                        <div
                            ref={card2Ref}
                            className="absolute w-[80%] h-[50vh] bg-[#f1f1f1] flex flex-col justify-center items-center rounded-[50px] mb-[50px] left-20 top-[5%]"
                        >
                             <div className="flex flex-col justify-start items-start w-full h-full p-[5%]">
                                <span >Diseño y desarrollo web</span>
                                <h2 className="text-[32px] font-black uppercase ">
                                    Creamos la web que impulsa tu negocio
                                </h2>
                                <p className="text-[16px]">Te Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
                                <button>
                                    Saber más
                                </button>
                            </div>
                            <div className="flex justify-beetwen items-center flex-wrap w-full h-full text-black p-[5%] gap-3">
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>

                            </div>
                        </div>
                        <div
                            ref={card3Ref}
                            className="absolute w-[80%] h-[50vh] bg-[#f1f1f1] flex flex-col justify-center items-center rounded-[50px] mb-[50px] left-20 top-[8%]"
                        >
                             <div className="flex flex-col justify-start items-start w-full h-full p-[5%]">
                                <span >Diseño y desarrollo web</span>
                                <h2 className="text-[32px] font-black uppercase ">
                                    Creamos la web que impulsa tu negocio
                                </h2>
                                <p className="text-[16px]">Te Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
                                <button>
                                    Saber más
                                </button>
                            </div>
                            <div className="flex justify-beetwen items-center flex-wrap w-full h-full text-black p-[5%] gap-3">
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Software/apps</span>

                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}
