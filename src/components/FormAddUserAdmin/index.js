import Button from "../Button";
import TextInput from "../TextInput";

export default function FormAddUserAdmin () {
    return(
        <section className="flex-1 my-6 ml-2">
        <div className="text-center">
            <h2 className="text-2xl font-bold">Adicionar Editora/Admin</h2>
        </div>
        <form>
            <TextInput label='Nome' placeholder='Digite o nome do usuário' />
            <TextInput label='Email' placeholder='Digite o email do usuário' />
            <TextInput label='Senha' placeholder='Digite a senha do usuário' />
            <TextInput label='Tipo' placeholder='Digite o tipó do usuário' />
        </form>
        <Button>
            ADICIONAR
        </Button>
    </section>
    )
}