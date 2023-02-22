import { UserProvider } from "./contexts/UserContext";

import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { FavoritesProvider } from "./contexts/FavoritesContext";


export default function App() {

  return (
    <UserProvider>
      <FavoritesProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </FavoritesProvider>
    </UserProvider>
  )
}

