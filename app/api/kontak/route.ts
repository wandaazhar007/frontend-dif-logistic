import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/kontak" });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      message,
      ["h-captcha-response"]: hCaptchaResponse,
    } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
      "h-captcha-response"?: string;
    };

    // VALIDASI INPUT BASIC
    if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
      return NextResponse.json(
        { success: false, message: "Nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Format email tidak valid." },
        { status: 400 }
      );
    }

    if (!hCaptchaResponse) {
      return NextResponse.json(
        { success: false, message: "Verifikasi captcha wajib diselesaikan." },
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

    // --- KIRIM KE WEB3FORMS DALAM TRY TERSENDIRI UNTUK DAPATKAN ERROR DETAIL ---
    let web3Res: Response;
    let web3Json: any;

    try {
      web3Res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "Pesan baru dari Form Kontak DIF Logistics",
          from_name: "PT DIF Logistics Website",
          name,
          email,
          phone: phone ?? "",
          message,
          replyto: email,
          "h-captcha-response": hCaptchaResponse,
        }),
      });

      // Coba parse JSON dari Web3Forms
      web3Json = await web3Res.json();
    } catch (err: unknown) {
      console.error("NETWORK/JSON error when calling Web3Forms:", err);
      const errMsg =
        err instanceof Error ? err.message : typeof err === "string" ? err : "Unknown error";
      return NextResponse.json(
        {
          success: false,
          message: `Gagal terhubung ke Web3Forms: ${errMsg}`,
        },
        { status: 500 }
      );
    }

    // Kalau responnya sukses tapi Web3Forms mengembalikan success: false
    if (!web3Res.ok || !web3Json?.success) {
      console.error("Web3Forms responded with error:", web3Json);
      const msgFromWeb3 =
        (typeof web3Json?.message === "string" && web3Json.message) ||
        `Status: ${web3Res.status} ${web3Res.statusText}`;
      return NextResponse.json(
        {
          success: false,
          message: `Web3Forms error: ${msgFromWeb3}`,
        },
        { status: 500 }
      );
    }

    // Sukses
    return NextResponse.json({
      success: true,
      message: web3Json.message ?? "Berhasil mengirim pesan.",
    });
  } catch (error: unknown) {
    console.error("Unexpected error in /api/kontak:", error);
    const msg =
      error instanceof Error ? error.message : typeof error === "string" ? error : "Unknown error";
    return NextResponse.json(
      {
        success: false,
        message: `Terjadi kesalahan tak terduga di server: ${msg}`,
      },
      { status: 500 }
    );
  }
}