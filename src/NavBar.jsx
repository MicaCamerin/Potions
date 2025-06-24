import { CartWidget } from './CartWidget';
import logo from './assets/potionLogo.png'; 

export function NavBar() {
  return (
    <header>
    <nav>
      <img src={logo} alt="Logo de la tienda" style={{ height: '40px' }} />
      <h1>Potions</h1>
      <a href="">Pociones</a>
      <a href="">Recetas</a>
      <a href="">Nosotros</a>
      <CartWidget />
    </nav>
    </header>
  );
}