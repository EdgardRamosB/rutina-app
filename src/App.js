import React from "react";
import { Routes, Route, Navigate, BrowserRouter, HashRouter } from "react-router-dom";

import Progreso from "./pages/Progreso.js";
import Home from "./pages/Home.js";
import "./App.css";
import Contactanos from "./componentes/Contactanos.js";
import Servicios from "./componentes/Servicios.js";
import Personalizado from "./componentes/Personalizado.js";
import Navbar from "./componentes/Navbar.js";

import CheckoutButton from "./pages/CheckoutButton.js"; // si lo estás usando

// Integración en tu app
import Carrito from "./componentes/Carrito.js";// si lo guardas en pages
<Route path="/carrito" element={<Carrito />} />


// Detectar si estamos en GitHub Pages (usa HashRouter) o en otro hosting (usa BrowserRouter)
const isGitHubPages = window.location.hostname.includes("github.io");
const Router = isGitHubPages ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home directo */}
        <Route path="/" element={<Home />} />
        
        {/* Solo en GitHub Pages se accede también por /rutina-app */}
        {isGitHubPages && <Route path="/rutina-app" element={<Home />} />}

        <Route path="/progreso" element={<Progreso />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/personalizado" element={<Personalizado />} />

              {/* 👇 NUEVA RUTA */}
        <Route path="/carrito" element={<Carrito />} />

        {/* Catch-all: redirige a Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
