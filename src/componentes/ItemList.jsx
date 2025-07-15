import { Item } from "./Item";

export function ItemList({ products }) {
  return (
    <div>
     {products.map((item) => (
  <Item key={item.id} producto={item} />
))}
    </div>
  );
}