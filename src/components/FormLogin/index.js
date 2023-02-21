import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Button from "../Button";
import ReturnMessage from "../ReturnMessage";
import TextInput from "../TextInput";

export default function FormLogin() {

    const { setToken } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})

    const Login = (e) => {
        e.preventDefault()

        email &&
            password &&
            fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: `{"email":"${email}","password":"${password}"}`
            })
                .then(response => response.json())
                .then(response => {
                    !response.error &&
                        localStorage.setItem('authorization', response.token)
                    setToken(response.token)

                    response.error &&
                        setError(response)
                })
                .catch(err => console.error(err));
    }

    return (
        <section className="flex-1 my-6 ml-2">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Login</h2>
            </div>
            <form>
                <TextInput setValue={e => setEmail(e.target.value)} label='Email' placeholder='Digite o email do usuário' type='email' />
                <TextInput setValue={e => setPassword(e.target.value)} label='Senha' placeholder='Digite a senha do usuário' type='password' />
            </form>
            {
                error.error &&
                <ReturnMessage error={error} setValue={e => setError({})}>
                   {error.message}
                </ReturnMessage>
            }
            <Button onClick={e => Login(e)}>
                ENTRAR
            </Button>
        </section>
    )
}