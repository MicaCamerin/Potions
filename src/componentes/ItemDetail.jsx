import { useState } from 'react';
import { useCart } from '../contexto/CartContext';

export function ItemDetail({ id, nombre, categoria, descripcion, precio }) {
  const { addToCart } = useCart();
  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    const item = { id, nombre, categoria, descripcion, precio };
    addToCart(item, cantidad);
  };

  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Precio:</strong> ${precio}</p>

      <label className="cantidad-label">
        Cantidad:
        <input
          type="number"
          min="1"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          className="cantidad-input"
        />
      </label>

      <button onClick={handleAgregar} className="btn-agregar">
        Agregar al carrito
      </button>
    </div>
  );
}