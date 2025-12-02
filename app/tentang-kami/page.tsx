import { Metadata } from "next";
import AboutCoreIntroSection from "@/app/components/aboutCoreIntroSection/AboutCoreIntroSection";
import AboutJourneySection from "../components/aboutJourneySection/AboutJourneySection";
import AboutTeamSection from "../components/aboutTeamSection/AboutTeamSection";
import CtaOneSection from "../components/ctaOneSection/CtaOneSection";

export const metadata: Metadata = {
  title: "Tentang Kami | PT DIF Trans Logistik",
  description:
    "Profil PT DIF Trans Logistik: sejarah, nilai, dan komitmen kami dalam memberikan solusi logistik terbaik di Indonesia.",
  alternates: {
    canonical: "https://www.diftranslog.com/tentang-kami",
  },
};

const About = () => {
  return (
    <>
      <AboutCoreIntroSection />
      <AboutJourneySection />
      <AboutTeamSection />
      <CtaOneSection />
    </>
  );
}

export default About;