import Link from "next/link";
import { Metadata } from "next";
import styles from "./ThankYouPage.module.scss";

export const metadata: Metadata = {
  title: "Terima Kasih | PT DIF Logistics",
  description:
    "Terima kasih telah menghubungi PT DIF Logistics. Tim kami akan merespons kebutuhan logistik Anda secepatnya.",
};

export default function ThankYouPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <section className={styles.section} aria-labelledby="thankyou-heading">
          <div className={styles.card}>
            <div className={styles.iconWrapper} aria-hidden="true">
              <i className="fa-solid fa-circle-check" />
            </div>

            <p className={styles.overline}>Pesan terkirim</p>

            <h1 id="thankyou-heading" className={styles.title}>
              Terima kasih atas kepercayaan Anda.
            </h1>

            <p className={styles.text}>
              Kami telah menerima formulir kontak Anda. Tim PT DIF Logistics akan
              meninjau detail kebutuhan pengiriman dan menghubungi Anda dalam
              waktu 1–2 hari kerja melalui email atau WhatsApp.
            </p>

            <p className={styles.textMuted}>
              Jika Anda memiliki informasi tambahan yang ingin disampaikan,
              silakan balas email konfirmasi atau hubungi kami melalui nomor
              layanan pelanggan yang tersedia.
            </p>

            <div className={styles.actions}>
              <Link href="/" className={styles.backButton}>
                <i className="fa-solid fa-arrow-left" aria-hidden="true" />
                <span>Kembali ke Beranda</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}