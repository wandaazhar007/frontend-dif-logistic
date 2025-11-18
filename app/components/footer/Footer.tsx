import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* BRAND / ABOUT */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <div className={styles.logoCircle}>
                <Image
                  src="/images/logo-dif-logistics.png"
                  alt="Logo DIF Logistics"
                  width={56}
                  height={56}
                  className={styles.logoImage}
                />
              </div>
              <div>
                <p className={styles.brandName}>DIF Logistics</p>
                <p className={styles.tagline}>Fast Delivery with Excellence</p>
              </div>
            </div>

            <p className={styles.text}>
              PT DIF Logistics menyediakan solusi logistik terintegrasi yang
              aman, cepat, dan terpercaya untuk berbagai kebutuhan pengiriman
              bisnis di seluruh Indonesia.
            </p>
          </div>

          {/* NAV LINKS */}
          <div className={styles.navCol}>
            <h3 className={styles.heading}>Perusahaan</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/tentang-kami" className={styles.footerLink}>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/layanan" className={styles.footerLink}>
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/jangkauan" className={styles.footerLink}>
                  Jangkauan
                </Link>
              </li>
              <li>
                <Link href="/karir" className={styles.footerLink}>
                  Karir
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className={styles.contactCol}>
            <h3 className={styles.heading}>Kontak</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <i
                  className={`fa-solid fa-location-dot ${styles.contactIcon}`}
                  aria-hidden="true"
                />
                <span>
                  WTC Matahari Serpong blok G112, Serpong Utara, Tangerang Selatan, Indonesia
                </span>
              </li>
              <li className={styles.contactItem}>
                <i
                  className={`fa-solid fa-phone ${styles.contactIcon}`}
                  aria-hidden="true"
                />
                <a href="tel:+6281390903900" className={styles.footerLink}>
                  +62 813 9090 3900
                </a>
              </li>
              <li className={styles.contactItem}>
                <i
                  className={`fa-solid fa-envelope ${styles.contactIcon}`}
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@diflogistics.com"
                  className={styles.footerLink}
                >
                  info@diflogistics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottomBar}>
          <span className={styles.copy}>
            © {year} DIF Logistics. All rights reserved.
          </span>
          <span className={styles.dev}>
            Build with ❤️ by <strong><Link href="https://wandaazhar.vercel.app/" target="_blank">Wanda Azhar</Link></strong> in Twin Falls, ID. USA
          </span>
        </div>
      </div>
    </footer>
  );
}