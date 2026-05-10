import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/content/products";
import { getAllThoughts } from "@/lib/thoughts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/thoughts", "/products"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date()
  }));

  const productRoutes = products.map((p) => ({
    url: `${site.url}/products/${p.slug}`,
    lastModified: new Date()
  }));

  const thoughtRoutes = getAllThoughts().map((t) => ({
    url: `${site.url}/thoughts/${t.slug}`,
    lastModified: new Date(t.date)
  }));

  return [...staticRoutes, ...productRoutes, ...thoughtRoutes];
}
