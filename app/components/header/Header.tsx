"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.scss";

type NavItem = {
  href: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  // Layanan dropdown akan disisipkan sebagai item ke-3 (bukan di array ini)
  { href: "/jangkauan", label: "Jangkauan" },
  { href: "/pelanggan", label: "Pelanggan Kami" },
  { href: "/kontak", label: "Kontak" },
  { href: "/karir", label: "Karir" },
];

const SERVICE_ITEMS = [
  {
    slug: "domestic-sea-freight",
    label: "Domestic Sea Freight (FCL & LCL)",
  },
  {
    slug: "domestic-air-freight",
    label: "Domestic Air Freight",
  },
  {
    slug: "inland-transport",
    label: "Inland Transport",
  },
  {
    slug: "contract-logistics",
    label: "Contract Logistics",
  },
  {
    slug: "on-call-logistics",
    label: "On-Call Logistics",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [openMobile, setOpenMobile] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href) && href !== "/";

  const isServicesActive = pathname.startsWith("/layanan");

  const toggleMenu = () => setOpenMobile((prev) => !prev);

  const closeMenu = () => {
    setOpenMobile(false);
    setOpenServices(false);
  };

  const toggleServices = () => setOpenServices((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          {/* LOGO + TAGLINE */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/images/logo-dif-logistics.png" // <- path yang kamu pakai
              alt="Logo DIF Logistics"
              width={186}
              height={79}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {/* 1. Home */}
              <li className={styles.navItem}>
                <Link
                  href="/"
                  className={
                    isActive("/")
                      ? `${styles.navLink} ${styles.navLinkActive}`
                      : styles.navLink
                  }
                >
                  Home
                </Link>
              </li>

              {/* 2. Tentang Kami */}
              <li className={styles.navItem}>
                <Link
                  href="/tentang-kami"
                  className={
                    isActive("/tentang-kami")
                      ? `${styles.navLink} ${styles.navLinkActive}`
                      : styles.navLink
                  }
                >
                  Tentang Kami
                </Link>
              </li>

              {/* 3. Layanan (dropdown) */}
              <li
                className={`${styles.navItem} ${styles.navItemHasDropdown}`}
              >
                <button
                  type="button"
                  className={
                    isServicesActive
                      ? `${styles.dropdownToggle} ${styles.navLinkActive}`
                      : styles.dropdownToggle
                  }
                  onClick={toggleServices}
                  aria-haspopup="true"
                  aria-expanded={openServices}
                >
                  <span>Layanan</span>
                  <i
                    className={`fa-solid fa-chevron-down ${styles.dropdownIcon} ${openServices ? styles.dropdownIconOpen : ""
                      }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  className={
                    openServices
                      ? `${styles.dropdown} ${styles.dropdownOpen}`
                      : styles.dropdown
                  }
                >
                  <ul>
                    <li>
                      <Link
                        href="/layanan"
                        className={styles.dropdownHeader}
                      >
                        Semua Layanan
                      </Link>
                    </li>
                    {SERVICE_ITEMS.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/layanan/${service.slug}`}
                          className={styles.dropdownLink}
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* 4+ item lain dari NAV_ITEMS (mulai Jangkauan) */}
              {NAV_ITEMS.slice(2).map((item) => (
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

          {/* DESKTOP CTA + PHONE */}
          <div className={styles.right}>
            <a href="tel:+6281390903900" className={styles.phoneLink}>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span>+62 813 9090 3900</span>
            </a>
            <Link href="/kontak" className={styles.ctaButton}>
              Hubungi Kami
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={openMobile}
          >
            <i
              className={openMobile ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`${styles.mobileNav} ${openMobile ? styles.mobileNavOpen : ""
          }`}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {/* Layanan (dropdown) */}
            <li className={styles.mobileNavItem}>
              <button
                type="button"
                className={styles.mobileDropdownToggle}
                onClick={toggleServices}
                aria-haspopup="true"
                aria-expanded={openServices}
              >
                <span>Layanan</span>
                <i
                  className={`fa-solid fa-chevron-down ${styles.dropdownIcon} ${openServices ? styles.dropdownIconOpen : ""
                    }`}
                  aria-hidden="true"
                />
              </button>

              {openServices && (
                <ul className={styles.mobileDropdownList}>
                  <li>
                    <Link
                      href="/layanan"
                      onClick={closeMenu}
                      className={styles.mobileDropdownLinkHeader}
                    >
                      Semua Layanan
                    </Link>
                  </li>
                  {SERVICE_ITEMS.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/layanan/${service.slug}`}
                        onClick={closeMenu}
                        className={styles.mobileDropdownLink}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Item lain */}
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className={styles.mobileNavItem}>
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