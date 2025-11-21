import "./Tienda.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Omega 3",
    price: 9.99,
    image: `${process.env.PUBLIC_URL}/imagenes/Omega.png`,
    description: "Mejora la salud cardiovascular y la concentración."
  },
  {
    id: 2,
    title: "Ashwagandha",
    price: 78.99,
    image: `${process.env.PUBLIC_URL}/imagenes/Ashwagandha.jpg`,
    description: "Reduce el estrés y mejora el rendimiento físico."
  },
  {
    id: 3,
    title: "MYO & D-Chiro Inositol",
    price: 119.99,
    image: `${process.env.PUBLIC_URL}/imagenes/inositol.png`,
    description: "Favorece el equilibrio hormonal y la energía natural."
  },
  {
    id: 4,
    title: "Anabol Hardcore",
    price: 119.99,
    image: `${process.env.PUBLIC_URL}/imagenes/Anabol.jpg`,
    description: "Estimula el crecimiento muscular y la fuerza máxima."
  },
  {
    id: 5,
    title: "AirWireless Helix",
    price: 49.99,
    image: `${process.env.PUBLIC_URL}/imagenes/airwireless.png`,
    description: "Auriculares deportivos con sonido nítido y buena batería."
  },
  {
    id: 6,
    title: "Auricular Bigblue Pro",
    price: 59.99,
    image: `${process.env.PUBLIC_URL}/imagenes/bigbluepro.png`,
    description: "Diseño ergonómico y cancelación de ruido avanzada."
  },
  {
    id: 7,
    title: "Wireless Headphones",
    price: 59.99,
    image: `${process.env.PUBLIC_URL}/imagenes/brookstone.png`,
    description: "Comodidad y potencia para entrenamientos intensos."
  },
  {
    id: 8,
    title: "Wireless Headphones Blue",
    price: 54.99,
    image: `${process.env.PUBLIC_URL}/imagenes/Wireless_Headphones-azu.png`,
    description: "Estilo moderno y gran sonido en cada repetición."
  },
  {
    id: 9,
    title: "True Wireless Earbuds White",
    price: 59.99,
    image: `${process.env.PUBLIC_URL}/imagenes/earbuds.png`,
    description: "Compactos, ligeros y con conectividad rápida Bluetooth."
  },
  {
    id: 10,
    title: "True Wireless Earbuds Black",
    price: 59.99,
    image: `${process.env.PUBLIC_URL}/imagenes/truewirelesnegro.png`,
    description: "Diseño elegante con sonido envolvente de alta calidad."
  },
  {
    id: 11,
    title: "True Wireless Active Noise Cancelation",
    price: 119.99,
    image: `${process.env.PUBLIC_URL}/imagenes/teuewirelesespecial.png`,
    description: "Cancelación activa de ruido y batería de larga duración."
  },
  {
    id: 12,
    title: "Ultrabuds usb-c EARBUDS",
    price: 34.99,
    image: `${process.env.PUBLIC_URL}/imagenes/ultrabuds.png`,
    description: "Auriculares con cable USB-C, compactos y de gran fidelidad."
  },
  {
    id: 13,
    title: "Lucid Magic Beats",
    price: 49.99,
    image: `${process.env.PUBLIC_URL}/imagenes/magic.jpg`,
    description: "Potente sonido y diseño llamativo para entrenar con ritmo."
  }
];

const Carrito = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantities, setQuantities] = useState({});
    //CREDENCIALES DE PRUEBA CUENTA FAKE D VENDEDOR
    // initMercadoPago("APP_USR-841d2d88-0ffb-4dd3-9345-97ff5fdba99b", {
    //   locale: "es-PE",
    // });

      //CREDENCIALES DE PRODUCCION CUENTA ORIGINAL
   initMercadoPago("APP_USR-acc4dd01-e955-4b11-ab38-73403968b079", {
     locale: "es-PE",
  });

    //CREDENCIALES DE PRUEBA CUENTA VERDADERA
    // initMercadoPago("APP_USR-c11c7ccc-b271-4a26-9297-c0bbdbb8abce", {
    // locale: "es-PE",
    // });

const createPreference = async (product, quantity) => {
  try {
    const response = await axios.post(
      "https://rutina-backend.onrender.com/create_preference",
      {
        items: [
          {
            title: product.title,
            quantity: quantity,
            currency_id: "PEN",
            unit_price: Number(product.price),
          },
        ],
        back_urls: {
          success: "https://rutina-app-pied.vercel.app/success",
          failure: "https://rutina-app-pied.vercel.app/failure",
          pending: "https://rutina-app-pied.vercel.app/pending",
        },
        auto_return: "approved",
      }
    );

    const { id } = response.data;
    return id;
  } catch (error) {
    console.error("❌ Error al crear preferencia:", error.response?.data || error);
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
    <div className="carrito-page">
      <h1 className="store-title">Suplementos y Música para un Mejor Rendimiento</h1>

      <div className="card-product-container">
        {products.map((product) => {
          const quantity = quantities[product.id] || 1;
          const total = product.price * quantity;

          return (
            <div key={product.id} className="card-product">
              <div className="card-product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="description">{product.description}</p>
                <p className="price">Precio unitario: {product.price} $</p>

                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                />

                <p className="total">Total: {total} $</p>

                <button onClick={() => handleBuy(product)}>Comprar</button>

                {preferenceId && selectedProduct === product.id && (
                  <Wallet initialization={{ preferenceId }} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carrito;
