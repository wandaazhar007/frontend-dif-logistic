import { Metadata } from "next";
import Image from "next/image";
import styles from "./ContractLogisticsPage.module.scss";

export const metadata: Metadata = {
  title: "Contract Logistics | PT DIF Trans Logistik",
  description:
    "Layanan Contract Logistics PT DIF Trans Logistik untuk pengelolaan rantai pasok end-to-end yang terstruktur, transparan, dan dapat diskalakan.",
};

export default function ContractLogisticsPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        {/* HERO SECTION */}
        <section
          className={styles.hero}
          aria-labelledby="contract-logistics-heading"
        >
          <div className={styles.heroContent}>
            <p className={styles.breadcrumb}>
              <span>Beranda</span> <span>/</span> <span>Layanan</span>{" "}
              <span>/</span> <strong>Contract Logistics</strong>
            </p>

            <div className={styles.heroBadgeRow}>
              <span className={styles.badgePrimary}>
                <i className="fa-solid fa-layer-group" aria-hidden="true" />
                <span>Contract Logistics</span>
              </span>
              <span className={styles.badgeSoft}>
                <i className="fa-solid fa-handshake" aria-hidden="true" />
                <span>Solusi jangka panjang &amp; terintegrasi</span>
              </span>
            </div>

            <h1 id="contract-logistics-heading" className={styles.title}>
              Kemitraan Logistik Jangka Panjang untuk Rantai Pasok yang Lebih
              Terkelola.
            </h1>

            <p className={styles.lead}>
              Contract Logistics PT DIF Trans Logistik dirancang untuk perusahaan
              yang membutuhkan pengelolaan logistik secara end-to-end dalam
              jangka menengah hingga panjang. Kami membantu mengatur alur barang
              dari pemasok hingga pelanggan dengan proses yang terukur dan
              transparan.
            </p>

            <div className={styles.heroHighlights}>
              <div className={styles.highlightItem}>
                <h2>Fokus Layanan</h2>
                <ul>
                  <li>
                    <i
                      className="fa-solid fa-circle-check"
                      aria-hidden="true"
                    />
                    <span>Perencanaan dan eksekusi distribusi berkala.</span>
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-circle-check"
                      aria-hidden="true"
                    />
                    <span>Koordinasi multi-moda: laut, udara, dan darat.</span>
                  </li>
                  <li>
                    <i
                      className="fa-solid fa-circle-check"
                      aria-hidden="true"
                    />
                    <span>Pengelolaan stok dan aliran barang yang terencana.</span>
                  </li>
                </ul>
              </div>

              <div className={styles.highlightItem}>
                <h2>Untuk Siapa?</h2>
                <ul>
                  <li>
                    <i
                      className="fa-solid fa-building"
                      aria-hidden="true"
                    />
                    <span>Perusahaan dengan jaringan cabang dan gudang.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-store" aria-hidden="true" />
                    <span>FMCG, retail, dan distribusi nasional.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-industry" aria-hidden="true" />
                    <span>Industri yang membutuhkan suplai teratur.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* HERO SIDE PHOTO */}
          <div className={styles.heroPhotoWrapper}>
            <div className={styles.photoCard}>
              <div className={styles.photoInner}>
                <Image
                  src="/images/kantor-dif-logistics.jpg"
                  alt="Kantor PT DIF Trans Logistik"
                  fill
                  className={styles.photo}
                  priority
                />
              </div>
              <div className={styles.photoCaption}>
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
                <div>
                  <p className={styles.captionTitle}>Kantor &amp; Operasional</p>
                  <p className={styles.captionText}>
                    Tim kami bekerja terkoordinasi dari kantor operasional untuk
                    mengelola alur logistik klien secara berkelanjutan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className={styles.overviewSection}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewCol}>
              <h2>Gambaran Layanan Contract Logistics</h2>
              <p>
                Contract Logistics bukan sekadar pengiriman barang, tetapi
                kemitraan jangka panjang untuk mengelola proses logistik dari
                hulu ke hilir. PT DIF Trans Logistik membantu merancang, mengoperasikan,
                dan mengoptimalkan alur distribusi sesuai kebutuhan unik setiap
                perusahaan.
              </p>
              <p>
                Kami bekerja berdasarkan SLA yang disepakati, indikator kinerja
                yang jelas, serta rutinitas evaluasi agar layanan terus
                berkembang mengikuti dinamika bisnis dan pasar.
              </p>

              <div className={styles.callout}>
                <i className="fa-solid fa-circle-info" aria-hidden="true" />
                <p>
                  Pendekatan contract logistics memungkinkan perusahaan lebih
                  fokus pada bisnis inti, sementara pengelolaan logistik ditangani
                  oleh tim yang berdedikasi dan berpengalaman.
                </p>
              </div>
            </div>

            <div className={styles.pillarCol}>
              <h3>Pilar Utama Contract Logistics Kami</h3>
              <div className={styles.pillarList}>
                <div className={styles.pillarCard}>
                  <div className={styles.pillarIcon}>
                    <i
                      className="fa-solid fa-diagram-project"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h4>Perencanaan &amp; Desain Solusi</h4>
                    <p>
                      Analisis kebutuhan, desain jaringan distribusi, dan
                      penyusunan skema layanan yang selaras dengan strategi
                      perusahaan Anda.
                    </p>
                  </div>
                </div>

                <div className={styles.pillarCard}>
                  <div className={styles.pillarIcon}>
                    <i className="fa-solid fa-gears" aria-hidden="true" />
                  </div>
                  <div>
                    <h4>Operasional Terintegrasi</h4>
                    <p>
                      Pengelolaan aktivitas harian termasuk pergudangan,
                      distribusi, dan koordinasi dengan moda transportasi lainnya.
                    </p>
                  </div>
                </div>

                <div className={styles.pillarCard}>
                  <div className={styles.pillarIcon}>
                    <i className="fa-solid fa-chart-line" aria-hidden="true" />
                  </div>
                  <div>
                    <h4>Monitoring &amp; Improvement</h4>
                    <p>
                      Pengukuran kinerja layanan secara berkala dan implementasi
                      perbaikan berkelanjutan untuk meningkatkan efisiensi.
                    </p>
                  </div>
                </div>

                <div className={styles.pillarCard}>
                  <div className={styles.pillarIcon}>
                    <i className="fa-solid fa-hand-holding-hand" aria-hidden="true" />
                  </div>
                  <div>
                    <h4>Kemitraan &amp; Transparansi</h4>
                    <p>
                      Komunikasi yang terbuka dan laporan berkala agar semua
                      pihak memiliki visibilitas yang sama terhadap kinerja
                      logistik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE / BENEFIT SECTION */}
        <section className={styles.benefitSection}>
          <div className={styles.benefitHeader}>
            <h2>Keunggulan Contract Logistics PT DIF Trans Logistik</h2>
            <p>
              Kami menggabungkan pendekatan strategis, eksekusi operasional yang
              disiplin, dan komunikasi yang konsisten untuk menghadirkan layanan
              contract logistics yang dapat diandalkan.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fa-solid fa-clipboard-check" aria-hidden="true" />
              </div>
              <h3>Struktur Layanan Berbasis SLA</h3>
              <p>
                Target kinerja yang jelas, terukur, dan disepakati bersama untuk
                memastikan kualitas layanan tetap terjaga.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fa-solid fa-arrows-spin" aria-hidden="true" />
              </div>
              <h3>Fleksibel &amp; Dapat Diskalakan</h3>
              <p>
                Layanan dapat disesuaikan dengan pertumbuhan volume, perluasan
                jaringan, maupun perubahan strategi bisnis.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fa-solid fa-shield-heart" aria-hidden="true" />
              </div>
              <h3>Fokus pada Keandalan Operasional</h3>
              <p>
                Prosedur kerja yang rapi, koordinasi lintas tim, dan perhatian
                terhadap detail operasional.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fa-solid fa-user-group" aria-hidden="true" />
              </div>
              <h3>Tim Khusus Akun Perusahaan</h3>
              <p>
                Setiap klien memiliki titik kontak yang jelas untuk memudahkan
                komunikasi dan eskalasi kebutuhan.
              </p>
            </div>
          </div>
        </section>

        {/* SIMPLE PROCESS / ENGAGEMENT SECTION */}
        <section className={styles.processSection}>
          <div className={styles.processCard}>
            <div className={styles.processHeader}>
              <h2>Tahapan Kerja Sama Contract Logistics</h2>
              <p>
                Kami memastikan proses onboarding dan implementasi layanan berjalan
                terarah, dengan tahapan yang jelas dan terkomunikasi dengan baik.
              </p>
            </div>

            <ol className={styles.processList}>
              <li>
                <span className={styles.stepNumber}>1</span>
                <div>
                  <h3>Diskusi Kebutuhan &amp; Ruang Lingkup</h3>
                  <p>
                    Memahami profil bisnis, jaringan distribusi, dan ekspektasi
                    kinerja logistik perusahaan Anda.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepNumber}>2</span>
                <div>
                  <h3>Desain Solusi &amp; Proposal</h3>
                  <p>
                    Penyusunan skema layanan, SLA, dan rencana implementasi yang
                    selaras dengan strategi perusahaan.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepNumber}>3</span>
                <div>
                  <h3>Implementasi Bertahap</h3>
                  <p>
                    Pelaksanaan layanan secara bertahap dengan pemantauan ketat
                    pada fase awal kerja sama.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepNumber}>4</span>
                <div>
                  <h3>Monitoring &amp; Review Berkala</h3>
                  <p>
                    Evaluasi rutin dan penyesuaian layanan berdasarkan data dan
                    masukan dari kedua belah pihak.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Pertimbangkan Contract Logistics untuk bisnis Anda?</h2>
              <p>
                Jika Anda ingin membangun kerja sama logistik jangka panjang,
                kami siap membantu merancang solusi yang sesuai dengan kebutuhan
                dan budaya kerja perusahaan Anda.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href="/kontak" className={styles.ctaPrimary}>
                <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                <span>Jadwalkan Konsultasi</span>
              </a>
              <a href="tel:+6281390903900" className={styles.ctaSecondary}>
                <i className="fa-solid fa-phone" aria-hidden="true" />
                <span>Hubungi +62 813 9090 3900</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}