import { useState } from "react";
import { useCart } from "../src/contexto/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../src/firebaseConfig";

export function CheckoutForm() {
  const { cart, total, clearCart } = useCart();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ordenId, setOrdenId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !email || !telefono) {
      alert("Por favor completá todos los campos.");
      return;
    }

    const orden = {
      comprador: { nombre, email, telefono },
      items: cart.map(({ id, nombre, precio, cantidad }) => ({
        id, nombre, precio, cantidad
      })),
      total,
      fecha: new Date()
    };

    try {
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al guardar la orden:", error);
    }
  };

  return (
    <div className="checkout-form">
      <h2>Finalizar compra</h2>
      {ordenId ? (
        <div className="final-compra">
          <h3>¡Gracias por tu compra!</h3>
          <p>Tu número de orden es: <strong>{ordenId}</strong></p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario">
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
          </div>
          <button type="submit" className="btn-confirmar">Confirmar compra</button>
        </form>
      )}
    </div>
  );
}