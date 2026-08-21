"use client";
import React, { useEffect, useRef } from "react";

/**
 * Fades content in as it enters the viewport, once. It never re-hides on scroll
 * up: the observer disconnects after the first intersection.
 *
 * The reveal is applied by toggling a class (styles live in globals.css) rather
 * than by animating from JS, so the transition runs on the compositor and there
 * is no React state churn per section.
 *
 * `from` picks the direction it travels:
 *   "up"    -- rises 14px. The default, used by every section heading and card.
 *   "left"  -- slides in 28px from the left. For rows hanging off a left-hand
 *              spine, like the experience timeline, where a horizontal entrance
 *              reads as the row arriving from the rule.
 *   "right" -- the mirror, for anything anchored on the right.
 *   "line"  -- draws downward from the top instead of moving. For a timeline's
 *              vertical rule, which has to arrive before the rows slide off it.
 *   "wipe"  -- draws left to right. For a horizontal rule.
 *
 * The convention the sections follow: two-column grids mirror in from their own
 * side ("left" for the left column, "right" for the right), single-column stacks
 * rise. That way the motion says something about the layout instead of being six
 * unrelated effects.
 *
 * @param {{
 *   children?: React.ReactNode,
 *   className?: string,
 *   as?: keyof JSX.IntrinsicElements,
 *   delay?: number,
 *   from?: "up" | "left" | "right" | "line" | "wipe",
 * }} props
 */
const DIRECTION_CLASS = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  line: "reveal-line",
  wipe: "reveal-wipe",
};

const Reveal = ({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  from = "up",
  ...rest
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const show = () => element.classList.add("is-visible");

    // No IntersectionObserver: reveal immediately rather than leaving the content
    // stranded at opacity 0. A feature check, not a timer.
    //
    // There used to be a blanket `setTimeout(show, 1500)` here as a failsafe, and
    // it quietly defeated the entire feature: it fired for every Reveal on the
    // page whether or not it was on screen, so 1.5s after load everything below
    // the fold had already animated. Scrolling down then showed nothing. The
    // observer's own initial observation is delivered for every target as soon as
    // it is observed, so an offscreen element is never at risk of being missed.
    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      // Spread first, so className and style below cannot be clobbered by a caller.
      {...rest}
      className={`reveal ${DIRECTION_CLASS[from] ?? ""} ${className}`
        .replace(/\s+/g, " ")
        .trim()}
      // Stagger siblings by passing an increasing delay.
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
