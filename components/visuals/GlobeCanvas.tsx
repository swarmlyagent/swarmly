"use client";

import { useEffect, useRef } from "react";

/** Rotating ASCII-shaded sphere (the "world"). Ported from the approved prototype. */
export function GlobeCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const g = cv.getContext("2d");
    if (!g) return;

    const ramp = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯";
    let a = 0;
    let raf = 0;
    let running = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      if (!cv) return;
      const dpr = window.devicePixelRatio || 1;
      const r = cv.getBoundingClientRect();
      cv.width = r.width * dpr;
      cv.height = r.height * dpr;
      g!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      if (!cv) return;
      const r = cv.getBoundingClientRect();
      g!.clearRect(0, 0, r.width, r.height);
      const cx = r.width / 2;
      const cy = r.height / 2;
      const R = 0.46 * Math.min(r.width, r.height);
      g!.font = "13px 'Geist Mono', ui-monospace, monospace";
      g!.textAlign = "center";
      g!.textBaseline = "middle";
      const pts: { x: number; y: number; z: number; ch: string }[] = [];
      for (let phi = 0; phi < 2 * Math.PI; phi += 0.13) {
        for (let th = 0; th < Math.PI; th += 0.13) {
          const x = Math.sin(th) * Math.cos(phi + 0.5 * a);
          const y = Math.sin(th) * Math.sin(phi + 0.5 * a);
          const z = Math.cos(th);
          const u = 0.3 * a;
          const x2 = x * Math.cos(u) - z * Math.sin(u);
          const z2 = x * Math.sin(u) + z * Math.cos(u);
          const v = 0.2 * a;
          const y2 = y * Math.cos(v) - z2 * Math.sin(v);
          const z3 = y * Math.sin(v) + z2 * Math.cos(v);
          const idx = Math.floor(((z3 + 1) / 2) * (ramp.length - 1));
          pts.push({ x: cx + x2 * R, y: cy + y2 * R, z: z3, ch: ramp.charAt(idx) });
        }
      }
      pts.sort((p, q) => p.z - q.z);
      for (const p of pts) {
        const al = 0.1 + (p.z + 1) * 0.42;
        g!.fillStyle = `rgba(250,250,250,${al})`;
        g!.fillText(p.ch, p.x, p.y);
      }
    }

    function frame() {
      if (!running) return;
      draw();
      a += 0.02;
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
    <div id="sphere-wrap" className={className} aria-hidden="true">
      <canvas id="sphere" ref={ref} />
    </div>
  );
}
