// components/ServicesSection.tsx
import Link from "next/link";
import styles from "./ServicesSection.module.scss";

type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  iconClass: string;
};

const SERVICES: ServiceItem[] = [
  {
    slug: "domestic-sea-freight",
    title: "Domestic Sea Freight",
    description: "Pengiriman laut antar-pulau untuk volume besar dengan opsi FCL dan LCL yang fleksibel.",
    iconClass: "fa-solid fa-ship",
  },
  {
    slug: "domestic-air-freight",
    title: "Domestic Air Freight",
    description: "Pengiriman udara cepat untuk kebutuhan waktu kritis dengan jaringan bandara utama.",
    iconClass: "fa-solid fa-plane-departure",
  },
  {
    slug: "inland-transport",
    title: "Inland Transport",
    description: "Distribusi via darat dengan armada yang andal untuk first-mile dan last-mile delivery.",
    iconClass: "fa-solid fa-truck",
  },
  {
    slug: "contract-logistics",
    title: "Contract Logistics",
    description: "Solusi logistik jangka panjang mencakup warehousing, distribusi, dan manajemen rantai pasok.",
    iconClass: "fa-solid fa-file-contract",
  },
];

export default function ServicesSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <h2 id="services-heading" className={styles.title}>
              Layanan Utama Kami
            </h2>
            <p className={styles.subtitle}>
              Dukungan end-to-end untuk kebutuhan logistik bisnis Anda, dari pengiriman laut,
              udara, hingga distribusi darat dan solusi kontrak jangka panjang.
            </p>
          </div>
          <div className={styles.headerAction}>
            <Link href="/layanan" className={styles.viewAllLink}>
              Lihat semua layanan
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={styles.grid} role="list">
          {SERVICES.map((service) => (
            <article
              key={service.slug}
              className={styles.card}
              role="listitem"
            >
              <div className={styles.iconWrapper}>
                <i
                  className={`${service.iconClass} ${styles.icon}`}
                  aria-hidden="true"
                />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
              <Link
                href={`/layanan/${service.slug}`}
                className={styles.cardLink}
                aria-label={`Selengkapnya tentang ${service.title}`}
              >
                Selengkapnya
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}