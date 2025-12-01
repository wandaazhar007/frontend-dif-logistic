import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

export const metadata: Metadata = {
  title: "PT DIF Trans Logistik — Fast Delivery with Excellence",
  description:
    "PT DIF Trans Logistik menyediakan layanan logistik laut, udara, dan darat yang aman, cepat, dan terpercaya untuk bisnis Anda di seluruh Indonesia.",
  metadataBase: new URL("https://www.diftranslog.com"),
  openGraph: {
    type: "website",
    title: "PT DIF Trans Logistik — Fast Delivery with Excellence",
    description:
      "Solusi logistik terpadu: Domestic Sea Freight, Domestic Air Freight, Inland Transport, dan Contract Logistics.",
    url: "https://www.diftranslog.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT DIF diftranslog — Fast Delivery with Excellence",
    description:
      "Layanan logistik aman, cepat, dan terpercaya untuk semua kebutuhan pengiriman Anda.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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