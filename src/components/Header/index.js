import { RiAccountCircleLine } from 'react-icons/ri'
import { ImBooks } from 'react-icons/im'
import { CgDarkMode } from 'react-icons/cg'
import { BiHeartCircle } from 'react-icons/bi'
import HeaderCart from '../HeaderCart'
import SearchBar from '../SearchBar'

export default function Header({ typeUserLogged }) {
    return (
        <header className="bg-amber-400 p-4" id='top'>
            <div className="max-w-screen-xl m-auto">
                <div className="flex flex-1 flex-wrap justify-center sm:justify-between">
                    <div className='flex items-center'>
                        <img src={require('../../assets/images/logo.png')} alt='logo library' />
                        <h1 className="text-5xl font-bold">LIBRARY</h1>
                    </div>
                    <div className='flex items-center ml-2'>
                        <p className='text-lg font-medium'>Login</p>
                        <RiAccountCircleLine size={50} />
                        {
                            typeUserLogged === 'C'
                                ? <BiHeartCircle size={50} />
                                : typeUserLogged === 'E'
                                    ? <ImBooks size={50} />
                                    : null
                        }
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