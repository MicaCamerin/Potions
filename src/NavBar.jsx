import { CartWidget } from './CartWidget';
import { Link } from "react-router";

export function NavBar() {
  return (
    <header>
    <nav className='nav'>
      <Link to="/recetas">Contacto</Link>
      <Link to="/nosotros">Nosotros</Link>
      <CartWidget />
    </nav>
    </header>
  );
}