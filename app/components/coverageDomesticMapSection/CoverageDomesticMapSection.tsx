"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import styles from "./CoverageDomesticMapSection.module.scss";

type Region = {
  id: string;
  label: string;
  type: "pulau" | "kota";
  coordinates: [number, number]; // [longitude, latitude]
};

const REGIONS: Region[] = [
  { id: "jawa", label: "Jawa", type: "pulau", coordinates: [110, -7] },
  { id: "sumatera", label: "Sumatera", type: "pulau", coordinates: [101, 0.5] },
  { id: "bali", label: "Bali", type: "pulau", coordinates: [115.2, -8.4] },
  { id: "sulawesi", label: "Sulawesi", type: "pulau", coordinates: [120, -2] },
  { id: "kalimantan", label: "Kalimantan", type: "pulau", coordinates: [114, 0.8] },
  { id: "papua", label: "Papua", type: "pulau", coordinates: [135, -4] },
  { id: "lombok", label: "Lombok", type: "pulau", coordinates: [116.3, -8.7] },
  { id: "ternate", label: "Ternate", type: "kota", coordinates: [127.4, 0.8] },
  { id: "jakarta", label: "Jakarta", type: "kota", coordinates: [106.8, -6.2] },
  { id: "bandung", label: "Bandung", type: "kota", coordinates: [107.6, -6.9] },
  { id: "surabaya", label: "Surabaya", type: "kota", coordinates: [112.75, -7.25] },
  { id: "medan", label: "Medan", type: "kota", coordinates: [98.7, 3.6] },
  { id: "padang", label: "Padang", type: "kota", coordinates: [100.35, -0.95] },
  { id: "batam", label: "Batam", type: "kota", coordinates: [104, 1.1] },
  { id: "lampung", label: "Lampung", type: "kota", coordinates: [105.3, -5.4] },
  { id: "aceh", label: "Aceh", type: "kota", coordinates: [95.3, 5.55] },
  { id: "balikpapan", label: "Balikpapan", type: "kota", coordinates: [116.85, -1.27] },
  { id: "manado", label: "Manado", type: "kota", coordinates: [124.85, 1.48] },
  { id: "kendari", label: "Kendari", type: "kota", coordinates: [122.5, -3.98] },
  { id: "madura", label: "Madura", type: "pulau", coordinates: [113.5, -7.1] },
];

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function CoverageDomesticMapSection() {
  const [activeRegionId, setActiveRegionId] = useState<string>("jawa");

  const activeRegion =
    REGIONS.find((region) => region.id === activeRegionId) ?? REGIONS[0];

  return (
    <section
      className={styles.section}
      aria-labelledby="coverage-domestic-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: HEADLINE + DESKRIPSI */}
          <div className={styles.infoCol}>
            <p className={styles.sectionLabel}>Jaringan Dalam Negeri</p>
            <h3 id="coverage-domestic-heading" className={styles.title}>
              Menghubungkan pusat industri, pelabuhan, dan kota-kota strategis.
            </h3>
            <p className={styles.text}>
              Kami melayani pengiriman reguler dan proyek ke berbagai kota dan
              pulau utama di Indonesia. Dengan kombinasi armada laut, darat, dan
              udara, PT DIF Logistics memastikan distribusi berjalan lancar
              dari gudang pusat hingga titik akhir pelanggan Anda.
            </p>
            <p className={styles.text}>
              Peta di sebelah kanan menampilkan highlight area yang kami layani.
              Pilih pulau atau kota pada daftar untuk melihat area aktif.
            </p>
          </div>

          {/* RIGHT: MAP + LIST REGION */}
          <div className={styles.rightCol}>
            {/* MAP CARD DI ATAS */}
            <div className={styles.mapCard}>
              <div className={styles.mapHeader}>
                <p className={styles.overline}>Jangkauan Domestik</p>
                <h4 className={styles.mapTitle}>
                  Peta layanan PT DIF Logistics di Indonesia.
                </h4>
              </div>

              <div className={styles.mapWrapper}>
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    center: [118, -2],
                    scale: 900,
                  }}
                  style={{ width: "100%", height: "100%" }}
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const isIndonesia =
                          geo.properties.ISO_A3 === "IDN" ||
                          geo.properties.ISO3 === "IDN" ||
                          geo.properties.name === "Indonesia";

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={
                              isIndonesia
                                ? "#D68A21"
                                : "rgba(15, 27, 61, 0.06)"
                            }
                            stroke={
                              isIndonesia
                                ? "rgba(15, 27, 61, 0.45)"
                                : "rgba(15, 27, 61, 0.15)"
                            }
                            strokeWidth={isIndonesia ? 0.7 : 0.4}
                            style={{
                              default: { outline: "none" },
                              hover: { outline: "none" },
                              pressed: { outline: "none" },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>

                  <Marker coordinates={activeRegion.coordinates}>
                    <circle
                      r={6}
                      fill="#0F1B3D"
                      stroke="#ffffff"
                      strokeWidth={2}
                    />
                    <circle
                      r={11}
                      fill="rgba(15, 27, 61, 0.1)"
                      stroke="none"
                    />
                  </Marker>
                </ComposableMap>

                <div className={styles.mapOverlay} />

                <div className={styles.activeBadge}>
                  <i
                    className={`fa-solid fa-location-dot ${styles.badgeIcon}`}
                    aria-hidden="true"
                  />
                  <div className={styles.badgeText}>
                    <span className={styles.badgeLabel}>Area aktif</span>
                    <span className={styles.badgeValue}>
                      {activeRegion.label}
                    </span>
                  </div>
                </div>

                <div className={styles.mapLegend}>
                  <div className={styles.legendItem}>
                    <span className={styles.legendDotPrimary} />
                    <span>Pulau utama</span>
                  </div>
                  <div className={styles.legendItem}>
                    <span className={styles.legendDotSecondary} />
                    <span>Kota strategis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* LIST REGION DI BAWAH MAP */}
            <div className={styles.regionsWrapper}>
              <h4 className={styles.groupLabel}>
                <i className="fa-solid fa-layer-group" aria-hidden="true" />{" "}
                Pulau &amp; Wilayah Utama
              </h4>
              <div className={styles.chipGroup}>
                {REGIONS.filter((r) => r.type === "pulau").map((region) => (
                  <button
                    key={region.id}
                    type="button"
                    className={`${styles.chip} ${activeRegionId === region.id ? styles.chipActive : ""
                      }`}
                    onClick={() => setActiveRegionId(region.id)}
                  >
                    {region.label}
                  </button>
                ))}
              </div>

              <h4 className={styles.groupLabel}>
                <i className="fa-solid fa-city" aria-hidden="true" /> Kota
                Strategis
              </h4>
              <div className={styles.chipGroup}>
                {REGIONS.filter((r) => r.type === "kota").map((region) => (
                  <button
                    key={region.id}
                    type="button"
                    className={`${styles.chip} ${activeRegionId === region.id ? styles.chipActive : ""
                      }`}
                    onClick={() => setActiveRegionId(region.id)}
                  >
                    {region.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}