import { CartWidget } from './CartWidget';
import { Link } from "react-router";

export function NavBar() {
  return (
    <header>
    <nav className='nav'>
      <Link to="/pociones">Pociones</Link>;
      <Link to="/recetas">Recetas</Link>;
      <Link to="/nosotros">Nosotros</Link>;
      <CartWidget />
    </nav>
    </header>
  );
}