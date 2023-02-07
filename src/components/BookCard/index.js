import { HiOutlineShoppingCart, HiPlus } from 'react-icons/hi'

export default function BookCard({ title, author, price, inCart }) {

    return (
        <div className='text-left w-40'>
            <img src={require('../../assets/images/book-1.jpg')} alt='capa livro card' />
            <h3 className='mt-4 font-bold'>{title}</h3>
            <p className='text-green-700'>By {author}</p>
            <div className={`bg-[url('./assets/images/background-price-orange.png')] bg-no-repeat bg-cover bg-center mt-2 h-8 flex items-center justify-between px-3`}>
                <h2 className='text-orange-700 font-bold'>R$ {price}</h2>
                <div className='flex'>
                    <HiPlus />
                    <HiOutlineShoppingCart />
                </div>
            </div>
        </div>
    )
}