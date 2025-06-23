import { CartWidget } from './CartWidget';

export function NavBar() {
  return (
    <header>
    <nav>
      <h1>Potions</h1>
      <CartWidget />
    </nav>
    </header>
  );
}