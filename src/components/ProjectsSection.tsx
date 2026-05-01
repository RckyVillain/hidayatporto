"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef, MouseEvent } from "react";
import Image from "next/image";

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
    image: "/proj-kopitiam.jpg",
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
    image: "/proj-cctv.png",
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
    image: "/proj-dar.png",
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
      className="glass-card flex flex-col h-full cursor-default group overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative w-full h-44 overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Neon overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${project.accent}11 0%, rgba(8,8,14,0.7) 100%)`,
          }}
        />
        {/* Tag floated on image */}
        <div className="absolute top-3 left-3">
          <span
            className="font-display text-[9px] tracking-[0.4em] uppercase px-2 py-1 rounded backdrop-blur-sm"
            style={{
              color: project.accent,
              background: `rgba(8,8,14,0.75)`,
              border: `1px solid ${project.accent}50`,
            }}
          >
            {project.tag}
          </span>
        </div>
        {/* External link floated on image */}
        <div className="absolute top-3 right-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full backdrop-blur-sm transition-colors pointer-events-auto"
            style={{ background: "rgba(8,8,14,0.75)", border: `1px solid ${project.accent}40` }}
          >
            <ExternalLink className="w-3.5 h-3.5 text-gray-300 hover:text-white" />
          </a>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3
          className="font-display font-bold text-lg md:text-xl text-white mb-1 transition-all"
        >
          {project.title}
        </h3>
        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: project.accent }}>
          {project.subtitle}
        </p>

        <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-grow">{project.desc}</p>

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
          className="mt-5 h-px w-0 group-hover:w-full transition-all duration-700"
          style={{ background: `linear-gradient(to right, ${project.accent}, transparent)` }}
        />
      </div>
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
