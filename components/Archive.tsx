import { moods } from "@/lib/data";
import { MOOD_PHOTOS, MOOD_TINTS } from "@/lib/site-photos";

export function Archive() {
  return (
    <section id="archive" className="sec">
      <div className="sec-head">
        <div>
          <span className="eyebrow">THE KANCHIPURAM COLLECTION</span>
          <h2>Six Moods. <span className="grad">Timeless Drapes</span></h2>
        </div>
        <p className="side-note">Original Kanchipuram silk sarees woven by hand and worn for a lifetime. Six silk stories for weddings, festivals and everyday elegance, all available at wholesale price.</p>
      </div>
      {/* ogee temple-arch shape, shared by the gold frame, the cream mat and the photo */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="ksw-arch" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.04 C0.53,0.11 0.60,0.14 0.70,0.22 C0.80,0.30 0.90,0.33 0.90,0.44 L1,0.46 L1,1 L0,1 L0,0.46 L0.10,0.44 C0.10,0.33 0.20,0.30 0.30,0.22 C0.40,0.14 0.47,0.11 0.5,0.04 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="arches">
        {moods.map((m, i) => (
          <figure className="arch" key={m.name}>
            <span className="arch-finial" aria-hidden="true" />
            <div className="arch-photo"><img src={MOOD_PHOTOS[i % MOOD_PHOTOS.length]} alt={`Woman wearing a ${m.name} Kanchipuram silk saree`} loading={i < 3 ? "eager" : "lazy"} style={{ filter: MOOD_TINTS[i % MOOD_TINTS.length] }} /></div>
            <figcaption>{m.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
