import { BiMap, BiUpArrowAlt } from 'react-icons/bi'

export default function Footer() {

    const BackToTop = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className='bg-amber-400 p-4'>
            <div className='flex flex-wrap items-center justify-center sm:justify-between m-auto max-w-screen-xl'>
                <div className='text-center sm:text-left'>
                    <h1 className='text-3xl font-bold mb-3'>LIBRARY</h1>
                    <div className='flex items-center'>
                        <BiMap size={30} />
                        <div className='ml-3 text-lg'>
                            <p>Rua Curitiba, 000, Ana Nery</p>
                            <p>Santa Cruz do Sul - RS</p>
                            <p>96840-000</p>
                        </div>
                    </div>
                </div>
                <button onClick={e => BackToTop(e)} className='flex items-center ml-4 mt-5 sm:mt-0'>
                    <h2 className='text-xl'>Voltar ao topo</h2>
                    <BiUpArrowAlt size={40} />
                </button>
            </div>
        </footer>
    )

}