export function ItemDetail({ nombre, categoria, descripcion, precio }) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Precio:</strong> ${precio}</p>
    </div>
  );
}
