'use client'
import { ButtonCto, ContactoSection, Main, Section, SectionHero, SpanGradient, TitleSection } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// array de proyectos para mostrar en la sección de proyectos con sus respectivos datos (incluidos sector y categoría)
const proyectos = [
    // crear 15 ejemplos con esta estructura pero con los datos de los sectores y categorías reales puesto mas abajo {
    //     id: 1,
    //     name: "Oliva",
    //     image: "/assets/images/casos-de-exito/oliva.webp",
    //     category: "ecommerce",
    //     sector: "tiendas online",
    //     description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
    //     icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    // },
    {
        id: 1,
        name: "Oliva",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "tiendas online",
        sector: "Ocio y moda",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 2,
        name: "Portic",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "webs corporativas",
        sector: "servicios",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 3,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "webs corporativas",
        sector: "alimentación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 4,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "one page",
        sector: "alimentación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 5,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "one page",
        sector: "alimentación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 6,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "marketplace",
        sector: "alimentación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 7,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "marketplace",
        sector: "alimentación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 8,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "plataformas e-learning",
        sector: "alimentación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 9,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "plataformas e-learning",
        sector: "alimentación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 10,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "servicios",
        sector: "alimentación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 11,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "servicios",
        sector: "alimentación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 12,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "tienas online",
        sector: "alimentación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 13,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "servicios",
        sector: "alimentación",
        description: "Rediseño web con un estilo tecnológico, creando una experiencia digital atractiva y conctada con los usuarios.",
        icon: "/assets/images/iconos-empresas/oliva-logo.svg"
    },
    {
        id: 14,
        name: "Casa de la cerveza",
        image: "/assets/images/casos-de-exito/oliva.webp",
        category: "webs corporativas",
        sector: "alimentación",
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
                <div 
                    // className="relative flex flex-col md:flex-row justify-start items-start lg:justify-start lg:items-end gap-24 md:gap-8 w-full min-h-screen px-[5%] pt-[15%] pb-[5%] bg-[#0E1629]"
                    className="relative flex flex-col md:flex-row justify-start items-start lg:justify-start lg:items-end gap-24 md:gap-8 w-full min-h-screen px-[5%] pt-[15%] pb-[5%] bg-[#0E1629] "
                >
                    <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2 h-full mt-24 md:mt-0 z-10">
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
                    <div className="flex flex-col items-start justify-center gap-4 md:gap-28 w-full md:w-1/2 h-full z-10">
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
                    <div className="absolute top-0 left-0 w-full h-full -z-0">
                        <img src="/assets/images/casos-de-exito/portic-header.webp" alt="Portic header" className="" />
                    </div>
                </div>
            </SectionHero>
            <Section>
                <div className="flex flex-col items-start justify-start gap-20 w-full min-h-screen bg-[#0E1629] p-[5%]">
                        {/* dos select para filtar por proyectos, con dos filter uno para sector y el otro para categorías */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <select 
                                className="px-4 py-2 bg-[#1A2438] text-[#93A2B8] rounded-[50px]"
                                onChange={handleChangeSector}
                            >
                                <option value="all">Todos los sectores</option>
                                <option value="abogados">Abogados</option>
                                <option value="alimentacion">Alimentación</option>
                                <option value="arquitectura y construcción">Arquitectura y construcción</option>
                                <option value="coaching">Coaching</option>
                                <option value="economia y finanza">Economía y finanza</option>
                                <option value="estetica y belleza">Estética y belleza</option>
                                <option value="eventos">Eventos</option>
                                <option value="fabricantes, distribuidores e instaladores">Fabricantes, distribuidores e instaladores</option>
                                <option value="hogar y jardin">Hogar y jardín</option>
                                <option value="hosteleria y turismo">Hostelería y turismo</option>
                                <option value="informatica y tecnologia">Informatica y tecnología</option>
                                <option value="limpieza y mantenimiento">Limpieza y mantenimiento</option>
                                <option value="medicina y salud">Medicina y salud</option>
                                <option value="motor y transporte">Motor y transporte</option>
                                <option value="ocio y moda">Ocio y moda</option>
                                <option value="servicios">Servicios</option>
                                <option value="ventas">Ventas</option>
                            </select>
                            <select 
                                className="px-4 py-2 bg-[#1A2438] text-[#93A2B8] rounded-[50px]"
                                onChange={handleChangeCategory}
                            >
                                <option value="all">Todas las categorías</option>
                                <option value="marketplace">Marketplace</option>
                                <option value="one page">One page</option>
                                <option value="plataformas e-learning">Plataformas e-learning</option>
                                <option value="servicios">Servicios</option>
                                <option value="tiendas online">Tiendas online</option>
                                <option value="webs corporativas">Webs corporativas</option>
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
                                            <img src={proyecto.icon} alt={proyecto.name} className="w-[200px]" />
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