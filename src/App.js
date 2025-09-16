import React from "react";
// import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";



import Progreso from "./pages/Progreso";
import Home from "./pages/Home";
import "./App.css";
import Contactanos from "./componentes/Contactanos";
import Servicios from "./componentes/Servicios";
import Personalizado from "./componentes/Personalizado";
import Navbar from "./componentes/Navbar";

export default function App() {
  return (
    <Router>
      {/* 🔹 Menú de navegación */}
      <Navbar />

      {/* 🔹 Rutas */}
      <Routes>
        {/* ✅ Cuando alguien entre a "/", lo mandamos a "/rutina-app" */}
        <Route path="/" element={<Navigate to="/rutina-app" />} />
        <Route path="/rutina-app" element={<Home />} />
        <Route path="/progreso" element={<Progreso />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/personalizado" element={<Personalizado />} />
      </Routes>
    </Router>
  );
}
