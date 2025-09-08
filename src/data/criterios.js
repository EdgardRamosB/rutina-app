
//criterios

const criteriosMujerPrincipianteGanarMasa = {
  3: [
    ["prensa de piernas", "peso muerto rumano", "extension de piernas"],
    ["Press banco plano", "curl bicep", "elevaciones laterales con mancuerna"],
    ["hip thrust con barra", "zancadas", "femoral acostado"]
  ],
  4: [
    ["prensa de piernas", "peso muerto rumano", "extension de piernas"],
    ["Press banco plano", "curl bicep", "elevaciones laterales con mancuerna"],
    ["hip thrust con barra", "zancadas", "femoral acostado"],
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



// 👇 al final exportas lo que necesites
// Exportación única
export {
  criteriosMujerPrincipianteGanarMasa,
  criteriosMujerIntermedioGanarMasa,
  criteriosMujerAvanzadoGanarMasa,
  criteriosHombrePrincipianteGanarMasa,
  criteriosHombreIntermedioGanarMasa,
  criteriosHombreAvanzadoGanarMasa,
  criteriosHombrePrincipianteGanarMasaSinEquipo,
  criteriosHombreIntermedioGanarMasaSinEquipo,
  criteriosHombreAvanzadoGanarMasaSinEquipo,
  criteriosMujerPrincipianteGanarMasaSinEquipo,
  criteriosMujerIntermedioGanarMasaSinEquipo,
  criteriosMujerAvanzadoGanarMasaSinEquipo,
};
