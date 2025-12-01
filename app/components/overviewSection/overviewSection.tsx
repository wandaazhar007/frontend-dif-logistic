// components/CompanyOverviewSection.tsx
import styles from "./overviewSection.module.scss";

export default function CompanyOverviewSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="company-overview-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: TITLE + LABEL */}
          <div className={styles.headingCol}>
            <p className={styles.overline}>Company Overview</p>
            <h2 id="company-overview-heading" className={styles.title}>
              Sekilas Perusahaan
            </h2>
            <p className={styles.tagline}>
              Mitra logistik modern untuk kebutuhan pengiriman domestik dan
              internasional.
            </p>
          </div>

          {/* RIGHT: COPYWRITING DARI COMPANY PROFILE */}
          <div className={styles.contentCol}>
            <p className={styles.text}>
              Didirikan pada tahun 2019, PT DIF Trans Logistik hadir sebagai solusi
              logistik modern yang menjawab kebutuhan pengiriman barang yang
              terus meningkat, baik dalam skala domestik maupun internasional.
            </p>
            <p className={styles.text}>
              Berbekal komitmen pada pelayanan profesional, kemudahan proses,
              keamanan, dan ketepatan waktu, kami melayani berbagai kebutuhan
              transportasi, distribusi, dan pengelolaan rantai pasok bagi
              beragam sektor industri.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlightCard}>
                <span className={styles.highlightLabel}>Sejak</span>
                <span className={styles.highlightValue}>2019</span>
                <span className={styles.highlightDesc}>
                  Pengalaman mengelola pengiriman lintas wilayah Indonesia.
                </span>
              </div>
              <div className={styles.highlightCard}>
                <span className={styles.highlightLabel}>Fokus Kami</span>
                <span className={styles.highlightValue}>End-to-End</span>
                <span className={styles.highlightDesc}>
                  Dari pengangkutan, penyimpanan, hingga distribusi ke titik
                  akhir.
                </span>
              </div>
              <div className={styles.highlightCard}>
                <span className={styles.highlightLabel}>Nilai Utama</span>
                <span className={styles.highlightValue}>Trust</span>
                <span className={styles.highlightDesc}>
                  Menjaga kepercayaan melalui keamanan dan ketepatan waktu
                  pengiriman.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}