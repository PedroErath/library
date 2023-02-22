import { useState } from "react";
import Button from "../Button";
import ReturnMessage from "../ReturnMessage";
import TextInput from "../TextInput";

export default function FormAddUser() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState({})

    const AddUser = (e) => {
        e.preventDefault()

        email &&
        name &&
        password &&
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"name":"${name}","email":"${email}","password":"${password}"}`
        })
            .then(response => response.json())
            .then(response => {
                !response.error &&
                setError({
                    error: false,
                    message: 'User created, login in the system.'
                })

                response.error &&
                setError(response)
            })
            .catch(err => console.error(err));
    }

    return (
        <section className="flex-1 my-6 ml-2">
            <div className="text-center">
                <h2 className="text-2xl font-bold">Cadastre-se</h2>
            </div>
            <form onSubmit={e => AddUser(e)}>
                <TextInput setValue={e => setName(e.target.value)} label='Nome' placeholder='Digite o nome do usuário' $required />
                <TextInput setValue={e => setEmail(e.target.value)} label='Email' placeholder='Digite o email do usuário' type='email' $required />
                <TextInput setValue={e => setPassword(e.target.value)} label='Senha' placeholder='Digite a senha do usuário' type='password' $required />

                {
                    error.message &&
                    <ReturnMessage error={error.error} setValue={e => setError({})}>
                        {error.message}
                    </ReturnMessage>
                }

                <Button type='submit'>
                    CADASTRAR
                </Button>
            </form>
        </section>
    )
}