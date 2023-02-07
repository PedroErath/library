import { useRef } from 'react'
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'

export default function Carousel() {

    const carousel = useRef(null)

    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    return (
        <section className="hidden sm:block bg-[url('./assets/images/background-carousel.png')] bg-no-repeat bg-cover bg-center h-[32rem] w-full px-4">
            <div className="h-full backdrop-blur-md">
                <div className='flex h-full max-w-screen-xl m-auto justify-between items-center'>
                    <button onClick={handleLeftClick}>
                        <BsArrowLeftCircle size={50} color='rgba(141, 141, 141, 0.5)' />
                    </button>
                    <div className='flex w-full mx-5 justify-between overflow-x-auto scroll-smooth relative scrollbar-hide' ref={carousel}>
                        <div className='w-72 mx-11 text-center flex-none'>
                            <img
                                src={require('../../assets/images/book-1.jpg')}
                                alt='Capa do livro'
                            />
                            <h2 className='mt-3 text-white text-lg'>PSALMS</h2>
                        </div>
                        <div className='w-72 mx-11 text-center flex-none'>
                            <img
                                src={require('../../assets/images/book-1.jpg')}
                                alt='Capa do livro'
                            />
                            <h2 className='mt-3 text-white text-lg'>PSALMS</h2>
                        </div>
                        <div className='w-72 mx-11 text-center flex-none'>
                            <img
                                src={require('../../assets/images/book-1.jpg')}
                                alt='Capa do livro'
                            />
                            <h2 className='mt-3 text-white text-lg'>PSALMS</h2>
                        </div>
                        <div className='w-72 mx-11 text-center flex-none'>
                            <img
                                src={require('../../assets/images/book-1.jpg')}
                                alt='Capa do livro'
                            />
                            <h2 className='mt-3 text-white text-lg'>PSALMS</h2>
                        </div>
                        <div className='w-72 mx-11 text-center flex-none'>
                            <img
                                src={require('../../assets/images/book-1.jpg')}
                                alt='Capa do livro'
                            />
                            <h2 className='mt-3 text-white text-lg'>PSALMS</h2>
                        </div>
                    </div>
                    <button onClick={handleRightClick}>
                        <BsArrowRightCircle size={50} color='rgba(141, 141, 141, 0.5)' />
                    </button>
                </div>
            </div>
        </section>
    )
}