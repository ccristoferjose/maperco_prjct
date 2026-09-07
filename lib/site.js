// Configuración central del negocio. Lee variables de entorno con valores por
// defecto seguros para que el sitio funcione incluso sin .env configurado.

export const site = {
  name: process.env.NEXT_PUBLIC_BUSINESS_NAME || "Persianas Maperco",
  legalName: "Persianas Maperco",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.persianasmaperco.com").replace(/\/$/, ""),
  description:
    "Persianas, cortinas, puertas plegables y mosquiteros a la medida en Guatemala. Fabricación, instalación, reparación y mantenimiento profesional.",
  phoneDisplay: "+502 5413 5491",
  phoneE164: "+50254135491",
  email: "maperco@live.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50254135491",
  facebookUrl:
    process.env.NEXT_PUBLIC_FACEBOOK_URL ||
    "https://www.facebook.com/Persianas.Maperco.Guatemala/",
  googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "",
  address: {
    street: "4a Avenida y 1a Calle L-9, Zona 2, Residencial Rosas",
    locality: "Villa Canales",
    region: "Guatemala",
    country: "GT",
  },
  hours: "Lunes a Sábado, 8:00 a.m. – 6:00 p.m.",
  // Zonas de cobertura para SEO local.
  coverage: [
    "Ciudad de Guatemala",
    "Villa Canales",
    "Boca del Monte",
    "Mixco",
    "Villa Nueva",
    "San Miguel Petapa",
    "Santa Catarina Pinula",
    "Carretera a El Salvador",
    "Zona 10",
    "Zona 14",
  ],
};

// Navegación principal usada por Header y Footer.
export const mainNav = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];
