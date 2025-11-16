// components/ContactForm.tsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Masukkan nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().optional(),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      reset();
      // show success toast/modal
      alert("Terima kasih! Pesan Anda terkirim.");
    } else {
      const data = await res.json();
      alert("Gagal mengirim: " + (data?.message || "Server error"));
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <label>
        Nama
        <input {...register("name")} />
        {errors.name && <small role="alert">{errors.name.message}</small>}
      </label>

      <label>
        Email
        <input {...register("email")} />
        {errors.email && <small role="alert">{errors.email.message}</small>}
      </label>

      <label>
        Nomor Telepon
        <input {...register("phone")} />
      </label>

      <label>
        Pesan
        <textarea {...register("message")} />
        {errors.message && <small role="alert">{errors.message.message}</small>}
      </label>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
      </button>
    </form>
  );
}