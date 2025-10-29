"use client";
import { useEffect, useRef } from "react";

/** Brand palette (replace with your Bonsai colors if you like) */
const PALETTE = [
  "#3F7A65", // deep green
  "#B9D6C2", // soft mint
  "#E9C1B5", // peach/coral
  "#E7D9F6", // lilac
  "#C6E3D6", // pale green
  "#F0E0D8", // warm neutral
];

type ShapeType = "leaf" | "oval" | "squiggle";

const CONFIG = {
  counts: { sm: 14, md: 22, lg: 32 },
  lifespanMs: [12000, 22000],
  fadeInMs: 800,
  fadeOutMs: 900,
  speedPxPerSec: [4, 18],
  rotDegPerSec: [-8, 8],
  opacity: [0.18, 0.35],
  sizePx: [30, 90],
  paddingPx: 24,
  resizeDebounceMs: 200,
  mix: { leaf: 1, oval: 1, squiggle: 1 } as Record<ShapeType, number>,
};

function rand(min: number, max: number) { return min + Math.random() * (max - min); }
function rint(min: number, max: number) { return Math.floor(rand(min, max + 1)); }
function pickWeighted<T extends string>(weights: Record<T, number>): T {
  const entries = Object.entries(weights) as [T, number][];
  const total = entries.reduce((s, [, w]) => s + w, 0);
  let r = Math.random() * total;
  for (const [k, w] of entries) { if ((r -= w) <= 0) return k; }
  return entries[0][0];
}

function bpCount(w: number) {
  if (w < 640) return CONFIG.counts.sm;
  if (w < 1024) return CONFIG.counts.md;
  return CONFIG.counts.lg;
}

function gridScatter(n: number, pad: number, vw: number, vh: number) {
  const cols = Math.ceil(Math.sqrt((n * vw) / vh));
  const rows = Math.ceil(n / cols);
  const cw = vw / cols;
  const ch = vh / rows;
  const pts: Array<{ x: number; y: number }> = [];
  let idx = 0;
  for (let r = 0; r < rows && idx < n; r++) {
    for (let c = 0; c < cols && idx < n; c++, idx++) {
      pts.push({ x: c * cw + rand(pad, cw - pad), y: r * ch + rand(pad, ch - pad) });
    }
  }
  return pts;
}

function baseSvg(size: number) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));
  svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
  Object.assign(svg.style, {
    position: "absolute",
    willChange: "transform, opacity",
    pointerEvents: "none",
  });
  return svg;
}

function makeLeaf(size: number, color: string) {
  const svg = baseSvg(size);
  svg.innerHTML = `
    <path d="M${0.5*size},${0.1*size} C ${0.9*size},${0.2*size} ${0.95*size},${0.7*size} ${0.52*size},${0.9*size}
             C ${0.1*size},${0.75*size} ${0.05*size},${0.3*size} ${0.5*size},${0.1*size} Z"
      fill="${color}" opacity="${rand(CONFIG.opacity[0], CONFIG.opacity[1])}"/>
  `;
  return svg;
}

function makeOval(size: number, color: string) {
  const svg = baseSvg(size);
  svg.innerHTML = `
    <ellipse cx="${0.5*size}" cy="${0.5*size}" rx="${0.42*size}" ry="${0.28*size}"
      fill="${color}" opacity="${rand(CONFIG.opacity[0], CONFIG.opacity[1])}" />
  `;
  return svg;
}

function makeSquiggle(size: number, color: string) {
  const svg = baseSvg(size);
  const sw = Math.max(2, size * 0.05);
  svg.innerHTML = `
    <path d="M ${0.05*size} ${0.6*size}
             C ${0.25*size} ${0.1*size}, ${0.45*size} ${1.1*size}, ${0.65*size} ${0.6*size}
             S ${0.95*size} ${0.1*size}, ${0.95*size} ${0.5*size}"
      stroke="${color}" stroke-width="${sw}" fill="none" stroke-linecap="round" stroke-linejoin="round"
      opacity="${rand(CONFIG.opacity[0], CONFIG.opacity[1])}" />
  `;
  return svg;
}

function createShapeEl() {
  const size = rand(CONFIG.sizePx[0], CONFIG.sizePx[1]);
  const color = PALETTE[rint(0, PALETTE.length - 1)];
  const type = pickWeighted(CONFIG.mix) as ShapeType;
  const el =
    type === "leaf" ? makeLeaf(size, color)
    : type === "squiggle" ? makeSquiggle(size, color)
    : makeOval(size, color);

  const speed = rand(CONFIG.speedPxPerSec[0], CONFIG.speedPxPerSec[1]) / 60;
  const angle = rand(0, Math.PI * 2);
  const rot = rand(CONFIG.rotDegPerSec[0], CONFIG.rotDegPerSec[1]) / 60;
  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed;

  return { el, size, vx, vy, rot, born: performance.now(), life: rand(CONFIG.lifespanMs[0], CONFIG.lifespanMs[1]) };
}

export default function FloatingBackground() {
  const ref = useRef<HTMLDivElement | null>(null);
  const state = useRef<{
    vw: number; vh: number;
    shapes: Array<{ el: SVGElement; x: number; y: number; r: number; vx: number; vy: number; rot: number; born: number; life: number; fading?: boolean; }>;
    raf?: number;
  } | null>(null);

  useEffect(() => {
    const container = ref.current!;
    const rebuild = () => {
      container.innerHTML = "";
      const vw = container.clientWidth;
      const vh = container.clientHeight;
      const n = bpCount(vw);
      const pts = gridScatter(n, CONFIG.paddingPx, vw, vh);
      const shapes = pts.map(p => {
        const s = createShapeEl();
        container.appendChild(s.el);
        s.el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${rand(-15, 15)}deg)`;
        s.el.style.opacity = "0";
        s.el.style.transition = `opacity ${CONFIG.fadeInMs}ms ease`;
        requestAnimationFrame(() => { s.el.style.opacity = "1"; });
        return { ...s, x: p.x, y: p.y, r: rand(-15, 15) };
      });
      state.current = { vw, vh, shapes };
      loop();
    };

    let t: number | undefined;
    const onResize = () => { window.clearTimeout(t); t = window.setTimeout(rebuild, CONFIG.resizeDebounceMs); };

    const loop = () => {
      const st = state.current; if (!st) return;
      const now = performance.now();
      for (const s of st.shapes) {
        s.x += s.vx; s.y += s.vy; s.r += s.rot;
        // gentle wrap
        const m = 40;
        if (s.x < -m) s.x = st.vw + m; if (s.x > st.vw + m) s.x = -m;
        if (s.y < -m) s.y = st.vh + m; if (s.y > st.vh + m) s.y = -m;
        s.el.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.r}deg)`;

        if (now - s.born > s.life && !s.fading) {
          s.fading = true;
          s.el.style.transition = `opacity ${CONFIG.fadeOutMs}ms ease`;
          s.el.style.opacity = "0";
          window.setTimeout(() => {
            const nx = rand(CONFIG.paddingPx, st.vw - CONFIG.paddingPx);
            const ny = rand(CONFIG.paddingPx, st.vh - CONFIG.paddingPx);
            const replacement = createShapeEl();
            container.replaceChild(replacement.el, s.el);
            s.el = replacement.el; s.x = nx; s.y = ny; s.r = rand(-10, 10);
            s.born = performance.now(); s.life = rand(CONFIG.lifespanMs[0], CONFIG.lifespanMs[1]); s.fading = false;
            s.el.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.r}deg)`;
            s.el.style.opacity = "0"; s.el.style.transition = `opacity ${CONFIG.fadeInMs}ms ease`;
            requestAnimationFrame(() => { s.el.style.opacity = "1"; });
          }, CONFIG.fadeOutMs + 10);
        }
      }
      state.current!.raf = requestAnimationFrame(loop);
    };

    rebuild();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (state.current?.raf) cancelAnimationFrame(state.current.raf);
      state.current = null;
    };
  }, []);

  return (
    <div
      ref={ref}
      id="bg-floaters"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
