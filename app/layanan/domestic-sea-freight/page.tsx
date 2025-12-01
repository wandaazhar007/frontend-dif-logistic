import { Metadata } from "next";
import styles from "./DomesticSeaFreightPage.module.scss";

export const metadata: Metadata = {
  title: "Domestic Sea Freight (FCL & LCL) | PT DIF Trans Logistik",
  description:
    "Layanan Domestic Sea Freight PT DIF Trans Logistik untuk pengiriman antar-pulau via laut, baik FCL maupun LCL, dengan pengelolaan yang aman, terukur, dan tepat waktu.",
};

export default function DomesticSeaFreightPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        {/* HERO SECTION */}
        <section className={styles.hero} aria-labelledby="domestic-sea-heading">
          <div className={styles.heroContent}>
            <p className={styles.breadcrumb}>
              <span>Beranda</span> <span>/</span> <span>Layanan</span>{" "}
              <span>/</span> <strong>Domestic Sea Freight</strong>
            </p>

            <span className={styles.badge}>
              <i className="fa-solid fa-ship" aria-hidden="true" />
              <span>Domestic Sea Freight (FCL &amp; LCL)</span>
            </span>

            <h1 id="domestic-sea-heading" className={styles.title}>
              Solusi Pengiriman Laut Antar-Pulau yang Aman dan Efisien.
            </h1>

            <p className={styles.lead}>
              PT DIF Trans Logistik menyediakan layanan pengiriman laut domestik
              untuk kebutuhan FCL dan LCL, dengan pengelolaan yang terencana,
              transparan, dan tepat waktu, mendukung arus distribusi bisnis Anda
              di seluruh Indonesia.
            </p>

            <div className={styles.heroHighlights}>
              <div className={styles.heroHighlightItem}>
                <i
                  className="fa-solid fa-route"
                  aria-hidden="true"
                />
                <div>
                  <p className={styles.highlightLabel}>Rute antar-pulau utama</p>
                  <p className={styles.highlightValue}>
                    Jawa, Sumatra, Kalimantan, Sulawesi, Bali, dan lainnya.
                  </p>
                </div>
              </div>

              <div className={styles.heroHighlightItem}>
                <i
                  className="fa-solid fa-clock-rotate-left"
                  aria-hidden="true"
                />
                <div>
                  <p className={styles.highlightLabel}>Lead time terukur</p>
                  <p className={styles.highlightValue}>
                    Jadwal berangkat dan tiba yang jelas dan dapat dipantau.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroSideCard}>
            <div className={styles.heroSideIcon}>
              <i className="fa-solid fa-anchor" aria-hidden="true" />
            </div>
            <h2>Untuk siapa layanan ini?</h2>
            <p>
              Layanan Domestic Sea Freight cocok untuk perusahaan yang memiliki
              volume pengiriman besar atau rutin, seperti distribusi FMCG,
              bahan baku industri, retail chain, hingga kebutuhan proyek
              khusus di berbagai wilayah Indonesia.
            </p>
            <ul className={styles.heroSideList}>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>Distribusi berkala antar gudang &amp; cabang</span>
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>Pengiriman partai besar dengan biaya efisien</span>
              </li>
              <li>
                <i className="fa-solid fa-check" aria-hidden="true" />
                <span>Proyek logistik jangka menengah &amp; panjang</span>
              </li>
            </ul>
          </div>
        </section>

        {/* OVERVIEW + FCL / LCL */}
        <section className={styles.overviewSection}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewCol}>
              <h2>Gambaran Layanan</h2>
              <p>
                Domestic Sea Freight PT DIF Trans Logistik dirancang untuk
                mengoptimalkan biaya dan keandalan pengiriman antar-pulau.
                Melalui jaringan mitra pelayaran dan terminal yang terpercaya,
                kami membantu bisnis menjaga kelancaran supply chain tanpa
                mengorbankan kualitas dan keamanan pengiriman.
              </p>
              <p>
                Tim kami mengelola mulai dari perencanaan rute, konsolidasi
                muatan, pengurusan dokumen, hingga koordinasi dengan pihak
                pelabuhan dan trucking, sehingga Anda dapat fokus pada
                pengembangan bisnis inti.
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                  <span>Monitoring pengiriman secara berkala.</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                  <span>Penanganan barang dengan prosedur standar yang jelas.</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                  <span>Koordinasi intensif dengan mitra pelayaran dan terminal.</span>
                </li>
              </ul>
            </div>

            <div className={styles.typesCol}>
              <h3>Jenis Layanan: FCL &amp; LCL</h3>
              <div className={styles.typeCard}>
                <div className={styles.typeIcon}>
                  <i className="fa-solid fa-boxes-stacked" aria-hidden="true" />
                </div>
                <div>
                  <h4>FCL (Full Container Load)</h4>
                  <p>
                    Cocok untuk volume barang besar dengan kebutuhan satu
                    kontainer penuh. Memberikan kontrol lebih pada jadwal,
                    handling, dan keamanan muatan.
                  </p>
                </div>
              </div>

              <div className={styles.typeCard}>
                <div className={styles.typeIcon}>
                  <i className="fa-solid fa-layer-group" aria-hidden="true" />
                </div>
                <div>
                  <h4>LCL (Less than Container Load)</h4>
                  <p>
                    Solusi ekonomis untuk volume barang yang tidak mencapai
                    satu kontainer penuh. Barang Anda dikonsolidasikan bersama
                    pengirim lain, dengan pengelolaan yang tetap terstruktur.
                  </p>
                </div>
              </div>

              <div className={styles.noteBox}>
                <i
                  className="fa-solid fa-circle-info"
                  aria-hidden="true"
                />
                <p>
                  Tim kami dapat membantu menganalisis profil pengiriman Anda
                  untuk menentukan apakah FCL atau LCL yang paling efisien dari
                  sisi biaya dan waktu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className={styles.benefitSection}>
          <div className={styles.benefitHeader}>
            <h2>Keunggulan Domestic Sea Freight PT DIF Trans Logistik</h2>
            <p>
              Kami menggabungkan perencanaan yang matang, jaringan mitra yang
              kuat, dan komunikasi yang transparan untuk memastikan setiap
              pengiriman laut berjalan dengan lancar.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fa-solid fa-shield-halved" aria-hidden="true" />
              </div>
              <h3>Keamanan &amp; Kepastian</h3>
              <p>
                Proses handling dan dokumentasi yang terstruktur untuk
                meminimalkan risiko kerusakan atau keterlambatan.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fa-solid fa-money-bill-wave" aria-hidden="true" />
              </div>
              <h3>Biaya Efisien</h3>
              <p>
                Optimasi rute dan konsolidasi muatan untuk membantu menekan
                biaya logistik tanpa mengurangi kualitas layanan.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i
                  className="fa-solid fa-headset"
                  aria-hidden="true"
                />
              </div>
              <h3>Tim Support Responsif</h3>
              <p>
                Tim operasional dan customer service yang siap membantu
                memberikan update serta solusi ketika dibutuhkan.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i
                  className="fa-solid fa-globe-asia"
                  aria-hidden="true"
                />
              </div>
              <h3>Jangkauan Luas</h3>
              <p>
                Jaringan rute laut yang mencakup pelabuhan-pelabuhan utama di
                Indonesia, mendukung ekspansi bisnis Anda.
              </p>
            </div>
          </div>
        </section>

        {/* SIMPLE PROCESS / CTA */}
        <section className={styles.processSection}>
          <div className={styles.processCard}>
            <div className={styles.processHeader}>
              <h2>Alur Kerja Singkat</h2>
              <p>
                Kami menjaga proses tetap sederhana dan jelas, dari permintaan
                penawaran hingga barang tiba di tujuan.
              </p>
            </div>

            <ol className={styles.processList}>
              <li>
                <span className={styles.stepNumber}>1</span>
                <div>
                  <h3>Pengumpulan Kebutuhan</h3>
                  <p>
                    Anda menyampaikan jenis barang, volume, rute, dan jadwal
                    pengiriman yang diinginkan.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepNumber}>2</span>
                <div>
                  <h3>Penawaran &amp; Perencanaan Rute</h3>
                  <p>
                    Tim kami menyusun skema pengiriman, estimasi waktu, dan
                    penawaran biaya yang transparan.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepNumber}>3</span>
                <div>
                  <h3>Eksekusi &amp; Monitoring</h3>
                  <p>
                    Proses stuffing, pengapalan, dan pergerakan barang dipantau
                    secara berkala dan diinformasikan kepada Anda.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepNumber}>4</span>
                <div>
                  <h3>Barang Tiba &amp; Konfirmasi</h3>
                  <p>
                    Setelah barang tiba di tujuan, tim kami melakukan konfirmasi
                    dan memastikan seluruh proses selesai dengan baik.
                  </p>
                </div>
              </li>
            </ol>

            <div className={styles.processCta}>
              <a href="/kontak" className={styles.ctaButton}>
                <i
                  className="fa-solid fa-phone-volume"
                  aria-hidden="true"
                />
                <span>Konsultasikan Pengiriman Laut Anda</span>
              </a>
              <p className={styles.ctaNote}>
                Atau hubungi langsung{" "}
                <a href="tel:+6281390903900">+62 813 9090 3900</a> untuk
                diskusi cepat mengenai kebutuhan Domestic Sea Freight Anda.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}