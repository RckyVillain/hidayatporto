"use client";

import { motion } from "framer-motion";
import { User, Target, Zap } from "lucide-react";

export default function About() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative bg-brand-primary border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variants}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
            <span className="text-brand-accent">01.</span> // IDENTITAS
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto md:mx-0 mt-4 box-glow"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className="space-y-6 text-gray-400 text-lg leading-relaxed"
          >
            <p>
              Saya adalah seorang <strong className="text-white">AI-Assisted Developer & Security Officer</strong> yang memiliki passion dalam menghubungkan inovasi teknologi dengan sistem keamanan yang solid.
            </p>
            <p>
              Berpengalaman dalam menciptakan aplikasi Low-Code yang efisien dan memproduksi konten visual kreatif melalui fotografi dan videografi. Saya siap membantu mengoptimalkan proses bisnis Anda dengan sentuhan teknologi modern dan estetika yang ciamik.
            </p>
            <p className="font-display text-brand-neon-cyan border-l-2 border-brand-neon-cyan pl-4 py-2 mt-8">
              "Mari berkolaborasi untuk mewujudkan ide Anda menjadi solusi digital yang nyata dan aman."
            </p>
            
            <div className="pt-6">
               <a href="#contact" className="inline-block px-6 py-3 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-display uppercase text-sm tracking-wider transition-colors duration-300">
                 Mulai Diskusi
               </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-brand-bg p-6 border border-gray-800 rounded-sm hover:border-brand-accent transition-colors group">
              <Zap className="w-8 h-8 text-brand-accent mb-4 group-hover:text-glow transition-all" />
              <h3 className="text-white font-display font-bold mb-2">Development</h3>
              <p className="text-sm text-gray-500">Membangun aplikasi efisien menggunakan Next.js, Google Apps Script, dan Low-Code platform.</p>
            </div>
            
            <div className="bg-brand-bg p-6 border border-gray-800 rounded-sm hover:border-brand-neon-cyan transition-colors group">
              <Target className="w-8 h-8 text-brand-neon-cyan mb-4 group-hover:text-glow-cyan transition-all" />
              <h3 className="text-white font-display font-bold mb-2">Security</h3>
              <p className="text-sm text-gray-500">Menerapkan prosedur dan sistem pelaporan keamanan yang terstruktur.</p>
            </div>
            
            <div className="bg-brand-bg p-6 border border-gray-800 rounded-sm hover:border-brand-neon-green transition-colors group sm:col-span-2">
              <User className="w-8 h-8 text-brand-neon-green mb-4 group-hover:text-glow-green transition-all" />
              <h3 className="text-white font-display font-bold mb-2">Creative Media</h3>
              <p className="text-sm text-gray-500">Fotografi dan videografi profesional menggunakan CapCut dan tools editing modern untuk branding visual yang kuat.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
