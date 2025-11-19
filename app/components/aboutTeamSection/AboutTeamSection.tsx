// components/about/AboutTeamSection.tsx
import Image from "next/image";
import styles from "./AboutTeamSection.module.scss";

type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Adit",
    role: "Chief Executive Officer",
    photo: "/images/adit.ong",
    bio: "Memimpin arah strategis PT DIF Logistics, memastikan setiap keputusan bisnis berfokus pada keandalan layanan dan kepuasan pelanggan jangka panjang.",
  },
  {
    name: "Zakia Rosela",
    role: "Operations Manager",
    photo: "/images/zakia-rosela.png",
    bio: "Mengawasi operasional harian, mengkoordinasikan tim dan mitra lapangan agar setiap pengiriman berjalan efisien, aman, dan tepat waktu.",
  },
];

export default function AboutTeamSection() {
  return (
    <section className={styles.section} aria-labelledby="about-team-heading">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <i
              className={`fa-solid fa-people-group ${styles.icon}`}
              aria-hidden="true"
            />
          </div>
          <p className={styles.overline}>Tim &amp; Keahlian</p>
          <h2 id="about-team-heading" className={styles.title}>
            Dipimpin oleh tim profesional yang memahami dunia logistik.
          </h2>
          <p className={styles.subtitle}>
            Di balik setiap pengiriman yang sukses, ada tim yang terstruktur
            dengan baik. Manajemen PT DIF Logistics terdiri dari pemimpin yang
            berpengalaman dan terbiasa menangani kebutuhan logistik skala kecil
            hingga proyek korporat berskala besar.
          </p>
        </div>

        <div className={styles.grid}>
          {TEAM.map((member) => (
            <article key={member.name} className={styles.card}>
              <div className={styles.photoWrapper}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 220px, 160px"
                  className={styles.photo}
                />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>

                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <i
                      className={`fa-solid fa-briefcase ${styles.metaIcon}`}
                      aria-hidden="true"
                    />
                    <span>Fokus pada solusi logistik berkelanjutan.</span>
                  </div>
                  <div className={styles.metaItem}>
                    <i
                      className={`fa-solid fa-handshake-angle ${styles.metaIcon}`}
                      aria-hidden="true"
                    />
                    <span>Berkomitmen membangun hubungan jangka panjang.</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}