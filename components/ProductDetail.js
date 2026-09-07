import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import { getFaqs } from "@/data/faqs";
import { site } from "@/lib/site";
import { productSchema, jsonLd } from "@/lib/schema";
import { mediaPath } from "@/lib/paths";

const quoteSteps = [
  { t: "Cuéntanos qué necesitas", d: "Escríbenos por WhatsApp o usa el formulario con tus datos." },
  { t: "Asesoría y medición", d: "Te recomendamos el producto y la tela ideal y medimos tu ventana." },
  { t: "Cotización a la medida", d: "Recibes una propuesta clara con opciones y precio." },
  { t: "Fabricación e instalación", d: "Fabricamos a la medida e instalamos de forma profesional." },
];

export default function ProductDetail({ product }) {
  const faqs = getFaqs(product.slug);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const path = `/productos/${product.slug}`;

  const breadcrumbs = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: product.name, href: path },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          productSchema({
            name: product.name,
            description: product.metaDescription,
            path,
            image: product.image,
          })
        )}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero del producto */}
      <section className="section pt-10">
        <div className="container-base grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">{product.category} a la medida</p>
            <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">
              {product.h1}
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/70">{product.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(product.waKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Cotizar {product.shortName.toLowerCase()}
              </a>
              <Link href="/cotizar" className="btn-outline">
                Solicitar cotización
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sand-100 shadow-xl shadow-ink/5">
            <Image
              src={mediaPath(product.image)}
              alt={`${product.name} a la medida en Guatemala — Persianas Maperco`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Beneficios + usos */}
      <section className="section bg-white">
        <div className="container-base grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Beneficios de las {product.name.toLowerCase()}
            </h2>
            <ul className="mt-6 space-y-4">
              {product.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <svg className="mt-0.5 h-6 w-6 flex-none text-clay-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-base leading-7 text-ink/75">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-sand-200 bg-sand-50 p-7">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Usos recomendados
            </h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {product.uses.map((u) => (
                <span
                  key={u}
                  className="rounded-md border border-sand-200 bg-white px-4 py-2 text-sm font-medium text-ink/70"
                >
                  {u}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-ink/65">
              Atendemos {site.coverage.slice(0, 6).join(", ")} y más zonas de
              Guatemala. Si no ves tu ubicación, escríbenos y confirmamos
              cobertura.
            </p>
          </div>
        </div>
      </section>

      {/* Galería */}
      {product.gallery?.length ? (
        <section className="section">
          <div className="container-base">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Galería</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {product.gallery.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg bg-sand-100"
                >
                  <Image
                    src={mediaPath(src)}
                    alt={`${product.name} — ejemplo ${i + 1} | Persianas Maperco Guatemala`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Proceso de cotización */}
      <section className="section bg-white">
        <div className="container-base">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            ¿Cómo cotizar tus {product.name.toLowerCase()}?
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quoteSteps.map((s, i) => (
              <li
                key={s.t}
                className="rounded-lg border border-sand-200 bg-sand-50 p-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-clay text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{s.t}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Relacionados */}
      <section className="section bg-white">
        <div className="container-base">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            También te puede interesar
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Cotiza tus ${product.name.toLowerCase()} a la medida`}
        whatsAppKey={product.waKey}
        primaryLabel={`Cotizar ${product.shortName.toLowerCase()}`}
      />
    </>
  );
}
