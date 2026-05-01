"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CHARS = "RICKY HIDAYAT".split("");

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center z-10 pointer-events-none select-none">
      {/* Staggered Title Reveal */}
      <motion.div
        className="flex overflow-hidden mb-4"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
      >
        {CHARS.map((ch, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="font-display font-bold text-5xl md:text-8xl lg:text-9xl tracking-tighter text-white glitch"
            style={{ textShadow: "0 0 20px #ff0055, 0 0 60px #ff005544" }}
            data-text={ch === " " ? "\u00a0" : ch}
          >
            {ch === " " ? "\u00a0" : ch}
          </motion.span>
        ))}
      </motion.div>

      {/* Tagline — dark pill backdrop ensures legibility over any frame */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="font-display text-xs md:text-sm tracking-[0.4em] uppercase text-white mb-12 text-center px-6 py-3 mx-4 rounded-sm"
        style={{
          background: "rgba(8, 8, 14, 0.72)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.08)",
          textShadow: "0 1px 8px rgba(0,0,0,0.9)",
        }}
      >
        <span className="text-[#ff6699]">AI-Assisted Developer</span>
        {" "}<span className="text-[#ff0055] mx-1">·</span>{" "}
        <span className="text-[#cc99ff]">Security Officer</span>
        {" "}<span className="text-[#e040fb] mx-1">·</span>{" "}
        <span className="text-[#66ddff]">Videographer</span>
        {" "}<span className="text-[#00e5ff] mx-1">·</span>{" "}
        <span className="text-[#66ddff]">Photographer</span>
      </motion.p>

      {/* Scroll prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="flex flex-col items-center gap-2 pointer-events-auto"
      >
        <span
          className="font-display text-[10px] tracking-[0.5em] uppercase text-white px-4 py-2 rounded-sm"
          style={{
            background: "rgba(8,8,14,0.65)",
            backdropFilter: "blur(6px)",
            textShadow: "0 1px 6px rgba(0,0,0,0.8)",
          }}
        >
          Scroll to Initiate
        </span>
        <ChevronDown className="w-5 h-5 text-[#ff0055] scroll-pulse" />
      </motion.div>
    </section>
  );
}
