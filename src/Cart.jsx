import { useCart } from '../src/contexto/CartContext';
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, removeItem, clearCart, total } = useCart();

  return (
    <div className="cart-container">
      <h2 className='titulo-carrito'>Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((prod) => (
              <li key={prod.id} className='lista-carrito'>
                {prod.nombre} - Cantidad: {prod.cantidad} - Precio unitario: ${prod.precio}
                <button onClick={() => removeItem(prod.id)} className="btn-eliminar">Eliminar</button>
              </li>
            ))}
          </ul>
          <p className='total-carrito'><strong>Total: ${total}</strong></p>
          <button onClick={clearCart} className="btn-vaciar">Vaciar carrito</button>
          <Link to="/checkout">
            <button className="btn-finalizar">Finalizar compra</button>
         </Link>
        </div>
      )}
    </div>
  );
}