// app/page.tsx
import Hero from "./components/hero/Hero";
import ServicesSection from "@/app/components/servicesSection/ServicesSection";
import CompanyOverviewSection from "./components/overviewSection/overviewSection";
import ClientsSection from "./components/clientsSection/ClientsSection";


export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CompanyOverviewSection />
      <ClientsSection />
      {/* Section berikutnya: services, company overview, clients, contact CTA */}
    </>
  );
}