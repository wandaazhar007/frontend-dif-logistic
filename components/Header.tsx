"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.scss";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/jangkauan", label: "Jangkauan" },
  { href: "/pelanggan", label: "Pelanggan Kami" },
  { href: "/kontak", label: "Kontak" },
  { href: "/karir", label: "Karir" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href) && href !== "/";

  const toggleMenu = () => setOpen((prev) => !prev);

  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            {/* logo image can be replaced with next/image later */}
            <div className={styles.logoMark}>DIF</div>
            <div className={styles.logoText}>
              <span className={styles.brandName}>DIF Logistics</span>
              <span className={styles.tagline}>Fast Delivery with Excellence</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={
                      isActive(item.href)
                        ? `${styles.navLink} ${styles.navLinkActive}`
                        : styles.navLink
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + phone (desktop) */}
          <div className={styles.right}>
            <a href="tel:+6281390903900" className={styles.phoneLink}>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span>+62 813 9090 3900</span>
            </a>
            <Link href="/kontak" className={styles.ctaButton}>
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <i
              className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={
                    isActive(item.href)
                      ? `${styles.mobileNavLink} ${styles.mobileNavLinkActive}`
                      : styles.mobileNavLink
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <a href="tel:+6281390903900" className={styles.mobilePhone}>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span>Telepon Kami</span>
            </a>
            <Link href="/kontak" onClick={closeMenu} className={styles.mobileCta}>
              Hubungi Kami
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}