import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";
import imagenes from "../data/imagenes.js";



import {
  criteriosMujerPrincipianteGanarMasa,
  criteriosMujerIntermedioGanarMasa,
  criteriosMujerAvanzadoGanarMasa,
  criteriosHombrePrincipianteGanarMasa,
  criteriosHombreIntermedioGanarMasa,
  criteriosHombreAvanzadoGanarMasa,
  criteriosHombrePrincipianteGanarMasaSinEquipo,
  criteriosHombreIntermedioGanarMasaSinEquipo,
  criteriosHombreAvanzadoGanarMasaSinEquipo,
  criteriosMujerPrincipianteGanarMasaSinEquipo,
  criteriosMujerIntermedioGanarMasaSinEquipo,
  criteriosMujerAvanzadoGanarMasaSinEquipo,
} from "../data/criterios.js";

function Servicios() {
  const [completados, setCompletados] = useState({});
  const [sexo, setSexo] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [nivel, setNivel] = useState("");
  const [dias, setDias] = useState("");
  const [equipo, setEquipo] = useState("");
  const [rutina, setRutina] = useState([]);
  const [pagoConfirmado, setPagoConfirmado] = useState(false);

  const toggleCompletado = (diaIndex, ejercicioIndex) => {
    setCompletados((prev) => ({
      ...prev,
      [`${diaIndex}-${ejercicioIndex}`]: !prev[`${diaIndex}-${ejercicioIndex}`],
    }));
  };

  const generarRutinaDesdeParams = (params) => {
    const criteriosMap = {
      hombre: {
        principiante: { sin: criteriosHombrePrincipianteGanarMasaSinEquipo, con: criteriosHombrePrincipianteGanarMasa },
        intermedio: { sin: criteriosHombreIntermedioGanarMasaSinEquipo, con: criteriosHombreIntermedioGanarMasa },
        avanzado: { sin: criteriosHombreAvanzadoGanarMasaSinEquipo, con: criteriosHombreAvanzadoGanarMasa },
      },
      mujer: {
        principiante: { sin: criteriosMujerPrincipianteGanarMasaSinEquipo, con: criteriosMujerPrincipianteGanarMasa },
        intermedio: { sin: criteriosMujerIntermedioGanarMasaSinEquipo, con: criteriosMujerIntermedioGanarMasa },
        avanzado: { sin: criteriosMujerAvanzadoGanarMasaSinEquipo, con: criteriosMujerAvanzadoGanarMasa },
      },
    };

    const claveEquipo = params.get("equipo") === "no" ? "sin" : "con";
    const rutinaSeleccionada =
      criteriosMap[params.get("sexo")]?.[params.get("nivel")]?.[claveEquipo]?.[params.get("dias")];

    if (rutinaSeleccionada) setRutina(rutinaSeleccionada);
  };

  useEffect(() => {
    const pago = localStorage.getItem("pagoConfirmado");
    if (pago === "true") setPagoConfirmado(true);
  }, []);

  const generarRutina = () => {
    if (!sexo || !objetivo || !nivel || !dias || !equipo) {
      alert("Por favor completa todos los campos.");
      return;
    }

    if ((nivel === "intermedio" || nivel === "avanzado") && !pagoConfirmado) {
      window.open("https://mpago.la/12mrBBR", "_blank");
      alert("Después de completar el pago, vuelve a esta página para ver tu rutina.");
      return;
    }

    generarRutinaDesdeParams(
      new URLSearchParams({ sexo, objetivo, nivel, dias, equipo })
    );
  };

  const generarPDF = () => {
    const input = document.getElementById("rutina-pdf");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const pageHeight = pdf.internal.pageSize.getHeight();

      let heightLeft = pdfHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("rutina.pdf");
    });
  };

  return (
    <div className="servicios">

      {/* 🔹 Formulario de generación de rutina */}
      <section className="formulario">
        <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="">Sexo</option>
          <option value="mujer">Mujer</option>
          <option value="hombre">Hombre</option>
        </select>

        <select value={objetivo} onChange={(e) => setObjetivo(e.target.value)}>
          <option value="">Objetivo</option>
          <option value="ganar masa">Ganar masa</option>
          <option value="perder grasa">Perder grasa</option>
        </select>

        <select value={nivel} onChange={(e) => setNivel(e.target.value)}>
          <option value="">Nivel</option>
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
        </select>

        <select value={dias} onChange={(e) => setDias(e.target.value)}>
          <option value="">Días</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>

        <select value={equipo} onChange={(e) => setEquipo(e.target.value)}>
          <option value="">¿Tienes equipo?</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <button
          className="btn-principal"
          onClick={generarRutina}
          disabled={!sexo || !objetivo || !nivel || !dias || !equipo}
        >
          🚀 Generar rutina
        </button>
      </section>

      {/* 🔹 Rutina generada */}
      {rutina.length > 0 && (
        <section className="rutina-section">
          <h2>🏋️‍♂️ Tu rutina</h2>
          <div id="rutina-pdf" className="rutina-container">
            {rutina.map((dia, index) => (
              <motion.div
                key={index}
                className="dia-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3>Día {index + 1}</h3>
                <div className="ejercicios">
                  {dia.map((ejercicio, idx) => (
                    <motion.div
                      key={idx}
                      className={`ejercicio ${completados[`${index}-${idx}`] ? "completado" : ""}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleCompletado(index, idx)}
                    >
                      <input type="checkbox" checked={!!completados[`${index}-${idx}`]} readOnly />
                      <img
                        src={imagenes[ejercicio] || "/imagenes/default.png"}
                        alt={ejercicio}
                        className="ejercicio-img"
                      />
                      <p>{ejercicio}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <button className="btn-secundario" onClick={generarPDF}>
            📄 Descargar PDF
          </button>
        </section>
      )}

      {/* 🔹 Tarjetas de servicios
      <h2 className="titulo-seccion">💪 Nuestros Servicios</h2>
      <div className="servicios-grid">
        <div className="servicio-card">
          <h3>Rutinas Personalizadas</h3>
          <p>Entrenamientos adaptados a tu nivel, objetivo y disponibilidad.</p>
        </div>
        <div className="servicio-card">
          <h3>Planes Nutricionales</h3>
          <p>Aprende a alimentarte sin restricciones con guías fáciles de seguir.</p>
        </div>
        <div className="servicio-card">
          <h3>Seguimiento Online</h3>
          <p>Progreso y motivación asegurada con monitoreo constante.</p>
        </div>
      </div> */}
    </div>
  );
}

export default Servicios;
