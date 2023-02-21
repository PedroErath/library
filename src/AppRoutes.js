import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

import FormLogin from './components/FormLogin'
import FormAddUser from './components/FormAddUser'
import Category from './components/Category'

export default function AppRoutes() {

    const {userLogged} = useContext(UserContext)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    userLogged
                        ? <Category />
                        : <>
                            <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between max-w-screen-xl m-auto px-4">
                                <FormLogin />
                                <FormAddUser />
                            </div>
                        </>
                } />
            </Routes>
        </BrowserRouter>
    )
}