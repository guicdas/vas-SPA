import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter(),
			// CSS is small: put it in each page instead of a separate request.
			inlineStyleThreshold: Number.POSITIVE_INFINITY,
		}),
	],
});
