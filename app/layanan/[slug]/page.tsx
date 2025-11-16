// app/layanan/[slug]/page.tsx
import { getServiceBySlug } from "@/lib/serviceHelpers"; // create helper to fetch doc
import Image from "next/image";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) return { title: "Layanan - DIF Logistics" };
  return {
    title: service.seo?.title || service.title,
    description: service.seo?.description || service.description.slice(0, 160),
    openGraph: {
      title: service.seo?.title || service.title,
      description: service.seo?.description || service.description.slice(0, 160),
      images: [service.seo?.ogImage || service.heroImage],
    },
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) return <div>Not found</div>;
  return (
    <main>
      <h1>{service.title}</h1>
      <Image src={service.heroImage} alt={service.title} width={1200} height={600} priority />
      <p>{service.description}</p>
      {/* features etc */}
    </main>
  );
}