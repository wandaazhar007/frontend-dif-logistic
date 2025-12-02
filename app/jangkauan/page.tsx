import { Metadata } from "next";
import CoverageDomesticMapSection from "../components/coverageDomesticMapSection/CoverageDomesticMapSection";
import CoverageOverviewSection from "../components/coverageOverviewSection/CoverageOverviewSection";
import CtaTwoSection from "../components/ctaTwoSection/CtaTwoSection";

export const metadata: Metadata = {
  title: "Jangkauan Layanan | PT DIF Trans Logistik",
  description:
    "Jangkauan layanan PT DIF Trans Logistik mencakup seluruh wilayah Indonesia dengan dukungan jaringan nasional.",
  alternates: {
    canonical: "https://www.diftranslog.com/jangkauan",
  },
};

export default function JangkauanPage() {
  return (
    <>
      <CoverageOverviewSection />
      <CoverageDomesticMapSection />
      <CtaTwoSection />
      {/* Section 2, 3, 4 untuk halaman jangkauan akan kita lanjutkan nanti */}
    </>
  );
}