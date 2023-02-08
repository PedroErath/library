export default function TextInput({label, placeholder}) {
    return (
        <div className="my-2">
            <label className="block text-lg font-medium">{label}</label>
            <input className= "border border-gray-300 rounded-md text-lg w-full px-5" placeholder={placeholder} />
        </div>
    )
}