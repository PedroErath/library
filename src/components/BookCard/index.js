import ButtonAddCartBookCard from '../ButtonAddCartBookCard'
import ButtonEditAndDelete from '../ButtonEditAndDelete'

export default function BookCard({ title, author, price, inCart, publishCompany }) {

    return (
        <div className='text-left w-40 my-2 mx-2'>
            <img src={require('../../assets/images/book-1.jpg')} alt='capa livro card' />
            <h3 className='mt-4 font-bold'>{title}</h3>
            <p className='text-green-700'>By {author}</p>
            {
                publishCompany
                ? <ButtonEditAndDelete />
                : <ButtonAddCartBookCard price={price} inCart={inCart} />
            }
        </div>
    )
}