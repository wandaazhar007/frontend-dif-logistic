// // app/api/kontak/route.ts
// import { NextResponse } from "next/server";

// // Endpoint AJAX Formsubmit.co
// // Format resmi: https://formsubmit.co/ajax/YOUR_EMAIL
// const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/cs@diftranslog.com";

// export async function GET() {
//   return NextResponse.json({ ok: true, route: "/api/kontak" });
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { name, email, phone, message } = body as {
//       name?: string;
//       email?: string;
//       phone?: string;
//       message?: string;
//     };

//     // --- VALIDASI INPUT BASIC ---
//     if (!name || !name.trim() || !email || !email.trim() || !message || !message.trim()) {
//       return NextResponse.json(
//         { success: false, message: "Nama, email, dan pesan wajib diisi." },
//         { status: 400 }
//       );
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { success: false, message: "Format email tidak valid." },
//         { status: 400 }
//       );
//     }

//     // --- SIAPKAN BODY SESUAI DOKUMENTASI FORMSUBMIT (x-www-form-urlencoded) ---
//     const params = new URLSearchParams();
//     params.append("name", name.trim());
//     params.append("email", email.trim());
//     if (phone) params.append("phone", phone.trim());
//     params.append("message", message.trim());

//     // field khusus Formsubmit (opsional tapi berguna)
//     params.append("_subject", "Pesan baru dari Form Kontak DIF Logistics");
//     params.append("_replyto", email.trim());
//     // kalau nanti mau redirect langsung dari Formsubmit:
//     // params.append("_next", "https://diftranslog.com/terima-kasih");

//     // --- KIRIM KE FORMSUBMIT.CO ---
//     let formRes: Response;
//     let rawText = "";
//     let jsonData: any | null = null;

//     try {
//       formRes = await fetch(FORMSUBMIT_ENDPOINT, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Accept: "application/json",
//         },
//         body: params.toString(),
//       });

//       rawText = await formRes.text();

//       try {
//         jsonData = JSON.parse(rawText);
//       } catch {
//         jsonData = null; // bukan JSON (harusnya jarang, karena kita set Accept: application/json)
//       }
//     } catch (err: unknown) {
//       console.error("NETWORK error when calling Formsubmit:", err);
//       const errMsg =
//         err instanceof Error ? err.message : typeof err === "string" ? err : "Unknown error";
//       return NextResponse.json(
//         {
//           success: false,
//           message: `Gagal terhubung ke Formsubmit.co: ${errMsg}`,
//         },
//         { status: 500 }
//       );
//     }

//     // --- HANDLE RESPONSE DARI FORMSUBMIT ---

//     if (!formRes.ok) {
//       const statusInfo = `Status: ${formRes.status} ${formRes.statusText}`;
//       const msgFromJson =
//         (jsonData && typeof jsonData.message === "string" && jsonData.message) || "";
//       console.error(
//         "Formsubmit non-OK response:",
//         statusInfo,
//         msgFromJson || rawText.slice(0, 200)
//       );

//       return NextResponse.json(
//         {
//           success: false,
//           message: msgFromJson
//             ? `Formsubmit error: ${msgFromJson}`
//             : `Formsubmit error. ${statusInfo}`,
//         },
//         { status: 500 }
//       );
//     }

//     // Contoh response AJAX mereka:
//     // { "success": "true", "message": "Your message has been sent" }
//     if (jsonData && (jsonData.success === "true" || jsonData.success === true)) {
//       return NextResponse.json({
//         success: true,
//         message: jsonData.message ?? "Terima kasih, pesan Anda berhasil dikirim.",
//       });
//     }

//     // Sukses HTTP tapi JSON tidak jelas → anggap sukses
//     return NextResponse.json({
//       success: true,
//       message: "Terima kasih, pesan Anda berhasil dikirim.",
//     });
//   } catch (error: unknown) {
//     console.error("Unexpected error in /api/kontak:", error);
//     const msg =
//       error instanceof Error ? error.message : typeof error === "string" ? error : "Unknown error";
//     return NextResponse.json(
//       {
//         success: false,
//         message: `Terjadi kesalahan tak terduga di server: ${msg}`,
//       },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from "next/server";

// Endpoint AJAX Formsubmit.co
// Format resmi: https://formsubmit.co/ajax/YOUR_EMAIL
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/cs@diftranslog.com";

type FormsubmitResponse = {
  success?: boolean | string;
  message?: string;
};

type KontakRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function GET() {
  return NextResponse.json({ ok: true, route: "/api/kontak" });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as KontakRequestBody;

    const { name, email, phone, message } = body;

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

    // --- SIAPKAN BODY SESUAI DOKUMENTASI FORMSUBMIT (x-www-form-urlencoded) ---
    const params = new URLSearchParams();
    params.append("name", name.trim());
    params.append("email", email.trim());
    if (phone) params.append("phone", phone.trim());
    params.append("message", message.trim());

    // field khusus Formsubmit (opsional tapi berguna)
    params.append("_subject", "Pesan baru dari Form Kontak DIF Logistics");
    params.append("_replyto", email.trim());

    // --- KIRIM KE FORMSUBMIT.CO ---
    let formRes: Response;
    let rawText = "";
    let jsonData: FormsubmitResponse | null = null;

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
        jsonData = JSON.parse(rawText) as FormsubmitResponse;
      } catch {
        jsonData = null;
      }
    } catch (err: unknown) {
      console.error("NETWORK error when calling Formsubmit:", err);
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

    // --- HANDLE RESPONSE DARI FORMSUBMIT ---
    if (!formRes.ok) {
      const statusInfo = `Status: ${formRes.status} ${formRes.statusText}`;
      const msgFromJson =
        jsonData && typeof jsonData.message === "string" ? jsonData.message : "";

      console.error(
        "Formsubmit non-OK response:",
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

    // Contoh response AJAX mereka:
    // { "success": "true", "message": "Your message has been sent" }
    if (jsonData && (jsonData.success === "true" || jsonData.success === true)) {
      return NextResponse.json({
        success: true,
        message: jsonData.message ?? "Terima kasih, pesan Anda berhasil dikirim.",
      });
    }

    // Sukses HTTP tapi JSON tidak jelas → anggap sukses
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