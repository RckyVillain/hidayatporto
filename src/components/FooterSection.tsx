"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, Camera, Mail, MessageCircle } from "lucide-react";

export default function FooterSection() {
  const socials = [
    { label: "LinkedIn", icon: <Briefcase className="w-4 h-4" />, href: "https://www.linkedin.com/in/ricky-hidayat-018367324", color: "#00e5ff" },
    { label: "Instagram", icon: <Camera className="w-4 h-4" />, href: "https://instagram.com/qq.mkv", color: "#e040fb" },
    { label: "Email", icon: <Mail className="w-4 h-4" />, href: "mailto:rickyhidayat507@gmail.com", color: "#ff0055" },
    { label: "WhatsApp", icon: <MessageCircle className="w-4 h-4" />, href: "https://wa.me/6281615522647", color: "#00ff88" },
  ];

  return (
    <footer id="contact" className="relative z-20 bg-[#08080e] border-t border-[#ffffff08] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="font-display text-[10px] tracking-[0.5em] uppercase text-gray-500 mb-4">
            // Ready to Collaborate?
          </div>
          <h2 className="font-display font-bold text-4xl md:text-7xl text-white mb-8 leading-tight">
            Let&apos;s Build<br />
            <span className="text-[#ff0055] neon-flicker" style={{ textShadow: "0 0 30px #ff0055, 0 0 60px #ff005555" }}>
              Something Epic.
            </span>
          </h2>

          {/* Terminal-style Download button */}
          <motion.a
            href="/CV-ATS-Ricky-Hidayat.pdf"
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-terminal inline-flex items-center gap-3 text-sm"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD_CV.exe
          </motion.a>

          <p className="text-gray-600 font-display text-xs tracking-widest mt-4 uppercase">
            PDF · ATS Optimized · Last Updated 2025
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#ff005530] to-transparent mb-12" />

        {/* Social Links + Brand */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-xl text-white glitch mb-1" data-text="R.HIDAYAT">
              R.HIDAYAT
            </div>
            <div className="font-display text-[10px] tracking-[0.3em] uppercase text-gray-600">
              System Online · v1.0.0
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-display text-xs tracking-widest uppercase text-gray-500 hover:scale-105 transition-all duration-300"
                style={{ color: undefined }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = s.color; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ""; }}
              >
                {s.icon}
                <span className="hidden md:inline">{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center font-display text-[10px] tracking-widest text-gray-700 uppercase">
          © {new Date().getFullYear()} Ricky Hidayat — All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
