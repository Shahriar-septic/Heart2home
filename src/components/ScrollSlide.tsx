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
      className={`sticky top-0 min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-center rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-[0_-25px_60px_rgba(15,23,42,0.15)] overflow-hidden ${bg} ${className}`}
      style={{ zIndex }}
    >
      <motion.div
        initial={{ opacity: 0.8, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex-1 flex flex-col justify-center py-6 sm:py-12"
      >
        {children}
      </motion.div>
    </div>
  );
}
