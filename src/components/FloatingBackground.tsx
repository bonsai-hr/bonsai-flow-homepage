"use client";
import { useEffect, useRef } from "react";

/** Brand palette */
const PALETTE = [
  "#37AF65", // deep green
  "#89D6C2", // soft mint
  "#E9C1B5", // peach/coral
  "#E7D9F6", // lilac
  "#C6E3D6", // pale green
  "#F0E0D8", // warm neutral
];

type ShapeType = "leaf" | "tallLeaf" | "oval" | "twig" | "pebbles";

const CONFIG = {
  counts: { sm: 8, md: 12, lg: 18 }, // fewer shapes
  lifespanMs: [16000, 32000],
  fadeInMs: 1400,
  fadeOutMs: 1400,
  speedPxPerSec: [3, 12],
  rotDegPerSec: [-6, 6],
  opacity: [0.10, 0.22], // more transparent
  sizePx: [34, 96],
  paddingPx: 24,
  resizeDebounceMs: 200,
  mix: {
    leaf: 2,
    tallLeaf: 2,
    oval: 2,
    twig: 2,
    pebbles: 2,
  } as Record<ShapeType, number>,
};

// ---------- utilities ----------
const rand = (min: number, max: number) => min + Math.random() * (max - min);
const rint = (min: number, max: number) => Math.floor(rand(min, max + 1));
function pickWeighted<T extends string>(weights: Record<T, number>): T {
  const entries = Object.entries(weights) as [T, number][];
  const total = entries.reduce((s, [, w]) => s + w, 0);
  let r = Math.random() * total;
  for (const [k, w] of entries) {
    if ((r -= w) <= 0) return k;
  }
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

// ---------- SVG makers ----------
function baseSvg(w: number, h: number = w) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", String(w));
  svg.setAttribute("height", String(h));
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  Object.assign(svg.style, {
    position: "absolute",
    willChange: "transform, opacity",
    pointerEvents: "none",
  });
  return svg;
}
function makeLeaf(size: number, color: string) {
  const s = size;
  const svg = baseSvg(s);
  svg.innerHTML = `
    <path d="M${0.5*s},${0.1*s} C ${0.9*s},${0.2*s} ${0.95*s},${0.7*s} ${0.52*s},${0.9*s}
             C ${0.1*s},${0.75*s} ${0.05*s},${0.3*s} ${0.5*s},${0.1*s} Z"
      fill="${color}" opacity="${rand(CONFIG.opacity[0], CONFIG.opacity[1])}"/>
  `;
  return svg;
}
function makeTallLeaf(size: number, color: string) {
  const w = size * 0.55;
  const h = size * 1.25;
  const svg = baseSvg(w, h);

  const fillOpacity = rand(CONFIG.opacity[0], CONFIG.opacity[1]);
  const veinOpacity = 0.18;
  const veinWidth   = Math.max(1.2, size * 0.022);

  svg.innerHTML = `
    <path d="M ${w/2} ${h*0.06}
             C ${w*0.82} ${h*0.18}, ${w*0.88} ${h*0.72}, ${w/2} ${h*0.92}
             C ${w*0.18} ${h*0.76}, ${w*0.12} ${h*0.30}, ${w/2} ${h*0.06} Z"
      fill="${color}" opacity="${fillOpacity}" />
    <path d="M ${w/2} ${h*0.08} L ${w/2} ${h*0.94}"
      stroke="rgba(0,0,0,${veinOpacity})"
      stroke-width="${veinWidth}"
      stroke-linecap="round" />
  `;
  return svg;
}
function makeOval(size: number, color: string) {
  const s = size;
  const svg = baseSvg(s);
  svg.innerHTML = `
    <ellipse cx="${0.5*s}" cy="${0.5*s}" rx="${0.42*s}" ry="${0.28*s}"
      fill="${color}" opacity="${rand(CONFIG.opacity[0], CONFIG.opacity[1])}" />
  `;
  return svg;
}
function makeTwig(size: number, color: string) {
  const s = size;
  const svg = baseSvg(s);
  const strokeW = Math.max(2, s * 0.045);
  const mainLen = s * 0.85;
  const bend    = s * 0.18;
  const offLen1 = s * 0.35;
  const offLen2 = s * 0.28;
  const showSecond = Math.random() > 0.4;
  const op = rand(CONFIG.opacity[0], CONFIG.opacity[1]);
  svg.style.color = color;

  const main = `
    M ${s*0.15} ${s*0.75}
    C ${s*0.25} ${s*0.75 - bend},
      ${s*0.45} ${s*0.75 - bend},
      ${s*0.15 + mainLen} ${s*0.75 - bend * 0.4}
  `;
  const off1 = `
    M ${s*0.15 + mainLen*0.45} ${s*0.75 - bend*0.45}
    L ${s*0.15 + mainLen*0.45 + offLen1} ${s*0.75 - bend*0.45 - offLen1*0.5}
  `;
  const off2 = showSecond ? `
    M ${s*0.15 + mainLen*0.7} ${s*0.75 - bend*0.28}
    L ${s*0.15 + mainLen*0.7 - offLen2*0.8} ${s*0.75 - bend*0.28 - offLen2*0.6}
  ` : "";

  svg.innerHTML = `
    <g opacity="${op}">
      <path d="${main}" stroke="currentColor" stroke-width="${strokeW}"
            fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <path d="${off1}" stroke="currentColor" stroke-width="${Math.max(1.5, strokeW*0.75)}"
            fill="none" stroke-linecap="round" stroke-linejoin="round" />
      ${off2 ? `<path d="${off2}" stroke="currentColor" stroke-width="${Math.max(1.5, strokeW*0.7)}"
            fill="none" stroke-linecap="round" stroke-linejoin="round" />` : ""}
    </g>
  `;
  return svg;
}
function makePebbles(size: number, color: string) {
  const s = size;
  const svg = baseSvg(s);
  const o1 = rand(CONFIG.opacity[0], CONFIG.opacity[1]);
  const o2 = rand(CONFIG.opacity[0], CONFIG.opacity[1]);
  const o3 = rand(CONFIG.opacity[0], CONFIG.opacity[1]);
  const r = () => rand(0.16, 0.28);
  const cx = s * 0.5, cy = s * 0.5;
  const dx = s * 0.22, dy = s * 0.18;
  svg.innerHTML = `
    <g>
      <ellipse cx="${cx - dx}" cy="${cy - dy}" rx="${s*r()}" ry="${s*r()*0.75}" fill="${color}" opacity="${o1}" />
      <ellipse cx="${cx + dx*0.6}" cy="${cy - dy*0.2}" rx="${s*r()}" ry="${s*r()*0.8}" fill="${color}" opacity="${o2}" />
      <ellipse cx="${cx + dx*0.1}" cy="${cy + dy*0.9}" rx="${s*r()}" ry="${s*r()*0.7}" fill="${color}" opacity="${o3}" />
    </g>
  `;
  return svg;
}

// ---------- engine ----------
function createShapeEl() {
  const size = rand(CONFIG.sizePx[0], CONFIG.sizePx[1]);
  const color = PALETTE[rint(0, PALETTE.length - 1)];
  const type = pickWeighted(CONFIG.mix) as ShapeType;
  const el =
    type === "leaf"     ? makeLeaf(size, color)      :
    type === "tallLeaf" ? makeTallLeaf(size, color)  :
    type === "pebbles"  ? makePebbles(size, color)   :
    type === "twig"     ? makeTwig(size, color)      :
                          makeOval(size, color);

  const speed = rand(CONFIG.speedPxPerSec[0], CONFIG.speedPxPerSec[1]) / 60;
  const angle = rand(0, Math.PI * 2);
  const rot = rand(CONFIG.rotDegPerSec[0], CONFIG.rotDegPerSec[1]) / 60;
  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed;

  const life = rand(CONFIG.lifespanMs[0], CONFIG.lifespanMs[1]);
  const born = performance.now() - rand(0, 1) * rand(CONFIG.lifespanMs[0], CONFIG.lifespanMs[1]);

  return { el, size, vx, vy, rot, born, life };
}

export default function FloatingBackground() {
  const ref = useRef<HTMLDivElement | null>(null);
  const state = useRef<{
    vw: number; vh: number;
    shapes: Array<{
      el: SVGElement; x: number; y: number; r: number;
      vx: number; vy: number; rot: number; born: number; life: number; fading?: boolean;
    }>;
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

        // initial load fade-in
        s.el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${rand(-15, 15)}deg) scale(1)`;
        s.el.style.opacity = "0";
        s.el.style.transition = "none";
        requestAnimationFrame(() => {
          s.el.style.transition = `opacity ${CONFIG.fadeInMs}ms ease`;
          s.el.style.opacity = "1";
        });

        return { ...s, x: p.x, y: p.y, r: rand(-15, 15) };
      });
      state.current = { vw, vh, shapes };
      loop();
    };

    const loop = () => {
      const st = state.current; if (!st) return;
      const now = performance.now();

      for (const s of st.shapes) {
        s.x += s.vx; s.y += s.vy; s.r += s.rot;

        const m = 40;
        if (s.x < -m) s.x = st.vw + m;
        if (s.x > st.vw + m) s.x = -m;
        if (s.y < -m) s.y = st.vh + m;
        if (s.y > st.vh + m) s.y = -m;

        const breathe = 0.98 + Math.abs(Math.sin((now - s.born) / 4000)) * 0.04;
        s.el.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.r}deg) scale(${breathe})`;

        if (now - s.born > s.life && !s.fading) {
          s.fading = true;
          const jitter = rint(0, 600);
          setTimeout(() => {
            s.el.style.transition = `opacity ${CONFIG.fadeOutMs}ms ease`;
            s.el.style.opacity = "0";

            setTimeout(() => {
              const nx = rand(CONFIG.paddingPx, st.vw - CONFIG.paddingPx);
              const ny = rand(CONFIG.paddingPx, st.vh - CONFIG.paddingPx);
              const replacement = createShapeEl();
              container.replaceChild(replacement.el, s.el);
              s.el = replacement.el;
              s.x = nx; s.y = ny; s.r = rand(-10, 10);
              s.born = performance.now();
              s.life = rand(CONFIG.lifespanMs[0], CONFIG.lifespanMs[1]);
              s.fading = false;

              // fade-in new shape
              s.el.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.r}deg) scale(1)`;
              s.el.style.opacity = "0";
              s.el.style.transition = "none";
              requestAnimationFrame(() => {
                s.el.style.transition = `opacity ${CONFIG.fadeInMs}ms ease`;
                s.el.style.opacity = "1";
              });
            }, CONFIG.fadeOutMs + 10);
          }, jitter);
        }
      }
      state.current!.raf = requestAnimationFrame(loop);
    };

    rebuild();
    let t: number | undefined;
    const onResize = () => { window.clearTimeout(t); t = window.setTimeout(rebuild, CONFIG.resizeDebounceMs); };
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
        zIndex: 10,
      }}
    />
  );
}
