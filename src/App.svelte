<script>
import { fade } from "svelte/transition";

let currentPage = "home";

const pages = [
	{
		id: 1,
		slug: "page-1",
		title: "Page One",
		content: [
			{
				type: "text",
				text: "This is the first page. You can add any text content here. It will display in a clean, readable format.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Add as much text as you want. Mix it with images however you like. The layout will automatically adapt to different screen sizes.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+2",
				alt: "Second image",
			},
			{
				type: "text",
				text: "This is a simple and clean way to present your content with text and images.",
			},
		],
	},
	{
		id: 2,
		slug: "page-2",
		title: "Page Two",
		content: [
			{
				type: "text",
				text: "Welcome to page two. Here you can organize your content however you like.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+3",
				alt: "Third image",
			},
			{
				type: "text",
				text: "Feel free to add multiple paragraphs and images. Everything is responsive and looks great on any device.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+4",
				alt: "Fourth image",
			},
		],
	},
	{
		id: 3,
		slug: "page-3",
		title: "Page Three",
		content: [
			{
				type: "text",
				text: "This is your third page. Simple, clean, and focused on your content.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+5",
				alt: "Fifth image",
			},
			{
				type: "text",
				text: "Mix your text and images in any order. The layout automatically handles everything for you.",
			},
		],
	},
];

function goToPage(slug) {
	currentPage = slug;
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
	currentPage = "home";
	window.scrollTo({ top: 0, behavior: "smooth" });
}

function getCurrentPage() {
	return pages.find((p) => p.slug === currentPage);
}
</script>

{#if currentPage === 'home'}
	<div class="homepage" transition:fade={{ duration: 300 }}>
		<div class="home-container">
			<h1 class="home-title">Welcome</h1>
			<p class="home-intro">Choose a page to explore</p>

			<nav class="links-list">
				{#each pages as page (page.id)}
					<button
						class="link-button"
						on:click={() => goToPage(page.slug)}
					>
						{page.title}
					</button>
				{/each}
			</nav>
		</div>
	</div>
{:else}
	<div class="page-container" transition:fade={{ duration: 300 }}>
		<button class="home-button" on:click={goHome} title="Back to home">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
				<polyline points="9 22 9 12 15 12 15 22" />
			</svg>
		</button>

		<article class="article">
			{#if getCurrentPage()}
				<h1 class="page-title">{getCurrentPage().title}</h1>

				<div class="page-content">
					{#each getCurrentPage().content as block, idx (idx)}
						{#if block.type === 'text'}
							<p class="text-block" in:fade={{ delay: 100, duration: 400 }}>
								{block.text}
							</p>
						{:else if block.type === 'image'}
							<figure class="image-block" in:fade={{ delay: 200, duration: 400 }}>
								<img
									src={block.src}
									alt={block.alt}
									loading="lazy"
								/>
							</figure>
						{/if}
					{/each}
				</div>
			{/if}
		</article>
	</div>
{/if}

<style>
	:root {
		--color-primary: #1a1a1a;
		--color-secondary: #666;
		--color-accent: #0066ff;
		--color-border: #e0e0e0;
		--color-background: #ffffff;
		--spacing-sm: 1rem;
		--spacing-md: 1.5rem;
		--spacing-lg: 2rem;
		--spacing-xl: 3rem;
		--transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
		background-color: var(--color-background);
		color: var(--color-primary);
		line-height: 1.6;
	}

	/* ==================== HOMEPAGE ==================== */

	.homepage {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--spacing-lg);
		background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
	}

	.home-container {
		max-width: 500px;
		text-align: center;
	}

	.home-title {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: var(--spacing-sm);
		letter-spacing: -0.02em;
	}

	.home-intro {
		font-size: 1.1rem;
		color: var(--color-secondary);
		margin-bottom: var(--spacing-xl);
	}

	.links-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.link-button {
		padding: var(--spacing-md) var(--spacing-lg);
		font-size: 1.1rem;
		font-weight: 600;
		border: 2px solid var(--color-border);
		background: var(--color-background);
		color: var(--color-primary);
		cursor: pointer;
		border-radius: 8px;
		transition: all var(--transition);
		text-align: left;
	}

	.link-button:hover {
		border-color: var(--color-accent);
		background: #f8f9ff;
		transform: translateX(4px);
	}

	.link-button:active {
		transform: translateX(2px);
	}

	/* ==================== CONTENT PAGE ==================== */

	.page-container {
		min-height: 100vh;
		background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
		position: relative;
	}

	.home-button {
		position: fixed;
		top: var(--spacing-lg);
		left: var(--spacing-lg);
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: var(--color-accent);
		color: white;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all var(--transition);
		box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
		z-index: 100;
	}

	.home-button:hover {
		transform: scale(1.1);
		box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);
	}

	.home-button:active {
		transform: scale(0.95);
	}

	.home-button svg {
		width: 24px;
		height: 24px;
	}

	.article {
		max-width: 720px;
		margin: 0 auto;
		padding: var(--spacing-xl) var(--spacing-lg);
		padding-top: var(--spacing-xl);
	}

	.page-title {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: var(--spacing-lg);
		letter-spacing: -0.02em;
	}

	.page-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.text-block {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--color-primary);
	}

	.image-block {
		margin: 0;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
	}

	.image-block img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* ==================== RESPONSIVE ==================== */

	@media (max-width: 768px) {
		.home-title {
			font-size: 2.5rem;
		}

		.home-container {
			max-width: 100%;
		}

		.page-title {
			font-size: 2rem;
		}

		.article {
			padding: var(--spacing-lg) var(--spacing-md);
		}

		.home-button {
			width: 44px;
			height: 44px;
			top: var(--spacing-md);
			left: var(--spacing-md);
		}
	}

	@media (max-width: 480px) {
		.home-title {
			font-size: 2rem;
		}

		.home-intro {
			font-size: 1rem;
		}

		.link-button {
			padding: var(--spacing-md);
			font-size: 1rem;
		}

		.page-title {
			font-size: 1.75rem;
		}

		.text-block {
			font-size: 1rem;
		}

		.article {
			padding: var(--spacing-md);
		}

		.home-button {
			width: 40px;
			height: 40px;
		}
	}
</style>
