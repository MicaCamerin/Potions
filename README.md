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
├── components/ # Componentes reutilizables (Header, Footer, Nav, etc.)
├── pages/ # Páginas principales (Home, Detalle, Carrito, Checkout)
├── context/ # Context API para gestión global del carrito
├── firebase/ # Configuración y conexión a Firebase
├── App.jsx # Componente raíz
└── index.css # Estilos globales

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