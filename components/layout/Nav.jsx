"use client";
import React, { useEffect, useState } from "react";
import { navSections, navLinkSections } from "@/content/sections";

/**
 * Anchor nav with scroll-spy.
 *
 * The active item is whichever section the reading line is currently in: the
 * last section whose top has passed just under the header. Measured from scroll
 * position on every frame that scrolls, rather than from IntersectionObserver.
 *
 * The observer version this replaced looked reasonable and had two real bugs.
 * `intersectionRatio` is a fraction of the *target's* box, not of the root, so
 * with a band 10% of the viewport tall a long section like Projects topped out
 * around 0.05 and never crossed the 0.25 / 0.5 / 1 thresholds -- it fired exactly
 * twice, on enter and on leave. Since observations are delivered per frame, the
 * fast programmatic scroll from clicking a nav link could coalesce past that one
 * enter event and the item would never highlight. And where two sections met, the
 * ratio favoured whichever was shorter, so a short section outranked the one the
 * band was actually mostly inside.
 *
 * Only nav sections are measured, so the highlight persists across the sections
 * that have no link of their own -- Home stays lit through About, Projects through
 * Education -- rather than blanking out.
 */

// Where the reading line sits, in px. Must clear the 4rem header *and* be below
// html { scroll-padding-top: 4.5rem }, or a section landing from an anchor click
// would sit just under the line and fail to register as active.
const READING_LINE = 96;

const Nav = () => {
  const [activeId, setActiveId] = useState(navSections[0]?.id);

  useEffect(() => {
    const targets = navSections
      .map((section) => ({ id: section.id, el: document.getElementById(section.id) }))
      .filter((target) => target.el);

    if (!targets.length) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      let active = targets[0].id;
      for (const { id, el } of targets) {
        if (el.getBoundingClientRect().top <= READING_LINE) active = id;
      }

      // The final section can be shorter than the viewport, in which case its top
      // never reaches the line however far you scroll. Treat reaching the bottom
      // of the document as being in it.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) active = targets[targets.length - 1].id;

      setActiveId(active);
    };

    // rAF-throttled: scroll fires far more often than the screen repaints, and
    // this reads layout, so running it per event would mean redundant reflows.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Scheduled rather than called directly: a synchronous setState in an effect
    // body is what react-hooks/set-state-in-effect flags, and this also covers
    // loading straight onto a #hash, where no scroll event may fire.
    frame = requestAnimationFrame(update);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="flex items-center gap-1">
      {navLinkSections.map((section) => {
        const active = section.id === activeId;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              active
                ? "bg-accent-soft text-accent"
                : "text-muted hover:bg-sunken hover:text-ink"
            }`}
          >
            {section.navLabel}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
