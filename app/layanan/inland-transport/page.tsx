import { Metadata } from "next";
import styles from "./InlandTransportPage.module.scss";

export const metadata: Metadata = {
  title: "Inland Transport | PT DIF Trans Logistik",
  description:
    "Layanan Inland Transport PT DIF Trans Logistik untuk distribusi barang via darat dengan jaringan armada terkoordinasi di seluruh Indonesia.",
};

export default function InlandTransportPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        {/* HERO SECTION */}
        <section className={styles.hero} aria-labelledby="inland-heading">
          <div className={styles.heroTopRow}>
            <p className={styles.breadcrumb}>
              <span>Beranda</span> <span>/</span> <span>Layanan</span>{" "}
              <span>/</span> <strong>Inland Transport</strong>
            </p>

            <div className={styles.badgeRow}>
              <span className={styles.badgePrimary}>
                <i className="fa-solid fa-truck" aria-hidden="true" />
                <span>Inland Transport</span>
              </span>
              <span className={styles.badgeSecondary}>
                <i className="fa-solid fa-road" aria-hidden="true" />
                <span>Distribusi via jalur darat</span>
              </span>
            </div>
          </div>

          <div className={styles.heroMain}>
            <div className={styles.heroContent}>
              <h1 id="inland-heading" className={styles.title}>
                Distribusi Darat yang Terencana untuk Menjaga Rantai Pasok Bisnis Anda.
              </h1>
              <p className={styles.lead}>
                Inland Transport PT DIF Trans Logistik menghubungkan pelabuhan, gudang,
                dan titik distribusi Anda melalui jaringan transportasi darat yang
                terstruktur. Kami membantu memastikan barang bergerak tepat waktu,
                aman, dan sesuai komitmen layanan ke pelanggan.
              </p>

              <div className={styles.heroStats}>
                <div className={styles.statCard}>
                  <i className="fa-solid fa-warehouse" aria-hidden="true" />
                  <div>
                    <p className={styles.statLabel}>Dari &amp; ke gudang utama</p>
                    <p className={styles.statValue}>
                      Mendukung distribusi dari hub pusat ke cabang dan outlet.
                    </p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <i className="fa-solid fa-route" aria-hidden="true" />
                  <div>
                    <p className={styles.statLabel}>Rute lintas kota &amp; provinsi</p>
                    <p className={styles.statValue}>
                      Menjangkau area utama untuk kebutuhan distribusi nasional.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className={styles.heroAside}>
              <div className={styles.heroAsideCard}>
                <h2>Untuk kebutuhan distribusi harian &amp; berkala.</h2>
                <p>
                  Layanan Inland Transport kami mendukung pengiriman dari pintu ke
                  pintu, dari pelabuhan ke gudang, hingga distribusi last-mile
                  sesuai karakter bisnis Anda.
                </p>
                <ul className={styles.heroAsideList}>
                  <li>
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    <span>Distribusi barang FMCG, retail, dan e-commerce.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    <span>Pengiriman volume besar maupun parsial.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    <span>Terintegrasi dengan layanan laut dan udara.</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className={styles.overviewSection}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewBlock}>
              <h2>Gambaran Layanan Inland Transport</h2>
              <p>
                Inland Transport berperan sebagai penghubung utama dalam rantai
                pasok, memastikan pergerakan barang dari satu titik ke titik lain
                berjalan mulus. PT DIF Trans Logistik mengoordinasikan armada darat,
                rute, serta jadwal keberangkatan dan kedatangan agar distribusi
                terlaksana sesuai perencanaan.
              </p>
              <p>
                Melalui perencanaan rute yang matang, penjadwalan yang jelas, dan
                komunikasi yang transparan, kami membantu bisnis menjaga
                ketersediaan stok di berbagai lokasi tanpa mengorbankan efisiensi
                biaya.
              </p>
            </div>

            <div className={styles.overviewHighlights}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>
                  <i className="fa-solid fa-truck-moving" aria-hidden="true" />
                </div>
                <div>
                  <h3>Full Truckload &amp; Partial Load</h3>
                  <p>
                    Mendukung kebutuhan pengiriman muatan penuh maupun parsial,
                    disesuaikan dengan volume dan pola distribusi Anda.
                  </p>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>
                  <i
                    className="fa-solid fa-arrows-left-right-to-line"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3>Hub-to-Hub &amp; Last-mile</h3>
                  <p>
                    Menjangkau pergerakan antar hub utama hingga distribusi tahap
                    akhir ke titik-titik tujuan tertentu.
                  </p>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>
                  <i className="fa-solid fa-clock" aria-hidden="true" />
                </div>
                <div>
                  <h3>Penjadwalan Rutin</h3>
                  <p>
                    Jadwal keberangkatan dan kedatangan teratur untuk mendukung
                    pola distribusi harian, mingguan, atau sesuai kebutuhan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NETWORK & FLEET SECTION */}
        <section className={styles.networkSection}>
          <div className={styles.networkHeader}>
            <h2>Jaringan &amp; Armada Inland Transport</h2>
            <p>
              Layanan darat kami terhubung dengan titik-titik penting dalam
              jaringan logistik, didukung armada yang sesuai dengan karakter
              barang dan volume pengiriman.
            </p>
          </div>

          <div className={styles.networkGrid}>
            <div className={styles.networkCard}>
              <div className={styles.networkIcon}>
                <i className="fa-solid fa-city" aria-hidden="true" />
              </div>
              <h3>Area &amp; Koridor Utama</h3>
              <p>
                Menghubungkan gudang dan titik distribusi di area-area strategis,
                termasuk koridor industri dan pusat perdagangan domestik.
              </p>
              <ul className={styles.networkList}>
                <li>
                  <i className="fa-solid fa-location-dot" aria-hidden="true" />
                  <span>Koridor kota-kota besar dan sekitar pelabuhan utama.</span>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot" aria-hidden="true" />
                  <span>Hub logistik yang dekat dengan pusat konsumen.</span>
                </li>
              </ul>
            </div>

            <div className={styles.networkCard}>
              <div className={styles.networkIcon}>
                <i className="fa-solid fa-truck-front" aria-hidden="true" />
              </div>
              <h3>Jenis Armada</h3>
              <p>
                Pemilihan jenis armada disesuaikan dengan profil barang, rute,
                dan frekuensi pengiriman untuk menjaga efisiensi dan keamanan.
              </p>
              <ul className={styles.networkList}>
                <li>
                  <i className="fa-solid fa-circle-small" aria-hidden="true" />
                  <span>Truk kecil hingga medium untuk distribusi kota.</span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-small" aria-hidden="true" />
                  <span>Truk besar untuk lintas kota dan antar provinsi.</span>
                </li>
              </ul>
            </div>

            <div className={styles.networkCard}>
              <div className={styles.networkIcon}>
                <i className="fa-solid fa-diagram-project" aria-hidden="true" />
              </div>
              <h3>Integrasi Multi-Moda</h3>
              <p>
                Inland Transport terhubung dengan layanan laut dan udara untuk
                mendukung skema end-to-end sesuai kebutuhan pengiriman Anda.
              </p>
              <ul className={styles.networkList}>
                <li>
                  <i className="fa-solid fa-link" aria-hidden="true" />
                  <span>Pengambilan dan pengantaran ke pelabuhan atau bandara.</span>
                </li>
                <li>
                  <i className="fa-solid fa-link" aria-hidden="true" />
                  <span>Koordinasi lintas moda dengan jadwal yang sinkron.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className={styles.benefitSection}>
          <div className={styles.benefitHeader}>
            <h2>Keunggulan Inland Transport PT DIF Trans Logistik</h2>
            <p>
              Kami mengedepankan kejelasan rencana, komunikasi yang terbuka, dan
              pengelolaan operasional yang disiplin di setiap pergerakan armada.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fa-solid fa-clipboard-list" aria-hidden="true" />
              </div>
              <h3>Perencanaan Rute yang Terukur</h3>
              <p>
                Rute dan jadwal disusun berdasarkan kebutuhan bisnis, kondisi
                lapangan, dan target waktu yang disepakati.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fa-solid fa-scale-balanced" aria-hidden="true" />
              </div>
              <h3>Efisiensi Biaya &amp; Kapasitas</h3>
              <p>
                Pengaturan kapasitas muatan membantu menyeimbangkan efisiensi
                biaya dan keandalan layanan.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fa-solid fa-shield-heart" aria-hidden="true" />
              </div>
              <h3>Fokus pada Keamanan Barang</h3>
              <p>
                Barang ditangani dengan prosedur standar dan pengawasan yang
                jelas di sepanjang perjalanan.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <i className="fa-solid fa-headset" aria-hidden="true" />
              </div>
              <h3>Dukungan Operasional yang Responsif</h3>
              <p>
                Tim siap membantu ketika terjadi perubahan kebutuhan, kondisi
                rute, atau penyesuaian jadwal.
              </p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Siap mengoptimalkan distribusi darat bisnis Anda?</h2>
              <p>
                Ceritakan kebutuhan rute, volume pengiriman, dan frekuensi
                distribusi. Tim PT DIF Trans Logistik akan membantu merancang solusi
                Inland Transport yang sesuai dengan profil operasional Anda.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href="/kontak" className={styles.ctaPrimary}>
                <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                <span>Diskusikan Inland Transport</span>
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