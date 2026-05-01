"use client";

import { useEffect, useRef, useCallback } from "react";

const TOTAL_FRAMES = 240;
const FRAME_PATH = (n: number) =>
  `/frames/ezgif-frame-${String(n).padStart(3, "0")}.jpg`;

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const targetFrameRef = useRef(0);
  const loadedCountRef = useRef(0);

  // Draw a specific frame index onto the canvas
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill background to match letterbox color
    ctx.fillStyle = "#08080e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Compute cover/contain dimensions — maintain aspect ratio, cover canvas
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // Smooth interpolation loop
  const animLoop = useCallback(() => {
    const diff = targetFrameRef.current - currentFrameRef.current;
    if (Math.abs(diff) > 0.3) {
      currentFrameRef.current += diff * 0.18; // lerp factor
      const idx = Math.round(currentFrameRef.current);
      const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, idx));
      drawFrame(clamped);
    }
    rafRef.current = requestAnimationFrame(animLoop);
  }, [drawFrame]);

  // Resize canvas to fill window
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFrame(Math.round(currentFrameRef.current));
  }, [drawFrame]);

  // Scroll handler — map scroll progress to frame index
  const handleScroll = useCallback(() => {
    // The scrollytelling section is 4× viewport height (set in page.tsx)
    const scrollEl = document.documentElement;
    const maxScroll = scrollEl.scrollHeight - window.innerHeight;
    const progress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
    targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
  }, []);

  useEffect(() => {
    // Preload all images
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loadedCountRef.current++;
        // Draw first frame as soon as it loads
        if (i === 1) {
          resizeCanvas();
          drawFrame(0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(animLoop);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [resizeCanvas, handleScroll, animLoop, drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      id="scroll-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: "#08080e",
      }}
    />
  );
}
