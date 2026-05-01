"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#08080ecc] backdrop-blur-xl border-b border-[#ff005522]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
          {/* Brand */}
          <a href="#" className="font-display font-bold text-xl tracking-widest text-white glitch glow-red" data-text="R.HIDAYAT">
            R.HIDAYAT
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-display text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-[#ff0055] transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#ff0055] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="/CV-ATS-Ricky-Hidayat.pdf"
              download
              className="btn-terminal text-xs tracking-[0.2em]"
            >
              DOWNLOAD_CV.exe
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#ff0055] p-2"
          >
            <div className="w-6 space-y-1.5">
              <span className={`block h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`block h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-y-0 right-0 w-72 z-50 bg-[#0e0e1aee] backdrop-blur-2xl border-l border-[#ff005522] flex flex-col p-8 pt-24 gap-8"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-sm tracking-[0.2em] uppercase text-gray-300 hover:text-[#ff0055] border-b border-gray-800 pb-4 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/CV-ATS-Ricky-Hidayat.pdf"
              download
              className="btn-terminal text-center mt-4"
            >
              DOWNLOAD_CV.exe
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
