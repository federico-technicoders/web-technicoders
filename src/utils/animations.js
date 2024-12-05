import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateHeroSection = (container) => {
    gsap.fromTo(container, 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    )
}

export const animateOtherSection = (container) => {
    gsap.fromTo(container, 
        { opacity: 0, x: -100 }, 
        { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }
    )
}



export const animateHeroSection1 = (container) => {
    gsap.fromTo(container, 
        { opacity: 0, y: -50 }, 
        { opacity: 1, y: 0, duration: 1, scrollTrigger: {
            trigger: container, // El contenedor es el punto de inicio
            start: "top center", // Inicia cuando el contenedor llega al centro de la pantalla
            end: "bottom center",
            scrub: 1 // Sincroniza la animación con el scroll
        }}
    )
}