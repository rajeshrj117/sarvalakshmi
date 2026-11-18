// Single source of truth for brand + SEO. Edit here and the whole site updates
// (page title, meta tags, social cards, structured data, sitemap, footer).

type Contact = { phone: string; morePhones: string[]; whatsapp: string; email: string; streetAddress: string; locality: string; region: string; postalCode: string; country: string; hours: string; mapUrl: string; instagram: string; facebook: string; youtube: string };

export const SITE = {
  name: "Kanchipuram Silk Wholesale",
  shortName: "Kanchipuram Silk Wholesale",
  legalAlt: "Sri Sarvalakshmi Silks", // appears in the live site's meta keywords
  url: "https://www.kanchipuramsilkwholesale.com",
  locale: "en_IN",
  // Title/description follow the live site's own metadata, with spelling fixed.
  title: "Kanchipuram Silk Sarees Wholesale Shop | Manufacturer & Online Supplier",
  description:
    "Kanchipuram Silk Wholesale: leading Kanchipuram silk saree manufacturers and wholesale dealers in Kanchipuram. Buy original Kancheepuram pure zari silk sarees, wedding, bridal and pattu sarees at wholesale price.",
  keywords: [
    "Kanchipuram silk sarees wholesale",
    "Kanchipuram silk sarees wholesale shop",
    "Kanchipuram silk saree wholesale dealers",
    "Kanchipuram silk saree wholesalers",
    "Kanchipuram silk saree manufacturers",
    "Kanchipuram silk saree wholesale store",
    "Kancheepuram silk sarees wholesale price",
    "buy Kanchipuram silk sarees wholesale",
    "original silk saree shops in Kanchipuram",
    "best Kanchipuram silk sarees wholesale shop",
    "leading Kanchipuram silk saree shop",
    "Kanchipuram sarees",
    "Kanjivaram silk sarees",
    "pure zari Kanchipuram silk saree",
    "Kanchipuram bridal silk sarees",
    "Kanchipuram pattu sarees",
    "handloom Kanchipuram silk sarees",
    "Kanchipuram half sarees",
    "buy sarees online",
    "Sri Sarvalakshmi Silks",
  ],
  // ---- Fill these in. Anything left empty is simply not shown or published. ----
  contact: {
    phone: "+91 86103 29465",
    morePhones: ["+91 90927 80315", "+91 99763 28080", "+91 99943 47058"],
    whatsapp: "919092780315", // digits only with country code
    email: "kanchipurampattu@gmail.com",
    streetAddress: "No. 18, CV Rajagopal Street (near Varatharaja Perumal Temple)",
    locality: "Kanchipuram",
    region: "Tamil Nadu",
    postalCode: "631501",
    country: "IN",
    hours: "Daily 7:00 AM – 10:00 PM",
    mapUrl: "https://goo.gl/maps/iu6tzVVzSLp",
    instagram: "",
    facebook: "",
    youtube: "",
  } as Contact,
};

export const FAQ: { q: string; a: string }[] = [
  {
    q: "Where can I buy Kanchipuram silk sarees at wholesale price?",
    a: "Kanchipuram Silk Wholesale supplies Kanchipuram (Kancheepuram) silk sarees directly from Kanchipuram at wholesale price, for retailers, boutiques, wedding planners and resellers. Call, WhatsApp or email us and our team will share designs and rates.",
  },
  {
    q: "Are you Kanchipuram silk saree manufacturers or wholesale dealers?",
    a: "We are Kanchipuram silk saree manufacturers and leading wholesale dealers based in Kanchipuram, the home of Kanjivaram silk. Buying close to the loom keeps designs authentic and prices competitive.",
  },
  {
    q: "How do I identify an original Kanchipuram silk saree?",
    a: "A genuine Kanchipuram silk saree is woven on a handloom from pure mulberry silk with zari. Look for the interlocked korvai join between the body and the border, a heavier drape, and a Silk Mark or Handloom Mark. Always ask the seller about zari quality and weaving details.",
  },
  {
    q: "Which Kanchipuram silk saree designs do you offer?",
    a: "Our collection covers Kanchipuram wedding silk sarees, fancy silk, soft silk, semi silk and gift sarees, plus bridal and pattu designs for every occasion.",
  },
  {
    q: "What is the difference between Kanchipuram and Kanjivaram silk?",
    a: "They are the same saree. Kanchipuram, Kancheepuram and Kanjivaram are different spellings of the famous silk saree woven in Kanchipuram, Tamil Nadu, known for its durable pure silk and rich zari borders.",
  },
  {
    q: "How do I place a wholesale enquiry?",
    a: "Use the Contact section on this page, or call or WhatsApp us, and tell us the designs, colours and quantity you need. We will reply with availability and wholesale rates.",
  },
];
