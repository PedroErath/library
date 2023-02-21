import {AiOutlineCloseCircle} from 'react-icons/ai'

export default function ReturnMessage({children, error, setValue}) {
    return(
        <div className= "relative flex justify-center items-center bg-red-300 p-3 rounded-md text-lg font-medium">
            <button onClick={setValue} className="absolute right-1 top-1">
                <AiOutlineCloseCircle />
            </button>
            {children}
        </div>
    )
}   