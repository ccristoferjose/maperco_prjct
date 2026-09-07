// Generadores de JSON-LD para SEO (LocalBusiness, FAQ, Breadcrumbs, Product, Service).
import { site } from "@/lib/site";

const SERVICE_LIST = [
  "Persianas a medida",
  "Instalación de persianas",
  "Cortinas blackout",
  "Persianas screen",
  "Persianas verticales",
  "Cortinas romanas",
  "Mosquiteros",
  "Puertas plegables",
  "Reparación de persianas",
  "Mantenimiento de persianas",
];

/** JSON-LD de negocio local. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    image: `${site.url}/images/og-default.jpg`,
    logo: `${site.url}/logo.svg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.coverage.map((name) => ({ "@type": "City", name })),
    openingHours: "Mo-Sa 08:00-18:00",
    sameAs: [site.facebookUrl].filter(Boolean),
    makesOffer: SERVICE_LIST.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };
}

/** JSON-LD de FAQ a partir de [{question, answer}]. */
export function faqSchema(faqs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** JSON-LD de Breadcrumbs a partir de [{name, href}]. */
export function breadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href === "/" ? "" : item.href}`,
    })),
  };
}

/** JSON-LD de Producto/servicio comercializado a medida. */
export function productSchema({ name, description, path, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image ? `${site.url}${image}` : undefined,
    url: `${site.url}${path}`,
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "GTQ",
      seller: { "@type": "Organization", name: site.name },
    },
  };
}

/** JSON-LD de Servicio. */
export function serviceSchema({ name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@type": "HomeAndConstructionBusiness", name: site.name, url: site.url },
    areaServed: site.coverage.map((n) => ({ "@type": "City", name: n })),
  };
}

/** Serializa de forma segura para inyectar en <script type="application/ld+json">. */
export function jsonLd(data) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
