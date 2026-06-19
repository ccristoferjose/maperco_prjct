// Catálogo de productos. Cada entrada alimenta la página de detalle, las tarjetas
// y la metadata SEO. Las imágenes usan Unsplash como placeholders editables.

export const products = [
  {
    slug: "persianas-enrollables",
    name: "Persianas enrollables",
    shortName: "Enrollables",
    category: "Persianas",
    waKey: "enrollables",
    excerpt:
      "El clásico versátil: limpias, prácticas y a la medida para cualquier ventana.",
    h1: "Persianas enrollables en Guatemala",
    metaTitle:
      "Persianas Enrollables en Guatemala | A la Medida | Persianas Maperco",
    metaDescription:
      "Persianas enrollables a la medida para casas, oficinas y comercios en Guatemala. Telas screen, blackout y traslúcidas. Cotiza por WhatsApp con Persianas Maperco.",
    intro:
      "Las persianas enrollables son la solución más versátil y limpia para controlar la luz en cualquier ambiente. Se enrollan en un tubo superior discreto y se adaptan a ventanas pequeñas o grandes ventanales, con telas que van desde traslúcidas hasta blackout total.",
    benefits: [
      "Diseño minimalista que se integra a cualquier decoración",
      "Control de luz según la tela elegida (screen, traslúcida o blackout)",
      "Ocupan muy poco espacio al recogerse",
      "Fáciles de operar y de limpiar",
      "Fabricadas a la medida exacta de tu ventana",
    ],
    uses: ["Salas", "Dormitorios", "Cocinas", "Oficinas", "Comercios"],
    image:
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&w=1200&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    slug: "persianas-blackout",
    name: "Persianas blackout",
    shortName: "Blackout",
    category: "Persianas",
    waKey: "blackout",
    featured: true,
    excerpt:
      "Oscuridad total y privacidad para dormitorios, salas de TV y oficinas.",
    h1: "Persianas blackout en Guatemala",
    metaTitle:
      "Persianas Blackout en Guatemala | Fabricación e Instalación | Maperco",
    metaDescription:
      "Instalamos persianas blackout a la medida para dormitorios, salas, oficinas y espacios que necesitan privacidad y control total de luz. Cotiza por WhatsApp.",
    intro:
      "Las persianas blackout son ideales para dormitorios, salas de TV, oficinas privadas y espacios donde se necesita mayor privacidad y control de luz. Su tela bloquea el paso de la luz exterior para lograr ambientes oscuros y confortables a cualquier hora del día.",
    benefits: [
      "Bloquean el paso de luz",
      "Mejoran la privacidad",
      "Ayudan al confort térmico",
      "Son fabricadas a la medida",
      "Se adaptan a hogares, oficinas y comercios",
    ],
    uses: ["Dormitorios", "Salas de TV", "Oficinas privadas", "Hoteles", "Cuartos de bebé"],
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1522444690501-83a3a09f5b8a?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    slug: "persianas-screen",
    name: "Persianas screen",
    shortName: "Screen",
    category: "Persianas",
    waKey: "screen",
    featured: true,
    excerpt:
      "Control solar y privacidad sin perder la vista hacia el exterior.",
    h1: "Persianas screen en Guatemala",
    metaTitle:
      "Persianas Screen en Guatemala | Control Solar y Privacidad | Maperco",
    metaDescription:
      "Persianas screen a la medida para oficinas, salas y ventanales. Control de luz, privacidad y diseño moderno en Guatemala. Solicita una cotización.",
    intro:
      "Las persianas screen están fabricadas con telas técnicas micro-perforadas que filtran el sol y reducen el deslumbramiento, manteniendo la visibilidad hacia el exterior. Son la opción favorita para oficinas y grandes ventanales por su look moderno y su control solar.",
    benefits: [
      "Filtran los rayos del sol y reducen el calor",
      "Mantienen la vista hacia afuera durante el día",
      "Protegen muebles y pisos de la decoloración",
      "Estética moderna ideal para oficinas",
      "Disponibles en distintos porcentajes de apertura",
    ],
    uses: ["Oficinas", "Salas", "Ventanales", "Recepciones", "Comercios"],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    slug: "persianas-dia-y-noche",
    name: "Persianas día y noche",
    shortName: "Día y noche",
    category: "Persianas",
    waKey: "diaYNoche",
    featured: true,
    excerpt:
      "Franjas alternas que regulan la luz a tu gusto, de traslúcido a opaco.",
    h1: "Persianas día y noche en Guatemala",
    metaTitle:
      "Persianas Día y Noche en Guatemala | Roller Duo | Persianas Maperco",
    metaDescription:
      "Persianas día y noche (roller duo) a la medida en Guatemala. Regula la luz y la privacidad alternando franjas traslúcidas y opacas. Cotiza por WhatsApp.",
    intro:
      "Las persianas día y noche, también conocidas como roller duo o eclipse, combinan franjas traslúcidas y opacas que se deslizan entre sí. Con solo mover la cadena regulas la entrada de luz y la privacidad sin cambiar de cortina: claridad de día, intimidad de noche.",
    benefits: [
      "Regulación precisa de la luz con un solo mecanismo",
      "Dos ambientes en una sola persiana: traslúcido u opaco",
      "Diseño elegante y contemporáneo",
      "Privacidad ajustable a cualquier hora",
      "Fabricadas a la medida de cada ventana",
    ],
    uses: ["Salas", "Comedores", "Dormitorios", "Oficinas", "Apartamentos"],
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    slug: "cortinas-romanas",
    name: "Cortinas romanas",
    shortName: "Romanas",
    category: "Cortinas",
    waKey: "romanas",
    featured: true,
    excerpt:
      "Pliegues elegantes en tela que aportan calidez y sofisticación.",
    h1: "Cortinas romanas en Guatemala",
    metaTitle:
      "Cortinas Romanas en Guatemala | Elegancia a la Medida | Maperco",
    metaDescription:
      "Cortinas romanas a la medida en Guatemala: pliegues elegantes en tela para salas, dormitorios y comedores. Decoración cálida y sofisticada. Cotiza por WhatsApp.",
    intro:
      "Las cortinas romanas se recogen formando pliegues horizontales uniformes, aportando una sensación cálida y elegante. Disponibles en una amplia variedad de telas, son perfectas para quienes buscan decorar con sofisticación sin renunciar al control de luz.",
    benefits: [
      "Acabado elegante y atemporal",
      "Gran variedad de telas, texturas y colores",
      "Aportan calidez y suavizan los ambientes",
      "Opción de forro blackout para mayor oscuridad",
      "Confeccionadas a la medida de tu ventana",
    ],
    uses: ["Salas", "Comedores", "Dormitorios", "Estudios", "Recepciones"],
    image:
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=1200&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    slug: "puertas-plegables",
    name: "Puertas plegables",
    shortName: "Puertas plegables",
    category: "Puertas",
    waKey: "puertasPlegables",
    featured: true,
    excerpt:
      "Divisiones prácticas que aprovechan el espacio y separan ambientes.",
    h1: "Puertas plegables en Guatemala",
    metaTitle:
      "Puertas Plegables en Guatemala | A la Medida | Persianas Maperco",
    metaDescription:
      "Puertas plegables a la medida en Guatemala para dividir ambientes, baños, clósets y espacios reducidos. Instalación profesional. Cotiza por WhatsApp.",
    intro:
      "Las puertas plegables son una solución práctica y económica para dividir ambientes, cerrar clósets o aprovechar espacios reducidos donde una puerta tradicional no cabe. Se pliegan sobre un riel y se fabrican a la medida en distintos colores y acabados.",
    benefits: [
      "Aprovechan al máximo el espacio disponible",
      "Ideales para dividir ambientes sin obra",
      "Ligeras, prácticas y de fácil operación",
      "Variedad de colores y acabados",
      "Instalación rápida y a la medida",
    ],
    uses: ["Divisiones de ambiente", "Clósets", "Baños", "Cocinas", "Comercios"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    slug: "mosquiteros",
    name: "Mosquiteros",
    shortName: "Mosquiteros",
    category: "Protección",
    waKey: "mosquiteros",
    featured: true,
    excerpt:
      "Protección contra insectos sin renunciar a la ventilación natural.",
    h1: "Mosquiteros en Guatemala",
    metaTitle: "Mosquiteros en Guatemala | A la Medida | Persianas Maperco",
    metaDescription:
      "Mosquiteros a la medida en Guatemala: enrollables, corredizos y fijos para ventanas y puertas. Protección contra insectos con ventilación. Cotiza por WhatsApp.",
    intro:
      "Los mosquiteros permiten ventilar tus espacios manteniendo fuera a los insectos. Los fabricamos a la medida en versión enrollable, corrediza o fija, con malla resistente y marcos discretos que se integran a tus ventanas y puertas.",
    benefits: [
      "Mantienen los insectos afuera sin bloquear el aire",
      "Permiten ventilación natural todo el día",
      "Versiones enrollable, corrediza o fija",
      "Malla resistente y marcos discretos",
      "Fabricados a la medida de ventanas y puertas",
    ],
    uses: ["Ventanas", "Puertas", "Dormitorios", "Cocinas", "Patios"],
    image:
      "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&w=1200&q=70",
    gallery: [
      "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1530889464795-7e3f2dec8885?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=900&q=70",
    ],
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}
