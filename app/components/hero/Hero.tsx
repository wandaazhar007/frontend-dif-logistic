import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: TEXT CONTENT */}
          <div className={styles.content}>
            {/* TAGLINE BARU DI ATAS HEADLINE */}
            <p className={styles.tagline}>Fast Delivery with Excellence.</p>

            {/* <h1 id="hero-heading" className={styles.title}>
              Logistik Cerdas untuk Bisnis Anda
              </h1> */}
            <h1 id="hero-heading" className={styles.title}>
              Jasa Logistik Terpercaya di Indonesia untuk Pengiriman Laut, Udara, dan Darat
            </h1>

            {/* <p className={styles.subtitle}>
              Layanan logistik aman, cepat, dan terpercaya untuk semua kebutuhan
              pengiriman Anda di seluruh Indonesia.
            </p> */}
            <p className={styles.subtitle}>
              PT DIF Trans Logistik adalah perusahaan logistik profesional di Indonesia
              yang menyediakan layanan pengiriman barang melalui jalur laut, udara, dan darat.
              Kami melayani kebutuhan distribusi antar pulau, supply chain, serta pengiriman
              komersial untuk berbagai sektor industri dengan layanan yang aman, cepat,
              dan terukur.
            </p>

            <div className={styles.actions}>
              <Link href="/kontak" className={styles.primaryCta}>
                Hubungi Kami
              </Link>
              <Link href="/layanan" className={styles.secondaryCta}>
                Lihat Layanan
              </Link>
            </div>

            <ul className={styles.highlights}>
              <li>
                <i className="fa-solid fa-ship" aria-hidden="true" />
                Domestic Sea Freight
              </li>
              <li>
                <i className="fa-solid fa-plane" aria-hidden="true" />
                Domestic Air Freight
              </li>
              <li>
                <i className="fa-solid fa-truck" aria-hidden="true" />
                Inland Transport
              </li>
              <li>
                <i className="fa-solid fa-file-contract" aria-hidden="true" />
                Contract Logistics
              </li>
            </ul>
          </div>

          {/* RIGHT: VISUAL BOX */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.shapeLayer}>
              {/* Badge atas */}
              <div className={styles.badge}>
                <span className={styles.badgeTitle}>Nationwide</span>
                <span className={styles.badgeText}>
                  Jangkauan seluruh Indonesia
                </span>
              </div>

              {/* Stats bawah kiri */}
              <div className={styles.stats}>
                <div>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Support</span>
                </div>
                <div>
                  <span className={styles.statNumber}>99%</span>
                  <span className={styles.statLabel}>On-time</span>
                </div>
              </div>

              {/* Icon marker kanan bawah */}
              <div className={styles.iconCircle}>
                <i className="fa-solid fa-location-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}