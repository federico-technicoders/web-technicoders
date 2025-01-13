import { Main, SectionHero } from "@/components";
import Image from "next/image";


export default function SuccesStories() {
    return (
        <Main>
            <SectionHero>
                <div className="relative flex justify-center  lg:justify-start lg:items-start gap-8 w-full min-h-screen px-[5%] pt-[15%] pb-[10%] bg-[#0E1629]">
                    <div className="flex flex-col items-start justify-end gap-4 w-1/2 h-full ">
                        <span>
                            Página corporativa
                        </span>
                        <h1 className="text-5xl lg:text-8xl font-semibold text-balance">
                            Portic
                        </h1>
                        <p>
                            Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.
                        </p>
                        <div>
                            <span>Página corporativa</span>
                            <span>Diseño UX/UI</span>
                            <span>Tecnología</span>
                        </div>
                        <button>Ver proyecto</button>
                        <button>Ver website</button>
                    </div>
                    <div className="w-1/2 h-full">
                        {/* <Image 
                            src="/assets/images/casos-de-exito/portic.webp" 
                            className="w-full rounded-2xl"
                            alt="Image Portic" 
                            fill                            
                        /> */}
                        <img src="/assets/images/casos-de-exito/portic.webp" alt="Image Portic" className="w-full rounded-2xl" />
                    </div>
                </div>
            </SectionHero>
        </Main>
    )
}