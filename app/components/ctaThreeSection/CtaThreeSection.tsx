// components/coverage/CtaThreeSection.tsx
import Link from "next/link";
import styles from "./CtaThreeSection.module.scss";

export default function CtaThreeSection() {
  return (
    <section className={styles.section} aria-labelledby="cta-three-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: TEXT */}
          <div className={styles.contentCol}>
            <h2 id="cta-three-heading" className={styles.title}>
              Ingin pastikan jangkauan kami sesuai dengan rute bisnis Anda?
            </h2>
            <p className={styles.text}>
              Tim PT DIF Trans Logistik siap membantu Anda merencanakan rute
              pengiriman yang paling efisien, dari pusat distribusi hingga titik
              akhir di seluruh Indonesia. Hubungi kami untuk diskusi singkat
              seputar kebutuhan jangkauan dan solusi logistik yang tepat.
            </p>
          </div>

          {/* RIGHT: SINGLE PHONE BUTTON */}
          <div className={styles.actionCol}>
            <Link href="tel:+6281390903900" className={styles.callButton}>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span>Hubungi DIF Trans Logistik</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}