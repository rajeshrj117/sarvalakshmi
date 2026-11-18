"use client";
import { useEffect, useMemo, useState } from "react";
import { cats, rack, type Cat } from "@/lib/data";
import { Hanger } from "./Art";
import { Chev } from "./Icons";

export function Rack() {
  const [filter, setFilter] = useState<"all" | Cat>("silk");
  const [hover, setHover] = useState<number | null>(null);
  const [sel, setSel] = useState<number | null>(null);
  const [back, setBack] = useState(false);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: rack.length };
    rack.forEach((r) => r.cats.forEach((k) => (c[k] = (c[k] || 0) + 1)));
    return c;
  }, []);
  const visible = useMemo(() => rack.filter((r) => filter === "all" || r.cats.includes(filter)), [filter]);
  const selIdx = visible.findIndex((v) => v.id === sel);
  const cur = selIdx >= 0 ? visible[selIdx] : null;
  const shown = hover != null ? rack.find((r) => r.id === hover) : null;

  const step = (d: number) => {
    if (selIdx < 0) return;
    setSel(visible[(selIdx + d + visible.length) % visible.length].id);
    setBack(false);
  };
  const close = () => { setSel(null); setBack(false); };

  useEffect(() => {
    if (sel == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  });

  return (
    <section id="rack" className="sec rack-sec">
      <div className="center-head">
        <span className="eyebrow">THE COLLECTION</span>
        <h2>Every silk, <span className="grad">on the rail.</span></h2>
      </div>
      <div className="chips" role="tablist" aria-label="Filter the rack">
        {cats.map((c) => (
          <button key={c.id} role="tab" aria-selected={filter === c.id} className={`chip ${filter === c.id ? "on" : ""}`} onClick={() => setFilter(c.id)}>
            {c.label} <i>{counts[c.id]}</i>
          </button>
        ))}
      </div>

      <div className="rail-scroll">
        <div className="rail">
          <div className="rod"><i /><i /></div>
          <div className="hangers">
            {rack.map((r) => {
              const on = visible.some((v) => v.id === r.id);
              return (
                <button
                  key={r.id}
                  className={`hslot ${on ? "" : "off"} ${hover === r.id ? "hov" : ""}`}
                  onMouseEnter={() => setHover(r.id)} onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(r.id)} onBlur={() => setHover(null)}
                  onClick={() => { setSel(r.id); setBack(false); }}
                  tabIndex={on ? 0 : -1}
                  aria-hidden={!on}
                  aria-label={r.name}
                >
                  <Hanger pal={r.pal} pattern={r.pattern} kind={r.kind} seed={r.id} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <p className="rack-caption" aria-live="polite">{shown ? <>{shown.name.toUpperCase()}</> : <><span className="hint-d">Hover a hanger · click to explore the design</span><span className="hint-m">Swipe sideways · tap a saree to explore</span></>}</p>
      <div className="rack-foot"><span>EXPLORE THE COLLECTION · {visible.length} DESIGNS</span><span>SELECT A DESIGN TO VIEW DETAILS</span></div>

      {cur && (
        <div className="detail" role="dialog" aria-modal="true" aria-label={cur.name}>
          <div className="detail-bg" onClick={close} />
          <button className="close" onClick={close}>Close ×</button>
          <button className="d-arrow l" onClick={() => step(-1)} aria-label="Previous piece"><Chev dir="l" /></button>
          <button className="d-arrow r" onClick={() => step(1)} aria-label="Next piece"><Chev dir="r" /></button>
          <div className="detail-body">
            <div className="d-hanger" key={`${cur.id}-${back}`}>
              <Hanger pal={cur.pal} pattern={cur.pattern} kind={cur.kind} back={back} seed={cur.id} />
            </div>
            <h3>{cur.name.toUpperCase()}</h3>
            <p className="d-price">Available at wholesale price</p>
            <div className="seg" role="group" aria-label="View">
              <button className={!back ? "on" : ""} onClick={() => setBack(false)}>Front</button>
              <button className={back ? "on" : ""} onClick={() => setBack(true)}>Back</button>
            </div>
            <div className="d-actions">
              <a className="btn btn-maroon" href="#contact" onClick={close}>Enquire About This Design</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
