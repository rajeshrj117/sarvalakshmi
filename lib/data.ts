// All demo content lives here. Swap `image` fields for real photos in /public/images.

export type Palette = { base: string; alt: string; border: string; blouse: string; bg: string };
export type Pattern = "plain" | "check" | "stripe" | "zari" | "motif";

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

/* ---------- Ticker ---------- */
export const ticker = [
  ["TRY THE LOOK", "Eight Kanchipuram silk looks, styled head to toe"],
  ["PURE ZARI", "Silver-core zari woven into every temple border"],
  ["WHOLESALE", "Kanchipuram silk sarees at wholesale price"],
  ["BRIDAL", "Heirloom bridal silks for the day that matters"],
  ["MANUFACTURER", "Direct from the looms of Kanchipuram"],
];

/* ---------- Six moods ---------- */
export const moods: { name: string; pal: Palette }[] = [
  { name: "Wedding Edit", pal: { base: "#b3213a", alt: "#e8b24a", border: "#4f6b5a", blouse: "#2e5a4c", bg: "#e9d9bf" } },
  { name: "Kanchipuram Icons", pal: { base: "#c0185f", alt: "#2f7a4a", border: "#e0a52c", blouse: "#c0185f", bg: "#8a9378" } },
  { name: "Banarasi Heirlooms", pal: { base: "#5b1f5e", alt: "#d8c43a", border: "#d8a93a", blouse: "#3a1740", bg: "#4b3a2a" } },
  { name: "Festive Radiance", pal: { base: "#e08a1e", alt: "#f2c15a", border: "#a85d12", blouse: "#e08a1e", bg: "#7e8c52" } },
  { name: "Zari Signatures", pal: { base: "#1d4a3e", alt: "#d9a441", border: "#d98a95", blouse: "#d98a95", bg: "#1b1a17" } },
  { name: "Bridal Élan", pal: { base: "#7fae3a", alt: "#d6402f", border: "#e0b34a", blouse: "#c23a2a", bg: "#2f5560" } },
];

/* ---------- Try the look ---------- */
type Piece = { kind: string; name: string; price: number };
export type Look = { name: string; pal: Palette; pieces: Piece[] };

const acc = (a: [string, number], b: [string, number], c: [string, number], d: [string, number]) => [
  { kind: "Choker", name: a[0], price: a[1] },
  { kind: "Jhumkas", name: b[0], price: b[1] },
  { kind: "Ottiyanam", name: c[0], price: c[1] },
  { kind: "Bangles", name: d[0], price: d[1] },
];

export const looks: Look[] = [
  { name: "Plum Peacock", pal: { base: "#6a2a86", alt: "#d9a441", border: "#d9a441", blouse: "#b0285b", bg: "#fff" },
    pieces: [{ kind: "Saree", name: "Plum Kanjivaram with Peacock Border", price: 38500 }, { kind: "Blouse", name: "Raspberry Silk Blouse", price: 4200 },
      ...acc(["Ruby Temple Choker", 11200], ["Jhumkas with Ruby Drops", 5200], ["Peacock Ottiyanam", 14500], ["Gold and Magenta Bangle Stack", 3600])] },
  { name: "Forest Tree of Life", pal: { base: "#1f5a36", alt: "#e0b34a", border: "#d9a441", blouse: "#e3a21f", bg: "#fff" },
    pieces: [{ kind: "Saree", name: "Forest Green Kanjivaram Tree of Life", price: 34200 }, { kind: "Blouse", name: "Turmeric Silk Blouse", price: 4000 },
      ...acc(["Emerald Temple Choker", 10800], ["Jhumkas with Emerald Drops", 4900], ["Lotus Ottiyanam", 14000], ["Gold and Green Bangle Stack", 3700])] },
  { name: "Ivory Elephant", pal: { base: "#f1e3cd", alt: "#d4a24c", border: "#c9953a", blouse: "#d4587a", bg: "#fff" },
    pieces: [{ kind: "Saree", name: "Ivory Kanjivaram with Elephant Border", price: 32000 }, { kind: "Blouse", name: "Dusty Rose Silk Blouse", price: 4200 },
      ...acc(["Pink Stone Temple Choker", 9400], ["Jhumkas with Pearl Drops", 4600], ["Elephant Motif Ottiyanam", 15000], ["Gold and Dusty Rose Bangle Stack", 3800])] },
  { name: "Saffron Swan", pal: { base: "#e0701a", alt: "#e8b24a", border: "#c9953a", blouse: "#0f5560", bg: "#fff" },
    pieces: [{ kind: "Saree", name: "Saffron Kanjivaram with Swan Pallu", price: 36800 }, { kind: "Blouse", name: "Peacock Teal Silk Blouse", price: 4300 },
      ...acc(["Kemp Temple Choker", 10200], ["Jhumkas with Coral Drops", 4800], ["Swan Ottiyanam", 14800], ["Gold and Teal Bangle Stack", 3500])] },
  { name: "Maroon Mango", pal: { base: "#7a1230", alt: "#e0b34a", border: "#d9a441", blouse: "#1f5a36", bg: "#fff" },
    pieces: [{ kind: "Saree", name: "Maroon Kanjivaram with Mango Pallu", price: 41200 }, { kind: "Blouse", name: "Bottle Green Silk Blouse", price: 4400 },
      ...acc(["Antique Gold Choker", 12400], ["Jhumkas with Emerald Beads", 5400], ["Mango Motif Ottiyanam", 15500], ["Gold and Maroon Bangle Stack", 3900])] },
  { name: "Lavender Lotus", pal: { base: "#8d86d6", alt: "#e4cf8a", border: "#c9953a", blouse: "#7a1230", bg: "#fff" },
    pieces: [{ kind: "Saree", name: "Lavender Kanjivaram with Lotus Border", price: 30800 }, { kind: "Blouse", name: "Wine Silk Blouse", price: 4100 },
      ...acc(["Amethyst Temple Choker", 9800], ["Jhumkas with Pearl Drops", 4600], ["Lotus Ottiyanam", 14200], ["Gold and Wine Bangle Stack", 3600])] },
  { name: "Teal Rudraksha", pal: { base: "#0f6a6a", alt: "#e0b34a", border: "#d9a441", blouse: "#c7512b", bg: "#fff" },
    pieces: [{ kind: "Saree", name: "Teal Kanjivaram with Rudraksha Border", price: 33600 }, { kind: "Blouse", name: "Terracotta Silk Blouse", price: 4200 },
      ...acc(["Navaratna Choker", 12800], ["Jhumkas with Turquoise Drops", 5100], ["Sun Ottiyanam", 14900], ["Gold and Teal Bangle Stack", 3700])] },
  { name: "Rani Pink Pallu", pal: { base: "#c2185b", alt: "#e0b34a", border: "#2f7a4a", blouse: "#2f7a4a", bg: "#fff" },
    pieces: [{ kind: "Saree", name: "Rani Pink Kanjivaram with Green Border", price: 35400 }, { kind: "Blouse", name: "Leaf Green Silk Blouse", price: 4200 },
      ...acc(["Polki Temple Choker", 13200], ["Jhumkas with Pink Drops", 5000], ["Gold Ottiyanam", 14600], ["Gold and Pink Bangle Stack", 3600])] },
];

/* ---------- Pick a silk ---------- */
export const silks: { title: string; price: number; color: string; dark: boolean; pal: Palette }[] = [
  { title: "Marigold Kolam", price: 21400, color: "#ee7d1d", dark: false, pal: { base: "#c8451c", alt: "#e8b24a", border: "#e8b24a", blouse: "#c8451c", bg: "#ee7d1d" } },
  { title: "Magenta Shot Silk", price: 29800, color: "#7a2fb0", dark: false, pal: { base: "#c0185f", alt: "#7a4aa0", border: "#d9a441", blouse: "#4b2a9a", bg: "#7a2fb0" } },
  { title: "Palace Check", price: 19900, color: "#a81c2e", dark: false, pal: { base: "#3d3ca0", alt: "#e0b34a", border: "#e0b34a", blouse: "#2a3a9a", bg: "#a81c2e" } },
  { title: "Bengal Garden", price: 24600, color: "#f2b13c", dark: true, pal: { base: "#efe0c2", alt: "#4f8a4a", border: "#c9a24a", blouse: "#1f5a36", bg: "#f2b13c" } },
  { title: "Kanchi Rani", price: 32400, color: "#c4163f", dark: false, pal: { base: "#d0176c", alt: "#2f7a4a", border: "#2f7a4a", blouse: "#2f7a4a", bg: "#c4163f" } },
  { title: "Benares Gold", price: 41800, color: "#f0bb12", dark: true, pal: { base: "#d9ac48", alt: "#f3d27c", border: "#f3d27c", blouse: "#d9ac48", bg: "#f0bb12" } },
  { title: "Kolam Check", price: 18600, color: "#23a455", dark: false, pal: { base: "#c27a2c", alt: "#2a6aa8", border: "#e0b34a", blouse: "#2a6aa8", bg: "#23a455" } },
];

/* ---------- The rack ---------- */
export type Cat = "silk" | "half" | "full" | "halfblouse" | "checked" | "zari";
export const cats: { id: "all" | Cat; label: string }[] = [
  { id: "all", label: "All pieces" },
  { id: "silk", label: "Silk Sarees" },
  { id: "half", label: "Half Sarees" },
  { id: "full", label: "Full-Sleeve Blouses" },
  { id: "halfblouse", label: "Half-Sleeve Blouses" },
  { id: "checked", label: "Checked Sarees" },
  { id: "zari", label: "Zari & Brocade" },
];

export type RackItem = { id: number; name: string; price: number; kind: "saree" | "blouse"; cats: Cat[]; pal: Palette; pattern: Pattern };
const P = (base: string, alt: string, border: string, blouse = base): Palette => ({ base, alt, border, blouse, bg: "#fff" });

export const rack: RackItem[] = [
  { id: 1, name: "Palace Check Kanjivaram", price: 19900, kind: "saree", cats: ["silk", "checked"], pal: P("#7a2d8a", "#e8a21c", "#e0b34a"), pattern: "check" },
  { id: 2, name: "Royal Blue Zari Stripe", price: 28400, kind: "saree", cats: ["silk", "zari"], pal: P("#1c3fa8", "#e0b34a", "#e0b34a"), pattern: "stripe" },
  { id: 3, name: "Ivory Butta Silk", price: 22600, kind: "saree", cats: ["silk"], pal: P("#efe4d0", "#d4a24c", "#d4a24c"), pattern: "motif" },
  { id: 4, name: "Heritage Tartan Silk", price: 24800, kind: "saree", cats: ["silk", "checked"], pal: P("#2c5f6e", "#c9953a", "#c9953a"), pattern: "check" },
  { id: 5, name: "Magenta Temple Border", price: 31800, kind: "saree", cats: ["silk", "zari"], pal: P("#b0178a", "#e0b34a", "#e0b34a"), pattern: "zari" },
  { id: 6, name: "Temple Gold Brocade", price: 32000, kind: "saree", cats: ["silk", "zari"], pal: P("#b79a3a", "#e6cf7a", "#d9b85a"), pattern: "motif" },
  { id: 7, name: "Mustard Stripe Silk", price: 17800, kind: "saree", cats: ["silk", "checked"], pal: P("#d4b13c", "#3f7a52", "#c0902c"), pattern: "stripe" },
  { id: 8, name: "Jade Check Kanchi", price: 20400, kind: "saree", cats: ["silk", "checked"], pal: P("#2f7d6a", "#d19a2c", "#c0902c"), pattern: "check" },
  { id: 9, name: "Pink Gingham Silk", price: 16900, kind: "saree", cats: ["silk", "checked"], pal: P("#d8467e", "#f6e6ee", "#2f6a5a"), pattern: "check" },
  { id: 10, name: "Parrot Half Saree", price: 14800, kind: "saree", cats: ["half", "zari"], pal: P("#2f9a4a", "#e0b34a", "#e0b34a"), pattern: "zari" },
  { id: 11, name: "Rose Half Saree Set", price: 15600, kind: "saree", cats: ["half"], pal: P("#d9588a", "#e8c26a", "#e8c26a"), pattern: "zari" },
  { id: 12, name: "Peacock Half Saree", price: 16200, kind: "saree", cats: ["half", "zari"], pal: P("#0f6a7a", "#e0b34a", "#e0b34a"), pattern: "motif" },
  { id: 13, name: "Marigold Half Saree", price: 13900, kind: "saree", cats: ["half"], pal: P("#ee9a1d", "#a82c4a", "#a82c4a"), pattern: "stripe" },
  { id: 14, name: "Antique Zari Brocade", price: 36500, kind: "saree", cats: ["zari"], pal: P("#8a2230", "#e0b34a", "#e0b34a"), pattern: "motif" },
  { id: 15, name: "Rani Pink Brocade Blouse", price: 4600, kind: "blouse", cats: ["full", "zari"], pal: P("#c2185b", "#e0b34a", "#e0b34a"), pattern: "motif" },
  { id: 16, name: "Emerald Full-Sleeve Blouse", price: 4400, kind: "blouse", cats: ["full"], pal: P("#1f6a46", "#e0b34a", "#e0b34a"), pattern: "plain" },
  { id: 17, name: "Mustard Full-Sleeve Blouse", price: 4200, kind: "blouse", cats: ["full"], pal: P("#e3a21f", "#8a2230", "#8a2230"), pattern: "stripe" },
  { id: 18, name: "Wine Brocade Blouse", price: 4800, kind: "blouse", cats: ["full", "zari"], pal: P("#6a1230", "#e0b34a", "#e0b34a"), pattern: "zari" },
  { id: 19, name: "Dusty Rose Half-Sleeve", price: 4200, kind: "blouse", cats: ["halfblouse"], pal: P("#d4587a", "#e8c26a", "#e8c26a"), pattern: "plain" },
  { id: 20, name: "Teal Half-Sleeve Blouse", price: 4100, kind: "blouse", cats: ["halfblouse"], pal: P("#0f5560", "#e0b34a", "#e0b34a"), pattern: "plain" },
  { id: 21, name: "Terracotta Half-Sleeve", price: 4200, kind: "blouse", cats: ["halfblouse"], pal: P("#c7512b", "#e0b34a", "#e0b34a"), pattern: "plain" },
  { id: 22, name: "Lavender Half-Sleeve", price: 3900, kind: "blouse", cats: ["halfblouse"], pal: P("#8d86d6", "#e4cf8a", "#e4cf8a"), pattern: "plain" },
  { id: 23, name: "Check Half-Sleeve Blouse", price: 3800, kind: "blouse", cats: ["halfblouse", "checked"], pal: P("#3d3ca0", "#e0b34a", "#e0b34a"), pattern: "check" },
  { id: 24, name: "Gold Zari Half-Sleeve", price: 4700, kind: "blouse", cats: ["halfblouse", "zari"], pal: P("#b79a3a", "#f3d27c", "#f3d27c"), pattern: "zari" },
  { id: 25, name: "Ivory Half-Sleeve Blouse", price: 3900, kind: "blouse", cats: ["halfblouse"], pal: P("#efe4d0", "#d4a24c", "#d4a24c"), pattern: "plain" },
];
export const SIZES = [34, 36, 38, 40, 42];

/* ---------- Muse film / reels ---------- */
// Drop a real file in /public/media and set this, e.g. "/media/muse-film.mp4".
export const FILM_SRC = "";

export const reels = [
  { n: 1, dur: "0:16", fabric: "TISSUE KANJIVARAM", title: "Ponni Kanjivaram", place: "Lamp room, Kanchipuram", pal: P("#a24a8a", "#e0b34a", "#e0b34a"), bg: ["#3a1408", "#7a3a14"] },
  { n: 2, dur: "0:31", fabric: "HAND-BLOCK COTTON", title: "Marina Morning", place: "Mylapore to the sea", pal: P("#efe4d0", "#2a3a5a", "#2a3a5a"), bg: ["#9db3b8", "#cdd7d0"] },
  { n: 3, dur: "0:17", fabric: "BANARASI KATAN", title: "Kaali Banarasi", place: "Studio, Varanasi red", pal: P("#2a1a14", "#c9953a", "#c9953a"), bg: ["#3a0e08", "#b8481a"] },
  { n: 4, dur: "0:15", fabric: "KANJIVARAM SILK", title: "Pachai Pattu", place: "The bride's chamber", pal: P("#e8c24a", "#a82c2c", "#a82c2c"), bg: ["#8a5a6a", "#e3b84a"] },
  { n: 5, dur: "0:38", fabric: "GEORGETTE SILK", title: "Galli Sindoor", place: "Old-city lanes", pal: P("#c46a5a", "#e0b34a", "#e0b34a"), bg: ["#5a4a3a", "#b9a58a"] },
];

/* ---------- Bridal ---------- */
export const bridal = [
  { name: "Maroon Muhurtham Pattu", fabric: "Pure Zari", note: "Temple-gold pallu", price: 54800, off: 0, pal: P("#7a1230", "#e0b34a", "#e0b34a", "#e0b34a"), bg: "#c9a98a" },
  { name: "Kumkum Red Kanjivaram", fabric: "Kanjivaram", note: "Mango-motif pallu", price: 48600, off: 0, pal: P("#c4163f", "#e0b34a", "#e0b34a", "#c4163f"), bg: "#8a4a2a" },
  { name: "Rose Gold Wedding Silk", fabric: "Tissue silk", note: "Floral zari pallu", price: 39200, off: 8, pal: P("#d4586a", "#f3d27c", "#f3d27c", "#c0485a"), bg: "#d9b8a8" },
  { name: "Manjal Kalyanam Pattu", fabric: "Pattu", note: "Red-gold pallu", price: 27300, off: 0, pal: P("#d8201f", "#f0b01c", "#f0b01c", "#f0b01c"), bg: "#d8d2b0" },
  { name: "Sage Mist Organza Silk", fabric: "Silk organza", note: "Pastel floral pallu", price: 31400, off: 10, pal: P("#a8c4a0", "#c46aa0", "#e0c46a", "#6a2a5a"), bg: "#b8c0a0" },
  { name: "Antique Gold Tissue", fabric: "Tissue", note: "Peacock pallu", price: 44900, off: 0, pal: P("#d9ac48", "#f3d27c", "#a82c2c", "#a82c2c"), bg: "#c9b86a" },
  { name: "Champagne Zari Heirloom", fabric: "Pure Zari", note: "Gopuram pallu", price: 58200, off: 12, pal: P("#c9a86a", "#f3e0a0", "#a8842c", "#8a2230"), bg: "#c9a98a" },
];

/* ---------- Weave ---------- */
export const weaveStats = [
  ["Own", "handloom factory and weavers"],
  ["Pure", "silk and zari, woven in Kanchipuram"],
  ["Wholesale", "price for retailers across India"],
];
