export function ItemDetail({ nombre, categoria, descripcion }) {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
    </div>
  );
}
