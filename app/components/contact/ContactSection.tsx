"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ContactSection.module.scss";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactSection() {
  const router = useRouter();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    // Hapus error field saat user mengetik
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Nama wajib diisi.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Format email tidak valid.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Pesan wajib diisi.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const isValid = validateForm();
    if (!isValid) {
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/kontak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setStatusMessage(
          data.message || "Terjadi kesalahan. Silakan coba lagi."
        );
        return;
      }

      setStatus("success");
      setStatusMessage(
        "Terima kasih! Pesan Anda sudah kami terima. Mengarahkan ke halaman terima kasih..."
      );

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Redirect ke halaman terima kasih
      router.push("/terima-kasih");
    } catch (error) {
      setStatus("error");
      setStatusMessage("Terjadi kesalahan jaringan. Silakan coba lagi.");
    }
  };

  return (
    <section className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT BOX – COPYWRITING */}
          <div className={styles.copyCol}>
            <p className={styles.overline}>Hubungi Kami</p>
            <h1 id="contact-heading" className={styles.title}>
              Mari diskusikan kebutuhan logistik bisnis Anda.
            </h1>
            <p className={styles.subtitle}>
              PT DIF Trans Logistik siap membantu merancang solusi logistik yang
              aman, cepat, dan efisien untuk operasional Anda di seluruh
              Indonesia.
            </p>
            <p className={styles.text}>
              Sampaikan detail singkat mengenai jenis barang, rute, dan
              frekuensi pengiriman. Tim kami akan menghubungi Anda melalui
              email atau telepon untuk memberikan rekomendasi terbaik.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <i
                  className={`fa-solid fa-envelope ${styles.infoIcon}`}
                  aria-hidden="true"
                />
                <div>
                  <p className={styles.infoLabel}>
                    Email Layanan Pelanggan{" "}
                    <i
                      className={`fa-solid fa-square-arrow-up-right ${styles.infoLabelIcon}`}
                      aria-hidden="true"
                    />
                  </p>
                  <p className={styles.infoValue}>
                    <a href="mailto:cs@diftranslog.com">cs@diftranslog.com</a>
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <i
                  className={`fa-solid fa-phone ${styles.infoIcon}`}
                  aria-hidden="true"
                />
                <div>
                  <p className={styles.infoLabel}>
                    Telepon &amp; WhatsApp{" "}
                    <i
                      className={`fa-solid fa-square-arrow-up-right ${styles.infoLabelIcon}`}
                      aria-hidden="true"
                    />
                  </p>
                  <p className={styles.infoValue}>
                    <a href="tel:+6281390903900">+62 813 9090 3900</a>
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <i
                  className={`fa-solid fa-location-dot ${styles.infoIcon}`}
                  aria-hidden="true"
                />
                <div>
                  <p className={styles.infoLabel}>
                    Kantor Operasional{" "}
                    <i
                      className={`fa-solid fa-square-arrow-up-right ${styles.infoLabelIcon}`}
                      aria-hidden="true"
                    />
                  </p>
                  <p className={styles.infoValue}>
                    <a
                      href="https://maps.app.goo.gl/nxoEuS2xh9TYxwYh8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MALL WTC MATAHARI blok G112 Jl. Raya Serpong No.39, Pd.
                      Jagung, Kec. Serpong Utara, Kota Tangerang Selatan, Banten
                      15326
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BOX – FORM */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Formulir Kontak</h2>
              <p className={styles.formText}>
                Isi formulir di bawah ini dan tim kami akan menghubungi Anda
                maksimal dalam 1–2 hari kerja.
              </p>

              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.fieldGroup}>
                  <label htmlFor="name">
                    Nama Lengkap <span>*</span>
                  </label>
                  <div
                    className={`${styles.inputWrapper} ${errors.name ? styles.inputError : ""
                      }`}
                  >
                    <i
                      className={`fa-solid fa-user ${styles.fieldIcon}`}
                      aria-hidden="true"
                    />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  {errors.name && (
                    <p className={styles.errorText}>{errors.name}</p>
                  )}
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <div
                    className={`${styles.inputWrapper} ${errors.email ? styles.inputError : ""
                      }`}
                  >
                    <i
                      className={`fa-solid fa-envelope ${styles.fieldIcon}`}
                      aria-hidden="true"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="nama@perusahaan.com"
                    />
                  </div>
                  {errors.email && (
                    <p className={styles.errorText}>{errors.email}</p>
                  )}
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="phone">Nomor Telepon / WhatsApp</label>
                  <div className={styles.inputWrapper}>
                    <i
                      className={`fa-solid fa-phone ${styles.fieldIcon}`}
                      aria-hidden="true"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+62 ..."
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="message">
                    Pesan / Kebutuhan Logistik <span>*</span>
                  </label>
                  <div
                    className={`${styles.textareaWrapper} ${errors.message ? styles.inputError : ""
                      }`}
                  >
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Ceritakan secara singkat jenis barang, rute, dan kebutuhan pengiriman Anda."
                    />
                  </div>
                  {errors.message && (
                    <p className={styles.errorText}>{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <i
                        className="fa-solid fa-spinner fa-spin"
                        aria-hidden="true"
                      />
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <i
                        className="fa-solid fa-paper-plane"
                        aria-hidden="true"
                      />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>

                {status !== "idle" && statusMessage && (
                  <p
                    className={`${styles.statusMessage} ${status === "success"
                      ? styles.statusSuccess
                      : styles.statusError
                      }`}
                  >
                    {statusMessage}
                  </p>
                )}

                <p className={styles.privacyNote}>
                  Dengan mengirim formulir ini, Anda menyetujui bahwa kami dapat
                  menghubungi Anda terkait kebutuhan logistik yang disampaikan.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}