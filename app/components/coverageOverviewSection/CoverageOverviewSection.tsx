// components/coverage/CoverageOverviewSection.tsx
import styles from "./CoverageOverviewSection.module.scss";

export default function CoverageOverviewSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="coverage-overview-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: HEADLINE + DESCRIPTION */}
          <div className={styles.leftCol}>
            <p className={styles.overline}>Jangkauan Layanan</p>
            <h1 id="coverage-overview-heading" className={styles.title}>
              Satu mitra logistik, jangkauan nasional dan dukungan global.
            </h1>
            <p className={styles.text}>
              PT DIF Logistics melayani pengiriman ke berbagai kota strategis di
              seluruh Indonesia, dari pusat-pusat industri hingga area yang
              sulit dijangkau. Dengan kombinasi transportasi darat, laut, dan
              udara, kami memastikan barang Anda tiba dengan aman dan tepat
              waktu.
            </p>
            <p className={styles.text}>
              Melalui jaringan mitra dan operator yang terkurasi, kami mampu
              mengelola pengiriman berulang, proyek khusus, hingga kebutuhan
              logistik berskala besar untuk perusahaan nasional maupun global
              yang beroperasi di Indonesia.
            </p>
          </div>

          {/* RIGHT: TRUST / GLOBAL / KEY MESSAGE CARDS */}
          <div className={styles.rightCol}>
            {/* Kemitraan Global */}
            <div className={styles.card}>
              <div className={styles.cardIconWrapper}>
                <i
                  className={`fa-solid fa-globe ${styles.cardIcon}`}
                  aria-hidden="true"
                />
              </div>
              <div>
                <h2 className={styles.cardTitle}>Kemitraan Global</h2>
                <p className={styles.cardText}>
                  Bekerja sama dengan jaringan mitra internasional terpercaya
                  untuk menghubungkan Indonesia dengan berbagai hub logistik
                  di Asia dan dunia.
                </p>
              </div>
            </div>

            {/* Jangkauan Domestik */}
            <div className={styles.card}>
              <div className={styles.cardIconWrapper}>
                <i
                  className={`fa-solid fa-route ${styles.cardIcon}`}
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className={styles.cardTitle}>Jangkauan Domestik Luas</h3>
                <p className={styles.cardText}>
                  Mengelola rute lintas pulau dengan kombinasi armada laut,
                  udara, dan darat, mendukung distribusi ke gudang, cabang, dan
                  customer Anda di berbagai wilayah.
                </p>
              </div>
            </div>

            {/* Key Message */}
            <div className={`${styles.card} ${styles.keyCard}`}>
              <div className={styles.keyIconWrapper}>
                <i
                  className={`fa-solid fa-shield-heart ${styles.keyIcon}`}
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className={styles.cardTitle}>Fokus pada Keamanan & Kejelasan</h3>
                <p className={styles.cardText}>
                  Setiap pengiriman diperlakukan sebagai aset penting. Kami
                  mengutamakan keamanan, transparansi status pengiriman, dan
                  komunikasi yang responsif sehingga Anda dapat memantau
                  pergerakan barang dengan percaya diri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}