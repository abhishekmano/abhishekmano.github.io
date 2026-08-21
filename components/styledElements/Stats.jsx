"use client";
import React from "react";
import CountUp from "react-countup";
import { stats, careerStart } from "@/content/site";
import { yearsSince } from "@/lib/dates";

/**
 * Resolves a stat's number. Anything marked `derived` is computed rather than
 * stored, so "years of experience" never needs a manual yearly edit.
 *
 * @param {{ value?: number, derived?: string }} stat
 */
function resolveValue(stat) {
  if (stat.derived === "yearsOfExperience") return yearsSince(careerStart);
  return stat.value ?? 0;
}

/**
 * Column count at desktop width, keyed by how many stats are configured. A lookup
 * of literal class strings rather than a template: Tailwind scans source text for
 * class names, so `xl:grid-cols-${n}` would produce a class that was never
 * generated and the band would silently fall back to one column.
 */
const COLUMNS = {
  1: "xl:grid-cols-1",
  2: "xl:grid-cols-2",
  3: "xl:grid-cols-3",
  4: "xl:grid-cols-4",
};

// Steel-navy band carrying a diagonal hatch for depth. .on-band flips the token
// set, so the children below still say text-ink / text-muted / border-rule and
// simply read correctly against it, rather than each hardcoding light-on-dark.
const Stats = () => {
  const columns = COLUMNS[stats.length] ?? "xl:grid-cols-4";

  return (
    // shrink-0 because this is a flex child of the viewport-height wrapper in
    // app/page.js -- without it the band would compress instead of the hero when
    // space runs short.
    <section className="on-band hatch-band bg-canvas shrink-0">
      <div className="container mx-auto py-10 xl:py-14">
        <dl className={`grid grid-cols-2 gap-x-6 gap-y-10 ${columns}`}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 border-l border-rule pl-4 xl:pl-5"
            >
              <dd className="numeral flex items-baseline text-4xl font-semibold text-ink xl:text-5xl">
                <CountUp
                  end={resolveValue(stat)}
                  duration={2.2}
                  delay={0.3}
                  enableScrollSpy
                  scrollSpyOnce
                  separator=","
                />
                <span aria-hidden>{stat.suffix}</span>
              </dd>
              <dt className="max-w-[16ch] text-sm leading-snug text-muted">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Stats;
