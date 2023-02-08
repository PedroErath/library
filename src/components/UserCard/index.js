import ButtonEditAndDelete from '../ButtonEditAndDelete'

export default function UserCard({ name, type }) {
    return (
        <div className='text-left w-40 my-2 mx-2'>
            <img src={require('../../assets/images/book-1.jpg')} alt='capa livro card' className='h-40 w-40 rounded-full' />
            <h3 className='mt-4 font-bold text-center'>{name}</h3>
            <p className='text-green-700 text-center'>{type === 'A' ? 'Admin' : type === 'E' ? 'Editora' : 'Comum'}</p>
            <ButtonEditAndDelete />
        </div>
    )
}