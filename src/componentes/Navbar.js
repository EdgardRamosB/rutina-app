import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img 
        src={`${process.env.PUBLIC_URL}/imagenes/marca.png`} 
        alt="Walking Fit Logo" 
        />
        <div className="nombre-entrenador">
          Edgard Ramos
        </div>
      </div>

      {/* Botón hamburguesa */}
      <div className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/rutina-app" onClick={() => setOpen(false)}>Inicio</Link></li>
        <li><Link to="/servicios" onClick={() => setOpen(false)}>Servicios</Link></li>
        <li><Link to="/personalizado" onClick={() => setOpen(false)}>Personalizado</Link></li>
        <li><Link to="/progreso" onClick={() => setOpen(false)}>Progreso</Link></li>
        <li><Link to="/tienda" onClick={() => setOpen(false)}>Tienda</Link></li>
        <li><Link to="/contactanos" onClick={() => setOpen(false)}>Contáctanos</Link></li>
        {/* <li><Link to="/carrito" onClick={() => setOpen(false)}>Carrito</Link></li> */}
        <Link to="/carrito">
          <ShoppingCart size={24} />
        </Link>


      </ul>
    </nav>
  );
}

export default Navbar;
