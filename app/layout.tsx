import type { Metadata, Viewport } from "next";
import "./globals.css";
import { FAQ, SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Shopping",
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  other: { "geo.region": "IN-TN", "geo.placename": "Kanchipuram", "content-language": "en-IN" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8a1a2c",
};

const c = SITE.contact;
const sameAs = [c.instagram, c.facebook, c.youtube].filter(Boolean);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: [SITE.legalAlt, "Kanchipuram Silk Sarees Wholesale"],
      url: SITE.url,
      logo: `${SITE.url}/icon.svg`,
      description: SITE.description,
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": ["Store", "LocalBusiness"],
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      description: SITE.description,
      url: SITE.url,
      image: `${SITE.url}/opengraph-image`,
      priceRange: "₹₹",
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: ["Kanchipuram silk sarees", "Kanjivaram silk", "Pure zari sarees", "Bridal silk sarees", "Wholesale silk sarees"],
      address: {
        "@type": "PostalAddress",
        ...(c.streetAddress ? { streetAddress: c.streetAddress } : {}),
        addressLocality: c.locality,
        addressRegion: c.region,
        ...(c.postalCode ? { postalCode: c.postalCode } : {}),
        addressCountry: c.country,
      },
      ...(c.phone ? { telephone: c.phone } : {}),
      ...(c.email ? { email: c.email } : {}),
      ...(c.hours ? { openingHours: c.hours } : {}),
      ...(sameAs.length ? { sameAs } : {}),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <a className="skip" href="#main">Skip to main content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
