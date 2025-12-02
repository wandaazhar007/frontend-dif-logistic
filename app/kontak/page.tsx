import { Metadata } from "next";
import ContactSection from "../components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Hubungi Kami | PT DIF Trans Logistik",
  description:
    "Hubungi PT DIF Trans Logistik untuk konsultasi logistik profesional. Kami siap membantu kebutuhan pengiriman Anda.",
  alternates: {
    canonical: "https://www.diftranslog.com/kontak",
  },
};

export default function KontakPage() {
  return <ContactSection />;
}