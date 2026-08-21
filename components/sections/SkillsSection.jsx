import React from "react";
import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import { domains } from "@/content/skills";
import { Icon } from "@/lib/icons";

const SkillsSection = () => {
  return (
    <SectionShell id="skills">
      <div className="grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
        {domains.map((domain, index) => (
          // Two-column grid, so each panel mirrors in from its own side. Below md
          // the grid collapses to one column and this reads as a gentle zig-zag.
          <Reveal
            key={domain.title}
            from={index % 2 === 0 ? "left" : "right"}
            delay={index * 70}
          >
            <div className="flex items-baseline gap-3">
              {/* Accent rather than muted: on a page this white, four navy numerals
                  per section are most of the colour below the fold. */}
              <span className="numeral text-2xl font-bold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink">
                {domain.title}
              </h3>
            </div>

            <div className="rule-fade my-5" aria-hidden />

            <ul className="flex flex-wrap gap-2">
              {domain.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="chip-interactive flex items-center gap-2 rounded-full border border-rule bg-paper px-3.5 py-1.5 text-sm text-muted"
                >
                  <Icon name={skill.icon} />
                  {skill.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
};

export default SkillsSection;
