import React from "react";
import Reveal from "@/components/Reveal";
import { RichText } from "@/lib/richText";
import { getSection } from "@/content/sections";

/**
 * Wrapper for every section on the page.
 *
 * Two-column editorial layout on desktop: a narrow left column holding the label
 * and heading, which sticks while the content scrolls past it, and a wide right
 * column holding the content. Stacks to one column below lg. This is what stops a
 * long single-page site reading as a stack of unrelated blocks -- each section gets
 * a stable left edge and keeps its context while you read it.
 *
 * Four things are load-bearing and easy to break:
 *   - lg:self-start on the sticky column. Grid items stretch by default, so the
 *     column would fill the row height and sticky would have no room to travel --
 *     it fails silently.
 *   - min-w-0 on the content column. Grid items are min-width:auto, so one long
 *     unbroken string blows the column out instead of wrapping.
 *   - lg:top-24 (6rem) clears the 4rem sticky header.
 *   - No overflow-hidden/clip/auto on any ancestor: that makes a scroll container
 *     and kills sticky. (Hero uses overflow-hidden, which is why it does not use
 *     this shell.)
 *
 * The anchor id, eyebrow, title and summary all come from content/sections.js by
 * id, so section copy is config rather than markup.
 *
 * @param {{
 *   id: string,
 *   children: React.ReactNode,
 *   className?: string,
 * }} props
 */
const SectionShell = ({ id, children, className = "" }) => {
  const meta = getSection(id);

  return (
    <section id={id} className={className}>
      {/* Top padding stays small: the rhythm between sections comes from the
          previous section's bottom padding, so an anchor jump lands the heading just
          under the header rather than 80px below it. */}
      <div className="container mx-auto pt-2 pb-16 xl:pt-4 xl:pb-24">
        <div className="grid gap-6 lg:grid-cols-[13rem_1fr] lg:gap-14">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            {meta?.eyebrow && <p className="label text-accent">{meta.eyebrow}</p>}
            {meta?.title && <h2 className="h2 mt-2">{meta.title}</h2>}
            {/* Its own Reveal so it can wipe rather than fade with the heading.
                Delayed, so the rule draws after the title has arrived rather than
                racing it. This is the one beat every section shares. */}
            <Reveal
              from="wipe"
              delay={180}
              className="rule-fade mt-5"
              aria-hidden
            />
          </Reveal>

          <div className="min-w-0">
            {meta?.summary && (
              <Reveal>
                <RichText
                  text={meta.summary}
                  className="prose-measure text-muted"
                />
              </Reveal>
            )}

            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionShell;
