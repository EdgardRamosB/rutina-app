import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { HashRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

import Progreso from "./pages/Progreso";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  return (
    <Router>
      {/* 🔹 Menú de navegación */}
      <header className="header">
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/imagenes/marca.png`}
            alt="Walking Fit Logo"
            className="logo-img"
          />
        </div>

        <nav className="menu">
          <ul>
            <li><a href="#personalizados">PERSONALIZADO</a></li>
            <li><Link to="/rutina-app">INICIO</Link></li> {/* ✅ Cambiado */}
            <li><Link to="/progreso">PROGRESO</Link></li>
            <li><Link to="/">SERVICIOS</Link></li>
            <li><Link to="/">CONTACTENOS</Link></li>
          </ul>
        </nav>
      </header>

      {/* 🔹 Rutas */}
      <Routes>
        {/* ✅ Cuando alguien entre a "/", lo mandamos a "/rutina-app" */}
        <Route path="/" element={<Navigate to="/rutina-app" />} />
        <Route path="/rutina-app" element={<Home />} />
        <Route path="/progreso" element={<Progreso />} />
      </Routes>
    </Router>
  );
}
