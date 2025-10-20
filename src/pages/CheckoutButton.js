import React, { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const CheckoutButton = ({ title, price, quantity }) => {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    // 👇 Tu Public Key de Mercado Pago (modo TEST)
    initMercadoPago("TEST-c9dda2fa-5ea7-40c2-8200-1409be6e6f7e");
  }, []);

  const createPreference = async () => {
    // Convertir price y quantity a números y validar
    const unitPrice = Number(price);
    const qty = Number(quantity);

    if (!title || isNaN(unitPrice) || unitPrice <= 0 || isNaN(qty) || qty <= 0) {
      alert("❌ Datos inválidos: revisa título, precio y cantidad.");
      console.error("Datos inválidos enviados:", { title, price, quantity });
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/create_preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price: unitPrice, quantity: qty }),
      });

      const data = await response.json();

      if (!data.id) {
        console.error("❌ Error en respuesta del backend:", data);
        alert("No se pudo crear la preferencia de pago.");
        return;
      }

      setPreferenceId(data.id);
    } catch (error) {
      console.error("❌ Error al crear la preferencia:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  return (
    <div>
      <button
        onClick={createPreference}
        className="bg-pink-500 text-white px-4 py-2 rounded"
      >
        Pagar con Mercado Pago
      </button>

      {preferenceId && (
        <div className="mt-4">
          <Wallet initialization={{ preferenceId }} />
        </div>
      )}
    </div>
  );
};

export default CheckoutButton;
