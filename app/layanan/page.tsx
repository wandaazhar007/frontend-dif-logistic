import { Metadata } from "next";
import Link from "next/link";
import styles from "./LayananPage.module.scss";

export const metadata: Metadata = {
  title: "Layanan | PT DIF Trans Logistik",
  description:
    "Daftar layanan PT DIF Trans Logistik: Domestic Sea Freight, Domestic Air Freight, Inland Transport, Contract Logistics, dan On-Call Logistics.",
};

type ServiceItem = {
  slug: string;
  name: string;
  shortLabel: string;
  description: string;
  iconClass: string;
};

const SERVICES: ServiceItem[] = [
  {
    slug: "domestic-sea-freight",
    name: "Domestic Sea Freight",
    shortLabel: "Pengiriman via laut antar-pulau",
    description:
      "Solusi pengiriman laut FCL & LCL untuk pergerakan barang antar-pulau dengan perencanaan rute dan jadwal yang terukur.",
    iconClass: "fa-solid fa-ship",
  },
  {
    slug: "domestic-air-freight",
    name: "Domestic Air Freight",
    shortLabel: "Pengiriman udara cepat",
    description:
      "Layanan pengiriman via udara untuk kebutuhan yang sensitif terhadap waktu dan membutuhkan lead time yang kompetitif.",
    iconClass: "fa-solid fa-plane-up",
  },
  {
    slug: "inland-transport",
    name: "Inland Transport",
    shortLabel: "Distribusi via jalur darat",
    description:
      "Jaringan armada darat untuk menghubungkan pelabuhan, gudang, dan titik distribusi di berbagai kota dan wilayah.",
    iconClass: "fa-solid fa-truck",
  },
  {
    slug: "contract-logistics",
    name: "Contract Logistics",
    shortLabel: "Kemitraan logistik jangka panjang",
    description:
      "Pengelolaan logistik end-to-end berbasis SLA untuk mendukung strategi rantai pasok perusahaan Anda.",
    iconClass: "fa-solid fa-layer-group",
  },
  {
    slug: "on-call-logistics",
    name: "On-Call Logistics",
    shortLabel: "Layanan siap-panggil",
    description:
      "Dukungan logistik insidental dan mendesak di luar jadwal rutin, dengan fokus pada respon cepat dan koordinasi terukur.",
    iconClass: "fa-solid fa-bell",
  },
];

export default function LayananPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        {/* HERO / INTRO */}
        <section className={styles.heroSection} aria-labelledby="services-heading">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Layanan DIF Trans Logistik</p>
            <h1 id="services-heading" className={styles.title}>
              Solusi Logistik Terintegrasi untuk Kebutuhan Bisnis Anda.
            </h1>
            <p className={styles.lead}>
              PT DIF Trans Logistik menyediakan rangkaian layanan logistik yang saling
              terhubung—mulai dari pengiriman laut, udara, distribusi darat,
              hingga contract logistics dan on-call support—untuk mendukung
              pertumbuhan operasi bisnis Anda di berbagai wilayah.
            </p>

            <div className={styles.heroMetaRow}>
              <div className={styles.metaItem}>
                <i className="fa-solid fa-diagram-project" aria-hidden="true" />
                <div>
                  <p className={styles.metaLabel}>Pendekatan end-to-end</p>
                  <p className={styles.metaValue}>
                    Layanan yang dapat dikombinasikan sesuai kebutuhan rantai pasok
                    dan jaringan distribusi Anda.
                  </p>
                </div>
              </div>
              <div className={styles.metaItem}>
                <i className="fa-solid fa-people-group" aria-hidden="true" />
                <div>
                  <p className={styles.metaLabel}>Tim yang terkoordinasi</p>
                  <p className={styles.metaValue}>
                    Dukungan operasional yang fokus pada kejelasan komunikasi dan
                    keandalan eksekusi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className={styles.heroAside}>
            <div className={styles.heroAsideCard}>
              <h2>Butuh bantuan memilih layanan yang tepat?</h2>
              <p>
                Sampaikan profil bisnis dan kebutuhan pengiriman Anda. Tim kami
                dapat membantu merekomendasikan kombinasi layanan yang paling
                relevan dan efisien.
              </p>
              <div className={styles.heroActions}>
                <Link href="/kontak" className={styles.primaryBtn}>
                  <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                  <span>Konsultasi dengan Tim Kami</span>
                </Link>
                <a href="tel:+6281390903900" className={styles.secondaryBtn}>
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  <span>Hubungi +62 813 9090 3900</span>
                </a>
              </div>
            </div>
          </aside>
        </section>

        {/* SERVICES GRID */}
        <section
          className={styles.servicesSection}
          aria-label="Daftar layanan PT DIF Trans Logistik"
        >
          <header className={styles.sectionHeader}>
            <h2>Layanan Utama Kami</h2>
            <p>
              Setiap layanan dirancang untuk menjawab kebutuhan spesifik, namun
              tetap dapat diintegrasikan satu sama lain untuk membentuk solusi
              logistik yang menyeluruh.
            </p>
          </header>

          <div className={styles.servicesGrid}>
            {SERVICES.map((service) => (
              <article key={service.slug} className={styles.serviceCard}>
                <div className={styles.iconWrap}>
                  <i className={service.iconClass} aria-hidden="true" />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.serviceLabel}>{service.shortLabel}</p>
                  <h3 className={styles.serviceTitle}>{service.name}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <Link
                    href={`/layanan/${service.slug}`}
                    className={styles.detailLink}
                    aria-label={`Lihat detail layanan ${service.name}`}
                  >
                    <span>Pelajari lebih lanjut</span>
                    <i
                      className="fa-solid fa-arrow-up-right-from-square"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA BOTTOM */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Ingin menggabungkan beberapa layanan dalam satu skema?</h2>
              <p>
                Kami dapat membantu menyusun solusi logistik terpadu yang
                mengombinasikan layanan laut, udara, darat, hingga contract
                logistics dan on-call sesuai kebutuhan operasi Anda.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/kontak" className={styles.ctaPrimary}>
                <i className="fa-solid fa-envelope-open-text" aria-hidden="true" />
                <span>Hubungi</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}