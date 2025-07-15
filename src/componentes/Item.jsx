import { Link } from "react-router-dom";

export function Item({ producto }) {
  return (
    <div className="card">
      <h3>{producto.nombre}</h3>
      <p>Categoría: {producto.categoria}</p>
      <Link to={`/item/${producto.id}`}>Ver detalle</Link>
    </div>
  );
}