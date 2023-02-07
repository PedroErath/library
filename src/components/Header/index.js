import { RiAccountCircleLine } from 'react-icons/ri'
import { CgDarkMode } from 'react-icons/cg'
import HeaderCart from '../HeaderCart'
import SearchBar from '../SearchBar'

export default function Header({ logged }) {
    return (
        <header className="bg-amber-500 p-4">
            <div className="max-w-screen-xl m-auto">
                <div className="flex flex-1 justify-between">
                    <div className='flex items-center'>
                        <img src={require('../../assets/images/logo.png')} alt='logo library' />
                        <h1 className="text-5xl font-bold">LIBRARY</h1>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-lg'>Login</p>
                        <RiAccountCircleLine size={50} />
                        <CgDarkMode size={50} />
                    </div>
                </div>
                <div className='flex items-center justify-between mt-5 h-14'>
                    <SearchBar />
                    <HeaderCart />
                </div>
            </div>
        </header>
    )
}