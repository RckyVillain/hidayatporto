"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Kopitiam Ciamik Rebranding",
      desc: "Rebranding dan pembuatan Landing Page untuk Kopitiam Xiang Rui menjadi Kopitiam Ciamik dengan antarmuka yang menarik.",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      link: "https://kopitiam-ciamik.vercel.app/",
      color: "brand-accent"
    },
    {
      id: 2,
      title: "CCTV Management System",
      desc: "Aplikasi manajemen CCTV Dept Security Vasa menggunakan pendekatan Low-Code Development dengan Google Apps Script.",
      tech: ["AppScript", "Google Sheets", "Low-Code"],
      link: "https://script.google.com/macros/s/AKfycbwjwdmzxGq0iwq8Dh6S9V029JyfMtdzrqW0opvZsVygOd7sKbwAIIxjr5aSYzJIwvhu/exec",
      color: "brand-neon-cyan"
    },
    {
      id: 3,
      title: "Daily Activity Report App",
      desc: "Sistem pelaporan aktivitas harian Dept Security Vasa, dibangun cepat dan andal menggunakan Google Apps Script.",
      tech: ["AppScript", "Google Sheets", "Automation"],
      link: "https://script.google.com/macros/s/AKfycbzttQuFcjsUpNoGw0_nlOk0kVoDXUCQgoqMA6X8NSM2ERuf56F_sT7pdcyca9rpKq0XSw/exec",
      color: "brand-neon-green"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
            <span className="text-brand-neon-cyan">02.</span> // ARSIP_PROYEK
          </h2>
          <div className="w-24 h-1 bg-brand-neon-cyan mx-auto md:mx-0 mt-4" style={{boxShadow: '0 0 10px #00ccff'}}></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, rotateX: 20, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: -5,
                boxShadow: `0 20px 40px -10px var(--color-${project.color})`,
                borderColor: `var(--color-${project.color})` 
              }}
              className="bg-brand-primary border border-gray-800 rounded-lg p-6 flex flex-col h-full transition-all duration-300 transform-style-3d relative group overflow-hidden"
            >
              {/* Scanline effect on hover */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-20 pointer-events-none z-10 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-6 z-20 relative">
                <div className={`p-3 rounded-full bg-${project.color}/10`}>
                  <ExternalLink className={`w-6 h-6 text-${project.color}`} />
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-4 z-20 relative group-hover:text-glow transition-all">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-8 flex-grow z-20 relative text-sm leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto z-20 relative">
                {project.tech.map((t) => (
                  <span key={t} className={`text-xs font-display text-${project.color} bg-${project.color}/10 px-2 py-1 rounded`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
