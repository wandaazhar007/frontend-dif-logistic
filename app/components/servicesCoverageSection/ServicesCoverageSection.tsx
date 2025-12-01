"use client";

import { useRef } from "react";
import styles from "./ServicesCoverageSection.module.scss";

const REGIONS: string[] = [
  "Jawa",
  "Sumatera",
  "Bali",
  "Sulawesi",
  "Jakarta",
  "Kalimantan",
  "Lombok",
  "Ternate",
  "Papua",
  "Manado",
  "Kendari",
  "Balikpapan",
  "Aceh",
  "Medan",
  "Padang",
  "Batam",
  "Bandung",
  "Surabaya",
  "Madura",
  "Dan kota-kota lainnya",
];

// helper kecil untuk bikin page 4 kota
const chunkRegions = (items: string[], size: number): string[][] => {
  const pages: string[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
};

const REGION_PAGES = chunkRegions(REGIONS, 4);

export default function ServicesCoverageSection() {
  const listRef = useRef<HTMLUListElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const node = listRef.current;
    if (!node) return;
    const amount = node.clientWidth || 260;
    node.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={styles.section}
      aria-labelledby="services-coverage-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: HEADING + COPY */}
          <div className={styles.contentCol}>
            <p className={styles.overline}>Services Coverage</p>
            <h2 id="services-coverage-heading" className={styles.title}>
              Jangkauan Layanan PT DIF Trans Logistik
            </h2>

            <p className={styles.text}>
              PT DIF Trans Logistik melayani pengiriman ke seluruh wilayah
              Indonesia, termasuk kota-kota besar, kawasan industri, dan
              lokasi remote. Kami juga menangani pengiriman internasional
              bekerja sama dengan mitra global yang terpercaya.
            </p>
            <p className={styles.text}>
              Dengan jaringan nasional yang luas dan sistem pengiriman yang
              efisien, kami memastikan setiap barang tiba dengan aman dan
              tepat waktu di kota mana pun pelanggan berada.
            </p>

            <div className={styles.inlineBadge}>
              <i
                className={`fa-solid fa-route ${styles.badgeIcon}`}
                aria-hidden="true"
              />
              <span>
                Melayani pengiriman dari dan ke berbagai kota strategis di
                seluruh Indonesia.
              </span>
            </div>
          </div>

          {/* RIGHT: CITY / PROVINCE SLIDER */}
          <div className={styles.citiesCol}>
            <div className={styles.citiesCard}>
              <div className={styles.citiesHeader}>
                <div>
                  <span className={styles.citiesLabel}>
                    Kota &amp; Provinsi Layanan
                  </span>
                  <p className={styles.citiesSubtitle}>
                    Network domestik yang terus berkembang.
                  </p>
                </div>

                <div className={styles.citiesControls} aria-hidden="true">
                  <button
                    type="button"
                    className={styles.controlButton}
                    onClick={() => handleScroll("left")}
                  >
                    <i className="fa-solid fa-chevron-left" />
                  </button>
                  <button
                    type="button"
                    className={styles.controlButton}
                    onClick={() => handleScroll("right")}
                  >
                    <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              </div>

              {/* Slider: tiap "page" berisi 4 kota (2x2) */}
              <ul
                className={styles.citiesList}
                ref={listRef}
                aria-label="Daftar kota dan provinsi layanan"
              >
                {REGION_PAGES.map((page, idx) => (
                  <li key={idx} className={styles.citiesPage}>
                    {page.map((city) => (
                      <div key={city} className={styles.cityItem}>
                        <div className={styles.cityIconWrapper}>
                          <i
                            className={`fa-solid fa-location-dot ${styles.cityIcon}`}
                            aria-hidden="true"
                          />
                        </div>
                        <span className={styles.cityName}>{city}</span>
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}