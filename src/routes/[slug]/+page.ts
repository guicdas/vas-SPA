import { error } from "@sveltejs/kit";
import { pages } from "../../lib/pages";

export const entries = () => pages.map(({ slug }) => ({ slug }));

export function load({ params }) {
	const page = pages.find((p) => p.slug === params.slug);
	if (!page) error(404);
	return { page };
}
