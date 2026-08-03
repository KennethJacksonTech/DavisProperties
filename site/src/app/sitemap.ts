import type { MetadataRoute } from "next";

/**
 * Canonical production host for Davis Properties.
 * Read from the environment when present (trimmed, trailing slashes stripped)
 * so a stray newline on a Vercel env var can't corrupt every <loc>.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://properties.adavisbackhoe.com"
).replace(/\/+$/, "");

/** Static routes in this app. `trailingSlash` is unset, so no trailing slashes. */
const routes = ["/", "/about", "/properties", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
