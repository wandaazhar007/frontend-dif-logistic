// app/page.tsx
import Hero from "./components/hero/Hero";
import ServicesSection from "@/app/components/servicesSection/ServicesSection";
import CompanyOverviewSection from "./components/overviewSection/overviewSection";
import ClientsSection from "./components/clientsSection/ClientsSection";
import WhyChooseUsSection from "./components/whyChooseUsSection/WhyChooseUsSection";
import VisionMissionSection from "./components/visionMisionSection/VisionMisionSection";
import ServicesCoverageSection from "./components/servicesCoverageSection/ServicesCoverageSection";
import CtaOneSection from "./components/ctaOneSection/CtaOneSection";






export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CompanyOverviewSection />
      <ClientsSection />
      <WhyChooseUsSection />
      <VisionMissionSection />
      <ServicesCoverageSection />
      <CtaOneSection />
      {/* Section berikutnya: services, company overview, clients, contact CTA */}
    </>
  );
}