import { pages, SITE } from "../../lib/pages";

export const prerender = true;

export function GET() {
	const urls = [`${SITE}/`, ...pages.map((p) => `${SITE}/${p.slug}/`)];
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `\t<url><loc>${u}</loc></url>`).join("\n")}
</urlset>
`;
	return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
