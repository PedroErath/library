export default function TextInput({label, placeholder, setValue, type, $required}) {
    return (
        <div className="my-2">
            <label className="block text-lg font-medium">{label}</label>
            <input onChange={setValue} className= "border border-gray-300 rounded-md text-lg w-full px-5" placeholder={placeholder} type={type} required={$required}/>
        </div>
    )
}