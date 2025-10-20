// src/Carrito.js
import "./Carrito.css";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";
import { useState } from "react";

const products = [
  { id: 1, title: "Omega 3", price: 50, image: "/imagenes/Omega.png" },
  { id: 2, title: "Ashwagandha", price: 40, image: "/imagenes/Ashwagandha.jpg" },
  { id: 3, title: "Anabol Hardcore", price: 120, image: "/imagenes/Anabol.jpg" },
  { id: 4, title: "BeastBuds Pro", price: 200, image: "/imagenes/airwireless.png" },
  { id: 5, title: "IronBeats X", price: 180, image: "/imagenes/bigbluepro.png"},
  { id: 6, title: "TitanSound Max", price: 250, image: "/imagenes/brookstone.png" },
];

const Carrito = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantities, setQuantities] = useState({}); // guardar cantidades por producto

  initMercadoPago('APP_USR-841d2d88-0ffb-4dd3-9345-97ff5fdba99b', {
    locale: "es-PE",
  });

  const createPreference = async (product, quantity) => {
    try {
      const response = await axios.post("http://localhost:3001/create_preference", {
        title: product.title,
        quantity: quantity,
        price: product.price,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async (product) => {
    const quantity = quantities[product.id] || 1; 
    const id = await createPreference(product, quantity);
    if (id) {
      setPreferenceId(id);
      setSelectedProduct(product.id);
    }
  };

  const handleQuantityChange = (productId, value) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Number(value),
    }));
  };

  return (
    <div className='card-product-container'>
      {products.map((product) => {
        const quantity = quantities[product.id] || 1;
        const total = product.price * quantity;

        return (
          <div key={product.id} className='card-product'>
            <div className='card-product-card'>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className='price'>Precio unitario: {product.price} $</p>

              {/* Campo para seleccionar cantidad */}
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              />

              {/* Mostrar precio total */}
              <p className='total'>Total: {total} $</p>

              <button onClick={() => handleBuy(product)}>Comprar</button>

              {/* Botón de pago solo para el producto seleccionado */}
              {preferenceId && selectedProduct === product.id && (
                <Wallet initialization={{ preferenceId }} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carrito;