import Link from "next/link"


const links = [
    {
        name: 'Servicios',
        description: 'esto es una descripción',
        path: '#'
    },
    {
        name: 'Casos de éxito',
        description: 'esto es una descripción',
        path: '/casos-de-exitos'
    },
    {
        name: 'Sobre nosotros',
        description: 'esto es una descripción',
        path: '#'
    },
    {
        name: 'Contácto',
        description: 'esto es una descripción',
        path: '/contacto'
    }
]

export const NavBar = () => {
    return (
        <header className="fixed flex top-8 left-0 items-center w-full justify-center z-50">
                <div className="flex items-center justify-start w-[90%] bg-[#0e1629bf] rounded-3xl px-[60px] py-2">
                <Link href="/"  className="w-[100px] lg:w-[191px]">
                    <img src="/assets/images/brand.webp" alt="logo" className="w-full" />

                </Link>
                    <nav className="w-[100%] flex items-center justify-around">
                        <ul className="hidden lg:flex gap-x-16 items-center justify-center text-xl">
                            {
                                links.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.path}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <a 
                        className="px-[20px] py-[5px] border-[1px] border-[#06D5B9] rounded-full"
                        // style={{border: '3px solid ' , borderRadius: '50%'}}
                    >
                        <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                            ¿Hablamos?
                        </span>
                    </a>
                </div>
        </header>
    )
}
