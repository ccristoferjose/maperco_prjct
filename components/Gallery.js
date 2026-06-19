"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

/**
 * Galería de proyectos con filtros por etiqueta (espacio y producto).
 */
export default function Gallery({ projects = [], filters = [] }) {
  const [active, setActive] = useState("Todos");

  const options = useMemo(() => ["Todos", ...filters], [filters]);

  const visible = useMemo(() => {
    if (active === "Todos") return projects;
    return projects.filter((p) => p.tags?.includes(active));
  }, [active, projects]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => {
          const isActive = opt === active;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => setActive(opt)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-ink text-white"
                  : "border border-ink/15 bg-white text-ink/70 hover:border-ink/30"
              }`}
              aria-pressed={isActive}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {visible.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-ink/60">
          No hay proyectos en esta categoría por ahora. Escríbenos y te
          compartimos ejemplos similares.
        </p>
      )}
    </div>
  );
}
