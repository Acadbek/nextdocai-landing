"use client";

import { useEffect, useRef } from "react";

import createGlobe from "cobe";

const MARKERS = [
  { location: [37.78, -122.44], size: 0.001, id: "sf" },
  { location: [40.71, -74.01], size: 0.001, id: "nyc" },
  { location: [51.51, -0.13], size: 0.001, id: "london" },
  { location: [48.86, 2.35], size: 0.001, id: "paris" },
  { location: [25.20, 55.27], size: 0.001, id: "dubai" },
  { location: [-23.55, -46.63], size: 0.001, id: "saopaulo" },
  { location: [19.08, 72.88], size: 0.001, id: "mumbai" },
  { location: [35.68, 139.65], size: 0.001, id: "tokyo" },
  { location: [1.35, 103.82], size: 0.001, id: "singapore" },
  { location: [40.39, 71.79], size: 0.001, id: "fargona" },
];

const LABELS = [
  { id: "sf", label: "San Francisco" },
  { id: "nyc", label: "New York" },
  { id: "london", label: "London" },
  { id: "paris", label: "Paris" },
  { id: "dubai", label: "Dubai" },
  { id: "saopaulo", label: "São Paulo" },
  { id: "mumbai", label: "Mumbai" },
  { id: "tokyo", label: "Tokyo" },
  { id: "singapore", label: "Singapore" },
  { id: "fargona", label: "Fargona" },
];

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    const w = canvas.offsetWidth * dpr;

    const isDark = () => document.documentElement.classList.contains("dark");

    const themeConfig = () => isDark()
      ? { dark: 1, baseColor: [0.08, 0.07, 0.06], glowColor: [0.08, 0.07, 0.06] }
      : { dark: 0, baseColor: [1, 1, 1], glowColor: [1, 1, 1] };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: w,
      height: w,
      phi: 0,
      theta: 0.2,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      markerColor: [1, 1, 1] as [number, number, number],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      markers: MARKERS as any,
      ...themeConfig(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    function animate() {
      if (pointerInteracting.current === null) {
        phiRef.current += 0.001;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (globe as any).update({
        phi: phiRef.current + pointerInteractionMovement.current / 200,
      });
      animId = requestAnimationFrame(animate);
    }
    animate();

    // Watch for dark/light mode toggle
    const observer = new MutationObserver(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (globe as any).update(themeConfig());
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
      globe.destroy();
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }} className={className}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", cursor: "grab" }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          canvasRef.current!.style.cursor = "grabbing";
          canvasRef.current?.setPointerCapture(e.pointerId);
        }}
        onPointerUp={() => {
          phiRef.current += pointerInteractionMovement.current / 200;
          pointerInteractionMovement.current = 0;
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
          }
        }}
      />
      <style>{`
        .globe-label {
          position: absolute;
          bottom: anchor(top);
          left: anchor(center);
          translate: -50% 0;
          margin-bottom: 4px;
          pointer-events: none;
          background: oklch(0.65 0.18 86.47);
          color: white;
          border: none;
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 3px;
          white-space: nowrap;
          transition: opacity 0.3s;
        }
        .dark .globe-label {
          background: oklch(0.72 0.16 86.47);
          color: oklch(0.15 0.04 80);
        }
        ${LABELS.map(m => `
          .globe-label-${m.id} {
            position-anchor: --cobe-${m.id};
            opacity: var(--cobe-visible-${m.id}, 0);
          }
        `).join("")}
      `}</style>
      {LABELS.map(m => (
        <div key={m.id} className={`globe-label globe-label-${m.id}`}>
          {m.label}
        </div>
      ))}
    </div>
  );
}
