export const Heart = ({ filled = false }: { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 21.8l8.8-8.8a5.2 5.2 0 0 0 0-7.4z" /></svg>
);
export const Bag = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 8h12l1 13H5z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
);
export const Arrow = ({ dir = "ne" }: { dir?: "ne" | "r" | "l" }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {dir === "ne" && <path d="M7 17 17 7M8 7h9v9" />}
    {dir === "r" && <path d="M5 12h14M13 6l6 6-6 6" />}
    {dir === "l" && <path d="M19 12H5M11 6l-6 6 6 6" />}
  </svg>
);
export const Plus = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
);
export const Play = () => (<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>);
export const Pause = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>);
export const Chev = ({ dir }: { dir: "l" | "r" }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={dir === "l" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} /></svg>
);
export const Lotus = () => (
  <svg viewBox="0 0 40 28" width="30" height="21" fill="none" stroke="#e8c880" strokeWidth="1.4" aria-hidden="true"><path d="M20 4c-3 5-3 11 0 16 3-5 3-11 0-16zM8 9c4 2 8 6 12 11-6 0-10-3-12-11zM32 9c-4 2-8 6-12 11 6 0 10-3 12-11zM2 16c5 0 10 2 18 4-8 3-14 2-18-4zM38 16c-5 0-10 2-18 4 8 3 14 2 18-4z" /></svg>
);
