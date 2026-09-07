import Link from "next/link";
import VideoHero from "@/components/VideoHero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import ProjectCard from "@/components/ProjectCard";
import ArchiveSection from "@/components/ArchiveSection";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { getFeaturedProducts, products } from "@/data/products";
import { projects } from "@/data/projects";
import { getFaqs } from "@/data/faqs";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Persianas en Guatemala | Instalación a Medida | Persianas Maperco",
  description:
    "Persianas Maperco ofrece persianas, cortinas, blackout, screen, verticales, mosquiteros y puertas plegables a la medida en Guatemala. Solicita tu cotización por WhatsApp.",
  path: "/",
});

const categories = [
  { name: "Persianas blackout", href: "/productos/persianas-blackout" },
  { name: "Persianas screen", href: "/productos/persianas-screen" },
  { name: "Persianas verticales", href: "/productos/persianas-verticales" },
  { name: "Cortinas romanas", href: "/productos/cortinas-romanas" },
  { name: "Puertas plegables", href: "/productos/puertas-plegables" },
  { name: "Mosquiteros", href: "/productos/mosquiteros" },
];

const benefits = [
  {
    title: "Trabajo a la medida",
    desc: "Cada persiana y cortina se fabrica según las dimensiones exactas de tu espacio.",
    icon: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15",
  },
  {
    title: "Asesoría personalizada",
    desc: "Te ayudamos a elegir el producto y la tela ideal según luz, privacidad y estilo.",
    icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  },
  {
    title: "Instalación profesional",
    desc: "Montaje nivelado, seguro y limpio para que todo funcione a la perfección.",
    icon: "M11.42 15.17 17.25 21A2.65 2.65 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085",
  },
  {
    title: "Soporte y mantenimiento",
    desc: "Reparación, ajuste y mantenimiento para alargar la vida de tus persianas.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
];

const processSteps = [
  { t: "Asesoría", d: "Conversamos tus necesidades y resolvemos tus dudas." },
  { t: "Medición", d: "Tomamos medidas exactas en tu casa, oficina o comercio." },
  { t: "Fabricación a la medida", d: "Producimos tu solución con materiales de calidad." },
  { t: "Instalación", d: "Montaje profesional, nivelado y limpio." },
  { t: "Soporte", d: "Reparación y mantenimiento cuando lo necesites." },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const homeProjects = projects.slice(0, 6);

  return (
    <>
      <VideoHero
        title="Persianas y cortinas a la medida en Guatemala"
        subtitle="Transformamos hogares, oficinas y comercios con persianas, cortinas, puertas plegables y mosquiteros fabricados e instalados a la medida."
        primaryCtaLabel="Cotizar por WhatsApp"
        primaryCtaHref={waLink("general")}
        secondaryCtaLabel="Ver productos"
        secondaryCtaHref="/productos"
        videos={[
          { src: "/videos/hero-maperco.mp4" },
          { src: "/videos/persiana-screen.mp4" },
          { src: "/videos/cortina-romana.mp4" },
        ]}
      />

      {/* Categorías principales */}
      <section className="section">
        <div className="container-base">
          <SectionHeading
            eyebrow="Nuestras soluciones"
            title="Categorías principales"
            description="Soluciones a la medida para controlar la luz, ganar privacidad y decorar con elegancia."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex items-center justify-between rounded-lg border border-sand-200 bg-white px-5 py-5 transition hover:-translate-y-0.5 hover:border-clay/30 hover:shadow-lg hover:shadow-ink/5"
              >
                <span className="font-medium text-ink">{c.name}</span>
                <svg className="h-5 w-5 text-clay-500 transition group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section bg-white">
        <div className="container-base">
          <SectionHeading
            eyebrow="Por qué Maperco"
            title="Beneficios de trabajar con nosotros"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-lg border border-sand-200 bg-sand-50 p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-clay-50 text-clay-600">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section">
        <div className="container-base">
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="Un proceso claro, de principio a fin"
            description="Te acompañamos en cada paso, desde la primera asesoría hasta el soporte posterior."
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s, i) => (
              <li key={s.t} className="relative rounded-lg border border-sand-200 bg-white p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-ink text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Productos destacados */}
      <section className="section bg-white">
        <div className="container-base">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Lo más solicitado"
              title="Productos destacados"
            />
            <Link href="/productos" className="btn-outline">
              Ver productos
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="section">
        <div className="container-base">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Nuestro trabajo"
              title="Proyectos recientes"
            />
            <Link href="/proyectos" className="btn-outline">
              Ver proyectos
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Confianza / cobertura local */}
      <section className="section bg-white">
        <div className="container-base grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Confianza"
              title="Una empresa seria de instalación y decoración"
              description="En Persianas Maperco nos especializamos en soluciones a la medida con atención personalizada. Acompañamos a familias, oficinas y comercios para lograr ambientes más cómodos, privados y elegantes."
            />
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-clay-600">A la medida</p>
                <p className="mt-1 text-sm text-ink/60">Fabricación propia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-clay-600">10+ zonas</p>
                <p className="mt-1 text-sm text-ink/60">Cobertura en Guatemala</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-clay-600">Soporte</p>
                <p className="mt-1 text-sm text-ink/60">Reparación y mantenimiento</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={waLink("general")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" />
                Hablar con un asesor
              </a>
              <Link href="/nosotros" className="btn-outline">
                Conoce a Maperco
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-sand-200 bg-sand-50 p-7">
            <h3 className="text-lg font-semibold text-ink">
              Cobertura en Guatemala
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">
              Atendemos {site.coverage.join(", ")}. Si tu ubicación no aparece en
              la lista, escríbenos y con gusto confirmamos si podemos llegar.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {site.coverage.map((zone) => (
                <li
                  key={zone}
                  className="rounded-md border border-sand-200 bg-white px-3 py-1.5 text-xs font-medium text-ink/65"
                >
                  {zone}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ArchiveSection />

      <FAQSection faqs={getFaqs("general")} />
    </>
  );
}
