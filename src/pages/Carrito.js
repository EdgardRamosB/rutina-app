import React, { useState } from "react";
import "./Carrito.css"; // 👈 Importa el estilo minimal premium

// Productos disponibles
const suplementos = [
  {
    id: 1,
    nombre: "Omega 3",
    precio: 89.99,
    imagen: `${process.env.PUBLIC_URL}/imagenes/Omega.png`,
  },
  {
    id: 2,
    nombre: "Ashwagandha",
    precio: 79.99,
    imagen: `${process.env.PUBLIC_URL}/imagenes/Ashwagandha.jpg`,
  },
  {
    id: 3,
    nombre: "Anabol Hardcore",
    precio: 119.99,
    imagen: `${process.env.PUBLIC_URL}/imagenes/Anabol.jpg`,
  },
];

const auriculares = [
  {
    id: 4,
    nombre: "BeastBuds Pro",
    precio: 199.99,
    imagen: `${process.env.PUBLIC_URL}/imagenes/airwireless.png`,
  },
  {
    id: 5,
    nombre: "IronBeats X",
    precio: 249.99,
    imagen: `${process.env.PUBLIC_URL}/imagenes/bigbluepro.png`,
  },
  {
    id: 6,
    nombre: "TitanSound Max",
    precio: 299.99,
    imagen: `${process.env.PUBLIC_URL}/imagenes/brookstone.png`,
  },
];

function Carrito() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="app">
      <h1>🛒 Mi Tienda Fitness</h1>

      {/* Sección suplementos */}
      <h2>💊 Suplementos</h2>
      <div className="productos-carrito">
        {suplementos.map((prod) => (
          <div key={prod.id} className="card-producto">
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>S/. {prod.precio}</p>
            <button onClick={() => agregarAlCarrito(prod)}>Agregar</button>
          </div>
        ))}
      </div>

      {/* Sección auriculares */}
      <h2>🎧 Auriculares Gym Rat</h2>
      <div className="productos-carrito">
        {auriculares.map((prod) => (
          <div key={prod.id} className="card-producto">
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>S/. {prod.precio}</p>
            <button onClick={() => agregarAlCarrito(prod)}>Agregar</button>
          </div>
        ))}
      </div>

      {/* Carrito */}
      <h2>🛍️ Carrito ({carrito.length})</h2>
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>
            {item.nombre} - S/. {item.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;
