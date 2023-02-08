import Button from "../Button";
import TextInput from "../TextInput";

export default function FormAddAuthor() {
    return (
        <section className="flex-1 my-6 ml-2">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Adicionar Author</h2>
            </div>
            <form>
                <TextInput label='Nome' placeholder='Digite o nome do autor' />
                <TextInput label='Nacionalidade' placeholder='Digite a nacionalide do autor' />
            </form>
            <Button>
                ADICIONAR
            </Button>
        </section>
    )
}