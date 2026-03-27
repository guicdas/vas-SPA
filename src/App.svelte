<script lang="ts">
import { onMount } from "svelte";
import { fade } from "svelte/transition";
import pageData from "./paginas.json";

interface TextBlock {
	type: string;
	text: string;
}

interface ImageBlock {
	type: string;
	src: string;
	alt: string;
}

type ContentBlock = TextBlock | ImageBlock;

interface Page {
	id: number;
	slug: string;
	title: string;
	content: ContentBlock[];
}

const pages: Page[] = pageData;

let currentPage = "home";

function goToPage(slug) {
	currentPage = slug;
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
	currentPage = "home";
	window.scrollTo({ top: 0, behavior: "smooth" });
	setTimeout(() => title?.classList.add("hidden"), 800);
	setTimeout(() => bar?.classList.add("hidden"), 900);
	setTimeout(() => {
		bar?.classList.remove("hidden");
		bar?.classList.add("disappear");
		title?.classList.add("disappear");
	}, 1400);
}

function getCurrentPage() {
	return pages.find((p) => p.slug === currentPage);
}

let title, bar;

onMount(() => {
	setTimeout(() => title?.classList.add("hidden"), 1100);
	setTimeout(() => bar?.classList.add("hidden"), 1200);
	setTimeout(() => {
		bar?.classList.remove("hidden");
		bar?.classList.add("disappear");
		title?.classList.add("disappear");
	}, 1600);
});
</script>

{#if currentPage === 'home'}
	<div class="homepage">

			<div class="home-title">
				<h1 bind:this={title} class="text">Vasco Ayala</h1>
				<span bind:this={bar} class="bar"></span>
			</div>	

			<nav class="links-list">
				{#each pages as page (page.id)}
					<button
						type="button"
						class="link-button"
						on:click={() => goToPage(page.slug)}
					>
						{page.title}
					</button>
				{/each}
			</nav>

	</div>
{:else}
	<div class="page-container" transition:fade={{ duration: 70 }}>
		<button class="home-button" on:click={goHome} title="Return to Homepage">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
				<polyline points="9 22 9 12 15 12 15 22" />
			</svg>
		</button>

		<article class="article">
			{#if getCurrentPage()}
				<div class="page-content">
					{#each getCurrentPage().content as block}
						{#if block.type === 'image'}
							<figure class={block.type}>
								<img
									src={block.src}
									alt={block.alt}
									loading="lazy"
								/>
							</figure>
						{:else if block.type === 'quote' || 'dialog' || 'text' || 'chapter' || 'author' || 'subtitle'}
							<p class={block.type} >
								{@html block.text}
							</p>
								
						{/if}
					{/each}
				</div>
			{/if}
		</article>
	</div>
{/if}
