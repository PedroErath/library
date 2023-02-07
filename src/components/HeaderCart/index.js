import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function HeaderCart() {
    return (
        <div className='flex items-center ml-4'>
            <div>
                <h2 className='text-2xl font-bold text-orange-700'>R$ 384,00</h2>
                <p className='text-green-700 text-lg'>3 items</p>
            </div>
            <HiOutlineShoppingCart size={80} color='rgb(21, 128, 61)' />
        </div>
    )
}