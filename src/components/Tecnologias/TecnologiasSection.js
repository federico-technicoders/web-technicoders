'use Client'
import MarqueeBg from './MarqueeBg'
import Marquee from './Marquee'

import gsapIcon from '@/assets/technologyIcons/gsap.svg'
import nextIcon from '@/assets/technologyIcons/next.svg'
import openGLIcon from '@/assets/technologyIcons/opengl.svg'
import reactIcon from '@/assets/technologyIcons/react.svg'
import tailwindIcon from '@/assets/technologyIcons/tailwind.svg'
import threeIcon from '@/assets/technologyIcons/three.svg'
import typescriptIcon from '@/assets/technologyIcons/typescript.svg'

const ICONS = [gsapIcon, nextIcon, openGLIcon, reactIcon, tailwindIcon, threeIcon, typescriptIcon]

const elements = [...ICONS, ...ICONS]

export const TecnologiasSection = () => {
    return (         
        
        <section 
            className="relative flex justify-center items-center w-full h-screen z-0 bg-black"
        >
            <div className="flex flex-col justify-center items-center w-1/2 h-full ">
                <Marquee ELEMENTS={elements} />
                <Marquee ELEMENTS={elements} />
                <Marquee ELEMENTS={elements} />        
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 h-full ">
                <MarqueeBg ELEMENTS={elements} />
                <MarqueeBg ELEMENTS={elements} />
                <MarqueeBg ELEMENTS={elements} />        
            </div>
            <div className="absolute w-[300px] h-[300px]">                
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white border-solid rounded-full w-[300px] h-[300px] z-10 bg-gradient-to-r from-teal-400 to-cyan-400"
                >
                </div>

            
                <div 
                    className="absolute inset-0 border-2 border-white rounded-full animate-ping-short opacity-70"
                    style={{ animationDelay: '0s' }}
                >
                </div>

            
                <div 
                    className="absolute inset-0 border-2 border-white rounded-full animate-ping-short opacity-50"
                    style={{ animationDelay: '1s' }}
                >
                </div>
            </div>
            <div className="absolute flex justify-center items-center z-20">
                <h2 className="text-4xl font-extrabold uppercase">Tecnologías</h2>
            </div>
        </section>
   
    )
}
