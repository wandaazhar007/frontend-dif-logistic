// app/api/kontak/route.ts
import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      message,
      // dikirim dari ContactSection: "h-captcha-response": captchaToken
      ["h-captcha-response"]: hCaptchaResponse,
    } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
      "h-captcha-response"?: string;
    };

    // VALIDASI INPUT DASAR
    if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Nama, email, dan pesan wajib diisi.",
        },
        { status: 400 }
      );
    }

    // VALIDASI FORMAT EMAIL SEDERHANA
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Format email tidak valid.",
        },
        { status: 400 }
      );
    }

    // VALIDASI hCAPTCHA
    // Web3Forms akan mengecek token ini server-side jika hCaptcha diaktifkan di dashboard.
    // Jika token tidak ada, kita stop di sini.
    if (!hCaptchaResponse) {
      return NextResponse.json(
        {
          success: false,
          message: "Verifikasi captcha wajib diselesaikan.",
        },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not set");
      return NextResponse.json(
        {
          success: false,
          message:
            "Konfigurasi server belum lengkap. Hubungi admin untuk memperbaikinya.",
        },
        { status: 500 }
      );
    }

    // PAYLOAD KE WEB3FORMS
    // Web3Forms akan:
    // - kirim email ke alamat yang terhubung dengan access_key
    // - memvalidasi hCaptcha jika di-enable di dashboard
    const payload = {
      access_key: accessKey,
      subject: "Pesan baru dari Form Kontak DIF Logistics",
      from_name: "PT DIF Logistics Website",
      name,
      email,
      phone: phone ?? "",
      message,
      replyto: email,
      // penting: kirim token hCaptcha dengan nama field ini
      "h-captcha-response": hCaptchaResponse,
      // OPTIONAL: kamu bisa aktifkan redirect di Web3Forms juga,
      // tapi di project ini redirect sudah ditangani di client (router.push("/terima-kasih")).
      // redirect: "https://diftranslog.com/terima-kasih",
    };

    const web3Res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const web3Json = await web3Res.json();

    if (!web3Res.ok || !web3Json.success) {
      console.error("Web3Forms error:", web3Json);
      return NextResponse.json(
        {
          success: false,
          message:
            web3Json.message ||
            "Gagal mengirim formulir. Silakan coba beberapa saat lagi.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: web3Json.message ?? "Berhasil mengirim pesan.",
    });
  } catch (error) {
    console.error("Error in /api/kontak:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan pada server. Silakan coba lagi.",
      },
      { status: 500 }
    );
  }
}