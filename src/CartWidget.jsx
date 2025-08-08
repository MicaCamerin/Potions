import { useCart } from '../src/contexto/CartContext';

export function CartWidget() {
  const { cartQuantity } = useCart();

  return (
    <span>
      🛒
      {cartQuantity > 0 && <span> ({cartQuantity})</span>}
    </span>
  );
}