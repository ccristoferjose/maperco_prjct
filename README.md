# Persianas Maperco — Sitio web

Sitio oficial de **Persianas Maperco**: persianas, cortinas, puertas plegables y
mosquiteros a la medida en Guatemala. Enfocado en generar clientes potenciales y
convertir visitas en cotizaciones por WhatsApp o formulario.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- JavaScript (sin TypeScript)
- [Tailwind CSS](https://tailwindcss.com/)
- Componentes propios y reutilizables
- SEO con la Metadata API, `sitemap.js`, `robots.js` y JSON-LD

## Requisitos

- Node.js 18.17 o superior

## Puesta en marcha

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env.local
# edita .env.local con el número de WhatsApp real, etc.

# 3. Desarrollo
npm run dev

# 4. Build de producción
npm run build && npm start
```

## Variables de entorno

Ver `.env.example`:

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (sin slash final). |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp, formato internacional sin `+` ni espacios (ej: `50254135491`). |
| `NEXT_PUBLIC_BUSINESS_NAME` | Nombre del negocio. |
| `NEXT_PUBLIC_FACEBOOK_URL` | URL de la página de Facebook. |
| `NEXT_PUBLIC_GOOGLE_MAPS_URL` | URL del iframe de Google Maps (opcional, se muestra en Contacto). |

> El número de WhatsApp también tiene un valor por defecto en `lib/site.js` para
> que el sitio funcione sin `.env`.

## Estructura

```
app/                 Rutas (App Router) + metadata por página
  productos/         Índice + 7 páginas de producto
  servicios/         Índice + 4 páginas de servicio
  ...                proyectos, cotizar, nosotros, contacto, persianas-guatemala
  sitemap.js         Sitemap dinámico
  robots.js          robots.txt
components/          Componentes reutilizables (Header, Footer, VideoHero, etc.)
data/                Contenido (products, services, projects, faqs)
lib/                 whatsapp, seo, schema, site (config central)
public/              Assets (video, imágenes, logo)
```

## Assets pendientes (producción)

- `public/videos/hero-maperco.mp4` — video de fondo del hero (ver README ahí).
- `public/images/hero-fallback.jpg` — poster del hero.
- `public/images/og-default.jpg` — imagen Open Graph (1200×630).
- Reemplazar las imágenes de Unsplash de `data/products.js` y `data/projects.js`
  por fotos reales.

## SEO

- Metadata por página (`buildMetadata` en `lib/seo.js`).
- JSON-LD: LocalBusiness (global), Product, Service, FAQ y Breadcrumbs
  (`lib/schema.js`).
- `sitemap.xml` y `robots.txt` generados automáticamente.
- URLs limpias, breadcrumbs y enlaces internos entre productos, servicios y
  proyectos.

## Conversión

- Botón flotante de WhatsApp en todas las páginas.
- CTAs orientados a acción con mensajes precargados (`lib/whatsapp.js`).
- Formulario de cotización que construye el mensaje de WhatsApp con los datos.
