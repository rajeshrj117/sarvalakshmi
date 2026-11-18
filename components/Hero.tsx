import { ticker } from "@/lib/data";
import { Showroom } from "./Art";
import { Arrow } from "./Icons";

export function Ticker() {
  const row = [...ticker, ...ticker];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((k) => (
          <div className="ticker-row" key={k}>
            {row.map(([h, t], i) => (
              <span key={i}><b>{h}</b> {t} <em>◆</em></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero">
      <Showroom />
      <div className="hero-shade" />
      <div className="hero-copy">
        <span className="pill-tag"><i /> KANCHIPURAM · PURE ZARI · WHOLESALE PRICE</span>
        <h1>Kanchipuram Silk Sarees <span>Wholesale Shop</span></h1>
        <p>Kanchipuram Silk Wholesale is a leading Kanchipuram silk saree manufacturer and wholesale dealer. Buy original Kancheepuram pure zari silk sarees, wedding, bridal and pattu sarees at wholesale price, direct from the temple town looms.</p>
        <div className="hero-btns">
          <a href="#try" className="btn btn-maroon">Explore Styled Looks <span className="btn-ic light"><Arrow /></span></a>
          <a href="#rack" className="btn btn-white">Browse Collection <span className="btn-ic maroon"><Arrow /></span></a>
        </div>
      </div>
      <Ticker />
    </section>
  );
}
