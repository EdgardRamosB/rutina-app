import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="App">
      {/* PERFIL 1 */}
      <section className="perfil">
        <div className="perfil-contenido">
          <div className="perfil-texto">
            <h2>EDGARD</h2>
            <h3>EENTRENAMIENTO NATURAL Y EFECTIVO
            </h3>
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

      {/* PERFIL 2 */}
      <section className="perfil2">
        <div className="perfil-contenido-cambio">
          <div className="perfil-texto-cambio">
            <h2>¿QUIERES UN CAMBIO?</h2>
            <p>
              A través de mi propia experiencia puedo decirte que un cambio es posible, solo tienes
              que desearlo, proponértelo y lo conseguirás.
              <br />
              <br />
              Con mi ayuda no te resultará difícil, te demostraré que puedes hacerlo sin sufrimiento,
              solo con voluntad y decisión.
              <br />
              <br />
              La combinación de dieta y ejercicio es fundamental para conseguir el cuerpo deseado de
              forma saludable.
              <br />
              <br />
              Si has llegado hasta aquí ya has dado el primer paso, el más importante. ¡Ánimo! Esto
              no ha hecho más que empezar.
              <br />
            </p>
          </div>
          <div className="perfil-foto-derecha">
            <img src={`${process.env.PUBLIC_URL}/imagenes/fit.png`} alt="Cambio físico" />
          </div>
        </div>
      </section>

      {/* PERFIL 3 */}
      <section className="perfil3">
        <div className="perfil3-contenido-cambio">
          <div className="perfil3-foto-izquierda">
            <img src={`${process.env.PUBLIC_URL}/imagenes/edperfil.png`} alt="Entrenador" />
          </div>
          <div className="perfil3-texto-cambio">
            <h2>ENTRENAMIENTO PERSONALIZADO</h2>
          <div>
            <p>
              Yo personalmente me encargo de tu transformación, tanto en las rutinas como en la
              dieta.
              <br />
              <br />
              Aprenderás a hacer tus propias dietas, comiendo equilibradamente y sin restricciones.
              <br />
              <br />
              Te haré un seguimiento durante el tiempo que dure tu entrenamiento que consistirá en
              evaluar tus ejercicios para realizarlos correctamente, con seguridad y de forma
              efectiva para obtener los mejores resultados.
              <br />
              <br />
              Conseguirás:
            </p>
          <ul className="beneficios-lista">
            <li>Pérdida de peso / volumen</li>
            <li>Tonificar y esculpir tu cuerpo</li>
            <li>Resistencia</li>
            <li>Movilidad / Flexibilidad</li>
            <li>Alimentación equilibrada</li>
          </ul>

          </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
