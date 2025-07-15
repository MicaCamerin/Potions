import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

const productos = [
  { id: 1, nombre: "Poción Amour", categoria: "amour", descripcion: "Destilada bajo la luz tenue de una luna creciente, esta poción susurra antiguos encantos que despiertan los hilos invisibles del deseo. Con una sola gota, los corazones olvidados recuerdan, los silencios se rompen, y el amor florece donde parecía marchito. Su aroma dulce y profundo permanece como un secreto compartido entre almas destinadas a cruzarse." },
  { id: 2, nombre: "Poción Rêves", categoria: "rêves", descripcion: "Esta pócima etérea parece recolectada de las nieblas del alba. Al beberla, el cuerpo se entrega suavemente al descanso mientras la mente navega paisajes oníricos de calma y belleza. Antiguos herboristas la usaban en rituales lunares para invocar sueños proféticos y susurros de otras realidades." },
  { id: 3, nombre: "Poción Argent", categoria: "argent", descripcion: "Formulada en cámaras ocultas bajo bóvedas de mármol, esta antigua receta promete atraer no solo riqueza material, sino también abundancia interior. Su esencia densa y dorada vibra con símbolos alquímicos de prosperidad, como si cada sorbo abriera una puerta secreta al reino de las posibilidades infinitas." },
  { id: 4, nombre: "Poción Cauchemars", categoria: "rêves", descripcion: "Reservada para los más audaces, esta pócima oscura es un puente hacia las sombras del subconsciente. Inspirada en grimorios olvidados, su sabor amargo encierra visiones turbias, presencias antiguas y verdades que solo pueden ser reveladas en la penumbra. No es maldad lo que porta, sino poder... si uno se atreve a mirar." },
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
