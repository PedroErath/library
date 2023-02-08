export default function ButtonEditAndDelete () {
    return(
        <div className="flex justify-between mt-2">
            <button className="flex-1 bg-amber-400 rounded-l-md font-medium p-1">
                Editar
            </button>
            <button className="flex-1 bg-red-500 rounded-r-md font-medium p-1">
                Remover
            </button>
        </div>
    )
}