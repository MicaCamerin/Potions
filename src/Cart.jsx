import { useCart } from '../src/contexto/CartContext';
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, removeItem, clearCart, total } = useCart();

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((prod) => (
              <li key={prod.id}>
                {prod.nombre} - Cantidad: {prod.cantidad} - Precio unitario: ${prod.precio}
                <button onClick={() => removeItem(prod.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p><strong>Total: ${total}</strong></p>
          <button onClick={clearCart}>Vaciar carrito</button>
          <Link to="/checkout">
            <button>Finalizar compra</button>
         </Link>
        </div>
      )}
    </div>
  );
}