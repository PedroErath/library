import { HiPlus, HiOutlineShoppingCart } from 'react-icons/hi'

export default function ButtonAddCartBookCard({ price, inCart }) {
    return (

        <>
            {
                inCart
                    ? <div className={`bg-[url('./assets/images/background-price-green.png')] bg-no-repeat bg-cover bg-center mt-2 h-8 flex items-center justify-between px-3`}>
                        <h2 className='text-orange-700 font-bold'>R$ {price}</h2>
                        <div className='flex'>
                            <HiPlus />
                            <HiOutlineShoppingCart />
                        </div>
                    </div>
                    : <div className={`bg-[url('./assets/images/background-price-orange.png')] bg-no-repeat bg-cover bg-center mt-2 h-8 flex items-center justify-between px-3`}>
                        <h2 className='text-orange-700 font-bold'>R$ {price}</h2>
                        <div className='flex'>
                            <HiPlus />
                            <HiOutlineShoppingCart />
                        </div>
                    </div>
            }
        </>

    )
}