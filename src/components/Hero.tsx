"use client";

import { motion } from "framer-motion";
import { ChevronDown, Download, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-bg z-0 pointer-events-none"></div>
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-neon-cyan/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <Terminal className="w-5 h-5 text-brand-neon-green" />
              <span className="font-display text-brand-neon-green tracking-widest text-sm uppercase">System Online</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold font-display tracking-tighter mb-6"
            >
              <span className="block text-gray-400 text-3xl md:text-4xl mb-2 font-normal">Hi, I'm</span>
              <span className="text-white glitch block" data-text="Ricky Hidayat">Ricky Hidayat</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 border-l-4 border-brand-accent pl-4"
            >
              <span className="text-brand-accent">AI-Assisted Developer</span>, Security Officer, Videographer & Photographer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-white font-display uppercase tracking-widest text-sm font-bold rounded-sm transition-all duration-300 hover:bg-brand-accent-light box-glow flex items-center justify-center gap-2"
              >
                Lihat Portofolio
              </a>
              <a
                href="/CV-ATS-Ricky-Hidayat.pdf"
                download
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-neon-cyan text-brand-neon-cyan font-display uppercase tracking-widest text-sm font-bold rounded-sm transition-all duration-300 hover:bg-brand-neon-cyan/10 hover:text-glow-cyan flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center relative"
          >
            {/* Geometric Frame around placeholder or future image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 border-2 border-brand-accent rounded-full animate-[spin_10s_linear_infinite] opacity-50 border-dashed"></div>
              <div className="absolute inset-4 border-2 border-brand-neon-cyan rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-50"></div>
              
              <div className="absolute inset-8 bg-brand-primary rounded-full overflow-hidden border border-gray-800 flex items-center justify-center box-glow relative group">
                  <div className="absolute inset-0 bg-[url('/profile.jpg')] bg-cover bg-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>
                  <div className="z-10 text-center pointer-events-none p-4 bg-brand-bg/60 backdrop-blur-sm rounded">
                      <span className="font-display text-brand-accent block text-sm mb-1">IMAGE REQD</span>
                      <span className="text-xs text-gray-400">Please place 'profile.jpg' in public/</span>
                  </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="font-display text-xs text-gray-500 uppercase tracking-widest mb-2">Scroll</span>
        <ChevronDown className="w-5 h-5 text-brand-accent" />
      </motion.div>
    </section>
  );
}
