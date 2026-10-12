const SITE_URL = "https://www.samhavas.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/style-guide"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
