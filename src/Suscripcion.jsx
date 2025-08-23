import { useState, useEffect } from "react";
import PayPalButton from "./PayPalButton";

export default function Suscripcion() {
  const [suscripcionActiva, setSuscripcionActiva] = useState(false);

  useEffect(() => {
    // Revisar si ya está activa la suscripción
    const activa = localStorage.getItem("suscripcionActiva") === "true";
    setSuscripcionActiva(activa);
  }, []);

  return (
    <div>
      <h2>Suscripción App Fitness</h2>

      {suscripcionActiva ? (
        <p>✅ Tienes acceso a todas las rutinas personalizadas</p>
      ) : (
        <>
          <p>Accede por solo $10 al mes</p>
          <PayPalButton onPagoExitoso={() => setSuscripcionActiva(true)} />
        </>
      )}
    </div>
  );
}
