'use client'
import { useRef} from "react"
// import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BlurredCircle } from "@/components"


export default function Contacto() {
    const sectionFormRef = useRef(null)
    const formRef = useRef(null)
    const divSectionRef = useRef(null)
    
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        const sectionFormRefCurrent = sectionFormRef.current
        const formRefCurrent = formRef.current   
        // const divSectionRefCurrent = divSectionRef.current   

        gsap.set(sectionFormRefCurrent, {           
            opacity: 0,
            zIndex: -1,
        })

        gsap.set(formRefCurrent, {
            y: "100%", 
            display: "none",
            zIndex: -1        
        })

        
        gsap.timeline({
            scrollTrigger: {
                trigger: formRefCurrent,
                start: "-75% 50%",
                end: "-75% top",                
                markers: true,
                scrub: true,
                // pin: true
            }
        })
        
        gsap.timeline({
            scrollTrigger: {
                trigger: formRefCurrent,
                start: "-75% 50%",
                end: "-75% top",                
                markers: true,
                scrub: true,
                // pin: true
            }
        })
        .to(formRefCurrent, {
            width: "100%",
            borderRadius: "0",
            duration: 0.1
        })       
        // para cambio de rutas evento de limpieza
        // ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        ScrollTrigger.refresh() 
    })

    const handleShowForm = () => {
        const sectionFormRefCurrent = sectionFormRef.current
        const formRefCurrent = formRef.current

        gsap.to(divSectionRef.current, {
            position: "fixed",            
            ease: "power4.out",
        })

        gsap.to(sectionFormRefCurrent, {
            opacity: 1,
            duration: 1,
            zIndex: 0,
            ease: "power4.out",
        })
        

        gsap.to(formRefCurrent, {
            display: "flex",
            y: '25%',
            borderRadius: "20px 20px 0 0",
            duration: 0.5,
            zIndex: 1,
            ease: "power2.out",
        })        
    }

    const handleCloseForm = () => {
        const sectionFormRefCurrent = sectionFormRef.current
        const formRefCurrent = formRef.current

        gsap.to(divSectionRef.current, {
            position: "relative",                   
            ease: "power4.out",
        })
       
        gsap.to(sectionFormRefCurrent, {
            opacity: 0,
            duration: 2,
            zIndex: -1,
            ease: "power4.out"
        })

        gsap.to(formRefCurrent, {
            y: "100%",
            duration: 0.1,
            zIndex: -1,
            ease: "power4.out",

            onComplete: () => {
                // Ocultar el formulario después de la animación
                
                gsap.set(formRefCurrent, {
                    display: "none",
                },'>')
              
            },
        })

       
    }

    return (
        <>
            <div 
                 ref={divSectionRef}
                className="relative w-full min-h-screen bg-black"
            >
                <main
                   
                >
                    {/* <section className="flex flex-col items-center justify-center w-full h-screen">
                        <h1>Contacto hero</h1>
                        <button onClick={handleShowForm}>Empezar con el formulario</button>
                    </section> */}

                    <section className="flex flex-col items-center justify-center w-full ">
                        <div className="relative flex flex-col justify-center  lg:justify-start lg:items-start gap-8 w-full min-h-screen px-[5%] pt-[15%] pb-[10%] bg-[#0E1629]">
                            <h1 className="text-5xl lg:text-8xl font-semibold text-balance">
                                Tu próximo<br/> gran proyecto<br/> empieza con un<br/> &#39;<span className="text-[#06D5B9]">Hola</span>&#39;
                            </h1>
                            <button 
                                className="px-[20px] py-[10px] border-[2px] border-teal-400 rounded-full"    
                                onClick={handleShowForm}        
                            >
                                Cuéntanos tu idea →
                            </button>
                        </div>
                        {/* <BlurredCircle /> */}
                        <BlurredCircle
                            width={100}
                            height={150}
                            position={{ top: -125, left: 0 }}
                            // gradient={['blue-400', 'purple-600']}
                            // opacity={30}
                            // blur="3xl"
                        />
                    </section> 
                    
                </main>
                
            </div>   
            <section 
                ref={sectionFormRef}
                className="absolute top-0 left-0 flex flex-col items-center justify-center w-full min-h-screen bg-[#FFFFFF20]"
            >            
                <div 
                    ref={formRef}
                    className="flex items-center justify-center w-[95%] h-[200vh] bg-white text-black"
                >
                    <div 
                        className="absolute top-4 right-4 font-bold text-3xl cursor-pointer"
                        onClick={handleCloseForm} 
                    > 
                        X 
                    </div>
                    <div className="flex flex-col gap-16 w-[70%]">
                        <h2
                            size='80px'
                            bold='font-semibold'
                        >
                            <span>¡Cuéntanos</span> tus ideas!
                        </h2>
                        {/* <p>¿Tienes alguna pregunta? Estamos aquí para ayudarte. Completa el formulario y nos pondremos<br/> en contacto contigo lo antes posible. ¡Nos encantaría saber de ti!</p> */}
                        <form className="flex flex-col gap-12 w-full">
                            <input 
                                type="text" 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000]"
                                placeholder="Nombre"
                            />

                            <input 
                                type="email" 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000] mt-4"
                                placeholder="E-mail"
                            />

                            <div className="flex flex-col gap-4">
                                <input  
                                    type="text"                 
                                    className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000] mt-4"
                                    placeholder="Teléfono"
                                />
                                <div className="flex">
                                    <label className="text-[#00000080]">Contactar por: </label>
                                    <input type="checkbox" />
                                </div>
                            </div>
                

                            <select 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000] mt-4"
                            >
                                {/* elija una opción  */}
                                <option value="0">Asunto</option>
                                <option value="1">Opción 1</option>
                                <option value="2">Opción 2</option>
                                <option value="3">Opción 3</option>
                                <option value="4">Opción 4</option>
                            </select>
                            
                            <textarea 
                                type="text" 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000]"
                                placeholder="Escribe tu mensaje"
                            >

                            </textarea>
                            {/* input checkbox⁄ */}
                            <label className="flex items-center space-x-2">
                            
                                <input 
                                    type="checkbox" 
                                    className="w-5 h-5 border-2"
                                />
                            <span className="">He leído y aceptro el <a href="#">Aviso legal</a> y <a href="#">Política de privacidad</a></span>
                            </label>
                            <div className=" w-full mt-12">
                                <button
                                    className="border border-black px-4 py-2 rounded-xl hover:bg-black hover:text-white"
                                    onClick={handleCloseForm}
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* <section
                ref={sectionFormRef}
            >
                <div 
                     ref={formRef}
                    className="flex flex-col items-center justify-start w-full bg-white text-black py-[10%] px-[5%]"
                >
                    <div className="flex flex-col gap-16 w-[70%]">
                        <h2
                            size='80px'
                            bold='font-semibold'
                        >
                            <span>¡Cuéntanos</span> tus ideas!
                        </h2>
                        
                        <form className="flex flex-col gap-12 w-full">
                            <input 
                                type="text" 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000]"
                                placeholder="Nombre"
                            />

                            <input 
                                type="email" 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000] mt-4"
                                placeholder="E-mail"
                            />

                            <div className="flex flex-col gap-4">
                                <input  
                                    type="text"                 
                                    className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000] mt-4"
                                    placeholder="Teléfono"
                                />
                                <div className="flex">
                                    <label className="text-[#00000080]">Contactar por: </label>
                                    <input type="checkbox" />
                                </div>
                            </div>
                

                            <select 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000] mt-4"
                            >
                              
                                <option value="0">Asunto</option>
                                <option value="1">Opción 1</option>
                                <option value="2">Opción 2</option>
                                <option value="3">Opción 3</option>
                                <option value="4">Opción 4</option>
                            </select>
                            
                            <textarea 
                                type="text" 
                                className="bg-transparent border-b-2 border-[#00000060] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#000]"
                                placeholder="Escribe tu mensaje"
                            >

                            </textarea>
                           
                            <label className="flex items-center space-x-2">
                            
                                <input 
                                    type="checkbox" 
                                    className="w-5 h-5 border-2"
                                />
                            <span className="">He leído y aceptro el <a href="#">Aviso legal</a> y <a href="#">Política de privacidad</a></span>
                            </label>
                            <div className=" w-full mt-12">
                                <buttom
                                    onClick={handleCloseForm}
                                >
                                    Enviar
                                </buttom>
                            </div>
                        </form>
                    </div>
                </div>
            </section>   */}
        </>
    )
}
