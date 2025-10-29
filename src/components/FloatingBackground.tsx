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

/** One-knob density control (1 = default). Try 0.8, 0.6, etc. */
const DENSITY = 0.6;

const CONFIG = {
  // Fewer shapes overall (scaled by DENSITY)
  counts: {
    sm: Math.max(4, Math.round(10 * DENSITY)),
    md: Math.max(6, Math.round(16 * DENSITY)),
    lg: Math.max(8, Math.round(22 * DENSITY)),
  },
  // Longer lifetimes = fewer respawns
  lifespanMs: [28000, 48000],
  // Slower, softer fades
  fadeInMs: 1600,
  fadeOutMs: 1600,
  // Calmer motion
  speedPxPerSec: [2, 8],
  rotDegPerSec: [-3, 3],
  // More transparent
  opacity: [0.08, 0.18],
  // Slightly smaller average size
  sizePx: [28, 72],
  paddingPx: 24,
  resizeDebounceMs: 200,
  // Balanced mix
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
  for (const [k, w] of entries) if ((r -= w) <= 0) return k;
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
  const fillOpacity = Math.min(0.3, Math.max(0.12, rand(CONFIG.opacity[0], CONFIG.opacity[1])));
  const veinOpacity = Math.min(0.22, fillOpacity * 0.7);
  const veinWidth = Math.max(1.1, size * 0.02);
  svg.innerHTML = `
    <path d="M ${w/2} ${h*0.06}
             C ${w*0.82}
