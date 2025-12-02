// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.scss";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

const SITE_URL = "https://www.diftranslog.com";
const PHONE_NUMBER = "+62 813 9090 3900";
const EMAIL_ADDRESS = "cs@diftranslog.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PT DIF Trans Logistik — Fast Delivery with Excellence",
    template: "%s | PT DIF Trans Logistik",
  },
  description:
    "PT DIF Trans Logistik menyediakan layanan logistik laut, udara, dan darat yang aman, cepat, dan terpercaya untuk bisnis Anda di seluruh Indonesia.",
  keywords: [
    "PT DIF Trans Logistik",
    "jasa logistik",
    "logistik Indonesia",
    "pengiriman barang",
    "domestic sea freight",
    "domestic air freight",
    "inland transport",
    "contract logistics",
    "on-call logistics",
    "jasa pengiriman antar pulau",
  ],
  icons: {
    icon: "/images/icon-logo-dif.png",
    shortcut: "/images/icon-logo-dif.png",
    apple: "/images/icon-logo-dif.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "PT DIF Trans Logistik",
    title: "PT DIF Trans Logistik — Fast Delivery with Excellence",
    description:
      "Solusi logistik terpadu untuk bisnis Anda: Sea Freight, Air Freight, Inland Transport, Contract Logistics, dan On-Call Logistics.",
    images: [
      {
        url: "/images/icon-logo-dif.png",
        width: 256,
        height: 256,
        alt: "Logo PT DIF Trans Logistik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT DIF Trans Logistik — Fast Delivery with Excellence",
    description:
      "Layanan logistik aman, cepat, dan terpercaya untuk semua kebutuhan pengiriman Anda di Indonesia.",
    images: ["/images/icon-logo-dif.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// JSON-LD ORGANIZATION
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT DIF Trans Logistik",
  url: SITE_URL,
  logo: `${SITE_URL}/images/icon-logo-dif.png`,
  email: EMAIL_ADDRESS,
  telephone: PHONE_NUMBER,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "MALL WTC MATAHARI blok G112 Jl. Raya Serpong No.39, Pd. Jagung",
    addressLocality: "Serpong Utara",
    addressRegion: "Banten",
    postalCode: "15326",
    addressCountry: "ID",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE_NUMBER,
      email: EMAIL_ADDRESS,
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
  ],
};

// JSON-LD LOCALBUSINESS
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "PT DIF Trans Logistik",
  description:
    "PT DIF Trans Logistik menyediakan layanan logistik laut, udara, dan darat yang aman, cepat, dan terpercaya di seluruh Indonesia.",
  url: SITE_URL,
  image: `${SITE_URL}/images/icon-logo-dif.png`,
  logo: `${SITE_URL}/images/icon-logo-dif.png`,
  telephone: PHONE_NUMBER,
  email: EMAIL_ADDRESS,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "MALL WTC MATAHARI blok G112 Jl. Raya Serpong No.39",
    addressLocality: "Serpong Utara",
    addressRegion: "Banten",
    postalCode: "15326",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.2557,
    longitude: 106.6536,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "09:00",
      closes: "17:00"
    }
  ],
  priceRange: "$$",
  knowsAbout: [
    "Domestic Sea Freight",
    "Domestic Air Freight",
    "Inland Transport",
    "Contract Logistics",
    "On-Call Logistics",
    "Distribusi Domestik",
    "Layanan Logistik Indonesia"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* FontAwesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* JSON-LD Organization */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        {/* JSON-LD LocalBusiness */}
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>

      <body className="app-body">
        <div className="app-root">
          <Header />
          <main className="app-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}