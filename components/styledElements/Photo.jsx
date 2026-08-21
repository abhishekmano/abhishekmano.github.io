"use client";
import { motion } from "motion/react";
import React from "react";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Soft accent bloom, so the portrait sits on something rather than
          floating in empty white. */}
      <div
        aria-hidden
        className="bloom absolute w-[340px] h-[340px] xl:w-[560px] xl:h-[560px] rounded-full"
      />

      {/* The light/dark portrait swap is a CSS background rather than a stateful
          <Image> src. No mounted-flag effect (so no wrong-image flash), and the
          browser only fetches the variant actually applied -- two <img> tags would
          have downloaded both. next/image optimisation is off anyway under
          output: "export". */}
      <motion.div
        role="img"
        aria-label="Portrait of Abhishek Manoharan"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        }}
        className="w-[290px] h-[290px] xl:w-[470px] xl:h-[470px] rounded-full bg-center bg-no-repeat bg-contain bg-[url(/assets/Dp-light.webp)] dark:bg-[url(/assets/Dp-dark.webp)]"
      />

      {/* Rotating dashed ring. */}
      <motion.svg
        aria-hidden
        className="absolute w-[310px] xl:w-[506px] h-[310px] xl:h-[506px] pointer-events-none"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          /* Was a hardcoded #00ff99 / #035ce2 pair picked in JS from the active
             theme. The accent token already switches with the theme in CSS. */
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
