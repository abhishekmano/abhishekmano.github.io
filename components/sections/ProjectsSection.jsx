"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { projects, initialVisibleCount } from "@/content/projects";

/**
 * Shows `initialVisibleCount` projects and hides the rest behind a toggle, so the
 * section is skimmable rather than a very long scroll. All six are still in the
 * HTML for anyone who wants them -- the extras are simply not mounted until asked
 * for, which also means their reveal animation plays when they appear.
 *
 * A client component because of the toggle. That pulls SectionShell into the
 * client bundle too, which is fine: it has no server-only dependencies, and the
 * Reveal it renders was already a client component.
 */
const ProjectsSection = () => {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? projects : projects.slice(0, initialVisibleCount);
  const hiddenCount = projects.length - initialVisibleCount;

  return (
    <SectionShell id="projects">
      <div className="space-y-4">
        {visible.map((project, index) => (
          <Reveal
            key={project.name}
            // Stagger only the initial set. Once expanded, a delay proportional to
            // the index would leave the last card waiting noticeably long.
            delay={expanded ? 0 : index * 50}
            className="card-interactive group rounded-2xl border border-rule bg-paper p-6 shadow-card xl:p-8"
          >
            <div className="grid gap-6 xl:grid-cols-[1fr_1.3fr] xl:gap-10">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="numeral text-2xl font-bold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {project.shortName && (
                    <span className="label text-accent">{project.shortName}</span>
                  )}
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                  {project.name}
                </h3>
                <p className="mt-2 text-muted">{project.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-sunken px-2.5 py-1 text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="space-y-2.5 xl:border-l xl:border-rule xl:pl-8">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {hiddenCount > 0 && (
        <Reveal className="mt-6 flex justify-center">
          <Button
            variant="outline"
            size="md"
            aria-expanded={expanded}
            onClick={() => setExpanded((open) => !open)}
          >
            {expanded ? "Show fewer" : `Show ${hiddenCount} more`}
            <FiChevronDown
              className={`text-base transition-transform ${expanded ? "rotate-180" : ""}`}
              aria-hidden
            />
          </Button>
        </Reveal>
      )}
    </SectionShell>
  );
};

export default ProjectsSection;
