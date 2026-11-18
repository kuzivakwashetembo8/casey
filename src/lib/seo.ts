// Central SEO config for Kuzi's website development offer.
export const SITE_URL = "https://kuzivakwashe.online";
export const SITE_NAME = "Kuzi — R1,000 Business Websites";
export const SITE_LOCALE = "en_ZA";
export const SITE_LANG = "en-ZA";
export const THEME_COLOR = "#0b0714";
export const BACKGROUND_COLOR = "#0b0714";
export const DEFAULT_TITLE = "Kuzi | Business Websites for R1,000";
export const DEFAULT_DESCRIPTION = "Kuzi builds full-stack commercial websites for businesses. Every website costs R1,000 and includes 10 basic pages plus 5 distinct features.";
export const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fbb2fc2d-4e8b-433c-b942-6a659a9e3a8d/id-preview-204eebe1--34608f31-8c4d-4376-9cf8-b87c97cb042e.lovable.app-1780866531384.png";
export const OG_IMAGE_ALT = "Kuzi — full-stack business websites for R1,000";
export const CONTACT = { email: "dev@kuzivakwashe.online", phone: "+27694893925", phoneDisplay: "+27 69 489 3925", github: "https://github.com/dev-kuzivakwashe" };
export const SAME_AS = [CONTACT.github];
export function absoluteUrl(path = "/"): string { if (path.startsWith("http")) return path; return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`; }
export const PUBLIC_ROUTES: Array<{ path: string; changefreq?: "weekly" | "monthly" | "yearly"; priority?: string }> = [{ path: "/", changefreq: "weekly", priority: "1.0" }];
export const personJsonLd = {
  "@context": "https://schema.org", "@type": "Person", name: "Kuzi", alternateName: ["Kuzivakwashe Tembo", "Kuzi Tembo", "K.C.T."],
  givenName: "Kuzivakwashe", familyName: "Tembo", url: SITE_URL, jobTitle: "Full-stack Web Developer",
  description: DEFAULT_DESCRIPTION, email: `mailto:${CONTACT.email}`, telephone: CONTACT.phone,
  address: { "@type": "PostalAddress", addressCountry: "ZA" }, sameAs: SAME_AS,
  knowsAbout: ["Full-stack Web Development", "Commercial Websites", "HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js", "Python", "Supabase", "PostgreSQL", "Payments", "AI Chatbots", "Website Design", "SEO"],
  knowsLanguage: ["English"],
};
export const websiteJsonLd = {
  "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, alternateName: ["Kuzi Websites", "R1,000 Business Websites"],
  url: SITE_URL, inLanguage: SITE_LANG, description: DEFAULT_DESCRIPTION,
  keywords: ["Kuzi", "business websites", "R1,000 website", "South Africa web developer", "full-stack website developer", "commercial website", "website design", "website development"].join(", "),
  publisher: { "@type": "Person", name: "Kuzi" },
};
