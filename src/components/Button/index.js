export default function Button ({children, onClick, type}) {
    return(
        <button type={type} onClick={onClick} className="w-full my-3 py-2 rounded-lg bg-indigo-400 text-white text-lg font-medium">
            {children}
        </button>
    )
}