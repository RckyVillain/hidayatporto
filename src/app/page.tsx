"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Canvas must be client-only — no SSR
const ScrollCanvas = dynamic(() => import("@/components/ScrollCanvas"), { ssr: false });
const ScrollOverlays = dynamic(() => import("@/components/ScrollOverlays"), { ssr: false });

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(progress);
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Fixed Canvas Background - always behind everything */}
      <ScrollCanvas />

      {/* Scroll progress bar */}
      <div id="scroll-progress" ref={progressBarRef} style={{ width: "0%" }} />

      {/* Scroll-synced text overlays (fixed, over canvas, under UI) */}
      <ScrollOverlays scrollProgress={scrollProgress} />

      {/* Main Site */}
      <div className="relative">
        <Navbar />

        {/* ── SCROLLYTELLING ZONE ──────────────────────────
            400vh of scroll space drives the canvas animation.
            The canvas is fixed, so the page feels like
            a camera flying through Night City.
        ─────────────────────────────────────────────────── */}
        <div style={{ height: "400vh" }} className="relative">
          {/* Hero anchored to top of scroll zone */}
          <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none z-10">
            <HeroSection />
          </div>
        </div>

        {/* ── CONTENT SECTIONS ─── transition to dark page content ── */}
        {/* Gradient mask that blends canvas into page */}
        <div
          className="relative z-20"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #08080e 8%)" }}
        >
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ServicesSection />
          <FooterSection />
        </div>
      </div>
    </>
  );
}
