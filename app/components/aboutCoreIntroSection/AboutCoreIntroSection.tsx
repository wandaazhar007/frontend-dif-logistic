// components/about/AboutCoreIntroSection.tsx
import styles from "./AboutCoreIntroSection.module.scss";

export default function AboutCoreIntroSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-core-intro-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.iconWrapper}>
            <i
              className={`fa-solid fa-truck-fast ${styles.icon}`}
              aria-hidden="true"
            />
          </div>

          <p className={styles.overline}>Tentang PT DIF Trans Logistik</p>

          <h1 id="about-core-intro-heading" className={styles.title}>
            Mitra logistik terpadu yang membantu bisnis Anda bergerak lebih cepat.
          </h1>

          <p className={styles.subtitle}>
            PT DIF Trans Logistik hadir sebagai penyedia solusi logistik yang aman,
            cepat, dan terpercaya bagi berbagai sektor industri di seluruh Indonesia.
          </p>

          <p className={styles.body}>
            Kami mengelola pengiriman darat, laut, dan udara dengan standar
            operasional yang konsisten, didukung tim profesional dan jaringan
            mitra yang luas. Fokus kami adalah memberikan pengalaman logistik
            yang sederhana, transparan, dan efisien, sehingga Anda dapat
            berfokus pada pertumbuhan bisnis, sementara kami menangani seluruh
            rantai distribusi barang Anda.
          </p>
        </div>
      </div>
    </section>
  );
}