import { UserProvider } from "./contexts/UserContext";

import AppRoutes from "./AppRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default function App() {

  return (
    <UserProvider>
      <Header />
      <AppRoutes />
      <Footer />
    </UserProvider>
  )
}

