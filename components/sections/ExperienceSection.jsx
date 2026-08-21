import React from "react";
import Image from "next/image";
import SectionShell from "@/components/SectionShell";
import Reveal from "@/components/Reveal";
import { experience } from "@/content/experience";
import { RichText } from "@/lib/richText";

const ExperienceSection = () => {
  return (
    <SectionShell id="experience">
      <Reveal>
        <RichText
          text={experience.summary}
          className="prose-measure text-muted"
        />
      </Reveal>

      {/* Connected timeline. The spine draws itself downward, then each role slides
          in from it with a stagger, so the section assembles rather than appearing.
          The rule is an element rather than a border on the <ol> because a border
          cannot be animated into place.

          It lives in this wrapper rather than inside the <ol>, where it would be
          invalid markup -- an <ol> may only contain <li>. The wrapper carries the
          `relative`, and since it shares its left edge with the <ol> (padding does
          not move a border box) the nodes' -7px offset still centres them on the
          rule. */}
      <div className="relative mt-8 ml-3 sm:ml-4">
        <Reveal
          as="span"
          from="line"
          aria-hidden
          className="absolute top-0 bottom-0 left-0 w-px bg-rule"
        />

        <ol className="space-y-6 pl-8 sm:pl-10">
          {experience.roles.map((role, index) => (
            <Reveal
              as="li"
              key={`${role.company}-${role.position}`}
              from="left"
              // 90ms rather than 60: with a horizontal entrance the cascade is the
              // point, and at 60ms five rows read as one block moving.
              delay={index * 90}
              // `group` sits on the <li>, not the card: the timeline node is a
              // sibling of the card, so a group on the card could not reach it.
              className="group"
            >
              {/* Node on the rule. The current role's node pulses -- the one piece
                of unprompted motion on the page. */}
              <span
                aria-hidden
                className={`absolute -left-[7px] mt-5 h-3.5 w-3.5 rounded-full border-2 border-canvas transition-transform duration-200 group-hover:scale-125 ${
                  role.current ? "live-dot bg-accent" : "bg-rule-strong"
                }`}
              />

              <div className="card-interactive grid gap-4 rounded-xl border border-rule bg-paper p-5 shadow-card sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-5">
                <div
                  className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden bg-accent-soft ${
                    role.logoShape === "circle" ? "rounded-full" : "rounded-lg"
                  }`}
                >
                  {role.logo ? (
                    <Image
                      src={role.logo}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-contain"
                    />
                  ) : (
                    <span className="font-display text-lg font-semibold text-accent">
                      {role.company.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                    {role.position}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">
                    {role.company}
                    <span className="mx-2 text-faint" aria-hidden>
                      ·
                    </span>
                    {role.location}
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:justify-end">
                  <p className="numeral text-xs text-muted">
                    {role.start} — {role.end}
                  </p>
                  {role.current && (
                    <span className="label rounded-full bg-accent-soft px-2 py-0.5 text-accent">
                      Now
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
};

export default ExperienceSection;
