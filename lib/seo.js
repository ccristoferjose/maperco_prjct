// Helpers para construir Metadata de Next.js de forma consistente por página.
import { site } from "@/lib/site";

/**
 * Construye un objeto Metadata (Next.js Metadata API) con Open Graph y Twitter.
 * @param {object} opts
 * @param {string} opts.title - Título de la página (sin sufijo de marca).
 * @param {string} opts.description
 * @param {string} [opts.path] - Ruta relativa, ej: "/productos/persianas-blackout".
 * @param {string} [opts.image] - Ruta o URL de imagen para OG.
 * @param {boolean} [opts.noBrandSuffix] - Si true, no agrega "| Persianas Maperco".
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/images/og-default.jpg",
  noBrandSuffix = false,
}) {
  const fullTitle = noBrandSuffix ? title : `${title}`;
  const canonical = `${site.url}${path === "/" ? "" : path}`;
  const ogImage = image.startsWith("http") ? image : `${site.url}${image}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: site.name,
      locale: "es_GT",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
