import Button from "../Button";
import TextInput from "../TextInput";

export default function FormAddUser () {
    return(
        <section className="flex-1 my-6 ml-2">
        <div className="text-center">
            <h2 className="text-2xl font-bold">Cadastre-se</h2>
        </div>
        <form>
            <TextInput label='Nome' placeholder='Digite o nome do usuário' />
            <TextInput label='email' placeholder='Digite o email do usuário' />
            <TextInput label='senha' placeholder='Digite a senha do usuário' />
        </form>
        <Button>
            CADASTRAR
        </Button>
    </section>
    )
}