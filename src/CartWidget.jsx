import { useCart } from '../src/contexto/CartContext';
import { Link } from 'react-router-dom';

export function CartWidget() {
  const { cartQuantity } = useCart();

 return (
  <Link to="/cart">
    <span>
      🛒
      {cartQuantity > 0 && <span> ({cartQuantity})</span>}
    </span>
  </Link>
);
}