"use client";
import { useEffect, useRef, useState } from "react";
import { reels } from "@/lib/data";
import { Scene } from "./Art";
import { Chev, Pause, Play } from "./Icons";

const DUR = 4000;

export function MuseReels() {
  const [c, setC] = useState(3);
  const [playing, setPlaying] = useState(true);
  const [full, setFull] = useState(false);
  const n = reels.length;
  const root = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || full || !inView) return;
    const t = window.setTimeout(() => setC((v) => v + 1), DUR);
    return () => window.clearTimeout(t);
  }, [playing, full, inView, c]);

  useEffect(() => {
    if (!full) return;
    const f = (e: KeyboardEvent) => e.key === "Escape" && setFull(false);
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, [full]);

  const move = (d: number) => setC((v) => v + d);
  const offsets = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
  const cur = reels[((c % n) + n) % n];

  return (
    <section id="reels" ref={root} className="sec reels">
      <div className="sec-head">
        <div>
          <span className="eyebrow">THE MUSE REELS</span>
          <h2>Silk, <span className="grad">in motion.</span></h2>
        </div>
        <div className="reel-side">
          <p className="side-note">Five drapes filmed the way they are lived in — lamp rooms, temple lanes, a morning by the sea. Tap the centre reel to watch it full screen, with sound.</p>
          <div className="reel-ctl">
            <button className="round-btn" onClick={() => move(-1)} aria-label="Previous reel"><Chev dir="l" /></button>
            <button className="round-btn dark" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"}>{playing ? <Pause /> : <Play />}</button>
            <button className="round-btn" onClick={() => move(1)} aria-label="Next reel"><Chev dir="r" /></button>
          </div>
        </div>
      </div>
      <div className="arc3d">
        {offsets.map((o) => {
          const r = reels[(((c + o) % n) + n) % n];
          const a = Math.abs(o);
          const centre = o === 0;
          return (
            <button
              key={c + o}
              className={`reel ${centre ? "centre" : ""}`}
              style={{
                transform: `translateX(calc(-50% + ${o * (centre ? 0 : 215 - a * 14)}px)) translateZ(${-a * 70}px) rotateY(${-o * 20}deg) rotateZ(${o * 2}deg) scale(${centre ? 1.08 : 0.98 - a * 0.1})`,
                zIndex: 20 - a,
                opacity: Math.max(0.3, 1 - a * 0.12),
              }}
              onClick={() => (centre ? setFull(true) : move(o))}
            >
              <Scene pal={r.pal} bg={r.bg as [string, string]} pose={r.n} />
              <div className="reel-top"><span><i className={centre ? "rec" : ""} />REEL {String(r.n).padStart(2, "0")}</span><span>{r.dur}</span></div>
              <div className="reel-bot">
                <small>{r.fabric}</small>
                <b>{r.title}</b>
                <span>{r.place}</span>
                {centre && <div className="prog"><i key={c} style={{ animation: `prog ${DUR}ms linear forwards`, animationPlayState: playing && inView ? "running" : "paused" }} /></div>}
              </div>
              {centre && <span className="play"><Play /></span>}
            </button>
          );
        })}
      </div>
      {full && (
        <div className="reel-full" role="dialog" aria-modal="true" aria-label={cur.title}>
          <button className="close light" onClick={() => setFull(false)}>Close ×</button>
          <div className="reel-full-card">
            <Scene pal={cur.pal} bg={cur.bg as [string, string]} pose={cur.n} />
            <div className="reel-bot big"><small>{cur.fabric}</small><b>{cur.title}</b><span>{cur.place}</span></div>
          </div>
        </div>
      )}
    </section>
  );
}
