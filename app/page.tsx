// app/page.tsx
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      {/* Section berikutnya: services, company overview, clients, contact CTA */}
    </>
  );
}