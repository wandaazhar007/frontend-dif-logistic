"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./ClientsSection.module.scss";

type ClientLogo = {
  name: string;
  src: string;
};

const CLIENTS: ClientLogo[] = [
  {
    name: "Frisian Flag",
    src: "/images/logo-frisian-flag.jpg",
  },
  {
    name: "J&T Express",
    src: "/images/logo-jnt-express.jpg",
  },
  {
    name: "J&T Cargo",
    src: "/images/logo-jt-cargo.png",
  },
  {
    name: "Modena",
    src: "/images/logo-modena.png",
  },
  {
    name: "Pos Logistics",
    src: "/images/logo-pos-logistics.webp",
  },
  {
    name: "Shopee Express",
    src: "/images/logo-shopee-express.webp",
  },
];

export default function ClientsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const node = sliderRef.current;
    if (!node) return;
    const amount = direction === "left" ? -260 : 260;
    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className={styles.section} aria-labelledby="clients-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: COPYWRITING */}
          <div className={styles.textCol}>
            <p className={styles.overline}>Client</p>
            <h2 id="clients-heading" className={styles.title}>
              Pelanggan Kami
            </h2>

            <p className={styles.body}>
              Hubungan jangka panjang dengan para pelanggan adalah fondasi utama
              pertumbuhan PT DIF Trans Logistik. Dari perusahaan nasional hingga
              brand global, mereka mempercayakan pengiriman barang bernilai dan
              volume tinggi kepada kami karena konsistensi, profesionalisme,
              serta solusi logistik terintegrasi yang kami sediakan.
            </p>

            <div className={styles.quoteBlock}>
              <span className={styles.quoteMark}>“</span>
              <p className={styles.quoteText}>
                Dipercaya oleh Brand Terkemuka di Indonesia
              </p>
              <span className={styles.quoteMark}>”</span>
            </div>
          </div>

          {/* RIGHT: LOGO SLIDER */}
          <div className={styles.sliderCol}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLabel}>Brand yang mempercayai kami</span>
              <div className={styles.sliderControls} aria-hidden="true">
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

            <div
              className={styles.slider}
              ref={sliderRef}
              aria-label="Client logos"
            >
              {CLIENTS.map((client) => (
                <figure key={client.name} className={styles.logoCard}>
                  <div className={styles.logoCircle}>
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      sizes="96px"
                      className={styles.logoImage}
                    />
                  </div>
                  <figcaption className={styles.logoCaption}>
                    {client.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}