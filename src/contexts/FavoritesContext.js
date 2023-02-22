import { createContext, useState, useEffect, useContext } from "react";
import { UserContext } from "./UserContext";

export const FavoritesContext = createContext({})

export function FavoritesProvider({ children }) {

    const [favoriteBooks, setFavoriteBooks] = useState([])
    const { userLogged } = useContext(UserContext)

    useEffect(() => {
        userLogged.id &&
            fetch(`http://localhost:3001/users/${userLogged.id}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authorization')}`
                }
            })
                .then(response => response.json())
                .then(response => {
                    !response.error &&
                        setFavoriteBooks(response.favoriteBooks)
                })
                .catch(err => console.error(err));
    }, [userLogged])

    return (
        <FavoritesContext.Provider value={{}}>
            {children}
        </FavoritesContext.Provider>
    )
}