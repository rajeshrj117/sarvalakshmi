"use client";
import { useRef, useState } from "react";
import { FILM_SRC, moods } from "@/lib/data";
import { Scene } from "./Art";
import { MOOD_PHOTOS } from "@/lib/site-photos";

/* three portrait stills side by side — shows each woman's face and drape, instead of one tight crop */
const FILM_STILLS = [MOOD_PHOTOS[2], MOOD_PHOTOS[0], MOOD_PHOTOS[4]];

function Column({ rev, offset }: { rev?: boolean; offset: number }) {
  const tiles = [0, 1, 2, 3, 4, 5].map((k) => moods[(k + offset) % moods.length]);
  return (
    <div className="mcol" aria-hidden="true">
      <div className={`mcol-track ${rev ? "rev" : ""}`}>
        {[...tiles, ...tiles].map((m, k) => (
          <div className="mtile" key={k}><Scene pal={m.pal} bg={[m.pal.bg, "#2a1410"]} pose={k} /></div>
        ))}
      </div>
    </div>
  );
}

export function MuseFilm() {
  const [sound, setSound] = useState(false);
  const vid = useRef<HTMLVideoElement>(null);
  return (
    <section id="muse" className="sec muse">
      <div className="center-head">
        <span className="eyebrow">THE MUSE FILM</span>
        <h2><span className="grad">Feel the drape</span></h2>
      </div>
      <div className="muse-grid">
        <div className="mcols l"><Column offset={0} /><Column rev offset={2} /></div>
        <div className="film-frame">
          <i className="cb tl" /><i className="cb tr" /><i className="cb bl" /><i className="cb br" />
          <div className="film">
            {FILM_SRC ? (
              <video ref={vid} src={FILM_SRC} autoPlay loop muted={!sound} playsInline />
            ) : (
              <div className="film-fake" aria-label="Silk saree editorial film still">
                <div className="film-tri">{FILM_STILLS.map((src, k) => <img key={src} src={src} alt="Woman wearing a Kanchipuram silk saree" loading="lazy" style={{ animationDelay: `${k * -2}s` }} />)}</div>
                <div className="sweep" />
              </div>
            )}
            <button className="sound" onClick={() => setSound((s) => !s)} aria-pressed={sound}>{sound ? "🔊 Sound on" : "🔇 Sound off"}</button>
          </div>
        </div>
        <div className="mcols r"><Column rev offset={1} /><Column offset={3} /></div>
      </div>
      <div className="center"><a href="#rack" className="btn btn-maroon">Explore the Collection</a></div>
    </section>
  );
}
