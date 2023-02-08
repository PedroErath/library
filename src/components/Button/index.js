export default function Button ({children}) {
    return(
        <button className="w-full my-3 py-2 rounded-lg bg-indigo-400 text-white text-lg font-medium">
            {children}
        </button>
    )
}