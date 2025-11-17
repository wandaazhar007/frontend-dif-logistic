// components/VisionMissionSection.tsx
import styles from "./VisionMisionSection.module.scss";

type MissionItem = {
  title: string;
  description: string;
  iconClass: string;
};

const MISSIONS: MissionItem[] = [
  {
    title: "SDM Kompeten & Profesional",
    description:
      "Mengelola perusahaan dengan sumber daya manusia yang kompeten, profesional, dan berintegritas.",
    iconClass: "fa-solid fa-user-tie",
  },
  {
    title: "Tepat Waktu & Aman",
    description:
      "Menjaga ketepatan waktu, keamanan, dan kualitas layanan di setiap proses pengiriman.",
    iconClass: "fa-solid fa-clock",
  },
  {
    title: "Inovasi & Integrasi",
    description:
      "Berinovasi untuk menghadirkan solusi logistik yang terintegrasi, efisien, dan mudah diakses.",
    iconClass: "fa-solid fa-lightbulb",
  },
  {
    title: "Peduli Karyawan & Lingkungan",
    description:
      "Meningkatkan kesejahteraan tenaga kerja serta berkontribusi positif terhadap lingkungan.",
    iconClass: "fa-solid fa-leaf",
  },
];

export default function VisionMissionSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="vision-mission-heading"
    >
      <div className="container">
        <div className={styles.headerRow}>
          <h2 id="vision-mission-heading" className={styles.title}>
            Visi &amp; Misi
          </h2>
          <p className={styles.overline}>lebih mudah, efisien, dan terpercaya</p>
        </div>

        <div className={styles.grid}>
          {/* LEFT: VISION AS QUOTE */}
          <div className={styles.visionCol}>
            <div className={styles.visionCard}>
              <span className={styles.quoteMark}>“</span>
              <p className={styles.visionText}>
                Menjadi perusahaan logistik yang unggul, handal, dan
                terpercaya dalam layanan domestik maupun internasional.
              </p>
              <span className={styles.quoteMarkRight}>”</span>
            </div>
          </div>

          {/* RIGHT: MISSIONS */}
          <div className={styles.missionCol}>
            <ul className={styles.missionList}>
              {MISSIONS.map((mission) => (
                <li key={mission.title} className={styles.missionItem}>
                  <div className={styles.iconWrapper}>
                    <i
                      className={`${mission.iconClass} ${styles.icon}`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className={styles.missionContent}>
                    <h3 className={styles.missionTitle}>{mission.title}</h3>
                    <p className={styles.missionDesc}>
                      {mission.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}