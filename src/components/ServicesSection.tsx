"use client";

import { motion } from "framer-motion";
import { Code, Shield, Camera, Database } from "lucide-react";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    tag: "SVC_01",
    title: "AI & Low-Code Dev",
    desc: "Membangun aplikasi cepat dan efisien dengan Next.js, Google Apps Script, AppSheet, dan integrasi AI untuk otomatisasi proses bisnis.",
    accent: "#ff0055",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    tag: "SVC_02",
    title: "Security Systems",
    desc: "Implementasi sistem manajemen keamanan digital: CCTV management, laporan harian terstruktur, dan sistem monitoring berbasis cloud.",
    accent: "#e040fb",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    tag: "SVC_03",
    title: "Creative Production",
    desc: "Fotografi & videografi profesional untuk brand, produk, dan event. Editing hasil akhir yang cinemaic dengan CapCut.",
    accent: "#00e5ff",
  },
  {
    icon: <Database className="w-8 h-8" />,
    tag: "SVC_04",
    title: "Data & Analytics",
    desc: "Pengolahan data bisnis menggunakan Google Sheets, MySQL, Supabase, dan visualisasi laporan untuk pengambilan keputusan lebih cerdas.",
    accent: "#00ff88",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative z-20 bg-[#0e0e1a] py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-display text-[10px] tracking-[0.5em] uppercase text-[#00e5ff] mb-3">
            04 // SERVICES
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            Yang Saya{" "}
            <span className="text-[#00e5ff]" style={{ textShadow: "0 0 20px #00e5ff88" }}>
              Tawarkan
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              {/* Background radial on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"
                style={{ background: `radial-gradient(circle at 30% 30%, ${s.accent}10, transparent 70%)` }}
              />

              <div style={{ color: s.accent }} className="mb-5 group-hover:scale-110 transition-transform duration-300 origin-left">
                {s.icon}
              </div>

              <div className="font-display text-[9px] tracking-[0.5em] uppercase mb-2" style={{ color: s.accent }}>
                {s.tag}
              </div>
              <h3 className="font-display font-bold text-lg text-white mb-3">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>

              {/* Animated corner */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-30 transition-opacity"
                style={{ background: `radial-gradient(circle, ${s.accent}, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
