import Button from "../Button";
import TextInput from "../TextInput";

export default function FormLogin () {
    return(
        <section className="flex-1 my-6 ml-2">
        <div className="text-center">
            <h2 className="text-2xl font-bold">Login</h2>
        </div>
        <form>
            <TextInput label='Email' placeholder='Digite o email do usuário' />
            <TextInput label='Senha' placeholder='Digite a senha do usuário' />
        </form>
        <Button>
            ENTRAR
        </Button>
    </section>
    )
}