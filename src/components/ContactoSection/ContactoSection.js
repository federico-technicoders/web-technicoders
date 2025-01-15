
import { ButtonCto } from "../ui/ButtonCto/ButtonCto"
import { SpanGradient } from "../ui/SpanGradient/SpanGradient"
import { TitleSection } from "../ui/TitleSection/TitleSection"


export const ContactoSection = ({children}) => {
    //bg-[#0E1629]
    return (
        <section  className="relative flex justify-start items-start w-full text-white  z-10">
            <div className="flex flex-col justify-start items-center w-full px-[5%] py-[10%] bg-[#0E1629] z-10">
                <div className="flex flex-col gap-16 w-[65%]">
                { children }
                <p>¿Tienes alguna pregunta? Estamos aquí para ayudarte. Completa el formulario y nos pondremos<br/> en contacto contigo lo antes posible. ¡Nos encantaría saber de ti!</p>
                    <form>
                        <input 
                            type="text" 
                            className="bg-transparent border-b-2 border-[#06D5B9] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#FFF]"
                            placeholder="Nombre"
                        />
                        
                        <input 
                            type="email" 
                            className="bg-transparent border-b-2 border-[#06D5B9] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#FFF] mt-4"
                            placeholder="E-mail"
                        />
                        
                        <textarea 
                            type="text" 
                            className="bg-transparent border-b-2 border-[#06D5B9] focus:outline-none focus:border-blue-500 w-full py-2 placeholder:text-[#FFF] mt-24"
                            placeholder="Escribe tu mensaje"
                        >

                        </textarea>
                        {/* input checkbox⁄ */}
                        <label className="flex items-center space-x-2">
                        
                        <input 
                            type="checkbox" 
                            className="w-5 h-5 border-2 border-gray-400 bg-transparent appearance-none checked:border-blue-500 checked:bg-transparent focus:outline-none"
                        />
                        <span className="">He leído y aceptro el <a href="#">Aviso legal</a> y <a href="#">Política de privacidad</a></span>
                        </label>
                        <div className=" w-full mt-12">
                            <ButtonCto>Enviar</ButtonCto>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
