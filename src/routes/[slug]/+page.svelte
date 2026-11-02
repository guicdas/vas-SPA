<script lang="ts">
import { AUTHOR, headline, SITE, summary } from "../../lib/pages";

let { data } = $props();
const page = $derived(data.page);
const url = $derived(`${SITE}/${page.slug}/`);
const title = $derived(headline(page));
const description = $derived(summary(page));
const jsonLd = $derived(
	JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Article",
		headline: title,
		description,
		author: { "@type": "Person", name: AUTHOR, url: `${SITE}/` },
		datePublished: page.date,
		inLanguage: "pt-PT",
		url,
	}),
);

const tags: Record<string, string> = {
	title: "h1",
	chapter: "h2",
	quote: "blockquote",
	dialog: "div",
};
</script>

<svelte:head>
	<title>{title} — {AUTHOR}</title>
	<meta name="description" content={description} />
	<meta name="author" content={AUTHOR} />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="{SITE}/banner.jpg" />
	<meta property="article:published_time" content={page.date} />
	{@html `<script type="application/ld+json">${jsonLd.replaceAll("<", "\\u003c")}</script>`}
</svelte:head>

<div class="page-container">
	<a class="home-button" href="/" title="Voltar ao início" aria-label="Voltar ao início">
		<span></span>
	</a>

	<article class="article">
		<div class="page-content">
			{#each page.content as block}
				{#if block.type === "image"}
					<figure class="image">
						<img src={block.src} alt={block.alt} loading="lazy" />
					</figure>
				{:else}
					<svelte:element this={tags[block.type] ?? "p"} class={block.type}>
						{@html block.text}
					</svelte:element>
				{/if}
			{/each}
		</div>
	</article>
</div>
