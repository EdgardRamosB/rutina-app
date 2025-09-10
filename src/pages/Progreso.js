// src/pages/Progreso.js
import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import "./Progreso.css";

const ejercicios = {
  Pecho: [
    "Apertura para pecho en maquina",
    "Fondos en paralelas o Dips",
    "Press banco plano",
    "Press inclinado con mancuerna",
    "Press plano en maquina",
    "Cruces en polea alta",
    "Cruces en polea baja",
    "Flexiones de brazos en pared",
    "Flexiones Brazos con Rodillas",
    "Flexiones Inclinadas",
    "Flexiones de brazos agarre cerrado con balón medicinal",
    "Flexiones Cerradas",
    "Flexiones Diamante",
    "Flexiones Declinadas en banco",
    "Flexiones Neutral",
    "Flexiones Cerradas Neutral",
    "Flexiones en Paralelas",
    "Flexiones con Aplauso",
    "Fondos Gironda",
    "Dominadas Supinas Cerradas",
    "Press de Banca Inclinado",
    "Press de Banca Declinado",
    "Aperturas en banca",
  ],
  Hombros: [
    "Elevacion frontal/mancuerna",
    "Pres militar sentado/mancuerna",
    "Press Hammer",
    "Press militar parado/ barra",
    "Elevaciones laterales",
    "Elevaciones laterales sentado",
    "Press Arnold",
    "Pajaros con mancuernas en banco",
    "Pajaros con mancuernas",
    "Elevaciones laterales en polea",
    "Jalon a la cara",
    "Deltoide posterior en banco inclinado",
    "Deltoide posterior en maquina",
    "Cruce en polea alta",
    "Press hombro con barra",
  ],
  Biceps: [
    "Curl Biceps mancuerna",
    "cruz en polea alta /biceps",
    "Bíceps, brazo en cruz en polea alta a una mano",
    "Curl de bicep en banco inclinado",
    "Curl Biceps barra",
    "Curl concentrado en máquina",
    "Curl martillo",
    "Curl martillo cruzado con mancuernas",
    "Curl concentrado",
    "Curl en polea baja",
    "Curl martillo en polea",
    "Curl en polea / barra",
    "Chin ups",
    "Curl araña con mancuerna",
    "Curl araña con barra",
  ],
  Triceps: [
    "Extension triceps a una mano polea alta",
    "Extension triceps a una mano polea baja",
    "Extension triceps polea alta",
    "Extension tras nuca en polea alta",
    "Copa con mancuerna",
    "Extensión mancuerna tras nuca con una mano",
    "Extension de triceps a una mano",
    "Press banco cerrado",
    "Fondos para triceps",
  ],
  Espalda: [
    "Dominadas abiertas / Espalda",
    "Remo sentado en polea",
    "Remo sentado en polea agarre cerrado",
    "Remo con barra",
    "Jalon polea frontal / agarre abierto",
    "jalon polea frontal / agarre cerrado",
    "Pull over",
    "Remo con mancuerna / Serrucho",
  ],
  Cuadriceps: [
    "Sentadilla",
    "Extension de piernas",
    "Sentadilla frontal",
    "Hack Squat",
    "Prensa",
    "Zancada con mancuerna",
  ],
  Femoral: [
    "Curl femoral sentado",
    "Curl femoral acostado",
    "Curl de biceps femoral de pie",
    "Peso muerto rumano con mancuernas / Isquiotibiales",
    "Sentadilla sumo",
  ],
  Gluteos: [
    "Step up",
    "Sentadilla bulgara",
    "Patada en polea",
    "Sentadilla Profunda en Smith",
    "Back extension",
    "Hip thrust",
    "Puente gluteo",
    "Aductores",
    "Patada Sprinter",
    "Peso muerto rumano con barra",
  ],
};

const Progreso = () => {
  const [dni, setDni] = useState("");
  const [fecha, setFecha] = useState("");
  const [categoria, setCategoria] = useState("");
  const [rutina, setRutina] = useState("");
  const [series, setSeries] = useState("");
  const [peso, setPeso] = useState("");
  const [listaPesos, setListaPesos] = useState([]);
  const [progresos, setProgresos] = useState([]);

  // 👉 Buscar progresos por DNI
  const handleBuscarPorDni = async () => {
    const { data, error } = await supabase
      .from("progresos")
      .select("*")
      .eq("dni", dni)
      .order("fecha", { ascending: true });

    if (error) {
      console.error("Error buscando:", error.message);
    } else {
      setProgresos(data);
    }
  };

  // 👉 Agregar peso a la lista
  const agregarPeso = () => {
    if (peso.trim() !== "") {
      setListaPesos([...listaPesos, peso]);
      setPeso("");
    }
  };

  const eliminarPeso = (index) => {
    setListaPesos(listaPesos.filter((_, i) => i !== index));
  };

  // 👉 Agregar progreso
  const handleAgregar = async () => {
    if (!dni || !fecha || !rutina || !series || listaPesos.length === 0) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const { data, error } = await supabase
      .from("progresos")
      .insert([
        {
          dni,
          fecha,
          rutina,
          series,
          peso: listaPesos.join(" - "), // guardamos todos los pesos
        },
      ])
      .select();

    if (error) {
      console.error("Error insertando:", error.message);
    } else {
      setProgresos([...progresos, ...data]);
      setFecha("");
      setCategoria("");
      setRutina("");
      setSeries("");
      setListaPesos([]);
    }
  };

  // 👉 Eliminar progreso
  const handleEliminar = async (id) => {
    const { error } = await supabase.from("progresos").delete().eq("id", id);

    if (error) {
      console.error("Error eliminando:", error.message);
    } else {
      setProgresos(progresos.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="progreso-container">
      <h2 className="titulo">📈 Registrar y Consultar Progreso</h2>

      {/* 🔍 Buscar */}
      <div className="card">
        <h3>🔍 Buscar por DNI</h3>
        <input
          type="text"
          placeholder="Ingrese DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        <button onClick={handleBuscarPorDni}>Buscar</button>
      </div>

      {/* 📝 Registrar */}
      <div className="card">
        <h3>📝 Registrar Progreso</h3>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        {/* Selección de categoría */}
        <select
          value={categoria}
          onChange={(e) => {
            setCategoria(e.target.value);
            setRutina("");
          }}
        >
          <option value="">Seleccione Categoría</option>
          {Object.keys(ejercicios).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Selección de ejercicio */}
        <select
          value={rutina}
          onChange={(e) => setRutina(e.target.value)}
          disabled={!categoria}
        >
          <option value="">Seleccione Ejercicio</option>
          {categoria &&
            ejercicios[categoria].map((ej, i) => (
              <option key={i} value={ej}>
                {ej}
              </option>
            ))}
        </select>

        <input
          type="number"
          placeholder="Series"
          value={series}
          onChange={(e) => setSeries(e.target.value)}
        />

        {/* Pesos dinámicos */}
        <div className="peso-dinamico">
          <input
            type="text"
            placeholder="Peso y repeticiones (ej: 80kg x 12 reps)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          <button onClick={agregarPeso}>Agregar Peso</button>
        </div>

        {/* Lista de pesos */}
        <ul>
          {listaPesos.map((p, i) => (
            <li key={i}>
              {p} Reps
              <button onClick={() => eliminarPeso(i)}>❌</button>
            </li>
          ))}
        </ul>

        <button onClick={handleAgregar}>Agregar Progreso</button>
      </div>

      {/* 📊 Resultados */}
      <div className="card">
        <h3>📊 Progresos Ingresados</h3>
        
        <table className="tabla-progreso">
          <thead>
            <tr>
              <th>DNI</th>
              <th>Fecha</th>
              <th>Ejercicio</th>
              <th>Series</th>
              <th>Pesos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {progresos.map((p) => (
              <tr key={p.id}>
                <td>{p.dni}</td>
                <td>{p.fecha}</td>
                <td>{p.rutina}</td>
                <td>{p.series}</td>
                <td>
                    {p.peso
                      .split("-")        // separamos cada serie por "-"
                      .map((serie, idx) => (
                        <div key={idx}>{serie.trim()}</div> // cada una en una línea
                      ))}
                </td>
                <td>
                  <button
                    className="btn-eliminar"
                    onClick={() => handleEliminar(p.id)}
                  >
                    ❌ Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Progreso;
