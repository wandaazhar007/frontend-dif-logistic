// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://www.diftranslog.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/tentang-kami`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jangkauan`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pelanggan`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/karir`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Detail layanan (sesuaikan dengan routing yang sudah kamu buat)
    {
      url: `${baseUrl}/layanan/domestic-sea-freight`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/layanan/domestic-air-freight`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/layanan/inland-transport`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/layanan/contract-logistics`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/layanan/on-call-logistics`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Halaman terima kasih (jika ada)
    {
      url: `${baseUrl}/terima-kasih`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}