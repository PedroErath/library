import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({})

export function UserProvider({ children }) {

    const [userLogged, setUserLogged] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('authorization') || '')

    useEffect(() => {
        token &&
            fetch('http://localhost:3001/auth/verifytoken', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: `{"token": "${token}"}`
            })
                .then(response => response.json())
                .then(response => {
                    !response.error &&
                        setUserLogged(response.user)
                })
                .catch(err => console.error(err));
    }, [token])

    return (
        <UserContext.Provider value={{ userLogged, setToken }}>
            {children}
        </UserContext.Provider>
    )
}