import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import "./App.css";
import { motion } from "framer-motion";

// import { useState } from "react";
import { Menu } from "lucide-react";





//imagenes
//imagenes
const imagenes = {
  "hip thrust con barra": `${process.env.PUBLIC_URL}/imagenes/hip-thrust-con-barra.png`,
  "Zancada Smith": `${process.env.PUBLIC_URL}/imagenes/zancada-smith.png`,
  "peso muerto rumano": `${process.env.PUBLIC_URL}/imagenes/peso-muerto-rumano.png`,
  "patada sprinter": `${process.env.PUBLIC_URL}/imagenes/patada-sprinter.png`,
  "femoral sentado": `${process.env.PUBLIC_URL}/imagenes/femoral-sentado.png`,
  "Sentadilla Hacka": `${process.env.PUBLIC_URL}/imagenes/sentadilla-hacka.png`,
  "prensa de pierna unilateral": `${process.env.PUBLIC_URL}/imagenes/prensa-unilateral.png`,
  "extension de piernas": `${process.env.PUBLIC_URL}/imagenes/extension-piernas.png`,
  "femoral acostado": `${process.env.PUBLIC_URL}/imagenes/femoral-acostado.png`,
  "Press banco plano": `${process.env.PUBLIC_URL}/imagenes/press-banco.png`,
  "curl bicep": `${process.env.PUBLIC_URL}/imagenes/curl-bicep.png`,
  "curl martillo": `${process.env.PUBLIC_URL}/imagenes/curl-martillo.png`,
  "elevaciones laterales con mancuerna": `${process.env.PUBLIC_URL}/imagenes/elevaciones-laterales.png`,
  "deltoide posterior en polea": `${process.env.PUBLIC_URL}/imagenes/deltoide-polea.webp`,
  "Extension triceps a una mano polea alta": `${process.env.PUBLIC_URL}/imagenes/triceps-alta.png`,
  "Extension triceps a una mano polea baja": `${process.env.PUBLIC_URL}/imagenes/triceps-baja.png`,
  "Jalon polea frontal": `${process.env.PUBLIC_URL}/imagenes/jalon-frontal.png`,
  "remo en T agarre abierto": `${process.env.PUBLIC_URL}/imagenes/remo-abierto.png`,
  "remo en T agarre cerrado": `${process.env.PUBLIC_URL}/imagenes/remo-cerrado.png`,
  "prensa de piernas": `${process.env.PUBLIC_URL}/imagenes/prensa-piernas.png`,
  "press militar sentado": `${process.env.PUBLIC_URL}/imagenes/prensa-militar-sentado.png`,
  "Sentadilla Bulgara": `${process.env.PUBLIC_URL}/imagenes/sentadilla-bulgara.webp`,
  "aperturas de pecho en maquina": `${process.env.PUBLIC_URL}/imagenes/apertura-pecho-maquina.webp`,
  "Extension triceps a una mano polea baja": `${process.env.PUBLIC_URL}/imagenes/extension-triceps-unamano-poleabaja.webp`,
  "Extension triceps a una mano polea alta": `${process.env.PUBLIC_URL}/imagenes/Extension-triceps-una-mano-poleaalta.webp`,
  "Extension de triceps tras nuca en polea": `${process.env.PUBLIC_URL}/imagenes/extension-de-triceps-tras-nuca-en-polea.webp`,
  "Jalon polea frontal": `${process.env.PUBLIC_URL}/imagenes/Jalon-polea-frontal.webp`,   
  "remo en T agarre abierto": `${process.env.PUBLIC_URL}/imagenes/remo-en-T-agarre-abierto.webp`,   
  "remo en T agarre cerrado": `${process.env.PUBLIC_URL}/imagenes/remo-en-T-agarre-cerrado.webp`, 
  "sentadilla smith": `${process.env.PUBLIC_URL}/imagenes/sentadilla-smith.webp`, 
  "flexiones": `${process.env.PUBLIC_URL}/imagenes/flexiones.webp`, 
  "curl bicep en banco": `${process.env.PUBLIC_URL}/imagenes/curl-bicep-en-banco.webp`, 
  "curl martillo en banco": `${process.env.PUBLIC_URL}/imagenes/curl-martillo-en-banco.webp`,
  "deltoide posterior en maquina": `${process.env.PUBLIC_URL}/imagenes/deltoide-posterior-en-maquina.webp`,  
  "Extension triceps con mancuerna a 1 mano": `${process.env.PUBLIC_URL}/imagenes/Extension-triceps-con-mancuerna-a-1-mano.webp`,
  "extension de piernas unilateral": `${process.env.PUBLIC_URL}/imagenes/extension-de-piernas-unilateral.webp`,  
  "remo sentado": `${process.env.PUBLIC_URL}/imagenes/remo-sentado.webp`,    
  "pull over con cuerda en polea": `${process.env.PUBLIC_URL}/imagenes/pull-over-con-cuerda-en-polea.webp`, 
  "patada en polea 45º": `${process.env.PUBLIC_URL}/imagenes/patada-en-polea-45º.webp`, 
  "extension de triceps en polea": `${process.env.PUBLIC_URL}/imagenes/extension-de-triceps-en-polea.webp`,
  "Burpees": `${process.env.PUBLIC_URL}/imagenes/Burpees.webp`,
  "Cuerda": `${process.env.PUBLIC_URL}/imagenes/Cuerda.webp`,
  "Jumping Jacks": `${process.env.PUBLIC_URL}/imagenes/Jumping-Jacks.webp`,
  "Mountain Climbers": `${process.env.PUBLIC_URL}/imagenes/Mountain-Climbers.webp`,
  "sentadilla": `${process.env.PUBLIC_URL}/imagenes/sentadilla.webp`,  
  "peso muerto con mancuernas": `${process.env.PUBLIC_URL}/imagenes/peso-muerto-con-mancuernas.webp`,
  "puente de gluteo": `${process.env.PUBLIC_URL}/imagenes/puente-de-gluteo.webp`,
  "press militar con mancuernas": `${process.env.PUBLIC_URL}/imagenes/press-militar-con-mancuernas.webp`,
  "fondos en banco": `${process.env.PUBLIC_URL}/imagenes/fondos-en-banco.webp`,  
  "extension triceps con mancuerna": `${process.env.PUBLIC_URL}/imagenes/extension-triceps-con-mancuernas.webp`,
  "remo con mancuerna": `${process.env.PUBLIC_URL}/imagenes/remo-con-mancuerna.webp`,
  "abdominales crunch": `${process.env.PUBLIC_URL}/imagenes/abdominales-crunch.webp`,  
  "zancadas": `${process.env.PUBLIC_URL}/imagenes/zancadas.webp`, 
  "dominadas asistidas": `${process.env.PUBLIC_URL}/imagenes/dominadas-asistidas.webp`,
  "press francés con mancuerna": `${process.env.PUBLIC_URL}/imagenes/press-francés-con-mancuerna.webp`,  
  "abducciones en máquina": `${process.env.PUBLIC_URL}/imagenes/abducciones-en-máquina.webp`,  
  "elevaciones de talones": `${process.env.PUBLIC_URL}/imagenes/elevaciones-de-talones.webp`,
  "plancha lateral": `${process.env.PUBLIC_URL}/imagenes/plancha-lateral.webp`,  
  "encogimientos": `${process.env.PUBLIC_URL}/imagenes/encogimientos.webp`,
  "zancadas con mancuernas": `${process.env.PUBLIC_URL}/imagenes/zancadascon-mancuernas.webp`,  
  "press inclinado con mancuernas": `${process.env.PUBLIC_URL}/imagenes/press-inclinado-con-mancuernas.webp`,  
  "fondos": `${process.env.PUBLIC_URL}/imagenes/fondos.webp`,  
  "curl bíceps barra Z": `${process.env.PUBLIC_URL}/imagenes/curlbíceps-barraZ.webp`,  
  "face pulls": `${process.env.PUBLIC_URL}/imagenes/face-pulls.webp`,  
  "aperturas con mancuernas": `${process.env.PUBLIC_URL}/imagenes/aperturas-con-mancuernas.webp`,  
  "Patadas traseras": `${process.env.PUBLIC_URL}/imagenes/Patadas-traseras.webp`,   
  "Abdominales básicos": `${process.env.PUBLIC_URL}/imagenes/Abdominales-basicos.webp`,
  "Superman": `${process.env.PUBLIC_URL}/imagenes/Superman.webp`,
  "Sentadillas con salto": `${process.env.PUBLIC_URL}/imagenes/Sentadillas-con-salto.webp`,
  "Elevaciones laterales de pierna": `${process.env.PUBLIC_URL}/imagenes/Elevaciones-laterales-de-pierna.webp`, 
  "Crunch": `${process.env.PUBLIC_URL}/imagenes/Crunch.webp`,  
  "Plancha lateral": `${process.env.PUBLIC_URL}/imagenes/Plancha-lateral2.webp`,  
  "Plancha frontal": `${process.env.PUBLIC_URL}/imagenes/Plancha-frontal.webp`,
  "Zancadas laterales": `${process.env.PUBLIC_URL}/imagenes/Zancadas-laterales.webp`,  
  "Sentadilla": `${process.env.PUBLIC_URL}/imagenes/Sentadilla2.webp`,  
  "Zancadas dinámicas": `${process.env.PUBLIC_URL}/imagenes/Zancadas-dinámicas.webp`, 
  "Puente de glúteos con una pierna": `${process.env.PUBLIC_URL}/imagenes/Puente-de-glúteos-con-una-pierna.webp`,
  "Plancha con elevación de pierna": `${process.env.PUBLIC_URL}/imagenes/Plancha-con-elevación-de-pierna.webp`,
  "Crunch bicicleta": `${process.env.PUBLIC_URL}/imagenes/Crunch-bicicleta.webp`,
  "Superman con pausa": `${process.env.PUBLIC_URL}/imagenes/Superman-con-pausa.webp`,
  "Patadas de burro": `${process.env.PUBLIC_URL}/imagenes/Patadas-de-burro.webp`,
  "Elevaciones de piernas": `${process.env.PUBLIC_URL}/imagenes/Elevaciones-de-piernas.webp`,
  "Sentadilla sumo": `${process.env.PUBLIC_URL}/imagenes/Sentadilla-sumo.webp`,
  "Plancha con toque de hombro": `${process.env.PUBLIC_URL}/imagenes/Plancha-con-toque-de-hombro.webp`,
  "flexiones lastradas": `${process.env.PUBLIC_URL}/imagenes/flexiones-lastradas.webp`,
  "remo con barra": `${process.env.PUBLIC_URL}/imagenes/remo-con-barra.webp`,
  "dominadas lastradas": `${process.env.PUBLIC_URL}/imagenes/dominadas-lastradas.webp`,
  "fondos lastrados": `${process.env.PUBLIC_URL}/imagenes/fondos-lastrados.webp`,  
  "press inclinado con barra": `${process.env.PUBLIC_URL}/imagenes/press-inclinado-con-barra.webp`,  
  "dominadas pronadas": `${process.env.PUBLIC_URL}/imagenes/dominadas-pronadas.webp`,  
  "curl concentrado": `${process.env.PUBLIC_URL}/imagenes/curl-concentrado.webp`,  
  "press francés con barra Z": `${process.env.PUBLIC_URL}/imagenes/press-francés-con-barraZ.webp`,  
  "encogimientos con mancuernas": `${process.env.PUBLIC_URL}/imagenes/encogimientos-con-mancuernas.webp`,  
  "Dips en silla": `${process.env.PUBLIC_URL}/imagenes/Dips-en-silla.webp`,  
  "Elevaciones laterales sin peso": `${process.env.PUBLIC_URL}/imagenes/Elevaciones-laterales-sin-peso.webp`,  
  "Sentadilla profunda": `${process.env.PUBLIC_URL}/imagenes/Sentadilla-profunda.webp`,  
  "Step-ups en silla": `${process.env.PUBLIC_URL}/imagenes/Step-ups-en-silla.webp`,  
  "Bird-dog": `${process.env.PUBLIC_URL}/imagenes/Bird-dog.webp`,  
  "Curl femoral con toalla": `${process.env.PUBLIC_URL}/imagenes/Curl-femoral-con-toalla.webp`,  
  "Zancadas hacia atrás": `${process.env.PUBLIC_URL}/imagenes/Zancadas-hacia-atrás.webp`,  
  // Agrega más imágenes si es necesario
};
<img
  src="/tu-imagen.webp"
  alt="Imagen"
  className="img-hover-zoom"
/>

//criterios

const criteriosMujerPrincipianteGanarMasa = {
  3: [
    ["prensa de piernas", "peso muerto rumano", "femoral sentado", "extension de piernas"],
    ["Press banco plano", "curl bicep", "elevaciones laterales con mancuerna", "deltoide posterior en polea"],
    ["hip thrust con barra", "Zancada Smith", "patada sprinter", "femoral acostado"]
  ],
  4: [
    ["prensa de piernas", "peso muerto rumano", "extension de piernas"],
    ["Press banco plano", "curl bicep", "elevaciones laterales con mancuerna"],
    ["hip thrust con barra", "Zancada Smith", "patada sprinter"],
    ["femoral sentado", "femoral acostado", "Sentadilla Hacka"]
  ],
  5: [
    ["hip thrust con barra", "prensa de piernas", "peso muerto rumano", "femoral sentado"],
    ["Press banco plano", "curl bicep", "deltoide posterior en polea"],
    ["extension de piernas", "Sentadilla Hacka", "patada sprinter"],
    ["remo en T agarre cerrado", "Jalon polea frontal", "curl martillo"],
    ["Sentadilla Hacka", "femoral acostado", "Zancada Smith"]
  ],
  6: [
    ["hip thrust con barra", "prensa de piernas", "peso muerto rumano", "femoral sentado"],
    ["Press banco plano", "curl bicep", "deltoide posterior en polea"],
    ["extension de piernas", "Sentadilla Hacka", "patada sprinter"],
    ["remo en T agarre cerrado", "Jalon polea frontal", "curl martillo"],
    ["Sentadilla Hacka", "femoral acostado", "Zancada Smith"],
    ["aperturas de pecho en maquina", "elevaciones laterales con mancuerna", "curl bicep"]
  ]
};
  
const criteriosMujerIntermedioGanarMasa = {
  3: [
    ["sentadilla smith", "prensa de piernas", "extension de piernas"],
    ["flexiones", "curl bicep en banco", "curl martillo en banco", "press militar sentado", "elevaciones laterales con mancuerna", "deltoide posterior en maquina", "Extension triceps con mancuerna a 1 mano", "Jalon polea frontal"],
    ["hip thrust con barra", "Sentadilla Bulgara", "peso muerto rumano", "femoral sentado"]
  ],
  4: [
    ["sentadilla smith", "prensa de pierna unilateral", "extension de piernas unilateral", "femoral sentado"],
    ["flexiones", "curl bicep", "curl martillo", "press militar sentado", "elevaciones laterales con mancuerna", "deltoide posterior en maquina", "Extension triceps con mancuerna a 1 mano", "Jalon polea frontal", "remo sentado"],
    ["Sentadilla Bulgara", "peso muerto rumano", "femoral sentado", "femoral acostado"],
    ["flexiones", "curl bicep", "curl martillo", "press militar sentado", "elevaciones laterales con mancuerna", "deltoide posterior en maquina", "Extension triceps con mancuerna a 1 mano", "Jalon polea frontal", "remo sentado"]
  ],
  5: [
    ["sentadilla smith", "prensa de pierna unilateral", "extension de piernas unilateral", "femoral acostado", "femoral sentado"],
    ["flexiones", "curl bicep", "curl martillo", "elevaciones laterales con mancuerna", "deltoide posterior en maquina", "Extension triceps con mancuerna a 1 mano", "Jalon polea frontal", "pull over con cuerda en polea"],
    ["hip thrust con barra", "Sentadilla Bulgara", "peso muerto rumano", "patada en polea 45º"],
    ["flexiones", "curl bicep", "curl martillo", "elevaciones laterales con mancuerna", "deltoide posterior en maquina", "Extension triceps con mancuerna a 1 mano", "Jalon polea frontal", "pull over con cuerda en polea"],
    ["sentadilla smith", "prensa de pierna unilateral", "extension de piernas unilateral", "femoral acostado", "femoral sentado"]
  ],
  6: [
    ["sentadilla smith", "prensa de pierna unilateral", "extension de piernas unilateral", "hip thrust con barra", "Sentadilla Bulgara", "peso muerto rumano", "patada en polea 45º", "femoral sentado"],
    ["flexiones", "press militar sentado", "elevaciones laterales con mancuerna", "deltoide posterior en maquina", "Extension triceps con mancuerna a 1 mano", "extension de triceps en polea"],
    ["curl bicep", "curl martillo", "Jalon polea frontal", "pull over con cuerda en polea", "remo sentado"],
    ["sentadilla smith", "prensa de pierna unilateral", "extension de piernas unilateral", "hip thrust con barra", "Sentadilla Bulgara", "peso muerto rumano", "patada en polea 45º", "femoral sentado"],
    ["flexiones", "press militar sentado", "elevaciones laterales con mancuerna", "deltoide posterior en maquina", "Extension triceps con mancuerna a 1 mano", "extension de triceps en polea"],
    ["curl bicep", "curl martillo", "Jalon polea frontal", "pull over con cuerda en polea", "remo sentado"]
  ]
};

const criteriosMujerAvanzadoGanarMasa = {
  3: [
    ["hip thrust con barra", "Zancada Smith", "peso muerto rumano", "patada sprinter","Sentadilla Hacka", "prensa de pierna unilateral", "extension de piernas", "femoral sentado"],
    
    ["Press banco plano", "curl bicep", "curl martillo", "elevaciones laterales con mancuerna", "deltoide posterior en polea", "Extension triceps a una mano polea alta", "Extension triceps a una mano polea baja", "Extension de triceps tras nuca en polea", "Jalon polea frontal", "remo en T agarre abierto", "remo en T agarre cerrado"],
    ["Sentadilla Hacka", "prensa de pierna unilateral", "extension de piernas","hip thrust con barra", "Zancada Smith", "peso muerto rumano", "patada sprinter", "femoral acostado"],
  ],
  4: [
    ["hip thrust con barra", "Zancada Smith", "peso muerto rumano", "patada sprinter", "femoral sentado"],
    ["Press banco plano", "curl bicep", "curl martillo", "press militar sentado", "elevaciones laterales con mancuerna", "deltoide posterior en polea"],
    ["Sentadilla Hacka", "prensa de pierna unilateral", "extension de piernas", "femoral acostado"],
    ["Extension triceps a una mano polea alta", "Extension triceps a una mano polea baja", "Extension de triceps tras nuca en polea", "Jalon polea frontal", "remo en T agarre abierto", "remo en T agarre cerrado"],
  ],
  5: [
    ["hip thrust con barra", "Zancada Smith", "peso muerto rumano", "prensa de piernas", "patada sprinter", "femoral sentado"],
    ["Press banco plano", "curl bicep", "curl martillo", "press militar sentado", "elevaciones laterales con mancuerna", "deltoide posterior en polea"],
    ["Sentadilla Hacka", "prensa de pierna unilateral", "extension de piernas", "patada sprinter", "femoral acostado"],
    ["Extension triceps a una mano polea alta", "Extension triceps a una mano polea baja", "Extension de triceps tras nuca en polea", "Jalon polea frontal", "remo en T agarre abierto", "remo en T agarre cerrado"],
    ["hip thrust con barra", "Zancada Smith", "peso muerto rumano", "extension de piernas", "patada sprinter", "femoral sentado"],
  ],
  6: [
    ["hip thrust con barra", "Sentadilla Bulgara", "peso muerto rumano" ,"patada sprinter" ,"Sentadilla Hacka", "prensa de pierna unilateral", "extension de piernas", "femoral acostado", "femoral sentado"],
    ["Press banco plano", "aperturas de pecho en maquina", "press militar sentado",  "elevaciones laterales con mancuerna", "deltoide posterior en polea", "Extension triceps a una mano polea alta","Extension triceps a una mano polea baja", "Extension de triceps tras nuca en polea"],
    ["curl bicep", "curl martillo",  "Jalon polea frontal", "remo en T agarre abierto", "remo en T agarre cerrado"],
    ["hip thrust con barra", "Sentadilla Bulgara", "peso muerto rumano" ,"patada sprinter" ,"Sentadilla Hacka", "prensa de pierna unilateral", "extension de piernas", "femoral acostado", "femoral sentado"],
    ["Press banco plano", "aperturas de pecho en maquina", "press militar sentado",  "elevaciones laterales con mancuerna", "deltoide posterior en polea", "Extension triceps a una mano polea alta","Extension triceps a una mano polea baja", "Extension de triceps tras nuca en polea"],
    ["curl bicep", "curl martillo",  "Jalon polea frontal", "remo en T agarre abierto", "remo en T agarre cerrado"],
  ]  
};

const criteriosHombrePrincipianteGanarMasa = {
  3: [
    ['sentadilla', 'peso muerto con mancuernas', 'hip thrust con barra', 'puente de gluteo'],
    ['Press banco plano', 'press militar con mancuernas', 'flexiones', 'fondos en banco'],
    ['Jalon polea frontal', 'remo sentado', 'curl bicep', 'extension triceps con mancuerna'],
  ],
  4: [
    ['sentadilla', 'peso muerto con mancuernas', 'hip thrust con barra', 'puente de gluteo'],
    ['Press banco plano', 'press militar con mancuernas', 'flexiones', 'fondos en banco'],
    ['Jalon polea frontal', 'remo sentado', 'curl bicep', 'extension triceps con mancuerna'],
    ['remo con mancuerna', 'elevaciones laterales con mancuerna', 'abdominales crunch', 'flexiones'],
  ],
  5: [
    ['sentadilla', 'prensa de piernas', 'zancadas', 'puente de gluteo'],
    ['Press banco plano', 'press militar con mancuernas', 'flexiones', 'fondos en banco'],
    ['Jalon polea frontal', 'remo sentado', 'dominadas asistidas', 'remo con mancuerna'],
    ['curl bicep', 'curl martillo', 'extension de triceps en polea', 'press francés con mancuerna'],
    ['abducciones en máquina', 'elevaciones de talones', 'femoral acostado', 'plancha lateral'],
  ],
  6: [
    ['sentadilla', 'prensa de piernas', 'zancadas', 'puente de gluteo'],
    ['Press banco plano', 'press militar con mancuernas', 'flexiones', 'fondos en banco'],
    ['Jalon polea frontal', 'remo sentado', 'dominadas asistidas', 'remo con mancuerna'],
    ['curl bicep', 'curl martillo', 'extension de triceps en polea', 'press francés con mancuerna'],
    ['abducciones en máquina', 'elevaciones de talones', 'femoral acostado', 'plancha lateral'],
    ['press militar con mancuernas', 'elevaciones laterales con mancuerna', 'abdominales crunch', 'encogimientos'],
  ]
};

const criteriosHombreIntermedioGanarMasa = {
  3: [
    ['sentadilla', 'prensa de piernas', 'zancadas con mancuernas', 'peso muerto rumano'],
    ['Press banco plano', 'press inclinado con mancuernas', 'fondos', 'press militar sentado'],
    ['Jalon polea frontal', 'remo sentado', 'curl bíceps barra Z', 'extension de triceps en polea'],
  ],
  4: [
    ['sentadilla', 'prensa de piernas', 'zancadas con mancuernas', 'peso muerto rumano'],
    ['Press banco plano', 'press inclinado con mancuernas', 'fondos', 'press militar sentado'],
    ['Jalon polea frontal', 'remo sentado', 'curl bíceps barra Z', 'extension de triceps en polea'],
    ['dominadas asistidas', 'remo con mancuerna', 'elevaciones laterales con mancuerna', 'face pulls'],
  ],
  5: [
    ['sentadilla', 'zancadas con mancuernas', 'peso muerto rumano', 'puente de gluteo'],
    ['Press banco plano', 'press inclinado con mancuernas', 'aperturas con mancuernas', 'fondos'],
    ['Jalon polea frontal', 'remo sentado', 'dominadas asistidas', 'remo con mancuerna'],
    ['curl bíceps barra Z', 'curl martillo', 'extension de triceps en polea', 'press francés con mancuerna'],
    ['prensa de piernas', 'elevaciones de talones', 'femoral sentado', 'abducciones en máquina'],
  ],
  6: [
    ['sentadilla', 'zancadas con mancuernas', 'peso muerto rumano', 'puente de gluteo'],
    ['Press banco plano', 'press inclinado con mancuernas', 'aperturas con mancuernas', 'fondos'],
    ['Jalon polea frontal', 'remo sentado', 'dominadas asistidas', 'remo con mancuerna'],
    ['curl bíceps barra Z', 'curl martillo', 'extension de triceps en polea', 'press francés con mancuerna'],
    ['prensa de piernas', 'elevaciones de talones', 'femoral sentado', 'abducciones en máquina'],
    ['press militar con mancuernas', 'elevaciones laterales con mancuerna', 'deltoide posterior en maquina', 'encogimientos'],
  ]
};

const criteriosHombreAvanzadoGanarMasa = {
  3: [
    ['sentadilla', 'peso muerto rumano', 'hip thrust con barra', 'prensa de piernas'],
    ['Press banco plano', 'press inclinado con mancuernas', 'flexiones lastradas', 'press militar sentado'],
    ['Jalon polea frontal', 'remo con barra', 'curl bíceps barra Z', 'extension de triceps en polea'],
  ],
  4: [
    ['sentadilla', 'peso muerto rumano', 'hip thrust con barra', 'prensa de piernas'],
    ['Press banco plano', 'press inclinado con mancuernas', 'flexiones lastradas', 'press militar sentado'],
    ['Jalon polea frontal', 'remo con barra', 'curl bíceps barra Z', 'extension de triceps en polea'],
    ['dominadas lastradas', 'remo con mancuerna', 'elevaciones laterales con mancuerna', 'face pulls'],
  ],
  5: [
    ['sentadilla', 'prensa de piernas', 'hip thrust con barra', 'peso muerto rumano'],
    ['Press banco plano', 'press inclinado con barra', 'aperturas con mancuernas', 'fondos lastrados'],
    ['Jalon polea frontal', 'remo en T agarre abierto', 'dominadas pronadas', 'remo con mancuerna'],
    ['curl bíceps barra Z', 'curl concentrado', 'extension de triceps en polea', 'press francés con barra Z'],
    ['Sentadilla Bulgara', 'elevaciones de talones', 'femoral sentado', 'puente de gluteo'],
  ],
  6: [
    ['sentadilla', 'prensa de piernas', 'hip thrust con barra', 'peso muerto rumano'],
    ['Press banco plano', 'press inclinado con barra', 'aperturas con mancuernas', 'fondos lastrados'],
    ['Jalon polea frontal', 'remo en T agarre abierto', 'dominadas pronadas', 'remo con mancuerna'],
    ['curl bíceps barra Z', 'curl concentrado', 'extension de triceps en polea', 'press francés con barra Z'],
    ['Sentadilla Bulgara', 'elevaciones de talones', 'femoral sentado', 'puente de gluteo'],
    ['press militar sentado', 'elevaciones laterales con mancuerna', 'deltoide posterior en maquina', 'encogimientos con mancuernas'],
  ],
};

const criteriosHombrePrincipianteGanarMasaSinEquipo = {
  3: [
    ['Flexiones en rodillas', 'Elevaciones frontales con brazos', 'flexiones', 'Superman'], // Pecho y brazos
    ['Sentadillas al aire', 'Zancadas estáticas', 'puente de gluteo', 'Abducciones de cadera en el suelo'], // Piernas y glúteos
    ['Step-ups en silla', 'Plancha lateral', 'Crunch', 'Elevaciones de piernas'], // Core
  ],
  4: [
    ['flexiones en rodillas', 'Dips en silla', 'Elevaciones frontales con brazos', 'flexiones'], // Pecho y brazos
    ['sentadillas', 'zancadas', 'puente de gluteo', 'elevaciones de talones'], // Piernas
    ['Bird-dog', 'Crunch bicicleta', 'Plancha lateral', 'Elevaciones de piernas'], // Core
    ['Step-ups en silla', 'Superman', 'Curl femoral deslizante (con toalla)', 'Puente de glúteos con una pierna'], // Glúteo y espalda
  ],
  5: [
    ['flexiones asistidas', 'Dips en silla', 'Plancha con apoyo en codos', 'Elevaciones frontales sin peso'], // Pecho y brazos
    ['sentadilla', 'Zancadas laterales', 'puente de gluteo', 'elevaciones de talones'], // Piernas
    ['Bird dog', 'Plancha lateral', 'Crunch bicicleta', 'Elevaciones de piernas'], // Core
    ['sentadillas pulsadas', 'Abducción de cadera', 'Elevaciones de talón lento', 'Puente de glúteos con una pierna'], // Glúteos
    ['Step-ups en silla', 'Superman', 'Curl femoral deslizante', 'flexiones'], // General
  ],
  6: [
    ['flexiones', 'Dips en silla', 'flexiones', 'Elevaciones laterales sin peso'], // Pecho y brazos
    ['Sentadilla profunda', 'zancadas', 'elevaciones de talones', 'puente de gluteo'], // Piernas
    ['Step-ups en silla', 'Puente de glúteos con una pierna', 'Bird-dog', 'Superman'], // Espalda y core
    ['Crunch bicicleta', 'Elevaciones de piernas', 'Plancha lateral', 'Curl femoral con toalla'], // Core y femorales
    ['Zancadas hacia atrás', 'Sentadilla estática (pared)', 'Puente glúteos', 'flexiones'], // Glúteos y core
    ['flexiones en rodillas', 'Elevaciones frontales con brazos', 'Plancha con levantamiento de pierna', 'Superman'], // Final: refuerzo brazos y core
  ]
};

const criteriosHombreIntermedioGanarMasaSinEquipo = {
  3: [
    ['Flexiones estándar', 'Sentadillas al aire', 'puente de gluteo', 'Plancha con palmada'],
    ['Fondos entre sillas', 'Zancadas dinámicas', 'Superman', 'elevaciones de talones'],
    ['Flexiones diamante', 'Step-ups en silla', 'Plancha lateral con elevación de pierna', 'Abdominales bicicleta'],
  ],
  4: [
    ['Flexiones estándar', 'Sentadillas con salto', 'Puente de glúteos con una pierna', 'flexiones'],
    ['Fondos en silla', 'Zancadas hacia atrás', 'Elevaciones de piernas', 'Bird-dog'],
    ['Flexiones pike', 'Step-ups en silla', 'Plancha lateral', 'Superman'],
    ['Flexiones diamante', 'Sentadilla isométrica (pared)', 'Curl femoral deslizante (toalla)', 'Crunch bicicleta'],
  ],
  5: [
    ['Flexiones con palmada', 'zancadas dinámicas', 'puente de gluteo', 'Plancha con toque de hombro'],
    ['Fondos en banco', 'Sentadilla con pausa', 'Bird-dog', 'Crunch con giro'],
    ['Flexiones cerradas', 'elevaciones de talones lentas', 'Step-ups', 'Plancha lateral con elevación'],
    ['Flexiones inclinadas', 'Zancadas laterales', 'Curl femoral en toalla', 'Superman'],
    ['Flexiones pike', 'Sentadilla isométrica', 'Plancha con levantamiento de pierna', 'Abdominales bicicleta'],
  ],
  6: [
    ['Flexiones estándar', 'Sentadillas con salto', 'flexiones', 'Elevaciones de piernas'],
    ['Fondos en silla', 'Step-ups', 'Bird-dog', 'Crunch con giro'],
    ['Flexiones diamante', 'Zancadas con pausa', 'Superman', 'Plancha con toque de hombro'],
    ['Flexiones pike', 'elevaciones de talones lentas', 'Curl femoral toalla', 'Plancha lateral'],
    ['Flexiones declinadas (pies elevados)', 'Sentadilla isométrica', 'Plancha con levantamiento de pierna', 'Abdominales bicicleta'],
    ['Flexiones con palmada', 'Zancadas hacia atrás', 'puente de gluteo unilateral', 'Crunch clásico'],
  ]
};

const criteriosHombreAvanzadoGanarMasaSinEquipo = {
  3: [
    ['Flexiones con palmada', 'Sentadilla con salto', 'Fondos en silla', 'Plancha con toque de hombro'],
    ['Flexiones diamante', 'Step-ups explosivos', 'Curl femoral deslizante', 'Plancha lateral con giro'],
    ['Flexiones declinadas', 'Zancadas explosivas', 'Puente glúteos con elevación', 'Crunch bicicleta'],
  ],
  4: [
    ['Flexiones con palmada', 'Sentadilla isométrica + salto', 'Fondos entre sillas', 'Plancha con palmada'],
    ['Flexiones declinadas', 'Zancadas con peso corporal explosivas', 'Plancha lateral con levantamiento', 'Elevaciones de piernas controladas'],
    ['Flexiones pike', 'Step-ups en silla con velocidad', 'Curl femoral con toalla', 'Bird-dog con pausa'],
    ['Flexiones diamante', 'Sentadillas pulsadas', 'Plancha con levantamiento de pierna', 'Crunch bicicleta'],
  ],
  5: [
    ['Flexiones explosivas', 'Zancadas con salto', 'Fondos en banco', 'Plancha con palmada'],
    ['Flexiones diamante', 'Step-ups controlados', 'Superman', 'Crunch lateral'],
    ['Flexiones declinadas', 'Sentadilla isométrica', 'Elevaciones de piernas', 'Plancha lateral'],
    ['Flexiones pike', 'Zancadas búlgaras sin peso (silla)', 'Curl femoral deslizante', 'Bird-dog'],
    ['Flexiones con palmada', 'Sentadilla con salto + pausa', 'Plancha con toque de hombros', 'Crunch bicicleta'],
  ],
  6: [
    ['Flexiones declinadas', 'Sentadilla explosiva', 'Plancha con palmada', 'Elevaciones de piernas'],
    ['Fondos entre sillas', 'Zancadas con salto', 'Plancha lateral con elevación', 'Crunch bicicleta'],
    ['Flexiones diamante', 'Step-ups explosivos', 'Curl femoral deslizante', 'Bird-dog con pausa'],
    ['Flexiones pike', 'Sentadilla isométrica', 'Plancha con toque de hombros', 'Abdominales con giro'],
    ['Flexiones explosivas', 'Zancadas búlgaras', 'Superman', 'Crunch con elevación'],
    ['Flexiones inclinadas', 'elevaciones de talones lentas', 'Puente glúteos unilateral', 'Plancha con levantamiento de pierna'],
  ]
};

const criteriosMujerPrincipianteGanarMasaSinEquipo = {
  3: [
    ["sentadilla", "puente de gluteo", "zancadas", "flexiones"],
    ["elevaciones de talones", "Patadas traseras", "Abdominales básicos", "Superman"],
    ["Sentadillas con salto", "Elevaciones laterales de pierna", "Crunch", "Plancha lateral"]
  ],
  4: [
    ["sentadilla", "puente de gluteo", "zancadas", "flexiones"],
    ["elevaciones de talones", "Abdominales básicos", "Superman", "Plancha frontal"],
    ["Zancadas laterales", "Patadas traseras", "Crunch", "Plancha lateral"],
    ["Sentadillas con salto", "Elevaciones laterales de pierna", "puente de gluteo", "flexiones"]
  ],
  5: [
    ["sentadilla", "puente de gluteo", "zancadas", "Plancha lateral"],
    ["Abdominales básicos", "Patadas traseras", "Superman", "flexiones"],
    ["Zancadas laterales", "Crunch", "puente de gluteo", "elevaciones de talones"],
    ["Sentadillas con salto", "Plancha frontal", "elevaciones laterales con mancuerna", "Abdominales básicos"],
    ["zancadas", "puente de gluteo", "Plancha lateral", "Superman"]
  ],
  6: [
    ["sentadilla", "puente de gluteo", "Abdominales básicos", "flexiones"],
    ["zancadas", "Crunch", "Plancha lateral", "elevaciones de talones"],
    ["Patadas traseras", "Superman", "puente de gluteo", "flexiones"],
    ["Zancadas laterales", "Plancha frontal", "Crunch", "Sentadillas con salto"],
    ["elevaciones laterales con mancuerna", "puente de gluteo", "Plancha lateral", "Abdominales básicos"],
    ["Sentadilla", "Plancha frontal", "Superman", "elevaciones de talones"]
  ]
};

const criteriosMujerIntermedioGanarMasaSinEquipo = {
  3: [
    ["Sentadillas con salto", "Zancadas dinámicas", "Puente de glúteos con una pierna", "Plancha con elevación de pierna"],
    ["Zancadas laterales", "Crunch bicicleta", "Superman con pausa", "Plancha lateral"],
    ["Patadas de burro", "Elevaciones de piernas", "Sentadilla sumo", "Plancha frontal"]
  ],
  4: [
    ["Sentadillas con salto", "Puente de glúteos con una pierna", "Plancha con toque de hombro", "Zancadas dinámicas"],
    ["Crunch bicicleta", "Elevaciones de piernas", "Superman con pausa", "Plancha lateral"],
    ["Sentadilla sumo", "Zancadas laterales", "Plancha frontal", "puente de gluteo"],
    ["Patadas de burro", "Plancha con elevación de pierna", "Crunch", "Sentadilla"]
  ],
  5: [
    ["Sentadillas con salto", "Puente de glúteos con una pierna", "Plancha con elevación de pierna", "Crunch bicicleta"],
    ["Zancadas dinámicas", "Elevaciones de piernas", "Plancha lateral", "Superman"],
    ["Patadas de burro", "Sentadilla sumo", "Crunch", "Plancha frontal"],
    ["Zancadas laterales", "Superman con pausa", "Plancha con toque de hombro", "puente de gluteo"],
    ["Sentadilla", "Plancha frontal", "Elevaciones de piernas", "Crunch"]
  ],
  6: [
    ["Sentadillas con salto", "Puente de glúteos con una pierna", "Plancha con elevación de pierna", "Crunch bicicleta"],
    ["Zancadas dinámicas", "Crunch", "Plancha frontal", "Superman con pausa"],
    ["Patadas de burro", "Zancadas laterales", "Plancha lateral", "Elevaciones de piernas"],
    ["Sentadilla sumo", "Plancha con toque de hombro", "puente de gluteo", "Abdominales básicos"],
    ["Elevaciones de piernas", "Plancha con elevación de pierna", "Crunch bicicleta", "zancadas"],
    ["Superman", "Plancha frontal", "Sentadillas con salto", "Crunch"]
  ]
};

const criteriosMujerAvanzadoGanarMasaSinEquipo = {
  3: [
    ["Sentadillas con salto", "Puente de glúteos con una pierna", "Plancha con palmada", "Burpees"],
    ["Zancadas pliométricas", "Crunch bicicleta", "Plancha con elevación de brazo", "Superman avanzado"],
    ["Sentadilla sumo explosiva", "Plancha lateral con elevación", "Elevaciones de piernas lentas", "Mountain climbers"]
  ],
  4: [
    ["Sentadillas con salto", "Zancadas pliométricas", "Plancha con palmada", "Crunch bicicleta"],
    ["Puente de glúteos con una pierna", "Plancha con elevación de pierna", "Burpees", "Mountain climbers"],
    ["Sentadilla sumo explosiva", "Plancha lateral con elevación", "Crunch", "Superman avanzado"],
    ["Plancha frontal", "Zancadas dinámicas", "Elevaciones de pierna lentas", "Plancha con toque de hombro"]
  ],
  5: [
    ["Sentadillas con salto", "Puente de glúteos con una pierna", "Plancha con palmada", "Mountain climbers"],
    ["Zancadas pliométricas", "Crunch bicicleta", "Plancha con elevación de brazo", "Superman avanzado"],
    ["Sentadilla sumo explosiva", "Plancha lateral con elevación", "Elevaciones de pierna lentas", "Burpees"],
    ["Plancha con toque de hombro", "Zancadas dinámicas", "Plancha frontal", "Crunch"],
    ["Superman", "puente de gluteo", "Sentadilla", "Elevaciones de piernas"]
  ],
  6: [
    ["Sentadillas con salto", "Zancadas pliométricas", "Plancha con elevación de pierna", "Burpees"],
    ["Plancha frontal", "Crunch bicicleta", "Elevaciones de piernas", "Superman avanzado"],
    ["Plancha con palmada", "Zancadas dinámicas", "Puente de glúteos con una pierna", "Mountain climbers"],
    ["Sentadilla sumo explosiva", "Plancha lateral con elevación", "Crunch", "Elevaciones de pierna lentas"],
    ["Superman", "Plancha con elevación de brazo", "Zancadas", "Crunch"],
    ["Plancha frontal", "Sentadillas con salto", "Burpees", "Crunch bicicleta"]
  ]
};


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [completados, setCompletados] = useState({});//Agregar estado para los checks
  const [sexo, setSexo] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [nivel, setNivel] = useState("");
  const [dias, setDias] = useState("");
  const [equipo, setEquipo] = useState("");
  const [rutina, setRutina] = useState([]);
  const [pagoConfirmado, setPagoConfirmado] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);// 👈 Estado del menú

  const toggleCompletado = (diaIndex, ejercicioIndex) => {
  setCompletados((prev) => ({
    ...prev,
    [`${diaIndex}-${ejercicioIndex}`]: !prev[`${diaIndex}-${ejercicioIndex}`],
  }));
  };//Función para marcar/desmarcar ejercicios



  // 🔹 Función para generar rutina usando parámetros
  const generarRutinaDesdeParams = (params) => {
    const criteriosMap = {
      hombre: {
        principiante: { "sin": criteriosHombrePrincipianteGanarMasaSinEquipo, "con": criteriosHombrePrincipianteGanarMasa },
        intermedio: { "sin": criteriosHombreIntermedioGanarMasaSinEquipo, "con": criteriosHombreIntermedioGanarMasa },
        avanzado: { "sin": criteriosHombreAvanzadoGanarMasaSinEquipo, "con": criteriosHombreAvanzadoGanarMasa }
      },
      mujer: {
        principiante: { "sin": criteriosMujerPrincipianteGanarMasaSinEquipo, "con": criteriosMujerPrincipianteGanarMasa },
        intermedio: { "sin": criteriosMujerIntermedioGanarMasaSinEquipo, "con": criteriosMujerIntermedioGanarMasa },
        avanzado: { "sin": criteriosMujerAvanzadoGanarMasaSinEquipo, "con": criteriosMujerAvanzadoGanarMasa }
      }
    };

    const claveEquipo = (params.get("equipo") === "no") ? "sin" : "con";
    const rutinaSeleccionada = criteriosMap[params.get("sexo")]?.[params.get("nivel")]?.[claveEquipo]?.[params.get("dias")];

    if (rutinaSeleccionada) setRutina(rutinaSeleccionada);
  };


  // ✅ Revisar en localStorage al cargar la página
  useEffect(() => {
    const pago = localStorage.getItem("pagoConfirmado");
    if (pago === "true") {
      setPagoConfirmado(true);
    }
  }, []);

  // ✅ Guardar pago en localStorage al confirmar
  const handlePagoConfirmado = () => {
    setPagoConfirmado(true);
    localStorage.setItem("pagoConfirmado", "true");
  };

  // 🔹 Detectar pago al cargar la página
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("pago") === "ok") {
      setPagoConfirmado(true);
      setSexo(params.get("sexo") || "");
      setObjetivo(params.get("objetivo") || "");
      setNivel(params.get("nivel") || "");
      setDias(params.get("dias") || "");
      setEquipo(params.get("equipo") || "");
      generarRutinaDesdeParams(params);
    }
  }, []);

  const generarRutina = () => {
    if (!sexo || !objetivo || !nivel || !dias || !equipo) {
      alert("Por favor completa todos los campos.");
      return;
    }

        // 🔹 Si es intermedio o avanzado y no ha pagado → abrir Mercado Pago en nueva pestaña
    if ((nivel === "intermedio" || nivel === "avanzado") && !pagoConfirmado) {
      window.open("https://mpago.la/12mrBBR", "_blank"); // abre el pago en nueva pestaña
      alert("Después de completar el pago, vuelve a esta página para ver tu rutina.");
      return; // detener generación de rutina hasta que el usuario confirme pago
    }

    // 🔹 Generar rutina local
    generarRutinaDesdeParams(new URLSearchParams({
      sexo, objetivo, nivel, dias, equipo
    }));
  };

  const generarPDF = () => {
    const input = document.getElementById("rutina-pdf");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const pageHeight = pdf.internal.pageSize.getHeight();

      let heightLeft = pdfHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("rutina.pdf");
    });
  };

  

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      {/* 🔹 Header con botón de modo oscuro */}
      <header className="header">
        {/* Logo + Nombre (izquierda) */}
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/imagenes/marca.png`}
            alt="Walking Fit Logo"
            className="logo-img"
          />
          {/* <span className="logo-text">Walking Fit</span> */}
        </div>

        {/* Menú (derecha con botones) */}
        <nav className="menu">
          <ul>
            <li><a href="#personalizados">PERSONALIZADO</a></li>
            <li><a href="#servicios">SERVICIOS</a></li>
            <li><a href="#contacto">CONTACTENOS</a></li>
          </ul>
        </nav>
      </header>
          {/* <div>
            <button className="btn-darkmode" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
            </button>
          </div> */}

      {/* FORMULARIO */}
      <section className="formulario">
        <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="">Sexo</option>
          <option value="mujer">Mujer</option>
          <option value="hombre">Hombre</option>
        </select>

        <select value={objetivo} onChange={(e) => setObjetivo(e.target.value)}>
          <option value="">Objetivo</option>
          <option value="ganar masa">Ganar masa</option>
          <option value="perder grasa">Perder grasa</option>
        </select>

        <select value={nivel} onChange={(e) => setNivel(e.target.value)}>
          <option value="">Nivel</option>
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
        </select>

        <select value={dias} onChange={(e) => setDias(e.target.value)}>
          <option value="">Días</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>

        <select value={equipo} onChange={(e) => setEquipo(e.target.value)}>
          <option value="">¿Tienes equipo?</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>

        <button
          className="btn-principal"
          onClick={generarRutina}
          disabled={!sexo || !objetivo || !nivel || !dias || !equipo}
        >
          🚀 Generar rutina
        </button>
      </section>

      {/* MOSTRAR RUTINA */}
      {rutina.length > 0 && (
        <section className="rutina-section">
          <h2>🏋️‍♂️ Tu rutina</h2>
          <div id="rutina-pdf" className="rutina-container">
            {rutina.map((dia, index) => (
              <motion.div
                key={index}
                className="dia-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3>Día {index + 1}</h3>
              <div className="ejercicios">
                {dia.map((ejercicio, idx) => (
                  <motion.div
                    key={idx}
                    className={`ejercicio ${completados[`${index}-${idx}`] ? "completado" : ""}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    onClick={() => toggleCompletado(index, idx)} // 👈 aquí marcamos el check
                  >
                    <input
                      type="checkbox"
                      checked={!!completados[`${index}-${idx}`]}
                      readOnly
                    />
                    <img
                      src={imagenes[ejercicio] || "/imagenes/default.png"}
                      alt={ejercicio}
                      className="ejercicio-img"
                    />
                    <p>{ejercicio}</p>
                  </motion.div>
                ))}
              </div>

              </motion.div>
            ))}


          </div>

          <button className="btn-secundario" onClick={generarPDF}>
            📄 Descargar PDF
          </button>

          

        </section>
        
      )}

      {/* NUEVA SECCIÓN PERFIL */}
          <section className="perfil">
            <div className="perfil-contenido">
              {/* Columna izquierda */}
              <div className="perfil-texto">
                <h2>AURELIO</h2>
                <p>
                  Apasionado por el fitness y la tecnología. 
                  Estoy desarrollando una app para rutinas personalizadas 
                  que combinan entrenamiento con diseño moderno.
                </p>
                <button className="btn-quiensoy">
                  Quien soy yo
                </button>
              </div>

              {/* Columna derecha */}
              <div className="perfil-foto">
                <img src={`${process.env.PUBLIC_URL}/imagenes/edperfil3.png`} alt="EDGARD JORDAN" />
              </div>
            </div>
          </section>
    </div>
    
  );

}

export default App;