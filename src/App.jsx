
import { Routes, Route } from "react-router-dom";
import { Header } from './Header';
import { Footer } from './Footer';
import { ItemListContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';

export function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route 
          path="*"
          element={
            <h2 className="error">
              Página no encontrada
            </h2>
          }
        />

      </Routes>
      

      <Footer />
    </div>
  );
}

