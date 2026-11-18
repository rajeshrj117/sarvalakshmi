import { FAQ } from "@/lib/site";

const points = [
  ["Manufacturer & wholesale dealer", "Buy Kanchipuram silk sarees directly from manufacturers and weavers in Kanchipuram, backed by our own handloom factory."],
  ["Wholesale price, original silk", "Competitive wholesale rates on every design, with special discounts for wedding and resale purchases."],
  ["Wide range for resellers", "Wedding, fancy, soft, semi silk and gift sarees, plus bridal and pattu designs for every occasion."],
  ["Trusted by retailers", "Ideal for saree shops, boutiques, wedding planners and resellers looking for an original Kanchipuram silk saree supplier."],
];

const categories = [
  "Kanchipuram wedding silk sarees",
  "Kanchipuram fancy silk sarees",
  "Kanchipuram soft silk sarees",
  "Kanchipuram semi silk sarees",
  "Kanchipuram gift sarees",
  "Kanchipuram bridal pattu sarees",
  "Handloom Kanchipuram silk sarees",
];

export function Wholesale() {
  return (
    <section id="wholesale" className="sec wholesale" aria-labelledby="wholesale-h">
      <div className="center-head">
        <span className="eyebrow">KANCHIPURAM SILK SAREES WHOLESALE</span>
        <h2 id="wholesale-h">Original silk sarees, <span className="grad">wholesale price.</span></h2>
        <p className="lede center-lede">
          Kanchipuram Silk Wholesale is a leading Kanchipuram silk saree manufacturer and wholesale shop based in Kanchipuram, Tamil Nadu. From pure zari Kanjivaram silks to wedding, bridal and pattu sarees, we supply authentic handloom Kancheepuram silk sarees at wholesale price to retailers across India, with free shipping within India and international shipping available.
        </p>
      </div>
      <ul className="w-points">
        {points.map(([h, t]) => (
          <li key={h}><h3>{h}</h3><p>{t}</p></li>
        ))}
      </ul>
      <div className="w-cats">
        <h3>Buy Kanchipuram silk sarees wholesale</h3>
        <ul>{categories.map((c) => <li key={c}>{c}</li>)}</ul>
      </div>
      <div className="faq" id="faq">
        <h2 className="faq-h">Frequently asked <span className="grad">questions</span></h2>
        {FAQ.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
