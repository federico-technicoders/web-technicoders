import { ButtonCto, Footer, Section, SectionHero, SpanGradient, TitleSection } from "@/components"


export const metadata = {  
    title: "Contacto",
    description: "Contacto"
}

const Contacto = () => {
    return (
        <>
            <main className="min-h-screen bg-white">
                <SectionHero>
                    <div className="flex flex-col justify-center  lg:justify-start lg:items-start gap-8 w-full min-h-screen px-[5%] pt-[15%] pb-[10%] bg-[#0E1629]">
                        <h1 className="text-5xl lg:text-8xl font-semibold text-balance">
                            Tu próximo<br/> gran proyecto<br/> empieza con un<br/> &#39;<span className="text-[#06D5B9]">Hola</span>&#39;
                        </h1>
                        <ButtonCto>
                            Cuéntanos tu idea →
                        </ButtonCto>
                    </div>
                </SectionHero> 
                <Section>
                    <div className="flex flex-col items-center justify-start w-full bg-white text-black py-[10%] px-[5%]">
                        <div className="flex flex-col gap-16 w-[70%]">
                            <TitleSection
                                size='80px'
                                bold='font-semibold'
                            >
                                <SpanGradient>¡Cuéntanos</SpanGradient> tus ideas!
                            </TitleSection>
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
                                    <ButtonCto>Enviar</ButtonCto>
                                </div>
                            </form>
                        </div>
                    </div>
                </Section>             
            </main>
            <Footer />
        </>
    )
}

export default Contacto