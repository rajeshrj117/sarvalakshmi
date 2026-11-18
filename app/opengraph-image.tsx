import { ImageResponse } from "next/og";

export const alt = "Kanchipuram Silk Sarees Wholesale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#4a0c18,#8a1a2c 60%,#b3213a)", color: "#f3e6d2" }}>
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#f3d27c", display: "flex" }}>PURE ZARI · HANDWOVEN · KANCHIPURAM</div>
        <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.05, marginTop: 24, display: "flex" }}>Kanchipuram Silk Wholesale</div>
        <div style={{ fontSize: 36, marginTop: 28, color: "#f3d27c", display: "flex" }}>Silk saree manufacturers & wholesale dealers</div>
      </div>
    ),
    size,
  );
}
