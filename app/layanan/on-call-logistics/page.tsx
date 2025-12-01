import { Metadata } from "next";
import Image from "next/image";
import styles from "./OnCallLogisticsPage.module.scss";

export const metadata: Metadata = {
  title: "On-Call Logistics | PT DIF Trans Logistik",
  description:
    "Layanan On-Call Logistics PT DIF Trans Logistik untuk kebutuhan pengiriman mendesak, insidental, dan situasional dengan respon yang cepat dan terukur.",
};

export default function OnCallLogisticsPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        {/* HERO SECTION */}
        <section
          className={styles.hero}
          aria-labelledby="oncall-logistics-heading"
        >
          <div className={styles.heroTextCol}>
            <p className={styles.breadcrumb}>
              <span>Beranda</span> <span>/</span> <span>Layanan</span>{" "}
              <span>/</span> <strong>On-Call Logistics</strong>
            </p>

            <div className={styles.badgeRow}>
              <span className={styles.badgePrimary}>
                <i className="fa-solid fa-bell" aria-hidden="true" />
                <span>On-Call Logistics</span>
              </span>
              <span className={styles.badgeSoft}>
                <i className="fa-solid fa-bolt" aria-hidden="true" />
                <span>Respons cepat untuk kebutuhan mendesak</span>
              </span>
            </div>

            <h1 id="oncall-logistics-heading" className={styles.title}>
              Dukungan Logistik Siap Panggil untuk Situasi yang Tidak Bisa
              Menunggu.
            </h1>

            <p className={styles.lead}>
              Layanan On-Call Logistics PT DIF Trans Logistik dirancang untuk
              menjawab kebutuhan pengiriman insidental, mendesak, atau situasional
              di luar pola distribusi rutin. Tim kami siap membantu ketika Anda
              membutuhkan respon cepat dengan eksekusi yang tetap terukur.
            </p>

            <div className={styles.heroInfoRow}>
              <div className={styles.infoItem}>
                <i className="fa-solid fa-clock" aria-hidden="true" />
                <div>
                  <p className={styles.infoLabel}>Respon permintaan</p>
                  <p className={styles.infoValue}>Secepat mungkin sesuai SLA yang disepakati.</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <i className="fa-solid fa-arrows-turn-to-dots" aria-hidden="true" />
                <div>
                  <p className={styles.infoLabel}>Skema fleksibel</p>
                  <p className={styles.infoValue}>
                    Menyesuaikan kebutuhan moda, rute, dan jadwal pengiriman.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HERO PHOTO SIDE */}
          <div className={styles.heroPhotoCol}>
            <div className={styles.heroPhotoCard}>
              <div className={styles.heroPhotoInner}>
                <Image
                  src="/images/career1.jpg"
                  alt="Tim operasional PT DIF Trans Logistik"
                  fill
                  className={styles.heroPhoto}
                  priority
                />
              </div>
              <div className={styles.heroPhotoCaption}>
                <i className="fa-solid fa-users" aria-hidden="true" />
                <div>
                  <p className={styles.captionTitle}>Tim On-Call Operasional</p>
                  <p className={styles.captionText}>
                    Tim yang fokus menangani permintaan mendesak dengan koordinasi
                    lintas moda dan lintas area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW + WHEN TO USE */}
        <section className={styles.overviewSection}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewCol}>
              <h2>Apa itu Layanan On-Call Logistics?</h2>
              <p>
                On-Call Logistics adalah layanan yang memberikan fleksibilitas
                tambahan di luar skema distribusi reguler. Ketika terjadi lonjakan
                permintaan, kebutuhan pengiriman insidental, atau situasi khusus
                yang memerlukan penanganan segera, PT DIF Trans Logistik hadir untuk
                membantu menjembatani kebutuhan tersebut.
              </p>
              <p>
                Layanan ini mengutamakan kejelasan komunikasi, kecepatan respon,
                serta koordinasi yang rapi agar pengiriman tetap berjalan
                terencana meskipun terjadi di luar pola rutin.
              </p>

              <div className={styles.callout}>
                <i className="fa-solid fa-circle-info" aria-hidden="true" />
                <p>
                  Layanan on-call dapat terhubung dengan moda laut, udara, dan
                  darat, tergantung karakter kebutuhan dan urgensi pengiriman.
                </p>
              </div>
            </div>

            <div className={styles.scenarioCol}>
              <h3>Kapan On-Call Logistics Dibutuhkan?</h3>
              <ul className={styles.scenarioList}>
                <li>
                  <i className="fa-solid fa-triangle-exclamation" aria-hidden="true" />
                  <div>
                    <h4>Kebutuhan mendadak di luar jadwal rutin</h4>
                    <p>
                      Ketika terjadi lonjakan pesanan atau permintaan khusus yang
                      tidak tercakup dalam rencana distribusi reguler.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-screwdriver-wrench" aria-hidden="true" />
                  <div>
                    <h4>Pengiriman komponen / sparepart kritikal</h4>
                    <p>
                      Barang yang berpengaruh pada kelancaran operasional dan
                      membutuhkan penanganan cepat.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-calendar-xmark" aria-hidden="true" />
                  <div>
                    <h4>Permintaan khusus dari pelanggan utama</h4>
                    <p>
                      Kebutuhan yang muncul tiba-tiba dari pelanggan prioritas yang
                      perlu dijaga komitmen layanannya.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-route" aria-hidden="true" />
                  <div>
                    <h4>Penyesuaian rute sementara</h4>
                    <p>
                      Ketika ada perubahan rute atau tujuan pengiriman yang harus
                      segera ditangani tanpa mengganggu pola utama.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICE FEATURES / VALUE */}
        <section className={styles.featureSection}>
          <div className={styles.featureHeader}>
            <h2>Nilai Tambah Layanan On-Call Logistics PT DIF Trans Logistik</h2>
            <p>
              Kami menjaga agar setiap permintaan mendesak tetap mengikuti
              prinsip yang terukur: jelas dalam komunikasi, rapi dalam eksekusi,
              dan transparan dalam pelaporan.
            </p>
          </div>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fa-solid fa-headset" aria-hidden="true" />
              </div>
              <h3>Single Point of Contact</h3>
              <p>
                Titik kontak yang jelas untuk mengkoordinasikan kebutuhan on-call
                dari awal hingga akhir proses pengiriman.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fa-solid fa-wave-square" aria-hidden="true" />
              </div>
              <h3>Fleksibilitas Moda &amp; Rute</h3>
              <p>
                Menentukan moda dan rute terbaik berdasarkan urgensi, jarak, dan
                karakter barang yang dikirim.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fa-solid fa-eye" aria-hidden="true" />
              </div>
              <h3>Visibilitas Progres Pengiriman</h3>
              <p>
                Update berkala yang membantu Anda memantau status pengiriman di
                titik-titik penting perjalanan barang.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fa-solid fa-shield-halved" aria-hidden="true" />
              </div>
              <h3>Fokus pada Keamanan &amp; Kepastian</h3>
              <p>
                Proses penanganan barang yang mengikuti standar operasional,
                meskipun dilakukan dalam tempo yang lebih cepat.
              </p>
            </div>
          </div>
        </section>

        {/* SIMPLE PROCESS SECTION */}
        <section className={styles.processSection}>
          <div className={styles.processCard}>
            <div className={styles.processHeader}>
              <h2>Alur Singkat Layanan On-Call Logistics</h2>
              <p>
                Kami menjaga agar proses permintaan on-call tetap sederhana dan
                jelas, sehingga Anda dapat segera mendapatkan gambaran rencana
                eksekusi pengiriman.
              </p>
            </div>

            <ol className={styles.processList}>
              <li>
                <span className={styles.stepNumber}>1</span>
                <div>
                  <h3>Permintaan &amp; Konfirmasi Kebutuhan</h3>
                  <p>
                    Anda menyampaikan jenis barang, lokasi penjemputan, tujuan,
                    dan target waktu pengiriman.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepNumber}>2</span>
                <div>
                  <h3>Skema &amp; Opsi Layanan</h3>
                  <p>
                    Tim kami menyusun opsi solusi yang mungkin digunakan,
                    termasuk moda dan rute yang paling sesuai.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepNumber}>3</span>
                <div>
                  <h3>Eksekusi &amp; Koordinasi Lapangan</h3>
                  <p>
                    Proses penjemputan dan pengantaran dijalankan sesuai skema
                    yang disepakati, dengan koordinasi operasional yang intensif.
                  </p>
                </div>
              </li>
              <li>
                <span className={styles.stepNumber}>4</span>
                <div>
                  <h3>Konfirmasi &amp; Ringkasan Pengiriman</h3>
                  <p>
                    Setelah pengiriman selesai, kami memberikan konfirmasi dan
                    ringkasan singkat perjalanan barang.
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
              <h2>Butuh dukungan logistik on-call untuk pengiriman berikutnya?</h2>
              <p>
                Sampaikan kebutuhan pengiriman mendesak Anda. Tim PT DIF Trans Logistik
                siap membantu mencari solusi terbaik untuk situasi yang tidak
                dapat menunggu jadwal reguler.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href="/kontak" className={styles.ctaPrimary}>
                <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                <span>Konsultasi Layanan On-Call</span>
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