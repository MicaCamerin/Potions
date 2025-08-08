import { createContext, useState, useContext } from 'react';

// Contexto
const CartContext = createContext();

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);

// Componente proveedor
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (item, cantidad) => {
    const itemEnCarrito = cart.find(prod => prod.id === item.id);

    if (itemEnCarrito) {
      const carritoActualizado = cart.map(prod =>
        prod.id === item.id
          ? { ...prod, cantidad: prod.cantidad + cantidad }
          : prod
      );
      setCart(carritoActualizado);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // Eliminar producto 
  const removeItem = (itemId) => {
    setCart(cart.filter(prod => prod.id !== itemId));
  };

  // Cantidad total de productos 
  const cartQuantity = cart.reduce((acc, prod) => acc + prod.cantidad, 0);

  // Precio total
  const total = cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeItem,
        cartQuantity,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};