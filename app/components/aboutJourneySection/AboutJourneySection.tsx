// components/about/AboutJourneySection.tsx
import styles from "./AboutJourneySection.module.scss";

type JourneyItem = {
  year: string;
  title: string;
  description: string;
  iconClass: string;
};

const JOURNEY: JourneyItem[] = [
  {
    year: "2019",
    title: "Ide Awal & Fondasi",
    description:
      "Pendiri DIF Trans Logistik melihat kebutuhan akan layanan logistik yang lebih terintegrasi, transparan, dan berorientasi pada solusi.",
    iconClass: "fa-solid fa-lightbulb",
  },
  {
    year: "2020",
    title: "Pembentukan Tim Inti",
    description:
      "Merekrut tim berpengalaman di bidang transportasi laut, udara, dan darat untuk membangun pondasi operasional yang kuat.",
    iconClass: "fa-solid fa-users",
  },
  {
    year: "2021",
    title: "Peluncuran Layanan Domestik",
    description:
      "Resmi meluncurkan layanan domestik lintas pulau dengan fokus pada pengiriman yang aman dan tepat waktu.",
    iconClass: "fa-solid fa-truck-fast",
  },
  {
    year: "2023",
    title: "Ekspansi Jaringan & Teknologi",
    description:
      "Memperluas jaringan gudang dan mitra, sekaligus mengadopsi sistem pelacakan dan koordinasi berbasis digital.",
    iconClass: "fa-solid fa-network-wired",
  },
  {
    year: "2025",
    title: "Solusi Logistik Terintegrasi",
    description:
      "Menawarkan paket solusi end-to-end untuk pelanggan korporat, termasuk contract logistics dan layanan khusus proyek.",
    iconClass: "fa-solid fa-layer-group",
  },
  {
    year: "2026",
    title: "Menuju Standar Kelas Dunia",
    description:
      "Menetapkan target sertifikasi dan standardisasi proses untuk menyelaraskan layanan dengan praktik terbaik internasional.",
    iconClass: "fa-solid fa-globe",
  },
];

export default function AboutJourneySection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-journey-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: TIMELINE GRAPHIC */}
          <div className={styles.timelineCol}>
            <div className={styles.timelineCard}>
              <p className={styles.timelineOverline}>Perjalanan Kami</p>
              <h2 className={styles.timelineTitle}>
                Dari ide sederhana menjadi mitra logistik terpercaya.
              </h2>

              <ol className={styles.timelineList}>
                {JOURNEY.map((item) => (
                  <li key={item.year} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                      <span className={styles.year}>{item.year}</span>
                      <span className={styles.dot} />
                    </div>
                    <div className={styles.timelineContent}>
                      <div className={styles.timelineIconWrapper}>
                        <i
                          className={`${item.iconClass} ${styles.timelineIcon}`}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <p className={styles.itemDesc}>{item.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* RIGHT: HEADLINE + DESCRIPTION */}
          <div className={styles.storyCol}>
            <div className={styles.storyCard}>
              <p className={styles.overline}>Our Story</p>
              <h2 id="about-journey-heading" className={styles.title}>
                Dibangun dari komitmen, tumbuh bersama kepercayaan pelanggan.
              </h2>
              <p className={styles.text}>
                PT DIF Trans Logistik lahir dari keyakinan bahwa logistik bukan
                sekadar mengirimkan barang dari titik A ke titik B, tetapi
                tentang menjaga kepercayaan dan kesinambungan bisnis pelanggan.
              </p>
              <p className={styles.text}>
                Sejak awal, kami fokus pada tiga hal: <strong>keandalan</strong>{" "}
                proses, <strong>kejelasan</strong> informasi, dan{" "}
                <strong>kedekatan</strong> dengan pelanggan. Setiap tonggak dalam
                perjalanan kami mencerminkan upaya berkelanjutan untuk
                menghadirkan layanan yang lebih cepat, aman, dan relevan dengan
                tantangan rantai pasok modern.
              </p>
              <p className={styles.text}>
                Dengan jaringan yang terus berkembang dan tim yang berpengalaman,
                kami berkomitmen untuk menjadi mitra strategis yang membantu
                bisnis Anda bergerak lebih jauh dan lebih percaya diri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}