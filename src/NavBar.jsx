import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export function NavBar() {
  return (
    <nav className="nav">
      <Link to="/category/amour">Pociones de Amour</Link>
      <Link to="/category/rêves">Pociones de Rêves</Link>
      <Link to="/category/argent">Pociones de Argent</Link>
      <CartWidget />
    </nav>
  );
}