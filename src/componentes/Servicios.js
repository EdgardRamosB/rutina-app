// src/componentes/Servicios.js
import React from "react";
import { Dumbbell, LineChart, Heart, Smartphone, Users } from "lucide-react";
import "./Servicios.css";





export default function Servicios() {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          💪 Nuestros Servicios
        </h2>
        <p className="text-gray-600 mb-12">
          Todo lo que necesitas para lograr tus objetivos de forma segura y efectiva.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Rutinas Personalizadas */}
          <div className="servicio-card p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <Dumbbell className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rutinas Personalizadas</h3>
            <p className="text-gray-600">
              Entrenamientos adaptados a tu nivel, objetivo y disponibilidad de equipo.
            </p>
          </div>

          {/* Seguimiento del Progreso */}
          <div className="servicio-card p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <LineChart className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seguimiento del Progreso</h3>
            <p className="text-gray-600">
              Monitorea tus avances y ajusta tus rutinas según tus resultados.
            </p>
          </div>

          {/* Asesoría Nutricional */}
          <div className="servicio-card nutricion p-6 bg-white rounded-2xl shadow-md transition">
            <Heart className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Asesoría Nutricional</h3>
            <p className="text-gray-600">
              Planes y consejos de alimentación para potenciar tu rendimiento.
            </p>
          </div>



          {/* Entrenamiento Online */}
          <div className="servicio-card p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <Smartphone className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Entrenamiento Online</h3>
            <p className="text-gray-600">
              Accede a tus rutinas desde cualquier lugar, en tu casa o gimnasio.
            </p>
          </div>

          {/* Comunidad y Soporte */}
          <div className="servicio-card p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <Users className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comunidad y Soporte</h3>
            <p className="text-gray-600">
              Forma parte de nuestra comunidad y recibe apoyo de entrenadores y compañeros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
