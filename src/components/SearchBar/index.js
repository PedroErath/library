import { CgSearch } from 'react-icons/cg'

export default function SearchBar() {
    return (
        <div className='flex'>
            <select className='h-7 px-1 md:px-3 rounded-l-xl text-lg border border-black'>
                <option>Livro</option>
                <option>Autor</option>
                <option>Editora</option>
            </select>
            <div className='relative flex items-center'>
                <input className='h-7 w-30 md:w-96 md:px-3 px-1 rounded-r-xl text-lg border border-black' placeholder='O que você procura?' />
                <CgSearch size={20} className='absolute right-2' />
            </div>
        </div>
    )
}