"use client";

import { motion } from "framer-motion";
import React from "react";

interface ScrollSlideProps {
  children: React.ReactNode;
  className?: string;
  zIndex?: number;
  bg?: string;
}

export default function ScrollSlide({
  children,
  className = "",
  zIndex = 10,
  bg = "bg-canvas",
}: ScrollSlideProps) {
  return (
    <div
      className={`relative lg:sticky lg:top-0 w-full min-h-0 h-auto lg:min-h-screen flex flex-col justify-center rounded-t-[2.25rem] sm:rounded-t-[3rem] lg:rounded-t-[3.5rem] -mt-6 sm:-mt-8 lg:mt-0 shadow-[0_-16px_40px_rgba(15,23,42,0.12)] border-t border-white/40 overflow-visible transition-shadow duration-500 ${bg} ${className}`}
      style={{ zIndex }}
    >
      <motion.div
        initial={{ opacity: 0.75, y: 44, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.08, margin: "0px 0px -30px 0px" }}
        transition={{
          duration: 0.75,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full flex-1 flex flex-col justify-center py-8 sm:py-14 lg:py-10 transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  );
}
