import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://innerdrive.program";
  return [
    { url: base, priority: 1 },
    { url: `${base}/planes`, priority: 0.9 },
    { url: `${base}/quienes-somos`, priority: 0.7 },
    { url: `${base}/contacto`, priority: 0.8 },
    { url: `${base}/como-empezar`, priority: 0.8 },
  ];
}
