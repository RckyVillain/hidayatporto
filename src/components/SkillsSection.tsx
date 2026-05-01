"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Development",
    color: "#ff0055",
    skills: ["Next.js", "Python", "HTML/CSS", "Firebase"],
  },
  {
    category: "Low-Code & Automation",
    color: "#e040fb",
    skills: ["Google Apps Script", "AppSheet", "Google Sheets", "Data Analysis"],
  },
  {
    category: "Databases",
    color: "#00e5ff",
    skills: ["MySQL", "Supabase", "MongoDB", "CockroachDB", "DBeaver"],
  },
  {
    category: "Creative Media",
    color: "#00ff88",
    skills: ["Videography", "Photography", "CapCut", "Visual Branding"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-20 bg-[#08080e] py-28 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-display text-[10px] tracking-[0.5em] uppercase text-[#e040fb] mb-3">
            03 // ARSENAL
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            Tech{" "}
            <span className="text-[#e040fb]" style={{ textShadow: "0 0 20px #e040fb88" }}>
              Stack
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-card p-6"
            >
              <div
                className="font-display text-[10px] tracking-[0.4em] uppercase mb-4 pb-2 border-b"
                style={{ color: group.color, borderColor: `${group.color}30` }}
              >
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s, si) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.05 }}
                    className="font-display text-xs px-3 py-1.5 rounded-sm text-gray-300 hover:text-white transition-all duration-200 cursor-default"
                    style={{
                      background: `${group.color}10`,
                      border: `1px solid ${group.color}25`,
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background = `${group.color}25`;
                      (e.target as HTMLElement).style.boxShadow = `0 0 10px ${group.color}44`;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = `${group.color}10`;
                      (e.target as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
