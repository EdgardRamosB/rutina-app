import React from "react";
import { Routes, Route, Navigate, BrowserRouter, HashRouter } from "react-router-dom";

import Progreso from "./pages/Progreso";
import Home from "./pages/Home";
import "./App.css";
import Contactanos from "./componentes/Contactanos";
import Servicios from "./componentes/Servicios";
import Personalizado from "./componentes/Personalizado";
import Navbar from "./componentes/Navbar";

// Detectar si estamos en GitHub Pages (usa HashRouter) o en otro hosting (usa BrowserRouter)
const isGitHubPages = window.location.hostname.includes("github.io");
const Router = isGitHubPages ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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
