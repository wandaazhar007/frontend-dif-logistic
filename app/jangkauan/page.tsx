import CoverageDomesticMapSection from "../components/coverageDomesticMapSection/CoverageDomesticMapSection";
import CoverageOverviewSection from "../components/coverageOverviewSection/CoverageOverviewSection";
import CtaTwoSection from "../components/ctaTwoSection/CtaTwoSection";

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