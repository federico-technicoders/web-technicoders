'use client'
import { ButtonCto, ContactoSection, Main, Section, SectionHero, SpanGradient, TitleSection } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// array de proyectos para mostrar en la sección de proyectos con sus respectivos datos (incluidos sector y categoría)
const proyectos = [
    {
        id: 1,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "ecommerce",
        sector: "tiendas online",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 2,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "marketplace",
        sector: "tiendas online",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 3,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "academia online",
        sector: "educación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 4,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "sitio Web",
        sector: "corporativo",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 5,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "portfolio",
        sector: "personal",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 6,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "blog",
        sector: "corporativo",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 12,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "ecommerce",
        sector: "tiendas online",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 7,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "marketplace",
        sector: "tiendas online",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 8,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "academia online",
        sector: "educación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 9,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "sitio Web",
        sector: "corporativo",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 10,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "portfolio",
        sector: "personal",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 11,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "blog",
        sector: "corporativo",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    }
]



export default function SuccesStories() {
    const [sector, setSector] = useState('all')
    const [category, setCategory] = useState('all')

    // función para cambiar el valor del sector
    const handleChangeSector = (e) => {
        setSector(e.target.value)
    }

    // función para cambiar el valor de la categoría
    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }
    console.log('sector: ', sector)
    console.log('categoría: ', category)

    return (
        <Main>
            <SectionHero>
                <div className="relative flex justify-center  lg:justify-start lg:items-end gap-8 w-full h-full px-[5%] pt-[15%] pb-[5%] bg-[#0E1629]">
                    <div className="flex flex-col items-start justify-center gap-4 w-1/2 h-full">
                        <span className="text-[#06D5B9]">
                            Página corporativa
                        </span>
                        <h1 className="text-5xl lg:text-8xl font-semibold text-balance">
                            Portic
                        </h1>
                        <p>
                            Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.
                        </p>
                        <div className="flex gap-4 font-semibold">
                            <span>Página corporativa </span>
                            <span>Diseño UX/UI </span>
                            <span>Tecnología</span>
                        </div>
                        <div className="flex gap-4">
                            <ButtonCto>
                                Ver proyecto     
                            </ButtonCto>
                            <button className="px-6 py-2 bg-[#06D5B9] rounded-[50px] text-[20px] w-[153px] text-[#0E1629]">
                                Ver website
                            </button>                          
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-28 w-1/2 h-full">
                        {/* <Image 
                            src="/assets/images/casos-de-exito/portic.webp" 
                            className="w-full rounded-2xl"
                            alt="Image Portic" 
                            fill                            
                        /> */}
                        <img src="/assets/images/casos-de-exito/portic.webp" alt="Image Portic" className="w-full rounded-2xl" />
                        <div className="flex gap-4 text-[#93A2B8] w-full items-start justify-end">
                            <span className="flex gap-2 px-[16px] py-[8px] bg-[#FFFFFF30] rounded-[50px]">
                                <img src="/assets/images/iconos-proyectos/rocket.svg" alt="icon star" className="w-[20px]" />
                                Recién llegado
                            </span>
                            <span className="flex gap-2 px-[16px] py-[8px] bg-[#FFFFFF30] rounded-[50px]">
                                <img src="/assets/images/iconos-proyectos/arrows.svg" alt="icon star" className="w-[20px]" />
                                Diseño y desarrollo
                            </span>
                        </div>
                    </div>
                </div>
            </SectionHero>
            <Section>
                <div className="flex flex-col items-start justify-start gap-20 w-full min-h-screen bg-[#0E1629] p-[5%]">
                        {/* dos select para filtar por proyectos, con dos filter uno para sector y el otro para categorías */}
                        <div className="flex gap-4">
                            <select 
                                className="px-4 py-2 bg-[#1A2438] text-[#93A2B8] rounded-[50px]"
                                onChange={handleChangeSector}
                            >
                                <option value="all">Todos los sectores</option>
                                <option value="educacion">Educación</option>
                                <option value="corporativo">Corporativo</option>
                                <option value="personal">Personal</option>
                            </select>
                            <select 
                                className="px-4 py-2 bg-[#1A2438] text-[#93A2B8] rounded-[50px]"
                                onChange={handleChangeCategory}
                            >
                                <option value="all">Todas las categorías</option>
                                <option value="ecommerce">Ecommerce</option>
                                <option value="academia online">Academia Online</option>
                                <option value="sitio Web">Sitio Web</option>
                                <option value="portfolio">Portfolio</option>
                                <option value="blog">Blog</option>
                            </select>
                        </div>  
                    {/* mostrar todos los proyectos con un map de los proyectos */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {sector === 'all' && category === 'all' ?
                            proyectos.map((proyecto) => (
                                <Link href={'#'} key={proyecto.id}>
                                    <div  className="relative flex flex-col items-start justify-start gap-4 rounded-2xl">
                                            <img src={proyecto.image} alt={proyecto.name} className="w- h-full rounded-2xl" />
                                            <div className="absolute flex flex-col items-center justify-end w-full h-full gap-4">                                            
                                                {/* <h3 className="text-2xl font-semibold text-balance pb-8">
                                                    {proyecto.name}
                                                </h3>                                  */}
                                                <img src={proyecto.icon} alt={proyecto.name} className="w-[200px]" />
                                            </div>

                                    </div>
                                </Link>
                            ))
                            :
                            proyectos.filter((proyecto) => {
                                if (sector === 'all' && category !== 'all') {
                                    return proyecto.category === category
                                } else if (sector !== 'all' && category === 'all') {
                                    return proyecto.sector === sector
                                } else {
                                    return proyecto.sector === sector && proyecto.category === category
                                }
                            }).map((proyecto) => (
                                <Link href={'#'} key={proyecto.id}>
                                    <div  className="relative flex flex-col items-start justify-start gap-4 rounded-2xl">
                                            <img src={proyecto.image} alt={proyecto.name} className="w- h-full rounded-2xl" />
                                            <div className="absolute flex flex-col items-center justify-end w-full h-full gap-4">                                            
                                                <h3 className="text-2xl font-semibold text-balance pb-8">
                                                    {proyecto.name}
                                                </h3>                                        
                                            </div>

                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>                
            </Section>
            <ContactoSection>
                <TitleSection
                    size='80px'
                    bold='font-semibold'
                >
                    <SpanGradient>Transformamos ideas<br/>en resultado</SpanGradient>
                    
                </TitleSection>
            </ContactoSection>
        </Main>
    )
}