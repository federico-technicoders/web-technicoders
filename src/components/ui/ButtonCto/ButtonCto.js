
export const ButtonCto = ({children}) => {
    return (
        <button 
            className="px-[20px] py-[10px] border-[2px] border-teal-400 rounded-full"            
        >
            <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
                {children}
            </span>
        </button>
    )
}

