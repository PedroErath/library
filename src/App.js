import Carousel from "./components/Carousel";
import Category from "./components/Category";
import Footer from "./components/Footer";
import FormAddAuthor from "./components/FormAddAuthor";
import FormAddBook from "./components/FormAddBook";
import FormAddUser from "./components/FormAddUser";
import FormAddUserAdmin from "./components/FormAddUserAdmin";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header typeUserLogged='E' />
      <Carousel />
      <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between max-w-screen-xl m-auto px-4">
        <FormAddBook />
        <FormAddAuthor />
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between max-w-screen-xl m-auto px-4">
        <FormAddUserAdmin />
        <FormAddUser />
      </div>

      <Category title='Livros Publicados' />
      {/*       <Category title='Romance' />
      <Category title='Ficção Científica' /> */}
      <Footer />
    </>
  );
}

