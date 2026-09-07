import Image from "next/image";
import { createWhatsAppLink } from "@/lib/whatsapp";

/**
 * Tarjeta de proyecto para la galería.
 */
export default function ProjectCard({ project }) {
  const message = `Hola Persianas Maperco, vi su proyecto "${project.title}" (${project.product}) y quiero algo similar. ¿Me pueden cotizar?`;
  return (
    <article className="group overflow-hidden rounded-lg border border-sand-200 bg-white transition hover:-translate-y-1 hover:border-clay/30 hover:shadow-xl hover:shadow-ink/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.product} en ${project.space} | Persianas Maperco`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-md bg-clay-50 px-3 py-1 text-xs font-semibold text-clay-600">
            {project.product}
          </span>
          <span className="rounded-md bg-sand-100 px-3 py-1 text-xs font-semibold text-ink/60">
            {project.space}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-ink/65">
          {project.description}
        </p>
        <a
          href={createWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay-600 hover:text-clay-700"
        >
          Quiero algo similar
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </article>
  );
}
