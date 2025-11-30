// app/api/karir/route.ts
import { NextResponse } from "next/server";

// Kirim lamaran ke email ini via Formsubmit.co
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/cs@diftranslog.com";

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/karir" });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, position, experience, portfolio } = body as {
      name?: string;
      email?: string;
      phone?: string;
      position?: string;
      experience?: string;
      portfolio?: string;
    };

    // VALIDASI BASIC
    if (!name?.trim() || !email?.trim() || !position?.trim() || !experience?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Nama, email, posisi, dan ringkasan pengalaman wajib diisi.",
        },
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

    // Body sesuai Formsubmit: x-www-form-urlencoded
    const params = new URLSearchParams();
    params.append("name", name.trim());
    params.append("email", email.trim());
    if (phone) params.append("phone", phone.trim());
    params.append("position", position.trim());
    params.append("experience", experience.trim());
    if (portfolio) params.append("portfolio", portfolio.trim());

    params.append(
      "_subject",
      "Lamaran Karir Baru - PT DIF Logistics"
    );
    params.append("_replyto", email.trim());

    let formRes: Response;
    let rawText = "";
    let jsonData: any | null = null;

    try {
      formRes = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: params.toString(),
      });

      rawText = await formRes.text();

      try {
        jsonData = JSON.parse(rawText);
      } catch {
        jsonData = null;
      }
    } catch (err: unknown) {
      console.error("NETWORK error when calling Formsubmit (karir):", err);
      const errMsg =
        err instanceof Error ? err.message : typeof err === "string" ? err : "Unknown error";
      return NextResponse.json(
        {
          success: false,
          message: `Gagal terhubung ke Formsubmit.co: ${errMsg}`,
        },
        { status: 500 }
      );
    }

    if (!formRes.ok) {
      const statusInfo = `Status: ${formRes.status} ${formRes.statusText}`;
      const msgFromJson =
        (jsonData && typeof jsonData.message === "string" && jsonData.message) || "";
      console.error(
        "Formsubmit non-OK response (karir):",
        statusInfo,
        msgFromJson || rawText.slice(0, 200)
      );

      return NextResponse.json(
        {
          success: false,
          message: msgFromJson
            ? `Formsubmit error: ${msgFromJson}`
            : `Formsubmit error. ${statusInfo}`,
        },
        { status: 500 }
      );
    }

    if (jsonData && (jsonData.success === "true" || jsonData.success === true)) {
      return NextResponse.json({
        success: true,
        message: jsonData.message ?? "Lamaran berhasil dikirim.",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Lamaran berhasil dikirim.",
    });
  } catch (error: unknown) {
    console.error("Unexpected error in /api/karir:", error);
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