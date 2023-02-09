import { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import Category from "./components/Category";
import Footer from "./components/Footer";
import FormAddAuthor from "./components/FormAddAuthor";
import FormAddBook from "./components/FormAddBook";
import FormAddUser from "./components/FormAddUser";
import FormAddUserAdmin from "./components/FormAddUserAdmin";
import FormLogin from "./components/FormLogin";
import Header from "./components/Header";

export default function App() {

  const [userLogged, setUserLogged] = useState(false)

  useEffect(() => {
    const accessToken = localStorage.getItem('authorization')
    const user = localStorage.getItem('user')

    if (accessToken && user) {
      setUserLogged(true)
    }
  }, [])

  return (
    <>
      <Header />

      {
        userLogged
          ? <Category title='Novos' />
          : <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between max-w-screen-xl m-auto px-4">
            <FormAddUser />
            <FormLogin />
          </div>
      }
      <Footer />
    </>
  );
}

