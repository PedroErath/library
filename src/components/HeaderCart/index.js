import { RiShoppingCart2Fill } from 'react-icons/ri'

export default function HeaderCart() {
    return (
        <div className='flex items-center'>
            <div>
                <h2 className='text-2xl font-bold text-orange-700'>R$ 384,00</h2>
                <p className='text-green-700'>3 items</p>
            </div>
            <RiShoppingCart2Fill size={80} color='rgb(21, 128, 61)' />
        </div>
    )
}