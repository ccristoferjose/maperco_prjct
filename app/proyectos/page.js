import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import { projects, projectFilters } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Proyectos | Persianas y Cortinas Instaladas en Guatemala | Maperco",
  description:
    "Galería de proyectos de persianas y cortinas instaladas en hogares, oficinas y comercios de Guatemala: blackout, screen, día y noche, cortinas y mosquiteros.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Proyectos", href: "/proyectos" },
        ]}
      />

      <section className="section pt-10">
        <div className="container-base">
          <SectionHeading
            eyebrow="Nuestro trabajo"
            title="Proyectos realizados"
            description="Una muestra de instalaciones en hogares, oficinas y comercios. Filtra por tipo de espacio o producto y encuentra ideas para el tuyo."
          />
          <div className="mt-12">
            <Gallery projects={projects} filters={projectFilters} />
          </div>
        </div>
      </section>

      <CTASection
        title="Quiero un proyecto así"
        subtitle="Compártenos qué te gustó y te ayudamos a lograr un resultado similar a la medida."
        whatsAppKey="general"
        primaryLabel="Cotizar por WhatsApp"
      />
    </>
  );
}
