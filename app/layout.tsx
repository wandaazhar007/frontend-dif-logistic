// import type { Metadata } from "next";
// import "./globals.scss";
// import Header from "@/app/components/header/Header";
// import Footer from "@/app/components/footer/Footer";

// export const metadata: Metadata = {
//   title: "PT DIF Trans Logistik — Fast Delivery with Excellence",
//   description:
//     "PT DIF Trans Logistik menyediakan layanan logistik laut, udara, dan darat yang aman, cepat, dan terpercaya untuk bisnis Anda di seluruh Indonesia.",
//   metadataBase: new URL("https://www.diftranslog.com"),
//   icons: {
//     icon: "/images/icon-logo-dif.png",
//     shortcut: "/images/icon-logo-dif.png",
//     apple: "/images/icon-logo-dif.png",
//   },
//   openGraph: {
//     type: "website",
//     title: "PT DIF Trans Logistik — Fast Delivery with Excellence",
//     description:
//       "Solusi logistik terpadu: Domestic Sea Freight, Domestic Air Freight, Inland Transport, dan Contract Logistics.",
//     url: "https://www.diftranslog.com",
//     images: [
//       {
//         url: "/images/icon-logo-dif.png", // 🔹 your new image
//         width: 256,
//         height: 256,
//         alt: "PT DIF Trans Logistik office and logo",
//       },
//     ]
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "PT DIF diftranslog — Fast Delivery with Excellence",
//     description:
//       "Layanan logistik aman, cepat, dan terpercaya untuk semua kebutuhan pengiriman Anda.",
//   },
// };



// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="id">
//       <head>
//         {/* FontAwesome CSS */}
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
//           integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
//           crossOrigin="anonymous"
//           referrerPolicy="no-referrer"
//         />
//       </head>
//       <body className="app-body">
//         <div className="app-root">
//           <Header />
//           <main className="app-main">{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }


// app/layout.tsx
import type { Metadata } from "next";
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
      "Solusi logistik terpadu: Domestic Sea Freight, Domestic Air Freight, Inland Transport, Contract Logistics, dan On-Call Logistics dengan jangkauan nasional.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <html lang="id">
      <head>
        {/* FontAwesome CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* JSON-LD Schema.org */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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