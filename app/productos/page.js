import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Productos | Persianas y Cortinas a la Medida en Guatemala | Maperco",
  description:
    "Conoce nuestros productos: persianas enrollables, blackout, screen, día y noche, cortinas romanas, puertas plegables y mosquiteros a la medida en Guatemala.",
  path: "/productos",
});

export default function ProductosPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", href: "/" },
          { name: "Productos", href: "/productos" },
        ]}
      />

      <section className="section pt-10">
        <div className="container-base">
          <SectionHeading
            eyebrow="Catálogo"
            title="Productos a la medida"
            description="Soluciones de persianas, cortinas, puertas plegables y mosquiteros para hogares, oficinas y comercios en Guatemala. Todo se fabrica e instala a la medida."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿No sabes qué producto elegir?"
        subtitle="Cuéntanos cómo es tu espacio y te asesoramos para encontrar la mejor solución."
        whatsAppKey="general"
        primaryLabel="Hablar con un asesor"
      />
    </>
  );
}
