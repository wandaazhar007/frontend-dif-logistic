import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <h1 id="hero-heading" className={styles.title}>
              Logistik Cerdas untuk Bisnis Anda
            </h1>
            <p className={styles.subtitle}>
              Layanan logistik aman, cepat, dan terpercaya untuk semua kebutuhan
              pengiriman Anda di seluruh Indonesia.
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

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.shapeLayer}>
              <div className={styles.badge}>
                <span className={styles.badgeTitle}>Nationwide</span>
                <span className={styles.badgeText}>Jangkauan seluruh Indonesia</span>
              </div>
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