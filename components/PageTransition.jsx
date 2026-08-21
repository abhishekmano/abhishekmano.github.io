"use client";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

// Route changes cross-fade and settle upward.
//
// This replaces a six-bar "stairs" wipe plus a duplicated full-screen overlay
// that ran on every navigation and again on first load. Beyond reading as a
// gimmick, that version had real defects: the overlay was positioned with an
// invalid `top:0` class, both transition components animated the same fade, and
// it animated `top` (not compositor-friendly) across `w-screen` elements, which
// overflow by the width of the scrollbar.
const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    // initial={false} keeps the first paint static: the transition belongs to
    // navigation, not to arriving on the site.
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
        // Gentle ease-out: quick to appear, unhurried as it settles.
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
