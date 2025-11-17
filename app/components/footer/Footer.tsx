import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Company info */}
          <div>
            <h3 className={styles.brand}>DIF Logistics</h3>
            <p className={styles.tagline}>Fast Delivery with Excellence</p>
            <p className={styles.text}>
              Layanan logistik terpadu untuk pengiriman laut, udara, dan darat
              di seluruh Indonesia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.heading}>Kontak</h4>
            <ul className={styles.list}>
              <li>
                <i className="fa-solid fa-phone" aria-hidden="true" />{" "}
                <a href="tel:+6281390903900">+62 813 9090 3900</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope" aria-hidden="true" />{" "}
                <a href="mailto:diflogistics@gmail.com">
                  diflogistics@gmail.com
                </a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot" aria-hidden="true" />{" "}
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={styles.heading}>Navigasi</h4>
            <ul className={styles.list}>
              <li>
                <Link href="/tentang-kami">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/layanan">Layanan</Link>
              </li>
              <li>
                <Link href="/jangkauan">Jangkauan</Link>
              </li>
              <li>
                <Link href="/pelanggan">Pelanggan Kami</Link>
              </li>
              <li>
                <Link href="/kontak">Kontak</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} PT DIF Logistics. All rights reserved.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="WhatsApp DIF Logistics">
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            </a>
            <a href="#" aria-label="LinkedIn DIF Logistics">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}