import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export function NavBar() {
  return (
    <nav className="nav">
      <Link to="/category/amor">Pociones de Amor</Link>
      <Link to="/category/sueño">Pociones de Sueño</Link>
      <Link to="/category/dinero">Pociones de Dinero</Link>
      <CartWidget />
    </nav>
  );
}