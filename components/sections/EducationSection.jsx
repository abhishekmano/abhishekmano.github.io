import React from "react";
import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import { education } from "@/content/education";
import { RichText } from "@/lib/richText";

const EducationSection = () => {
  return (
    <SectionShell id="education">
      <Reveal>
        <RichText text={education.summary} className="prose-measure text-muted" />
      </Reveal>

      {/* No inner ScrollArea: on a single-page site everything belongs in the one
          page scroll, and a nested scrollbar traps the wheel. */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {education.qualifications.map((item, index) => (
          // Two cards side by side: each mirrors in from the side it sits on.
          <Reveal
            key={item.school}
            from={index % 2 === 0 ? "left" : "right"}
            delay={index * 60}
            className="card-interactive rounded-xl border border-rule bg-paper p-5 shadow-card"
          >
            <p className="numeral text-xs text-muted">
              {item.start} — {item.end}
            </p>

            <h3 className="mt-2 font-display text-lg font-semibold text-ink">
              {item.course}
            </h3>

            {item.specialization && (
              <p className="mt-1 text-sm text-muted">{item.specialization}</p>
            )}

            <p className="mt-3 flex items-start gap-2 text-sm text-muted">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              {item.school}
            </p>

            <p className="numeral mt-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
              {item.result}
            </p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
};

export default EducationSection;
