import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import FormLogin from './components/FormLogin'
import FormAddUser from './components/FormAddUser'
import Category from './components/Category'

export default function App() {

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
    <BrowserRouter>
      <Header userLogged={userLogged}/>
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
      <Footer />
    </BrowserRouter>
  )
}

