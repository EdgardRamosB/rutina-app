// src/pages/Progreso.js
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import "./Progreso.css";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ejercicios = {
  Pecho: [
    "Apertura para pecho en maquina",
    "Fondos en paralelas o Dips",
    "Press banco plano",
    "Press inclinado con mancuerna",
    "Press plano en maquina",
    "Cruces en polea alta",
    "Cruces en polea baja",
    "Flexiones",
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
    "Plancha lateral",
    "Aperturas en banca",
  ],
  Hombros: [
    "Elevacion frontal/mancuerna",
    "Pres militar sentado/mancuerna",
    "Press Hammer",
    "Press militar parado/ barra",
    "Elevaciones laterales",
    "elevaciones laterales con mancuerna",
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
    "Superman",
  ],
  Cuadriceps: [
    "Sentadilla",
    "Extension de piernas",
    "Sentadilla frontal",
    "Hack Squat",
    "Prensa",
    "zancadas",
    "Zancada con mancuerna",
    "Zancadas laterales",
    "Sentadillas con salto",
  ],
  Femoral: [
    "Curl femoral sentado",
    "Curl femoral acostado",
    "Curl de biceps femoral de pie",
    "Peso muerto rumano con mancuernas / Isquiotibiales",
    "Sentadilla sumo",
  ],
  Abdomen: ["Abdominales básicos", "Crunch bicicleta", "Plancha frontal"],
  Pantorrillas: ["elevaciones de talones"],
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
    "Puente de gluteo",
    "Peso muerto rumano con barra",
    "Patadas traseras",
  ],
};

// --- Helpers para parsear pesos
// Extrae todos los números (acepta 80, 80.5, 80,5) y devuelve array de floats.
const parseWeights = (pesoString) => {
  if (!pesoString) return [];
  return pesoString
    .split("-")
    .map((s) => {
      const match = s.match(/(\d+([.,]\d+)?)/);
      if (match) return parseFloat(match[0].replace(",", "."));
      return NaN;
    })
    .filter((n) => !isNaN(n));
};

// Devuelve el máximo peso de un registro (o 0 si no hay)
const obtenerPesoMaximo = (pesoString) => {
  const weights = parseWeights(pesoString);
  if (weights.length === 0) return 0;
  return Math.max(...weights);
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
  
  // Agregar un estado para guardar el ejercicio seleccionado
  const [selectedExercise, setSelectedExercise] = useState("");


  // Para el gráfico
  const [filtroEjercicio, setFiltroEjercicio] = useState(""); // ejercicio que vamos a graficar

  // Buscar progresos por DNI
  const handleBuscarPorDni = async () => {
    if (!dni) {
      alert("Ingrese DNI para buscar.");
      return;
    }
    const { data, error } = await supabase
      .from("progresos")
      .select("*")
      .eq("dni", dni)
      .order("fecha", { ascending: true });

    if (error) {
      console.error("Error buscando:", error.message);
    } else {
      setProgresos(data || []);
      // Si hay datos, establecer por defecto el primer ejercicio encontrado
      const ejerciciosUnicos = [...new Set((data || []).map((p) => p.rutina).filter(Boolean))];
      setFiltroEjercicio(ejerciciosUnicos[0] || "");
    }
  };

  // Agregar peso a la lista
  const agregarPeso = () => {
    if (peso.trim() !== "") {
      setListaPesos([...listaPesos, peso.trim()]);
      setPeso("");
    }
  };

  const eliminarPeso = (index) => {
    setListaPesos(listaPesos.filter((_, i) => i !== index));
  };

  // Agregar progreso
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
          peso: listaPesos.join(" - "),
        },
      ])
      .select();

    if (error) {
      console.error("Error insertando:", error.message);
    } else {
      // actualizar lista localmente
      setProgresos((prev) => [...prev, ...data]);
      // si no hay filtro seleccionado, seleccionar la rutina recién agregada
      if (!filtroEjercicio) setFiltroEjercicio(data[0]?.rutina || "");
      // limpiar formulario
      setFecha("");
      setCategoria("");
      setRutina("");
      setSeries("");
      setListaPesos([]);
    }
  };

  // Eliminar progreso
  const handleEliminar = async (id) => {
    const { error } = await supabase.from("progresos").delete().eq("id", id);

    if (error) {
      console.error("Error eliminando:", error.message);
    } else {
      setProgresos(progresos.filter((p) => p.id !== id));
    }
  };

  // Cuando cambian los progresos asegúrate que el filtro de ejercicio sigue válido
  useEffect(() => {
    if (!filtroEjercicio && progresos.length > 0) {
      const ejerciciosUnicos = [...new Set(progresos.map((p) => p.rutina).filter(Boolean))];
      setFiltroEjercicio(ejerciciosUnicos[0] || "");
    }
  }, [progresos, filtroEjercicio]);

  // Preparar datos para el gráfico: ordenar por fecha y mapear a {fecha, peso}
  const dataGrafico = progresos
    .filter((p) => (filtroEjercicio ? p.rutina === filtroEjercicio : true))
    .slice() // crear copia
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))
    .map((p) => ({
      fecha: new Date(p.fecha).toLocaleDateString("es-PE"),
      peso: obtenerPesoMaximo(p.peso),
    }))
    .filter((d) => d.peso > 0); // quitar registros sin datos de peso

  // Lista de ejercicios disponibles dentro de los progresos del usuario
  const ejerciciosDisponibles = [...new Set(progresos.map((p) => p.rutina).filter(Boolean))];

     // filtrar los progreoss ingresados
    const progresosFiltrados = selectedExercise
      ? progresos.filter((p) => p.rutina === selectedExercise)
      : progresos;


  return (
    <div className="progreso-container">
      <h2 className="titulo">📈 Registrar y Consultar Progreso</h2>

      {/* Buscar */}
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

      {/* Registrar */}
      <div className="card">
        <h3>📝 Registrar Progreso</h3>
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />

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
        <select value={rutina} onChange={(e) => setRutina(e.target.value)} disabled={!categoria}>
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
              {p}
              <button onClick={() => eliminarPeso(i)}>❌</button>
            </li>
          ))}
        </ul>

        <button onClick={handleAgregar}>Agregar Progreso</button>
      </div>

      {/* Gráfico */}
      <div className="card">
        <h3>📊 Evolución de Peso</h3>

        {/* Selector para elegir ejercicio a graficar (si hay varios) */}
        {ejerciciosDisponibles.length > 0 ? (
          <div style={{ marginBottom: 12 }}>
            <label style={{ marginRight: 8 }}>Ejercicio:</label>
            <select
              value={filtroEjercicio}
              onChange={(e) => setFiltroEjercicio(e.target.value)}
            >
              <option value="">-- Todos --</option>
              {ejerciciosDisponibles.map((ej) => (
                <option key={ej} value={ej}>
                  {ej}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div style={{ marginBottom: 12 }}>Busca un DNI para cargar datos y ver el gráfico.</div>
        )}

        {dataGrafico.length === 0 ? (
          <div>No hay datos para mostrar en el gráfico.</div>
        ) : (
          <div style={{ width: "100%", height: 320 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dataGrafico}>
                <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
                <XAxis dataKey="fecha" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="peso" stroke="#2b6cb0" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* codigo para filtrar los progresos */}
        <div>
            <label>Filtrar por ejercicio: </label>
            <select
              value={selectedExercise}
              onChange={(e) => setSelectedExercise(e.target.value)}
            >
              <option value="">Todos</option>
              {Object.values(ejercicios).flat().map((ej, index) => (
                <option key={index} value={ej}>
                  {ej}
                </option>
              ))}
            </select>
        </div>


      {/* Resultados en tabla */}
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
            {progresosFiltrados.map((p) => (
              <tr key={p.id}>
                <td>{p.dni}</td>
                <td>{new Date(p.fecha).toLocaleDateString("es-PE")}</td>
                <td>{p.rutina}</td>
                <td>{p.series}</td>
                <td>
                  {p.peso
                    .split("-")
                    .map((serie, idx) => <div key={idx}>{serie.trim()}</div>)}
                </td>
                <td>
                  <button className="btn-eliminar" onClick={() => handleEliminar(p.id)}>
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
