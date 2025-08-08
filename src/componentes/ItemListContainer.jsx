import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams(); 

 useEffect(() => {
    const productosRef = collection(db, "products");

    const q = id 
      ? query(productosRef, where("categoria", "==", id))
      : productosRef;

    getDocs(q)
      .then((resp) => {
        const productosFirestore = resp.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItems(productosFirestore);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, [id]);

  return (
    <div>
      <h2>{id ? `Categoría: ${id}` : "Todas las potions"}</h2>
      <ItemList products={items} />
    </div>
  );
}