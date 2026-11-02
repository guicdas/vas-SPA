<script lang="ts">
import { AUTHOR, pages, SITE } from "../lib/pages";

const description = "Ensaios sobre cinema e estética de Vasco Ayala Serôdio.";
const jsonLd = JSON.stringify({
	"@context": "https://schema.org",
	"@type": "Person",
	name: AUTHOR,
	url: `${SITE}/`,
});
</script>

<svelte:head>
	<title>{AUTHOR}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="{SITE}/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={AUTHOR} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="{SITE}/" />
	<meta property="og:image" content="{SITE}/banner.jpg" />
	{@html `<script type="application/ld+json">${jsonLd.replaceAll("<", "\\u003c")}</script>`}
</svelte:head>

<div class="homepage">
	<div class="home-title">
		<h1 class="text">Vasco Ayala{" "}<span class="last">Serôdio</span></h1>
		<span class="bar"></span>
	</div>

	<nav class="links-list">
		{#each pages as page (page.slug)}
			<a class="link-button" href="/{page.slug}/">{page.title}</a>
		{/each}
	</nav>
</div>
