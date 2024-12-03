'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules' 

import './TestimonioSection.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { SpanGradient } from '../ui/SpanGradient/SpanGradient'
import { TitleSection } from '../ui/TitleSection/TitleSection';
import Image from 'next/image';


export const TestimonioSection = () => {
    return (
        <section  className="relative flex justify-start items-start w-full min-h-screen text-white -z-0">
            <div className="abolute top-0 left-0 flex flex-col items-center justify-start w-full h-full px-[5%] py-[10%] text-white text-center bg-[#0E1629]">
                <TitleSection><SpanGradient>Qué dicen</SpanGradient> de nosotros?</TitleSection>  
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="w-full"
                >
                    <SwiperSlide
                        // className='flex justify-center items-center w-full'
                    >
                        <div className='flex justify-start items-start gap-3 w-[90%] h-[653px] mt-16 text-black'>
                            <div className="w-1/2 h-full rounded-3xl">
                                <img src="/assets/images/testimonio.webp" alt="logo" className=" w-full h-full rounded-3xl" loading="lazy"/>
                            </div>
                            <div className="flex flex-col justify-start items-center gap-5 w-1/2 h-full rounded-3xl bg-white p-[3%]">
                                <div className='mt-16'>
                                    <Image src={'/assets/images/profile-canguu.png'} alt="logo" width={104} height={104} loading="lazy"/>
                                </div>
                                <div className='text-black'>
                                    <h3 className='font-bold'>Creación marketplace de Canguu</h3>
                                    <p>
                                        Trabajar con Technicoders ha sido clave para aumentar nuestra visibilidad digital. En solo tres meses, logramos un 40% más de visitas orgánicas y un mejor posicionamiento en buscadores y redes sociales. El equipo entendió perfectamente nuestras 
                                    </p>
                                </div>
                                <div>
                                    ⭐️⭐️⭐️⭐️⭐️
                                    <p>Nombre y Apellido - Cargo</p>
                                </div>
                                <div className="flex justify-end items-center flex-wrap w-full h-full text-black  gap-2">
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Branding</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">Marketplace</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">SEO</span>
                                <span className="font-bold bg-[#00000010] rounded-[50px] p-3 text-[#00000030]">SEM</span>
                               
                            </div>
                            </div>

                        </div>
                    </SwiperSlide>
                   
                  
                   
                   
                    
                    
                    
                  
                    
                </Swiper>
                
            </div>
        </section>
    )
}
