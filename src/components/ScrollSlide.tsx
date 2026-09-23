"use client";

import { motion } from "framer-motion";
import React from "react";

interface ScrollSlideProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  asCard?: boolean;
}

export default function ScrollSlide({
  children,
  className = "",
  delay = 0,
  asCard = false,
}: ScrollSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative w-full ${
        asCard
          ? "rounded-t-[2.5rem] sm:rounded-t-[3.5rem] bg-white/95 shadow-[0_-20px_50px_rgba(15,23,42,0.06)] -mt-6 sm:-mt-10 pt-4"
          : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
