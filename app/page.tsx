// app/page.tsx
import Script from "next/script";
import Hero from "./components/hero/Hero";
import ServicesSection from "@/app/components/servicesSection/ServicesSection";
import CompanyOverviewSection from "./components/overviewSection/overviewSection";
import ClientsSection from "./components/clientsSection/ClientsSection";
import WhyChooseUsSection from "./components/whyChooseUsSection/WhyChooseUsSection";
import VisionMissionSection from "./components/visionMisionSection/VisionMisionSection";
import ServicesCoverageSection from "./components/servicesCoverageSection/ServicesCoverageSection";
import CtaOneSection from "./components/ctaOneSection/CtaOneSection";
import FaqSection from "./components/faq/FaqSection";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu jasa logistik dan bagaimana PT DIF Trans Logistik membantu bisnis saya?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Jasa logistik adalah layanan pengelolaan pergerakan barang, mulai dari pergudangan, pengiriman, hingga distribusi. PT DIF Trans Logistik membantu bisnis Anda merencanakan dan mengeksekusi pengiriman laut, udara, dan darat secara terukur, sehingga rantai pasok berjalan lebih efisien dan biaya operasional lebih terkendali."
      }
    },
    {
      "@type": "Question",
      name: "Apakah PT DIF Trans Logistik melayani pengiriman barang antar pulau di Indonesia?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Ya, kami melayani pengiriman domestik antar pulau melalui layanan Domestic Sea Freight (FCL & LCL), Domestic Air Freight, dan Inland Transport. Jaringan kami mencakup berbagai pelabuhan dan bandara utama di Indonesia sehingga proses distribusi lebih cepat dan aman."
      }
    },
    {
      "@type": "Question",
      name: "Kapan sebaiknya saya menggunakan layanan Domestic Air Freight?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Domestic Air Freight ideal digunakan saat Anda membutuhkan pengiriman cepat dan memiliki tenggat waktu yang ketat, misalnya untuk barang bernilai tinggi, dokumen penting, atau kebutuhan urgent pelanggan. Tim kami dapat membantu Anda memilih rute dan jadwal terbaik sesuai kebutuhan bisnis."
      }
    },
    {
      "@type": "Question",
      name: "Apa keuntungan menggunakan layanan Contract Logistics dari PT DIF Trans Logistik?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Layanan Contract Logistics memungkinkan Anda menyerahkan pengelolaan logistik jangka panjang kepada tim kami, termasuk pergudangan, manajemen stok, dan distribusi. Dengan solusi terintegrasi, bisnis Anda dapat fokus pada penjualan dan pengembangan produk, sementara operasional logistik ditangani secara profesional."
      }
    },
    {
      "@type": "Question",
      name: "Bagaimana cara berkonsultasi dengan tim PT DIF Trans Logistik?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Anda dapat menghubungi kami melalui halaman Kontak, mengirimkan formulir online, atau langsung menghubungi nomor telepon dan WhatsApp yang tertera. Tim kami siap membantu menganalisis kebutuhan logistik Anda dan merekomendasikan kombinasi layanan yang paling efisien."
      }
    }
  ]
};



export default function HomePage() {
  return (
    <>
      {/* FAQ JSON-LD untuk rich result */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <ServicesSection />
      <CompanyOverviewSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <VisionMissionSection />
      <ServicesCoverageSection />
      <CtaOneSection />
      <FaqSection />
      {/* Section berikutnya: services, company overview, clients, contact CTA */}
    </>
  );
}