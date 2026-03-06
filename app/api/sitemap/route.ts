// // app/api/sitemaps/route.ts
// import { NextResponse } from "next/server";
// import { z } from "zod";
// import { addContact } from "@/lib/firestore";

// const ContactSchema = z.object({
//   name: z.string().min(2),
//   email: z.string().email(),
//   phone: z.string().optional(),
//   message: z.string().min(10),
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const parsed = ContactSchema.parse(body);

//     const id = await addContact(parsed);

//     // OPTIONAL: send email via SendGrid or Firebase Function here
//     // await sendNotificationEmail(parsed);

//     return NextResponse.json({ ok: true, id }, { status: 201 });
//   } catch (err: any) {
//     if (err?.issues) {
//       return NextResponse.json({ ok: false, errors: err.issues }, { status: 422 });
//     }
//     return NextResponse.json({ ok: false, message: err?.message || "Server error" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import { ZodError, z } from "zod";
import { addContact } from "@/lib/firestore";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.parse(body);

    const id = await addContact(parsed);

    return NextResponse.json({ ok: true, id }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof ZodError) {
      return NextResponse.json({ ok: false, errors: err.issues }, { status: 422 });
    }

    const message =
      err instanceof Error ? err.message : typeof err === "string" ? err : "Server error";

    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}