"use client";

import { motion } from "framer-motion";
import { Camera, Code, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "AI & Low-Code Development",
      desc: "Pembuatan aplikasi efisien dengan Next.js, AppSheet, dan Google Apps Script untuk otomatisasi bisnis.",
      color: "brand-accent"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Security Management",
      desc: "Implementasi sistem manajemen keamanan, monitoring CCTV, dan pelaporan aktivitas berbasis cloud.",
      color: "brand-neon-cyan"
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Visual Production",
      desc: "Layanan fotografi dan videografi profesional untuk keperluan branding dan dokumentasi komersial.",
      color: "brand-neon-green"
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
            <span className="text-brand-accent">04.</span> // LAYANAN_SISTEM
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 box-glow"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative p-8 border border-gray-800 rounded bg-brand-primary overflow-hidden group hover:border-${service.color} transition-colors`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`text-${service.color} mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 origin-left`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-4 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {service.desc}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-${service.color}/5 transform translate-x-8 -translate-y-8 rotate-45 group-hover:bg-${service.color}/20 transition-colors`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
