import Image from "next/image";
import Link from "next/link";

/**
 * Tarjeta de producto para grillas.
 */
export default function ProductCard({ product }) {
  const href = `/productos/${product.slug}`;
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand-100">
        <Image
          src={product.image}
          alt={`${product.name} a la medida en Guatemala — Persianas Maperco`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink/70">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-ink/65">
          {product.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-clay-600">
          Ver detalles
          <svg
            className="h-4 w-4 transition group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
