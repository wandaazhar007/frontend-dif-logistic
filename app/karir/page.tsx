import { Metadata } from "next";
import CareerSection from "../components/carrier/CareerSection";

export const metadata: Metadata = {
  title: "Karir di PT DIF Trans Logistik",
  description:
    "Bergabung bersama PT DIF Trans Logistik dan kembangkan karir Anda di industri logistik Indonesia.",
  alternates: {
    canonical: "https://www.diftranslog.com/karir",
  },
};

const Carier = () => {
  return (
    <h1>
      <CareerSection />
    </h1>
  );
}

export default Carier;