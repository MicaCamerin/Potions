
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from "./componentes/Main";

const productos = ["Pocion Amour", "Pocion Reve", "Pocion Argent" ]

export function App() {
  return (
    <div>
      <Header />
      <Main items ={productos} />
      <Footer />
    </div>
  );
}

