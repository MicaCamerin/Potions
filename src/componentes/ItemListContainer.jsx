import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";

const productos = [
  { id: 1, nombre: "Poción Amour", categoria: "amour" },
  { id: 2, nombre: "Poción Rêves", categoria: "rêves" },
  { id: 3, nombre: "Poción Argent", categoria: "argent" },
  { id: 4, nombre: "Poción Cauchemars", categoria: "rêves" },
];

export function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchData = () => {
      return new Promise((res) => {
        setTimeout(() => {
          if (id) {
            const filtrados = productos.filter((p) => p.categoria === id);
            res(filtrados);
          } else {
            res(productos);
          }
        }, 1000);
      });
    };

    fetchData().then((data) => setItems(data));
  }, [id]);

  return (
    <div>
      <h2>{id ? `Categoría: ${id}` : "Todas las potions"}</h2>
      <ItemList products={items} />
    </div>
  );
}