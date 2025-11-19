// components/coverage/CtaTwoSection.tsx
import Link from "next/link";
import styles from "./CtaTwoSection.module.scss";

export default function CtaTwoSection() {
  return (
    <section className={styles.section} aria-labelledby="cta-two-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: HEADLINE + COPY */}
          <div className={styles.contentCol}>
            <div className={styles.iconWrapper}>
              <i
                className={`fa-solid fa-handshake-angle ${styles.icon}`}
                aria-hidden="true"
              />
            </div>

            <h2 id="cta-two-heading" className={styles.title}>
              Siap membangun jaringan distribusi <p>yang lebih kuat?</p>
            </h2>
            <p className={styles.text}>
              Diskusikan kebutuhan logistik Anda bersama tim PT DIF Logistics.
              Kami membantu merancang solusi pengiriman yang efisien, aman, dan
              selaras dengan strategi bisnis Anda di seluruh Indonesia.
            </p>
          </div>

          {/* RIGHT: BUTTONS */}
          <div className={styles.actionsCol}>
            <Link href="/kontak" className={styles.primaryCta}>
              <i className="fa-solid fa-file-signature" aria-hidden="true" />
              <span>Request Proposal Logistik</span>
            </Link>

            <Link href="tel:+6281390903900" className={styles.secondaryCta}>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span>Hubungi Tim Kami</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}