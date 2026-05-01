"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const highlights = [
    { label: "AI & Development", value: "Next.js · Python · AppScript", color: "#ff0055" },
    { label: "Security Systems", value: "CCTV Mgmt · DAR · Cloud", color: "#e040fb" },
    { label: "Creative Media", value: "Videography · Photography", color: "#00e5ff" },
    { label: "Data & Backend", value: "MySQL · Supabase · MongoDB", color: "#00ff88" },
  ];

  return (
    <section id="about" className="relative z-20 bg-[#08080e] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated border rings */}
              <div className="absolute inset-0 rounded-full border border-[#ff005544] animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full border border-[#e040fb33] animate-[spin_18s_linear_infinite_reverse]" />
              <div className="absolute inset-6 rounded-full border border-[#00e5ff22] animate-[spin_25s_linear_infinite]" />
              {/* Photo */}
              <div className="absolute inset-8 rounded-full overflow-hidden" style={{ boxShadow: "0 0 40px #ff005544" }}>
                <Image
                  src="/profile.jpg"
                  alt="Ricky Hidayat"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Corner decorations */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#ff0055]" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#ff0055]" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="font-display text-[10px] tracking-[0.5em] uppercase text-[#ff0055] mb-3">
              01 // IDENTITAS
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Siapa{" "}
              <span className="text-[#ff0055]" style={{ textShadow: "0 0 20px #ff005588" }}>
                Saya?
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              Saya adalah seorang <strong className="text-white">AI-Assisted Developer</strong> yang memadukan kode, keamanan, dan kreativitas dalam satu persona. Spesialisasi di Low-Code Development menggunakan Google Apps Script dan AppSheet.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Selain bergelut di dunia digital, saya aktif sebagai Security Officer di Dept. Vasa, serta seorang videografer dan fotografer yang memiliki mata tajam untuk visual storytelling.{" "}
              <span className="text-[#00e5ff]">Mari berkolaborasi dan wujudkan ide Anda.</span>
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card p-4"
                >
                  <div className="text-[10px] font-display tracking-[0.3em] uppercase mb-1" style={{ color: h.color }}>
                    {h.label}
                  </div>
                  <div className="text-sm text-gray-300">{h.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
