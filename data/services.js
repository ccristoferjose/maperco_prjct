// Servicios principales. Alimentan páginas de detalle, tarjetas y metadata SEO.

export const services = [
  {
    slug: "instalacion-de-persianas",
    name: "Instalación de persianas",
    shortName: "Instalación",
    ctaLabel: "Agendar instalación",
    waKey: "instalacion",
    excerpt:
      "Montaje profesional, nivelado y seguro para que tus persianas funcionen como deben.",
    h1: "Instalación de persianas en Guatemala",
    metaTitle:
      "Instalación de Persianas en Guatemala | Profesional | Persianas Maperco",
    metaDescription:
      "Instalación profesional de persianas y cortinas en Guatemala. Montaje nivelado, seguro y limpio en casas, oficinas y comercios. Agenda tu instalación por WhatsApp.",
    intro:
      "Una persiana bien instalada dura más, opera mejor y luce impecable. Nuestro equipo realiza el montaje con las herramientas y fijaciones adecuadas para cada tipo de pared y ventana, dejando todo nivelado, seguro y limpio.",
    points: [
      "Instalación de persianas enrollables, blackout, screen, día y noche y cortinas",
      "Fijaciones adecuadas para tabla yeso, block, concreto o aluminio",
      "Montaje nivelado y verificación de operación",
      "Trabajo limpio y ordenado en tu espacio",
      "Cobertura en Ciudad de Guatemala y municipios cercanos",
    ],
    steps: [
      "Confirmamos medidas y tipo de soporte",
      "Marcamos y fijamos los soportes a nivel",
      "Colocamos la persiana y probamos la operación",
      "Entregamos limpio y te explicamos el uso",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "reparacion-de-persianas",
    name: "Reparación de persianas",
    shortName: "Reparación",
    ctaLabel: "Solicitar reparación",
    waKey: "reparacion",
    excerpt:
      "Arreglamos mecanismos, cadenas, telas y soportes para devolverle la vida a tus persianas.",
    h1: "Reparación de persianas en Guatemala",
    metaTitle:
      "Reparación de Persianas en Guatemala | Servicio Técnico | Maperco",
    metaDescription:
      "Servicio de reparación, mantenimiento, ajuste e instalación de persianas en Guatemala. Envíanos fotos del problema y solicita asistencia por WhatsApp.",
    intro:
      "Si tu persiana se atascó, no sube, perdió tensión o se dañó el mecanismo, no necesitas reemplazarla por completo. Diagnosticamos el problema y reparamos cadenas, tubos, embragues, soportes y telas para dejarla funcionando como nueva.",
    points: [
      "Reparación de mecanismos, cadenas y embragues",
      "Ajuste de tensión y nivelación",
      "Reemplazo de soportes y accesorios dañados",
      "Cambio o reparación de tela cuando aplica",
      "Diagnóstico rápido: envíanos fotos del problema por WhatsApp",
    ],
    steps: [
      "Nos envías fotos o video del problema",
      "Hacemos un diagnóstico inicial y presupuesto",
      "Reparamos en sitio o en taller según el caso",
      "Probamos y entregamos funcionando",
    ],
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "mantenimiento-de-persianas",
    name: "Mantenimiento de persianas",
    shortName: "Mantenimiento",
    ctaLabel: "Pedir mantenimiento",
    waKey: "mantenimiento",
    excerpt:
      "Limpieza, lubricación y ajuste preventivo para alargar la vida de tus persianas.",
    h1: "Mantenimiento de persianas en Guatemala",
    metaTitle:
      "Mantenimiento de Persianas en Guatemala | Preventivo | Maperco",
    metaDescription:
      "Mantenimiento preventivo de persianas y cortinas en Guatemala: limpieza, lubricación y ajuste de mecanismos. Alarga la vida de tus persianas. Cotiza por WhatsApp.",
    intro:
      "El mantenimiento preventivo evita fallas y mantiene tus persianas operando con suavidad por más tiempo. Realizamos limpieza de telas y mecanismos, lubricación de componentes y ajustes para que todo funcione como el primer día.",
    points: [
      "Limpieza de telas y componentes",
      "Lubricación de mecanismos y rieles",
      "Ajuste de tensión y nivelación",
      "Revisión de soportes y accesorios",
      "Recomendado para hogares, oficinas y comercios",
    ],
    steps: [
      "Agendamos la visita de mantenimiento",
      "Limpiamos y revisamos cada persiana",
      "Lubricamos y ajustamos los mecanismos",
      "Te indicamos recomendaciones de uso",
    ],
    image:
      "https://images.unsplash.com/photo-1521783988139-89397d761dce?auto=format&fit=crop&w=1200&q=70",
  },
  {
    slug: "medicion-y-asesoria",
    name: "Medición y asesoría",
    shortName: "Medición y asesoría",
    ctaLabel: "Agendar medición",
    waKey: "medicion",
    excerpt:
      "Te asesoramos en producto y tela, y tomamos medidas exactas sin compromiso.",
    h1: "Medición y asesoría profesional en Guatemala",
    metaTitle:
      "Medición y Asesoría de Persianas en Guatemala | Maperco",
    metaDescription:
      "Medición profesional y asesoría de persianas y cortinas en Guatemala. Te ayudamos a elegir el producto y la tela ideal para cada espacio. Agenda por WhatsApp.",
    intro:
      "Elegir la persiana correcta empieza por una buena medición y una asesoría honesta. Visitamos tu espacio, tomamos medidas exactas y te recomendamos el producto y la tela que mejor resuelven tus necesidades de luz, privacidad y estilo.",
    points: [
      "Asesoría sobre el producto y la tela ideal para cada ambiente",
      "Medición exacta para una fabricación sin errores",
      "Recomendaciones de control de luz y privacidad",
      "Propuesta clara con opciones y presupuesto",
      "Atención personalizada en casa, oficina o comercio",
    ],
    steps: [
      "Agenda tu visita por WhatsApp",
      "Escuchamos tus necesidades y revisamos el espacio",
      "Tomamos medidas y recomendamos opciones",
      "Te entregamos una cotización a la medida",
    ],
    image:
      "https://images.unsplash.com/photo-1600488999385-29c0a1f0c0b6?auto=format&fit=crop&w=1200&q=70",
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
