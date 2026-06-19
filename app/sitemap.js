import { site } from "@/lib/site";
import { products } from "@/data/products";
import { services } from "@/data/services";

export default function sitemap() {
  const lastModified = new Date("2026-06-15");

  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/persianas-guatemala", priority: 0.9, changeFrequency: "monthly" },
    { path: "/productos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios", priority: 0.9, changeFrequency: "monthly" },
    { path: "/proyectos", priority: 0.7, changeFrequency: "monthly" },
    { path: "/cotizar", priority: 0.8, changeFrequency: "yearly" },
    { path: "/nosotros", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contacto", priority: 0.7, changeFrequency: "yearly" },
  ];

  const productRoutes = products.map((p) => ({
    path: `/productos/${p.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const serviceRoutes = services.map((s) => ({
    path: `/servicios/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes].map((r) => ({
    url: `${site.url}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
