"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";

export default function TiltPortrait({
  credentialCards,
}: {
  credentialCards: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 160,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 160,
    damping: 20,
  });
  const glowX = useTransform(x, [-0.5, 0.5], ["35%", "65%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["35%", "65%"]);
  const translateX = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), {
    stiffness: 160,
    damping: 22,
  });
  const translateY = useSpring(useTransform(y, [-0.5, 0.5], [-4, 4]), {
    stiffness: 160,
    damping: 22,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex justify-center py-4 sm:py-6" ref={ref}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1400 }}
        className="relative"
      >
        {/* Vibrant warm atmospheric ambient glow */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] blur-3xl animate-glow-pulse"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(225,29,72,0.22), rgba(13,148,136,0.18) 45%, transparent 70%)`,
          }}
        />

        {/* Vibrant Architectural Arch Backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-x-4 top-6 bottom-0 -z-10 mx-auto w-[250px] sm:w-[310px] rounded-t-[140px] rounded-b-[36px] bg-gradient-to-b from-rose-100/80 via-white to-teal-50 border-2 border-rose-200/70 shadow-card"
        />

        {/* Floating Top Pill Badge: Certified Specialist */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute -top-3 right-0 sm:-right-4 z-20 flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 shadow-card"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-600" />
          </span>
          <span className="text-xs font-bold tracking-wide text-teal-800">
            Certified Specialist
          </span>
        </motion.div>

        {/* Grounding Contact Shadow */}
        <div
          aria-hidden="true"
          className="absolute inset-x-8 bottom-1 h-6 rounded-full bg-ink/10 blur-xl"
        />

        {/* Cutout Image */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            x: translateX,
            y: translateY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-[250px] sm:w-[310px] pt-4"
        >
          <Image
            src="/images/shammy-cutout.png"
            alt="Shammy Akhter — Heart2Home Lead Counsellor"
            width={1000}
            height={1150}
            priority
            sizes="(max-width: 640px) 250px, 310px"
            className="h-auto w-full drop-shadow-[0_20px_35px_rgba(225,29,72,0.18)] drop-shadow-[0_4px_12px_rgba(15,23,42,0.12)]"
          />
        </motion.div>

        {/* 100% Solid, High-Contrast Vibrant Credential Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-6 -left-2 w-[280px] sm:-bottom-8 sm:-left-12 sm:w-[350px] z-30 rounded-2xl border-2 border-rose-200/90 bg-white p-4 shadow-[0_20px_45px_rgba(225,29,72,0.16),0_4px_16px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/5 sm:p-5"
        >
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-600">
            <ShieldCheck size={15} className="text-rose-600" />
            <span>Professional Accreditation</span>
          </div>

          <ul className="space-y-2.5">
            {credentialCards.map((line, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-xs sm:text-[13px] font-semibold leading-snug text-slate-900"
              >
                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-rose-500 shadow-sm" />
                <span className="text-slate-900">{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
