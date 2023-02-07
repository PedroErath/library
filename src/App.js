import Carousel from "./components/Carousel";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
        <Header />
        <Carousel />
        <Category title='Novos'/>
        <Category title='Romance'/>
        <Category title='Ficção Científica'/>
        <Footer />
    </>
  );
}

