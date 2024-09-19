import { MetadataRoute } from "next";

// URL API untuk fetching data blog
const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch data dari API blog-reports
  const response = await fetch(`${apiURL}/api/blogs`);
  const data = await response.json();
  console.log("data", data);

  // Ambil semua blog reports dan buat URL dinamis berdasarkan id
  const blogUrls = data.data.map((report: any) => ({
    url: `https://aikenhealth.id/blog/${report.id}`,
    lastModified: new Date(report.attributes.updatedAt).toISOString(),
  }));

  // Sitemap statis untuk halaman lain (misalnya about-us)
  const staticUrls = [
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blog`,
      lastModified: new Date().toISOString(),
    },
    
  ];

  // Gabungkan sitemap statis dan dinamis
  return [...staticUrls, ...blogUrls];
}
