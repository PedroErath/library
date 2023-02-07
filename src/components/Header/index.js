import { RiAccountCircleLine } from 'react-icons/ri'
import { CgDarkMode } from 'react-icons/cg'
import HeaderCart from '../HeaderCart'
import SearchBar from '../SearchBar'

export default function Header({ logged }) {
    return (
        <header className="bg-amber-400 p-4">
            <div className="max-w-screen-xl m-auto">
                <div className="flex flex-1 flex-wrap justify-center sm:justify-between">
                    <div className='flex items-center'>
                        <img src={require('../../assets/images/logo.png')} alt='logo library' />
                        <h1 className="text-5xl font-bold">LIBRARY</h1>
                    </div>
                    <div className='flex items-center ml-2'>
                        <p className='text-lg'>Login</p>
                        <RiAccountCircleLine size={50} />
                        <CgDarkMode size={50} />
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-center md:justify-between md:h-16 mt-5 md:mt-0 h-24'>
                    <SearchBar />
                    <HeaderCart />
                </div>
            </div>
        </header>
    )
}