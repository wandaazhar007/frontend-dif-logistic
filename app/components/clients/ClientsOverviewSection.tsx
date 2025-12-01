// components/clients/ClientsOverviewSection.tsx
import Image from "next/image";
import styles from "./ClientsOverviewSection.module.scss";

type ClientLogo = {
  name: string;
  file: string;
  title: string;
};

const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: "frisian-flag",
    file: "/images/logo-frisian-flag.jpg",
    title: "Frisian Flag",
  },
  {
    name: "jnt-express",
    file: "/images/logo-jnt-express.jpg",
    title: "J&T Express",
  },
  {
    name: "jt-cargo",
    file: "/images/logo-jt-cargo.png",
    title: "J&T Cargo",
  },
  {
    name: "modena",
    file: "/images/logo-modena.png",
    title: "Modena",
  },
  {
    name: "pos-logistics",
    file: "/images/logo-pos-logistics.webp",
    title: "Pos Logistics",
  },
  {
    name: "shopee-express",
    file: "/images/logo-shopee-express.webp",
    title: "Shopee Express",
  },
];

export default function ClientsOverviewSection() {
  return (
    <section className={styles.section} aria-labelledby="clients-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: COPY */}
          <div className={styles.contentCol}>
            <p className={styles.overline}>Pelanggan &amp; Mitra Kami</p>
            <h1 id="clients-heading" className={styles.title}>
              Dipercaya brand terkemuka untuk mengelola rantai pasok mereka.
            </h1>
            <p className={styles.text}>
              PT DIF Trans Logistik menjadi mitra logistik bagi berbagai perusahaan
              nasional dan internasional, mulai dari brand consumer goods,
              e-commerce, hingga manufaktur. Kepercayaan mereka adalah hasil
              dari konsistensi kami dalam menjaga kualitas layanan, keamanan
              pengiriman, dan ketepatan waktu.
            </p>
            <p className={styles.text}>
              Kami memahami bahwa setiap pengiriman membawa reputasi bisnis
              pelanggan. Karena itu, kami merancang solusi yang transparan,
              terukur, dan mudah diintegrasikan dengan proses operasional
              mereka.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIconWrapper}>
                  <i
                    className={`fa-solid fa-globe ${styles.highlightIcon}`}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h2 className={styles.highlightTitle}>Kemitraan Global</h2>
                  <p className={styles.highlightText}>
                    Bekerja sama dengan jaringan mitra internasional dan
                    nasional untuk mendukung alur distribusi dari dan ke
                    Indonesia.
                  </p>
                </div>
              </div>

              <div className={styles.highlightCard}>
                <div className={styles.highlightIconWrapper}>
                  <i
                    className={`fa-solid fa-shield-heart ${styles.highlightIcon}`}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className={styles.highlightTitle}>Key Message</h3>
                  <p className={styles.highlightText}>
                    Kami memperlakukan setiap pengiriman sebagai komitmen
                    kepercayaan. Fokus pada keamanan, kejelasan informasi, dan
                    respons cepat terhadap kebutuhan pelanggan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: LOGO CAROUSEL */}
          <div className={styles.logosCol}>
            <div className={styles.logosCard}>
              <p className={styles.logosLabel}>Brand yang mempercayakan logistiknya</p>

              <div
                className={styles.carousel}
                aria-label="Logo pelanggan dan mitra PT DIF Trans Logistik"
              >
                <div className={styles.track}>
                  {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, index) => (
                    <div
                      key={`${logo.name}-${index}`}
                      className={styles.logoItem}
                    >
                      <div className={styles.logoCircle}>
                        <Image
                          src={logo.file}
                          alt={logo.title}
                          title={logo.title}
                          fill
                          sizes="80px"
                          className={styles.logoImage}
                        />
                      </div>
                      <span className={styles.logoTitle}>{logo.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className={styles.helperText}>
                Logo di atas hanyalah sebagian dari pelanggan yang kami layani.
                Kami siap mendukung kebutuhan logistik bisnis Anda berikutnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}