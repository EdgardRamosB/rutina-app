import React from "react";
import "./Contactanos.css";


// src/components/Contactanos.js
import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Contactanos() {
  return (
    <section id="contactanos" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          📩 Contáctanos
        </h2>
        <p className="text-gray-600 mb-12">
          ¿Tienes dudas, sugerencias o quieres más información? 
          Escríbenos y te responderemos lo antes posible.
        </p>

        {/* Formulario */}
        <form className="grid gap-6 max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <input
            type="text"
            placeholder="Tu nombre"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            rows="4"
            placeholder="Tu mensaje"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Datos de contacto */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <a
            href="mailto:eoesac@gmail.com"
            className="flex items-center justify-center gap-2 text-gray-700 hover:text-indigo-600"
          >
            <Mail className="w-5 h-5" /> eoesac@gmail.com
          </a>

          <a
            href="tel:+51999999999"
            className="flex items-center justify-center gap-2 text-gray-700 hover:text-indigo-600"
          >
            <Phone className="w-5 h-5" /> +51 960 225 690
          </a>

          <a
            href="https://wa.me/51960225690?text=Hola!%20Quiero%20más%20información%20sobre%20WalkingFit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </div>

        {/* Redes sociales */}
        {/* <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://instagram.com/tumarca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com/tumarca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div> */}
      </div>
    </section>
  );
}
