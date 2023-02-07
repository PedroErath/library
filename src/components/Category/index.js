import { BiRightArrowAlt } from 'react-icons/bi'
import BookCard from '../BookCard'

export default function Category({ title }) {
    return (
        <section className='text-center my-16 max-w-screen-xl m-auto px-4'>
            <div className='flex justify-center lg:justify-between  items-center'>
                <img src={require('../../assets/images/line.png')} alt='capa livro card' className='hidden lg:block' />
                <h2 className='text-3xl font-bold'>{title}</h2>
                <img src={require('../../assets/images/line.png')} alt='capa livro card' className='hidden lg:block'/>
            </div>
            <div className='flex justify-center items-center'>
                <p className='text-green-700'>Ver todos</p>
                <BiRightArrowAlt size={20} color='rgb(21, 128, 61)' />
            </div>
            <div className='flex justify-around sm:justify-between flex-wrap mt-6'>
                <BookCard title='PSALMS' author='Matt Ridley' price='80,00' inCart />
                <BookCard title='PSALMS' author='Matt Ridley' price='80,00' inCart />
                <BookCard title='PSALMS' author='Matt Ridley' price='80,00' inCart />
                <BookCard title='PSALMS' author='Matt Ridley' price='80,00' inCart />
            </div>
        </section>
    )
}