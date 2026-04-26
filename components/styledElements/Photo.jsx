"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const Photo = () => {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const imageSrc =
    mounted && currentTheme === "dark" ? "/assets/Dp-dark.png" : "/assets/Dp-light.png";
  const strokeColor = mounted && currentTheme === "dark" ? "#00ff99" : "#035ce2";
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.12, duration: 0.28, ease: "easeInOut" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.3, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-darken dark:mix-blend-lighten   absolute"
        >
          <Image
            src={imageSrc}
            style={{
              borderRadius: "300px",
            }}
            priority
            fill
            sizes="(max-width: 1280px) 298px, 498px"
            alt="Portrait of Abhishek Manoharan"
            className="object-contain"
          />
        </motion.div>
        {/* Circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0  506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke={strokeColor}
            strokeWidth="4"
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
      </motion.div>
    </div>
  );
};

export default Photo;
