"use client";

import { useState } from "react";
import styles from "./FaqSection.module.scss";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Apa itu jasa logistik dan bagaimana PT DIF Trans Logistik membantu bisnis saya?",
    answer:
      "Jasa logistik adalah layanan pengelolaan pergerakan barang, mulai dari pergudangan, pengiriman, hingga distribusi. PT DIF Trans Logistik membantu bisnis Anda merencanakan dan mengeksekusi pengiriman laut, udara, dan darat secara terukur, sehingga rantai pasok berjalan lebih efisien dan biaya operasional lebih terkendali.",
  },
  {
    question: "Apakah PT DIF Trans Logistik melayani pengiriman barang antar pulau di Indonesia?",
    answer:
      "Ya, kami melayani pengiriman domestik antar pulau melalui layanan Domestic Sea Freight (FCL & LCL), Domestic Air Freight, dan Inland Transport. Jaringan kami mencakup berbagai pelabuhan dan bandara utama di Indonesia sehingga proses distribusi lebih cepat dan aman.",
  },
  {
    question: "Kapan sebaiknya saya menggunakan layanan Domestic Air Freight?",
    answer:
      "Domestic Air Freight ideal digunakan saat Anda membutuhkan pengiriman cepat dan memiliki tenggat waktu yang ketat, misalnya untuk barang bernilai tinggi, dokumen penting, atau kebutuhan urgent pelanggan. Tim kami dapat membantu Anda memilih rute dan jadwal terbaik sesuai kebutuhan bisnis.",
  },
  {
    question: "Apa keuntungan menggunakan layanan Contract Logistics dari PT DIF Trans Logistik?",
    answer:
      "Layanan Contract Logistics memungkinkan Anda menyerahkan pengelolaan logistik jangka panjang kepada tim kami, termasuk pergudangan, manajemen stok, dan distribusi. Dengan solusi terintegrasi, bisnis Anda dapat fokus pada penjualan dan pengembangan produk, sementara operasional logistik ditangani secara profesional.",
  },
  {
    question: "Bagaimana cara berkonsultasi dengan tim PT DIF Trans Logistik?",
    answer:
      "Anda dapat menghubungi kami melalui halaman Kontak, mengirimkan formulir online, atau langsung menghubungi nomor telepon dan WhatsApp yang tertera. Tim kami siap membantu menganalisis kebutuhan logistik Anda dan merekomendasikan kombinasi layanan yang paling efisien.",
  },
];

export default function FaqSection() {
  // semua tertutup di awal
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection} aria-labelledby="faq-heading">
      <div className="container">
        <div className={styles.inner}>
          <header className={styles.header}>
            <div className={styles.badge}>
              <i className="fa-solid fa-circle-question" aria-hidden="true" />
              <span>FAQ &amp; Informasi Logistik</span>
            </div>
            <h2 id="faq-heading" className={styles.title}>
              Pertanyaan yang Sering Diajukan seputar Layanan Logistik
            </h2>
            <p className={styles.subtitle}>
              Temukan jawaban atas pertanyaan umum mengenai jasa logistik, jenis layanan
              pengiriman, dan bagaimana PT DIF Trans Logistik membantu memperkuat rantai pasok
              bisnis Anda di seluruh Indonesia.
            </p>
          </header>

          <div className={styles.accordionList}>
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <article
                  key={item.question}
                  className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ""
                    }`}
                >
                  <h3 className={styles.accordionHeading}>
                    <button
                      id={buttonId}
                      className={styles.accordionButton}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => handleToggle(index)}
                    >
                      <span className={styles.questionText}>
                        <i className="fa-solid fa-truck-fast" aria-hidden="true" />
                        {item.question}
                      </span>
                      <span
                        className={`${styles.iconToggle} ${isOpen ? styles.iconToggleOpen : ""
                          }`}
                        aria-hidden="true"
                      >
                        <i className="fa-solid fa-chevron-down" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className={`${styles.accordionPanel} ${isOpen ? styles.accordionPanelOpen : ""
                      }`}
                  >
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}