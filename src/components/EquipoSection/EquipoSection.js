'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import './EquipoSection.css'
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { ButtonCto } from '../ui/ButtonCto/ButtonCto';
import { SpanGradient } from '../ui/SpanGradient/SpanGradient';
import { TitleSection } from '../ui/TitleSection/TitleSection';

const equipo = [
    {
        name: 'Federico Osandón',
        image: '/assets/images/personal/personal.jpg',
        description: 'Desarrollador'
    },
    {
        name: 'Federico Osandón',
        image: '/assets/images/personal/personal1.png',
        description: 'Desarrollador'
    },
    {
        name: 'Federico Osandón',
        image: '/assets/images/personal/personal2.png',
        description: 'Desarrollador'
    },
    {
        name: 'Federico Osandón',
        image: '/assets/images/personal/personal3.png',
        description: 'Desarrollador'
    }
]

const Empleado = ({item}) => {
    return (
        <div className="relative h-[500px]">
            <img src={item.image} alt="logo" className="w-ful h-full" loading="lazy"/>
            <div className="absolute bottom-8 flex flex-col justify-center items-center gap-2 w-full">
                <h3 className="font-semibold">Federico Osandón</h3>
                <p>Desarrollador</p>
            </div>
        </div>
    )
}

const EmpleadosList = ({equipo}) => {
    return (
        <div className="flex justify-around items-start w-full">
            {equipo.map((item, index) => (
                <SwiperSlide key={index}>
                    <Empleado  item={item} />
                </SwiperSlide>
            ))}                    
        </div>
    )
}

export const EquipoSection = () => {
    return (
        <>
            <div className="flex flex-col gap-8 items-center justify-center w-full  py-[10%] bg-[#0E1629]">
                <TitleSection>Somos el <SpanGradient>equipo</SpanGradient></TitleSection>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    freeMode={true}
                  
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className=""
                >
                    {/* <EmpleadosList equipo={equipo} /> */}
                    <SwiperSlide>
                        <div className="relative  h-[500px]">
                            <img src='/assets/images/personal/personal.jpg' alt="logo" className="w-ful h-full rounded-xl" loading="lazy"/>
                            <div className="absolute bottom-8 flex flex-col justify-center items-center gap-2 w-full">
                                <h3 className="font-semibold">Federico Osandón</h3>
                                <p>Desarrollador</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative  h-[500px]">
                            <img src='/assets/images/personal/personal.jpg' alt="logo" className="w-ful h-full rounded-xl" loading="lazy"/>
                            <div className="absolute bottom-8 flex flex-col justify-center items-center gap-2 w-full">
                                <h3 className="font-semibold">Federico Osandón</h3>
                                <p>Desarrollador</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative  h-[500px]">
                            <img src='/assets/images/personal/personal.jpg' alt="logo" className="w-ful h-full rounded-xl" loading="lazy"/>
                            <div className="absolute bottom-8 flex flex-col justify-center items-center gap-2 w-full">
                                <h3 className="font-semibold">Federico Osandón</h3>
                                <p>Desarrollador</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative  h-[500px]">
                            <img src='/assets/images/personal/personal.jpg' alt="logo" className="w-ful h-full rounded-xl" loading="lazy"/>
                            <div className="absolute bottom-8 flex flex-col justify-center items-center gap-2 w-full">
                                <h3 className="font-semibold">Federico Osandón</h3>
                                <p>Desarrollador</p>
                            </div>
                        </div>

                    </SwiperSlide>
                          
                </Swiper>
                <ButtonCto>Conoce Más Sobre Nosotros</ButtonCto>
            </div>
            
                
                
        </>
    )
}
