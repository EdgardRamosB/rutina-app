import { useEffect, useRef } from "react";
import React from "react";


const PayPalButton = ({ onPagoExitoso }) => {
  const paypalRef = useRef();

  useEffect(() => {
    // Verificar si el script de PayPal ya existe
    if (!document.querySelector("#paypal-sdk")) {
      const script = document.createElement("script");
      script.id = "paypal-sdk";
      script.src = `https://www.paypal.com/sdk/js?client-id=ATZsQ1YaxsSJ2N_vHxa1iO5jV5X9g-YTNOJ8PpF9FWB6O9Rg3_qZ1uUCqyklPC_rY2M1XHWVchB5_XR1&currency=USD`;
      script.addEventListener("load", () => {
        renderPayPal();
      });
      document.body.appendChild(script);
    } else {
      renderPayPal();
    }

    function renderPayPal() {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: "Suscripción App Fitness",
                    amount: {
                      currency_code: "USD",
                      value: "10.00",
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log("✅ Pago completado:", order);

              localStorage.setItem("suscripcionActiva", "true");

              if (onPagoExitoso) onPagoExitoso();
              alert("¡Suscripción activada con éxito! 💪");
            },
            onError: (err) => {
              console.error("❌ Error en PayPal:", err);
              alert("Hubo un problema con el pago. Inténtalo nuevamente.");
            },
          })
          .render(paypalRef.current);
      }
    }
  }, [onPagoExitoso]);

  return <div ref={paypalRef}></div>;
};



export default PayPalButton;
