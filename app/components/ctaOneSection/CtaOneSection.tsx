import Link from "next/link";
import styles from "./CtaOneSection.module.scss";

export default function CtaOneSection() {
  return (
    <section className={styles.section} aria-labelledby="cta-one-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT */}
          <div className={styles.contentCol}>
            <p className={styles.overline}>Siap Kirim Hari Ini?</p>
            <h2 id="cta-one-heading" className={styles.title}>
              Optimalkan pengiriman bisnis Anda bersama DIF Logistics.
            </h2>
            <p className={styles.text}>
              Tim kami siap membantu merancang solusi logistik yang aman, cepat,
              dan efisien untuk kebutuhan pengiriman Anda di seluruh Indonesia.
            </p>
          </div>

          {/* RIGHT: CTA BUTTONS */}
          <div className={styles.ctaCol}>
            {/* PRIMARY BUTTON */}
            <Link href="/kontak" className={styles.primaryCta}>
              <i className="fa-solid fa-paper-plane" aria-hidden="true" />
              <span>Konsultasi Gratis Sekarang</span>
            </Link>

            {/* SECONDARY BUTTON — SAME SIZE */}
            <Link href="tel:+6281390903900" className={styles.primaryCta}>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span>Atau Hubungi Kami</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}