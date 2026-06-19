import Link from "next/link";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

/**
 * Migas de pan con JSON-LD incluido.
 * @param {{items: {name: string, href: string}[]}} props
 */
export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Ruta de navegación" className="container-base pt-28 sm:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(items))}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink/60">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {isLast ? (
                <span className="font-medium text-ink/80" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="transition hover:text-clay-600"
                  >
                    {item.name}
                  </Link>
                  <span className="text-ink/30">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
