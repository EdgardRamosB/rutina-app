import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "../App.css"; 
import { motion } from "framer-motion";
import imagenes from "../data/imagenes";


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
} from "../data/criterios";  // 👈 cambia a data



function Home() {
  const [darkMode, setDarkMode] = useState(false);
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

  // 🔹 Generar rutina desde parámetros
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

  // ✅ Revisar en localStorage al cargar la página
  useEffect(() => {
    const pago = localStorage.getItem("pagoConfirmado");
    if (pago === "true") {
      setPagoConfirmado(true);
    }
  }, []);

  // ✅ Guardar pago en localStorage
  const handlePagoConfirmado = () => {
    setPagoConfirmado(true);
    localStorage.setItem("pagoConfirmado", "true");
  };

  // 🔹 Detectar pago desde query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("pago") === "ok") {
      setPagoConfirmado(true);
      setSexo(params.get("sexo") || "");
      setObjetivo(params.get("objetivo") || "");
      setNivel(params.get("nivel") || "");
      setDias(params.get("dias") || "");
      setEquipo(params.get("equipo") || "");
      generarRutinaDesdeParams(params);
    }
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
      new URLSearchParams({
        sexo,
        objetivo,
        nivel,
        dias,
        equipo,
      })
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
    <div className={`App ${darkMode ? "dark" : ""}`}>
      {/* FORMULARIO */}
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

      {/* MOSTRAR RUTINA */}
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
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
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

      {/* NUEVAS SECCIONES */}
      <section className="perfil">
        <div className="perfil-contenido">
          <div className="perfil-texto">
            <h2>EDGARD</h2>
            <p>
              Apasionado por el fitness y la tecnología. Estoy desarrollando una app para rutinas
              personalizadas que combinan entrenamiento con diseño moderno.
            </p>
            <button className="btn-quiensoy">Quien soy yo</button>
          </div>

          <div className="perfil-foto">
            <img src={`${process.env.PUBLIC_URL}/imagenes/edperfil3.png`} alt="EDGARD JORDAN" />
          </div>
        </div>
      </section>

      <section className="perfil2">
        <div className="perfil-contenido-cambio">
          <div className="perfil-texto-cambio">
            <h2>¿QUIERES UN CAMBIO?</h2>
            <p>
              A través de mi propia experiencia puedo decirte que un cambio es posible, solo tienes
              que desearlo, proponértelo y lo conseguirás.
              <br />
              Con mi ayuda no te resultará difícil, te demostraré que puedes hacerlo sin
              sufrimiento, solo con voluntad y decisión.
              <br />
              La combinación de dieta y ejercicio es fundamental para conseguir el cuerpo deseado de
              forma saludable.
              <br />
              Si has llegado hasta aquí ya has dado el primer paso, el más importante. ¡Ánimo! Esto
              no ha hecho más que empezar.
            </p>
          </div>

          <div className="perfil-foto-derecha">
            <img src={`${process.env.PUBLIC_URL}/imagenes/fit.png`} alt="Cambio físico" />
          </div>
        </div>
      </section>

      <section className="perfil3">
        <div className="perfil3-contenido-cambio">
          <div className="perfil3-foto-izquierda">
            <img src={`${process.env.PUBLIC_URL}/imagenes/edperfil.png`} alt="Entrenador" />
          </div>
          <div className="perfil3-texto-cambio">
            <h2>ENTRENAMIENTO PERSONALIZADO</h2>
            <p>
              Yo personalmente me encargo de tu transformación, tanto en las rutinas como en la
              dieta.
              <br />
              Aprenderás a hacer tus propias dietas, comiendo equilibradamente y sin restricciones.
              <br />
              Te haré un seguimiento durante el tiempo que dure tu entrenamiento que consistirá en
              evaluar tus ejercicios para realizarlos correctamente, con seguridad y de forma
              efectiva para obtener los mejores resultados.
              <br />
              Conseguirás:
              <ul>
                <li>Pérdida de peso / volumen</li>
                <li>Tonificar y esculpir tu cuerpo</li>
                <li>Resistencia</li>
                <li>Movilidad / Flexibilidad</li>
                <li>Alimentación equilibrada</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
