import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { archiveImages } from "@/data/archive";
import { mediaPath } from "@/lib/paths";

export default function ArchiveSection({ images = archiveImages }) {
  if (!images.length) return null;

  const [featured, ...rest] = images;

  return (
    <section id="archivo" className="section bg-white">
      <div className="container-base">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Archivo Maperco"
            title="Instalaciones reales en espacios residenciales y comerciales"
            description="Una selección visual de proyectos terminados: control solar, privacidad y acabados limpios en ambientes interiores y exteriores."
          />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="group overflow-hidden rounded-lg border border-sand-200 bg-sand-50">
            <div className="relative aspect-[4/3] overflow-hidden bg-sand-100 lg:aspect-[16/10]">
              <Image
                src={mediaPath(featured.src)}
                alt={featured.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold text-ink">{featured.title}</h3>
              <p className="text-sm font-medium text-clay-600">{featured.category}</p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((image) => (
              <article
                key={image.src}
                className="group overflow-hidden rounded-lg border border-sand-200 bg-sand-50"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
                  <Image
                    src={mediaPath(image.src)}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 21vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-ink">{image.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{image.category}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
