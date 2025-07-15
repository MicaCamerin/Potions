import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

const productos = [
  { id: 1, nombre: "Poción de Amor", categoria: "amor", descripcion: "Para atraer el amor verdadero 💕" },
  { id: 2, nombre: "Poción de Sueño", categoria: "sueño", descripcion: "Para dormir profundo y soñar bonito 😴" },
  { id: 3, nombre: "Poción de Dinero", categoria: "dinero", descripcion: "Para atraer abundancia 💸" },
  { id: 4, nombre: "Poción de Energía", categoria: "sueño", descripcion: "Para estar con pilas todo el día ⚡" },
];

export function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = () => {
      return new Promise((res) => {
        setTimeout(() => {
          const productoEncontrado = productos.find((p) => p.id === parseInt(id));
          res(productoEncontrado);
        }, 1000);
      });
    };

    fetchItem().then((data) => setItem(data));
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail {...item} /> : <p>Cargando...</p>}
    </div>
  );
}
