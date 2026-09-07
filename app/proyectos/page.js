import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";
import { projects, projectFilters } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Proyectos | Persianas y Cortinas Instaladas en Guatemala | Maperco",
  description:
    "Galería de proyectos de persianas y cortinas instaladas en hogares, oficinas y comercios de Guatemala: blackout, screen, verticales, cortinas y mosquiteros.",
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
    </>
  );
}
