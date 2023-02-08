import Button from "../Button";
import TextInput from "../TextInput";

export default function FormAddBook() {
    return (
        <section className="flex-1 my-6 mr-2">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Adicionar Livro</h2>
            </div>
            <form>
                <TextInput label='Título' placeholder='Digite o título do livro' />
                <TextInput label='Autor' placeholder='Digite o autor do livro' />
                <TextInput label='Preço' placeholder='Digite o preço do livro' />
                <TextInput label='Categoria' placeholder='Digite o categoria do livro' />
                <TextInput label='Imagem' placeholder='Carregue a imagem de capa do livro' />
            </form>
            <Button>
                ADICIONAR
            </Button>
        </section>
    )
}