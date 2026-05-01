"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Development & DB",
      skills: ["Next.js", "Python", "HTML/CSS", "DBeaver", "MySQL", "Supabase", "MongoDB", "CockroachDB"],
      color: "brand-accent"
    },
    {
      title: "Low-Code & Automation",
      skills: ["Google Apps Script", "AppSheet", "Google Sheets", "Data Analysis"],
      color: "brand-neon-cyan"
    },
    {
      title: "Creative & Media",
      skills: ["Videography", "Photography", "CapCut", "Visual Branding"],
      color: "brand-neon-green"
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-brand-primary border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
            <span className="text-brand-neon-green">03.</span> // DATABASE_KEAHLIAN
          </h2>
          <div className="w-24 h-1 bg-brand-neon-green mx-auto mt-4" style={{boxShadow: '0 0 10px #00ff88'}}></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`p-6 border border-gray-800 rounded bg-brand-bg hover:border-${category.color} transition-colors group`}
            >
              <h3 className={`text-xl font-display text-${category.color} mb-6 border-b border-gray-800 pb-2 group-hover:border-${category.color} transition-colors`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.2) + (sIdx * 0.1) }}
                    className={`px-3 py-1 bg-brand-primary border border-gray-800 text-gray-300 text-sm font-display rounded-sm group-hover:border-${category.color}/50 hover:text-${category.color} hover:bg-${category.color}/10 transition-all cursor-default`}
                  >
                    {skill}
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
