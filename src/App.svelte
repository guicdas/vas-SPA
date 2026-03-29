<script lang="ts">
import { onMount } from "svelte";
import { fade } from "svelte/transition";
import pages from "./paginas";

let currentPage = "home";

function titleAnimation(startTimeout: number) {
	setTimeout(() => title?.classList.add("hidden"), startTimeout);
	setTimeout(() => bar?.classList.add("hidden"), startTimeout + 100);
	setTimeout(() => {
		bar?.classList.remove("hidden");
		bar?.classList.add("disappear");
		title?.classList.add("disappear");
	}, startTimeout + 600);
}

function goToPage(slug) {
	currentPage = slug;
	window.location.pathname = "";
	window.location.hash = slug;
}

function goHome() {
	currentPage = "home";
	window.location.pathname = "";

	titleAnimation(800);
}

function getCurrentPage() {
	return pages.find((p) => p.slug === currentPage);
}

function handleHash() {
	const slug = window.location.hash.slice(1);
	currentPage = slug || "home";

	titleAnimation(900);
}

let title: HTMLHeadingElement;
let bar: HTMLSpanElement;

onMount(() => {
	const hash = window.location.hash.slice(1);
	if (hash && pages.find((p) => p.slug === hash)) currentPage = hash;

	titleAnimation(1100);
});
</script>


<svelte:head>
	<meta name="description" content="Listing of works about stuff" />
	<meta property="og:title" content="Vasco Ayala Serôdio" />
	<meta property="og:image" content="banner.jpg" />
	<title>Vasco Ayala Serôdio</title>


	<style lang="css">
		:root {
		--color-primary: #1a1a1a;
		--color-secondary: #666;
		--color-accent: #0066ff;
		--color-border: #e0e0e0;
		--color-background: #ffffff;
	}

	body {
		font-family:
			-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif;
		background-color: var(--color-background);
		color: var(--color-primary);
		line-height: 1.6;
	}

	.homepage {
		min-height: 100vh;
		display: flex;
		text-align: center;
		background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);

		.home-title {
			position: absolute;
			top: 5vh;
			left: 5vw;
			display: flex;
			flex-direction: column;

			.text {
				font-size: 2rem;
				font-weight: 700;
				transition: all 200ms ease;
				position: relative;
				margin-bottom: 0;

				&::before {
					position: absolute;
					left: -1vw;
					border-left: solid 2px black;
					transition: all 250ms ease;
					width: 2px;
					height: 15vh;
					color: black;
					content: "";
				}
				&.hidden::before {
					height: 100%;
					border-left-width: 1px;
				}
				&.disappear::before {
					border: none;
				}

				&::after {
					content: "Serôdio";
					position: absolute;
					translate: 5% 1%;
					transition: all 250ms ease;
					background-color: white;
				}
				&.hidden::after {
					transform: translateX(-77%);
				}
			}

			.bar {
				position: absolute;
				bottom: 0;
				left: -7%;
				width: 180%;
				background-color: black;
				height: 2px;
				transition: all 250ms ease;

				&.hidden {
					height: 1px;
					width: 130%;
				}

				&.disappear {
					width: 0%;
					height: 0;
				}
			}
		}

		.links-list {
			margin-top: 32vh;
			display: flex;
			flex-direction: column;

			.link-button {
				width: 60vw;
				padding-top: 2vh;
				padding-bottom: 2vh;
				margin-left: 30%;
				font-size: 1.1rem;
				font-weight: bold;
				color: hsl(0 0 25);
				border: none;
				cursor: pointer;
				background: transparent;
				border-radius: 8px;
				transition: all 180ms ease;
				text-align: left;

				&::before {
					content: "_";
					display: none;
				}
				
				&:hover {
					font-weight: bolder;
					color: black;
					letter-spacing: 0.03rem;
					text-transform: capitalize;
		
					&::before {
						display: inline-block;
					}
				}
			}

		}
	}

	.page-container {
		min-height: 100vh;
		background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
		position: relative;
		font-family: "Times New Roman", Times, serif;

		.home-button {
			position: fixed;
			top: 4vw;
			left: 3vw;
			cursor: pointer;
			transition: all 100ms ease;
			z-index: 10;
			display: flex;
			border: none;
			padding: 15px;
			padding-left: 3px;
			background-color: transparent;

			
			span {
				border-left: solid 2px black;
				width: 9px;
				aspect-ratio:1;
				border-top: solid 2px black;
				rotate: -45deg;
				box-shadow: 10px 10px black;
				transition: all 200ms ease;
			}

			&:hover {
				translate: -2px;

				span {
					box-shadow: 1px 1px black;
				}
			}
		}

		.article {
			max-width: 720px;
			margin: 0 auto;
			padding: 3rem 2rem;
			padding-top: 3rem;
			
			.page-content {
				display: flex;
				flex-direction: column;
				gap: 2vh;
				position: relative;
				
				sup {
					font-size: 0.5rem;
				}
				
				.title {
					font-size: 2rem;
					font-weight: 700;
					
					p {
						margin-top: 0;
						font-size: 1.4rem;
					}
				}
				
				.subtitle {
					margin-top: 0;
					text-align: end;
					position: relative;
					font-size: 1.2rem;
					right: 0;
					text-indent: 1rem;
					color: black;
					font-weight: bolder;
				}
				
				.text {
					font-size: 1.1rem;
					line-height: 1.8;
					color: var(--color-primary);
					text-indent: 3rem;
					margin-bottom: 2vh;
				}
				
				.image {
					margin: 0;
					border-radius: 8px;
					overflow: hidden;
					box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
		
					& img {
						width: 100%;
						height: auto;
						background-color: grey;
						display: block;
					}
				}
		
				.chapter {
					font-weight: bolder;
					margin-bottom: 0;
					margin-top: 3vh;
				}
		
				.dialog {
					margin-left: 5%;
				}
		
				.quote {
					font-size: 1rem;
					text-indent: 4rem;
					margin-left: 10%;
				}
		
				.author {
					text-align: end;
				}
			}
		}
	}

	</style>
</svelte:head>

<svelte:window on:hashchange={handleHash} />

<main>
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
							on:pointerdown={() => goToPage(page.slug)}
						>
							{page.title}
						</button>
					{/each}
				</nav>

		</div>
	{:else}
		<div class="page-container" transition:fade={{ duration: 70 }}>
			<button 
				class="home-button" 
				on:pointerdown={() => {
					window.location.hash = "";				
					//window.location.pathname = "";
				}} 
				title="Return to Homepage">
				<span></span>
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
							{:else}
								<p class={block.type}>
									{@html block.text}
								</p>
									
							{/if}
						{/each}
					</div>
				{/if}
			</article>
		</div>
	{/if}
</main>
