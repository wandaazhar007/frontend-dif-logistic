// components/WhyChooseUsSection.tsx
import Image from "next/image";
import styles from "./WhyChooseUsSection.module.scss";

export default function WhyChooseUsSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="why-choose-us-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: TEXT CONTENT */}
          <div className={styles.contentCol}>
            <p className={styles.overline}>Why Choose Us</p>
            <h2 id="why-choose-us-heading" className={styles.title}>
              Kenapa Memilih PT DIF Trans Logistik?
            </h2>

            <p className={styles.intro}>
              PT DIF Trans Logistik menyediakan layanan logistik yang aman, cepat,
              dan terpercaya. Kami memastikan setiap pengiriman dikelola secara
              profesional, efisien, dan tepat waktu.
            </p>

            <div className={styles.cards}>
              <div className={styles.card}>
                <span className={styles.cardLabel}>
                  Keahlian dan Pengalaman Teruji
                </span>
                <p className={styles.cardText}>
                  Tim berpengalaman kami menangani setiap pengiriman dengan
                  standar tinggi, memastikan barang tiba aman, tepat waktu, dan
                  sesuai kebutuhan operasional pelanggan Anda.
                </p>
              </div>

              <div className={styles.card}>
                <span className={styles.cardLabel}>
                  Layanan Fleksibel Sesuai Kebutuhan Anda
                </span>
                <p className={styles.cardText}>
                  Kami menyediakan layanan logistik yang dapat disesuaikan,
                  memberikan kemudahan, efisiensi, dan dukungan operasional
                  yang selaras dengan kebutuhan bisnis Anda.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: PHOTO */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/hero-logistics.png"
                alt="Kantor PT DIF Trans Logistik"
                fill
                sizes="(min-width: 992px) 480px, 100vw"
                className={styles.image}
                priority={false}
              />
              <div className={styles.imageOverlay} />
              <div className={styles.imageBadge}>
                <span className={styles.badgeTitle}>DIF Trans Logistik</span>
                <span className={styles.badgeText}>
                  Operasional profesional dengan standar tinggi.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}