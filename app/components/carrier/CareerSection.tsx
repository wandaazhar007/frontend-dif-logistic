"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import styles from "./CareerSection.module.scss";

type FormState = {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  portfolio: string;
};

type Status = "idle" | "loading" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  position?: string;
  experience?: string;
};

export default function CareerSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Nama wajib diisi.";
    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Format email tidak valid.";
    }
    if (!form.position.trim())
      newErrors.position = "Posisi yang dilamar wajib diisi.";
    if (!form.experience.trim())
      newErrors.experience = "Ringkasan pengalaman wajib diisi.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    if (!validateForm()) {
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/karir", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setStatusMessage(
          data.message || "Terjadi kesalahan saat mengirim lamaran."
        );
        return;
      }

      setStatus("success");
      setStatusMessage(
        "Terima kasih! Lamaran Anda sudah kami terima. Tim HR akan menghubungi jika profil Anda sesuai."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        portfolio: "",
      });
    } catch (error) {
      setStatus("error");
      setStatusMessage("Terjadi kesalahan jaringan. Silakan coba lagi.");
    }
  };

  return (
    <section className={styles.section} aria-labelledby="career-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT BOX – COPYWRITING + 4 PHOTO CARDS */}
          <div className={styles.copyCol}>
            <p className={styles.overline}>Karir di PT DIF Logistics</p>

            <h1 id="career-heading" className={styles.title}>
              Bangun Karir Bersama Tim Logistik Terpercaya.
            </h1>

            <p className={styles.subtitle}>
              Kami membuka kesempatan bagi talenta terbaik untuk tumbuh bersama
              dan berkontribusi dalam mengembangkan solusi logistik modern,
              cepat, dan efisien.
            </p>

            {/* Grid Foto */}
            <div className={styles.photoGrid}>
              <div className={styles.photoCard}>
                <Image
                  src="/images/career1.jpg"
                  alt="Karir DIF Logistics"
                  fill
                  className={styles.photo}
                />
              </div>
              <div className={styles.photoCard}>
                <Image
                  src="/images/career2.jpg"
                  alt="Karir DIF Logistics"
                  fill
                  className={styles.photo}
                />
              </div>
              <div className={styles.photoCard}>
                <Image
                  src="/images/career3.jpg"
                  alt="Karir DIF Logistics"
                  fill
                  className={styles.photo}
                />
              </div>
              <div className={styles.photoCard}>
                <Image
                  src="/images/career4.jpg"
                  alt="Karir DIF Logistics"
                  fill
                  className={styles.photo}
                />
              </div>
            </div>
          </div>

          {/* RIGHT BOX – FORM */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Formulir Lamaran Karir</h2>
              <p className={styles.formText}>
                Isi formulir ini dengan data yang akurat untuk mempermudah tim
                HR meninjau lamaran Anda.
              </p>

              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {/* NAME */}
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
                    ></i>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  {errors.name && (
                    <p className={styles.errorText}>{errors.name}</p>
                  )}
                </div>

                {/* EMAIL */}
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
                    ></i>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="nama@contoh.com"
                    />
                  </div>
                  {errors.email && (
                    <p className={styles.errorText}>{errors.email}</p>
                  )}
                </div>

                {/* PHONE */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="phone">No. Telepon / WhatsApp</label>
                  <div className={styles.inputWrapper}>
                    <i
                      className={`fa-solid fa-phone ${styles.fieldIcon}`}
                    ></i>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+62 ..."
                    />
                  </div>
                </div>

                {/* POSITION */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="position">
                    Posisi yang Dilamar <span>*</span>
                  </label>
                  <div
                    className={`${styles.inputWrapper} ${errors.position ? styles.inputError : ""
                      }`}
                  >
                    <i
                      className={`fa-solid fa-briefcase ${styles.fieldIcon}`}
                    ></i>
                    <input
                      id="position"
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      placeholder="Contoh: Staff Operasional"
                    />
                  </div>
                  {errors.position && (
                    <p className={styles.errorText}>{errors.position}</p>
                  )}
                </div>

                {/* EXPERIENCE */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="experience">
                    Ringkasan Pengalaman <span>*</span>
                  </label>
                  <div
                    className={`${styles.textareaWrapper} ${errors.experience ? styles.inputError : ""
                      }`}
                  >
                    <textarea
                      id="experience"
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      placeholder="Ceritakan pengalaman kerja Anda..."
                    />
                  </div>
                  {errors.experience && (
                    <p className={styles.errorText}>{errors.experience}</p>
                  )}
                </div>

                {/* PORTFOLIO */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="portfolio">Link CV / Portofolio</label>
                  <div className={styles.inputWrapper}>
                    <i className={`fa-solid fa-link ${styles.fieldIcon}`}></i>
                    <input
                      id="portfolio"
                      name="portfolio"
                      value={form.portfolio}
                      onChange={handleChange}
                      placeholder="Link Google Drive, LinkedIn, dll."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={styles.submitButton}
                >
                  {status === "loading" ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i>
                      Kirim Lamaran
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}