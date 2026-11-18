import { weaveStats } from "@/lib/data";
import { Lotus } from "./Icons";
import { SITE } from "@/lib/site";

const c = SITE.contact;
const address = [c.streetAddress, c.locality, c.region, c.postalCode].filter(Boolean).join(", ");

export function Weave() {
  return (
    <>
      <section id="weave" className="sec weave">
        <div className="center-head">
          <span className="eyebrow">THE WEAVE</span>
          <h2>One saree. <span className="grad">Many hands.</span></h2>
          <p className="lede center-lede">Every Kanchipuram silk saree we supply begins on a temple-town loom in Kanchipuram. The body and border are woven separately, then joined by hand with the interlocking korvai technique.</p>
        </div>
        <div className="stats">
          {weaveStats.map(([a, b]) => (<div key={a}><strong>{a}</strong><span>{b}</span></div>))}
        </div>
        <div className="center"><a className="btn btn-maroon" href="#contact">Send a Wholesale Enquiry</a></div>
      </section>
      <section id="contact" className="sec contact-sec"><div className="center-head"><span className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</span><h2>Get wholesale rates <span className="grad">today.</span></h2><p className="lede center-lede">For Kanchipuram silk saree wholesale prices, design details, bulk orders or to plan a visit to our Kanchipuram shop, please get in touch with our team.</p></div><ul className="contact-list">
          {c.phone && <li><span>Call</span><a href={`tel:${c.phone.replace(/[^+\d]/g, "")}`}>{c.phone}</a></li>}
          {c.morePhones.length > 0 && <li><span>Also call</span><span className="more-phones">{c.morePhones.map((p, i) => (<span key={p}>{i > 0 && <span className="sep"> · </span>}<a href={`tel:${p.replace(/[^+\d]/g, "")}`}>{p}</a></span>))}</span></li>}
          {c.whatsapp && <li><span>WhatsApp</span><a href={`https://wa.me/${c.whatsapp}`} rel="noopener noreferrer" target="_blank">Chat on WhatsApp</a></li>}
          {c.email && <li><span>Email</span><a href={`mailto:${c.email}`}>{c.email}</a></li>}
          <li><span>Shop</span>{c.mapUrl ? <a href={c.mapUrl} rel="noopener noreferrer" target="_blank">{address}</a> : <address>{address}</address>}</li>
          {c.hours && <li><span>Hours</span>{c.hours}</li>}
        </ul></section>
      <footer className="foot">
        <span className="logo static"><Lotus /><span className="logo-word">KANCHIPURAM</span> <span className="logo-sub">SILK WHOLESALE</span></span>
        <p>Kanchipuram silk sarees wholesale · Manufacturers & wholesale dealers in Kanchipuram, Tamil Nadu.</p>
      </footer>
    </>
  );
}
