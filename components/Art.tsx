import type { CSSProperties } from "react";
import type { Palette, Pattern } from "@/lib/data";

/**
 * Original saree artwork. Every visual is drawn from ONE shared set of SVG symbols (<ArtDefs/>,
 * rendered once per page) and recoloured per design with CSS variables, so there are no external
 * image requests and no third-party photographs. To use your own licensed photos instead, replace
 * the bodies of SareeFigure / Hanger / Scene / Showroom with <img src="/images/..."> tags.
 */

type Vars = CSSProperties & Record<`--${string}`, string>;
const vars = (pal: Palette, bg?: string): Vars => ({ "--b": pal.base, "--a": pal.alt, "--r": pal.border, "--l": pal.blouse, "--g": bg ?? pal.bg });
const VARIANTS = ["motif", "check", "stripe", "zari", "plain"] as const;
const variantFor = (pattern: Pattern | undefined, i: number) => {
  if (pattern === "check") return 1;
  if (pattern === "stripe") return 2;
  if (pattern === "zari") return 3;
  if (pattern === "plain") return 4;
  if (pattern === "motif") return 0;
  return ((i % 4) + 4) % 4;
};
const hash = (str: string) => Math.abs(str.split("").reduce((a, c) => a * 31 + c.charCodeAt(0), 7));

const f = (c: string) => ({ style: { fill: `var(${c})` } });
const st = (c: string, w: number, o = 1) => ({ style: { stroke: `var(${c})`, strokeWidth: w, opacity: o, fill: "none" } });

function Body({ v }: { v: (typeof VARIANTS)[number] }) {
  const out: React.ReactNode[] = [];
  if (v === "motif") {
    for (let y = 86, r = 0; y < 282; y += 18, r++) for (let x = r % 2 ? 62 : 53; x < 152; x += 18)
      out.push(<path key={`${x}-${y}`} d={`M${x} ${y - 4}Q${x + 3} ${y} ${x} ${y + 4}Q${x - 3} ${y} ${x} ${y - 4}Z`} {...f("--a")} opacity=".9" />);
  } else if (v === "check") {
    for (let x = 44; x <= 156; x += 14) out.push(<path key={`v${x}`} d={`M${x} 76V288`} {...st("--a", (x - 44) % 42 ? 1.2 : 3, .6)} />);
    for (let y = 76; y <= 288; y += 14) out.push(<path key={`h${y}`} d={`M44 ${y}H156`} {...st("--a", (y - 76) % 42 ? 1.2 : 3, .6)} />);
  } else if (v === "stripe") {
    for (let x = 50; x < 156; x += 14) out.push(<rect key={x} x={x} y="76" width={(x - 50) % 28 ? 3 : 6} height="212" {...f("--a")} opacity=".75" />);
  } else if (v === "zari") {
    for (let y = 84; y < 284; y += 22) { out.push(<rect key={y} x="44" y={y} width="112" height="3" {...f("--a")} opacity=".9" />); for (let x = 54; x < 156; x += 20) out.push(<circle key={`${y}${x}`} cx={x} cy={y + 12} r="2.4" {...f("--a")} opacity=".7" />); }
  }
  return <>{out}</>;
}

/* Mounted once per page. Each <symbol> is a full saree, viewBox 0 0 200 420. */
export function ArtDefs() {
  const border: React.ReactNode[] = [];
  for (let y = 24; y < 400; y += 16) { border.push(<path key={`l${y}`} d={`M36 ${y - 5}l4 5l-4 5l-4 -5z`} {...f("--a")} />); border.push(<path key={`r${y}`} d={`M164 ${y - 5}l4 5l-4 5l-4 -5z`} {...f("--a")} />); }
  const mango: React.ReactNode[] = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < (r % 2 ? 4 : 5); c++) {
    const x = (r % 2 ? 66 : 54) + c * 23, y = 322 + r * 26;
    mango.push(<path key={`${r}${c}`} d={`M${x} ${y - 11}C${x + 8} ${y - 6} ${x + 8} ${y + 6} ${x} ${y + 11}C${x - 8} ${y + 6} ${x - 8} ${y - 6} ${x} ${y - 11}Z`} {...f("--a")} />);
  }
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ksw-sheen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".28" /><stop offset=".5" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".22" /></linearGradient>
      </defs>
      {VARIANTS.map((v, i) => (
        <symbol id={`ksw-s${i}`} key={v} viewBox="0 0 200 420" overflow="visible">
          <rect x="-300" y="-300" width="800" height="1020" {...f("--g")} />
          <rect x="28" y="16" width="144" height="388" rx="5" {...f("--b")} />
          <Body v={v} />
          <rect x="28" y="16" width="16" height="388" {...f("--r")} />
          <rect x="156" y="16" width="16" height="388" {...f("--r")} />
          {border}
          <rect x="44" y="26" width="112" height="40" rx="4" {...f("--l")} />
          <path d="M44 62H156" {...st("--a", 3)} />
          <path d="M44 288H156" {...st("--a", 3)} />
          <rect x="44" y="291" width="112" height="113" {...f("--r")} />
          <path d="M44 300H156M44 396H156" {...st("--a", 1.5)} />
          {mango}
          <rect x="28" y="16" width="144" height="388" rx="5" fill="url(#ksw-sheen)" />
        </symbol>
      ))}
    </svg>
  );
}

/* Model photographs (public/images/models). Each has a clear, large face and a saree colour tag, so every
   design picks the photo whose saree colour is closest to its palette. */
const MODELS: [string, string][] = [
  ["/images/models/m02.jpg", "#7a3a9a"], // purple Kanjivaram
  ["/images/models/m04.jpg", "#1f9aa8"], // teal-blue silk
  ["/images/models/m05.jpg", "#a0183a"], // maroon silk
  ["/images/models/m06.jpg", "#efe6d2"], // cream & gold kasavu
  ["/images/models/m07.jpg", "#d4492a"], // red bridal, green border
  ["/images/models/m08.jpg", "#e8702a"], // orange
  ["/images/models/m10.jpg", "#2a5fc0"], // royal blue
  ["/images/models/m11.jpg", "#4a3f8a"], // violet & green
  ["/images/models/m12.jpg", "#b3182a"], // red
  ["/images/models/m14.jpg", "#e0482a"], // red-orange
  ["/images/models/m15.jpg", "#1f4a48"], // deep green
  ["/images/models/m16.jpg", "#6aa88f"], // sea green
  ["/images/models/m17.jpg", "#e8dcc0"], // ivory & green
  ["/images/models/m18.jpg", "#d0284a"], // pink-red
  ["/images/models/m19.jpg", "#d63a3a"], // red & gold
  ["/images/models/m20.jpg", "#1c2038"], // navy & gold
];
const rgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const dist = (a: string, b: string) => { const [r1, g1, b1] = rgb(a), [r2, g2, b2] = rgb(b), rm = (r1 + r2) / 2; return Math.sqrt((2 + rm / 256) * (r1 - r2) ** 2 + 4 * (g1 - g2) ** 2 + (2 + (255 - rm) / 256) * (b1 - b2) ** 2); };
/* closest-coloured photos first; seed picks among the best 3 so repeated colours still vary */
const photoFor = (color: string, seed = 0) => {
  const ranked = [...MODELS].sort((a, b) => dist(a[1], color) - dist(b[1], color));
  return ranked[Math.abs(seed) % 3][0];
};
const HERO_PHOTOS = ["m14", "m02", "m06", "m16", "m10", "m07"].map((n) => `/images/models/${n}.jpg`);

const Art = ({ i, pal, bg, className, label, fit = "slice" }: { i: number; pal: Palette; bg?: string; className?: string; label?: string; fit?: "meet" | "slice" }) => (
  <img
    src={photoFor(pal.base, i)}
    className={className ? `art ${className}` : "art"}
    alt={label ?? "Kanchipuram silk saree photograph"}
    loading="lazy"
    style={{ objectFit: fit === "meet" ? "contain" : "cover", objectPosition: "center top", background: bg ?? "transparent" }}
  />
);

/* A saree design panel. */
export function SareeFigure({ pal, pose = 0, className }: { pal: Palette; pose?: number; className?: string }) {
  return <Art i={variantFor(undefined, pose)} pal={pal} className={className} label="Kanchipuram silk saree design with zari border and pallu" />;
}

/* Product-style panel for the collection rack. */
export function Hanger({ pal, pattern, kind = "saree", back = false, className, seed }: { seed?: string | number; pal: Palette; pattern: Pattern; kind?: "saree" | "blouse"; back?: boolean; className?: string }) {
  const p: Palette = back ? { ...pal, base: pal.alt, alt: pal.base } : pal;
  return <Art i={seed !== undefined ? hash(String(seed)) : variantFor(pattern, hash(pal.base))} pal={{ ...p, bg: "#f8f1e8" }} bg="#f8f1e8" className={className} label={`${kind === "blouse" ? "Silk blouse piece" : "Kanchipuram silk saree"}${back ? " back view" : ""}`} />;
}

/* Jewellery / accessory thumbnails. viewBox 0 0 100 80 */
export function Jewel({ kind }: { kind: string }) {
  const g = "#d9a441", d = "#9a6a1c";
  let body: React.ReactNode = null;
  if (kind === "Choker") body = (<><path d="M14 22 Q50 80 86 22" stroke={g} strokeWidth="9" fill="none" /><path d="M24 30 Q50 66 76 30" stroke="#c0302a" strokeWidth="5" strokeDasharray="2 6" strokeLinecap="round" fill="none" /></>);
  else if (kind === "Jhumkas") body = (<>{[30, 70].map((x) => (<g key={x}><circle cx={x} cy="18" r="6" fill={g} /><path d={`M${x - 14} 28 Q${x} 10 ${x + 14} 28 L${x + 10} 54 L${x - 10} 54Z`} fill={g} stroke={d} /><circle cx={x} cy="62" r="5" fill="#f4ead8" stroke={d} /></g>))}</>);
  else if (kind === "Ottiyanam") body = (<><path d="M8 48 Q50 26 92 48" stroke={g} strokeWidth="10" fill="none" /><circle cx="50" cy="36" r="8" fill="#c0302a" stroke={d} /><path d="M20 46 L22 56M40 40 L42 50M60 40 L58 50M80 46 L78 56" stroke={d} strokeWidth="3" /></>);
  else if (kind === "Bangles") body = (<>{[0, 1, 2, 3, 4, 5].map((i) => (<rect key={i} x="16" y={14 + i * 9} width="68" height="7" rx="3.5" fill={i % 2 ? "#c04068" : g} />))}</>);
  else if (kind === "Blouse") body = (<path d="M30 14 Q50 30 70 14 L92 30 L82 46 L72 40 L72 70 L28 70 L28 40 L18 46 L8 30Z" fill="#c04068" stroke="#8a2a48" />);
  else body = (<><rect x="14" y="10" width="72" height="62" rx="4" fill="#efdcb8" /><path d="M14 56 H86" stroke={g} strokeWidth="8" /><circle cx="50" cy="32" r="8" fill={g} opacity=".6" /></>);
  return <svg viewBox="0 0 100 80" className="jewel" aria-hidden="true">{body}</svg>;
}

/* A frame of the muse film / reels. */
export function Scene({ pal, bg, pose = 0, className }: { pal: Palette; bg: [string, string]; pose?: number; className?: string }) {
  return <div className={className} style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%", background: `linear-gradient(160deg, ${bg[0]}, ${bg[1]})` }}>
    <img src={photoFor(pal.base, pose)} alt="Woman wearing a Kanchipuram silk saree" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
  </div>;
}

/* Real saree photographs form the hero showroom backdrop. */
export function Showroom() {
  return (
    <div className="showroom photo-showroom" aria-hidden="true">
      {HERO_PHOTOS.map((src, i) => <img key={src} src={src} alt="" loading={i < 2 ? "eager" : "lazy"} />)}
    </div>
  );
}
