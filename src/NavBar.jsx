import { CartWidget } from './CartWidget';
import logo from './assets/potionLogo.png'; 
import { Link } from "react-router";

export function NavBar() {
  return (
    <header>
    <nav>
      <img src={logo} alt="Logo de la tienda" style={{ height: '40px' }} />
      <h1><Link to="./">Potions</Link></h1>
      <Link to="/pociones">Pociones</Link>;
      <Link to="/recetas">Recetas</Link>;
      <Link to="/nosotros">Nosotros</Link>;
      <CartWidget />
    </nav>
    </header>
  );
}