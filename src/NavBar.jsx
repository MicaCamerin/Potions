import { CartWidget } from './CartWidget';

export function NavBar() {
  return (
    <header>
    <nav>
      <h1>Potions</h1>
      <a href="">Pociones</a>
      <a href="">Recetas</a>
      <a href="">Nosotros</a>
      <CartWidget />
    </nav>
    </header>
  );
}