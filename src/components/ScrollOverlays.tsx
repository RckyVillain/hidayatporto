"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Overlay {
  text: string;
  subtext?: string;
  start: number; // 0–1 scroll progress
  end: number;
  color?: string;
  align?: "left" | "center" | "right";
}

const overlays: Overlay[] = [
  {
    text: "NIGHT CITY",
    subtext: "Scanning environment...",
    start: 0.05,
    end: 0.2,
    color: "#00e5ff",
    align: "left",
  },
  {
    text: "VIBE CODER",
    subtext: "AI-Assisted Development Mode",
    start: 0.22,
    end: 0.38,
    color: "#e040fb",
    align: "center",
  },
  {
    text: "PROJECT LOCKED",
    subtext: "Loading encrypted portfolio...",
    start: 0.4,
    end: 0.55,
    color: "#ff0055",
    align: "right",
  },
  {
    text: "SECURITY ONLINE",
    subtext: "CCTV Systems Active",
    start: 0.57,
    end: 0.72,
    color: "#00ff88",
    align: "left",
  },
  {
    text: "RICKY HIDAYAT",
    subtext: "Developer · Officer · Creative",
    start: 0.75,
    end: 0.92,
    color: "#ff0055",
    align: "center",
  },
];

interface OverlayItemProps {
  overlay: Overlay;
  scrollProgress: number;
}

function OverlayItem({ overlay, scrollProgress }: OverlayItemProps) {
  const { start, end, text, subtext, color, align = "center" } = overlay;
  const mid = (start + end) / 2;
  const fadeWidth = (end - start) * 0.25;

  let opacity = 0;
  if (scrollProgress >= start && scrollProgress <= end) {
    if (scrollProgress < start + fadeWidth) {
      opacity = (scrollProgress - start) / fadeWidth;
    } else if (scrollProgress > end - fadeWidth) {
      opacity = (end - scrollProgress) / fadeWidth;
    } else {
      opacity = 1;
    }
  }

  const translateY = scrollProgress < mid ? 20 * (1 - opacity) : -20 * (1 - opacity);

  const alignClass =
    align === "left" ? "items-start text-left pl-8 md:pl-20" :
    align === "right" ? "items-end text-right pr-8 md:pr-20" :
    "items-center text-center";

  return (
    <div
      className={`absolute inset-0 flex flex-col justify-center pointer-events-none ${alignClass}`}
      style={{ opacity, transform: `translateY(${translateY}px)`, transition: "none", zIndex: 5 }}
    >
      <div
        className="font-display font-bold text-4xl md:text-6xl lg:text-8xl tracking-tighter mb-3"
        style={{
          color,
          textShadow: `0 0 20px ${color}, 0 0 40px ${color}88`,
          transition: "none",
        }}
      >
        {text}
      </div>
      {subtext && (
        <div
          className="font-display text-sm md:text-base tracking-[0.3em] uppercase"
          style={{ color: "#ffffff99" }}
        >
          {subtext}
        </div>
      )}
    </div>
  );
}

export default function ScrollOverlays({ scrollProgress }: { scrollProgress: number }) {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 5 }}>
      {overlays.map((o, i) => (
        <OverlayItem key={i} overlay={o} scrollProgress={scrollProgress} />
      ))}
    </div>
  );
}
