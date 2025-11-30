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

    // --- VALIDASI INPUT BASIC ---
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

    // --- KIRIM KE WEB3FORMS ---
    let web3Res: Response;
    let rawText: string;
    let jsonData: any | null = null;

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

      // ambil sebagai TEXT dulu
      rawText = await web3Res.text();

      // coba parse JSON kalau memang JSON
      try {
        jsonData = JSON.parse(rawText);
      } catch {
        jsonData = null; // bukan JSON, kemungkinan HTML
      }
    } catch (err: unknown) {
      console.error("NETWORK error when calling Web3Forms:", err);
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

    // --- HANDLE RESPONSE DARI WEB3FORMS ---

    // Jika status bukan 2xx → anggap error
    if (!web3Res.ok) {
      const statusInfo = `Status: ${web3Res.status} ${web3Res.statusText}`;
      const msgFromJson =
        (jsonData && typeof jsonData.message === "string" && jsonData.message) || "";
      console.error("Web3Forms non-OK response:", statusInfo, msgFromJson || rawText.slice(0, 200));

      return NextResponse.json(
        {
          success: false,
          message: msgFromJson
            ? `Web3Forms error: ${msgFromJson}`
            : `Web3Forms error. ${statusInfo}`,
        },
        { status: 500 }
      );
    }

    // Status 2xx:
    //  - kalau JSON & success: true → gunakan message mereka
    //  - kalau bukan JSON (HTML) → anggap sukses, berikan pesan default
    if (jsonData && jsonData.success) {
      return NextResponse.json({
        success: true,
        message: jsonData.message ?? "Terima kasih, pesan Anda berhasil dikirim.",
      });
    }

    // Sukses HTTP tapi tidak ada / tidak valid JSON → treat as success,
    // karena kemungkinan ini HTML success page.
    return NextResponse.json({
      success: true,
      message: "Terima kasih, pesan Anda berhasil dikirim.",
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