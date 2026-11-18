"use client";
import { useEffect, useState } from "react";
import { Lotus } from "./Icons";

const links = [["Home","home"],["Our Story","archive"],["Styled Looks","try"],["Silk Collection","silk"],["The Collection","rack"],["The Muse","muse"],["Bridal","bridal"],["Craftsmanship","weave"],["Wholesale","wholesale"]];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = links.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 1020 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);

  return (
    <header className={`nav-wrap${open ? " is-open" : ""}`}>
      <nav className="nav" aria-label="Main">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <Lotus /><span className="logo-word">sarvalakshmi </span><span className="logo-sub">SILK WHOLESALE</span>
        </a>

        <ul className="nav-links" id="nav-menu">
          {links.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className={`${active === id ? "on" : ""}${id === "wholesale" ? " nav-ws" : ""}`} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>

        <button className="nav-burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="nav-menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </nav>
      <div className="nav-scrim" onClick={() => setOpen(false)} />
    </header>
  );
}
