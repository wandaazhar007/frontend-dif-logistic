import styles from "../layanan/domestic-air-freightDomesticAirFreightPage.module.scss";

const CtaDomesticAirFreight = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaCard}>
        <div className={styles.ctaText}>
          <h2>Butuh pengiriman udara untuk pengiriman berikutnya?</h2>
          <p>
            Sampaikan kebutuhan rute, jenis barang, dan target waktu
            pengiriman Anda. Tim kami akan membantu menyusun skema Domestic
            Air Freight yang paling sesuai.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a href="/kontak" className={styles.ctaButtonPrimary}>
            <i className="fa-solid fa-paper-plane" aria-hidden="true" />
            <span>Konsultasi Layanan Udara</span>
          </a>
          <button
            type="button"
            className={styles.ctaButtonGhost}
          // onClick={() => (window.location.href = "tel:+6281390903900")}
          >
            <i className="fa-solid fa-phone" aria-hidden="true" />
            <span>Hubungi +62 813 9090 3900</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaDomesticAirFreight;