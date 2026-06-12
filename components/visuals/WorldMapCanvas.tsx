"use client";

import { useEffect, useRef } from "react";
import { WORLD_MASK, landCells } from "@/lib/worldMask";

/** Animated dotted world map (Natural Earth land data). Ported from the approved prototype. */
export function WorldMapCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const host = cv.parentElement;
    if (!host) return;
    const g = cv.getContext("2d");
    if (!g) return;

    const W = WORLD_MASK.w;
    const H = WORLD_MASK.h;
    const cells = landCells();

    let w = 0;
    let h = 0;
    let offX = 0;
    let offY = 0;
    let sx = 0;
    let sy = 0;
    let ds = 1.3;
    let t = 0;
    let raf = 0;
    let running = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const p = host!.getBoundingClientRect();
      w = p.width;
      h = p.height;
      cv!.width = w * dpr;
      cv!.height = h * dpr;
      g!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const mapW = w * 1.02;
      const mapH = mapW / 2;
      offX = (w - mapW) / 2;
      offY = (h - mapH) / 2;
      sx = mapW / W;
      sy = mapH / H;
      ds = Math.max(1.3, sx * 0.34);
    }

    function draw() {
      g!.clearRect(0, 0, w, h);
      for (const c of cells) {
        const px = offX + c.gx * sx;
        const py = offY + c.gy * sy;
        const wave = 0.5 + 0.5 * Math.sin(c.gx * 0.11 + c.gy * 0.16 - t);
        const vert = 1 - Math.min(1, Math.abs(py - h * 0.34) / (h * 0.95));
        const al = (0.06 + 0.2 * wave) * (0.45 + 0.65 * vert);
        if (al < 0.02) continue;
        g!.fillStyle = `rgba(250,250,250,${al.toFixed(3)})`;
        g!.fillRect(px, py, ds, ds);
      }
    }

    function frame() {
      if (!running) return;
      draw();
      t += 0.02;
      raf = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduce) {
      draw();
      return () => window.removeEventListener("resize", resize);
    }

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries[0]?.isIntersecting;
        if (visible && !running) {
          running = true;
          frame();
        } else if (!visible) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 },
    );
    io.observe(cv);
    frame();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      id="stars"
      className={`hero-bg${className ? ` ${className}` : ""}`}
      ref={ref}
      aria-hidden="true"
    />
  );
}
