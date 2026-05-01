"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef, MouseEvent } from "react";

const projects = [
  {
    id: 1,
    tag: "PROJ_001",
    title: "Kopitiam Ciamik",
    subtitle: "Rebranding + Landing Page",
    desc: "Full rebranding dari Kopitiam Xiang Rui — desain visual baru, landing page modern berbasis Next.js, dan brand identity yang ciamik.",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "Branding"],
    link: "https://kopitiam-ciamik.vercel.app/",
    accent: "#ff0055",
  },
  {
    id: 2,
    tag: "PROJ_002",
    title: "CCTV Management",
    subtitle: "Security Dept. Vasa — AppScript",
    desc: "Sistem manajemen CCTV berbasis Low-Code untuk Dept Security. Monitoring real-time, log kejadian, dan dashboard operasional.",
    tech: ["Google Apps Script", "Google Sheets", "Low-Code"],
    link: "https://script.google.com/macros/s/AKfycbwjwdmzxGq0iwq8Dh6S9V029JyfMtdzrqW0opvZsVygOd7sKbwAIIxjr5aSYzJIwvhu/exec",
    accent: "#e040fb",
  },
  {
    id: 3,
    tag: "PROJ_003",
    title: "Daily Activity Report",
    subtitle: "Security Dept. Vasa — AppScript",
    desc: "Aplikasi pelaporan aktivitas harian Dept Security berbasis cloud. Otomatisasi laporan, notifikasi, dan rekap harian.",
    tech: ["Google Apps Script", "Automation", "Cloud"],
    link: "https://script.google.com/macros/s/AKfycbzttQuFcjsUpNoGw0_nlOk0kVoDXUCQgoqMA6X8NSM2ERuf56F_sT7pdcyca9rpKq0XSw/exec",
    accent: "#00e5ff",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateY.set(dx * 10);
    rotateX.set(-dy * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-6 md:p-8 flex flex-col h-full cursor-default group"
    >
      {/* Tag */}
      <div className="flex justify-between items-start mb-6">
        <span
          className="font-display text-[10px] tracking-[0.4em] uppercase px-2 py-1 rounded"
          style={{ color: project.accent, background: `${project.accent}15`, border: `1px solid ${project.accent}30` }}
        >
          {project.tag}
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-white transition-colors pointer-events-auto"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Title */}
      <h3
        className="font-display font-bold text-xl md:text-2xl text-white mb-1 group-hover:text-shadow-lg transition-all"
        style={{ textShadow: `0 0 0px ${project.accent}` }}
      >
        {project.title}
      </h3>
      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: project.accent }}>
        {project.subtitle}
      </p>

      <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">{project.desc}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-display text-[10px] tracking-widest uppercase px-2 py-1 bg-white/5 border border-white/10 text-gray-400 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bottom glow bar */}
      <div
        className="mt-6 h-px w-0 group-hover:w-full transition-all duration-700"
        style={{ background: `linear-gradient(to right, ${project.accent}, transparent)` }}
      />
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-20 bg-[#08080e] py-28 bg-grid">
      {/* Gradient top fade from transparent to blend with canvas */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#08080e] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-display text-[10px] tracking-[0.5em] uppercase text-[#ff0055] mb-3">
            02 // PORTFOLIO
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            Arsip{" "}
            <span className="text-[#ff0055]" style={{ textShadow: "0 0 20px #ff005588" }}>
              Proyek
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
