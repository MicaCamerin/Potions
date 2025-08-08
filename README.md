# Potions - E-commerce de Pociones

Aplicación web desarrollada con **React** y **Firebase** que permite explorar, agregar al carrito y comprar pociones mágicas.  
Incluye gestión de productos, carrito de compras, formulario de compra y generación de ticket con ID único en Firebase.

---

## Tecnologías utilizadas

- **React** + Vite
- **React Router DOM** (navegación)
- **Firebase Firestore** (base de datos y tickets)
- **CSS**
- **JavaScript ES6**

---

## Estructura del proyecto

src/
├── assets/ # Recursos estáticos (imágenes, logos, etc.)
│ └── potionLogo.png
├── componentes/ # Componentes reutilizables y de UI
│ ├── Item.jsx
│ ├── ItemDetail.jsx
│ ├── ItemDetailContainer.jsx
│ ├── ItemList.jsx
│ └── ItemListContainer.jsx
├── contexto/ # Context API para gestión global del carrito
│ └── CartContext.jsx
├── App.jsx # Componente raíz
├── Cart.jsx # Página/Componente del carrito
├── CartWidget.jsx # Icono del carrito en el header
├── CheckoutForm.jsx # Formulario de checkout
├── firebaseConfig.js # Configuración de Firebase
├── Footer.jsx # Componente Footer
├── Header.jsx # Componente Header
├── index.css # Estilos globales
├── main.jsx # Punto de entrada de la app
└── NavBar.jsx # Barra de navegación

---

## Funcionalidades

- Listado de pociones por categoría
- Vista de detalle de producto
- Selección de cantidad y agregado al carrito
- Carrito persistente durante la sesión
- Botones para eliminar producto, vaciar carrito y finalizar compra
- Formulario de checkout con validación
- Generación de ticket con ID único en Firebase

## Autora
Creado por Micaela Camerini como parte del curso de JS React, aplicando todos los contenidos vistos hasta el momento.