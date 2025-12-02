import { Metadata } from "next";
import ClientsOverviewSection from "../components/clients/ClientsOverviewSection";
import CtaThreeSection from "../components/ctaThreeSection/CtaThreeSection";

export const metadata: Metadata = {
  title: "Pelanggan Kami | PT DIF Trans Logistik",
  description:
    "Brand besar Indonesia mempercayakan pengiriman mereka kepada PT DIF Trans Logistik. Lihat siapa saja pelanggan kami.",
  alternates: {
    canonical: "https://www.diftranslog.com/pelanggan",
  },
};

const Pelanggan = () => {
  return (
    <>
      <ClientsOverviewSection />
      <CtaThreeSection />
    </>
  );
}

export default Pelanggan;