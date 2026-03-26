<script>
import { onMount } from "svelte";
import { fade } from "svelte/transition";

let currentPage = "home";

const pages = [
	{
		id: 1,
		slug: "page-1",
		title: "Trabalho Final MMap",
		content: [
			{
				type: "title",
				text: "This is the first page. You can add any text content here. It will display in a clean, readable format.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Esta análise será, acima de tudo, formal e estética, porque procuro compreender a ideia central que motivava o cinema de Manoel Oliveira a partir do filme “Francisca” de 1981. A ideia consistia no que Oliveira chamava “teatro filmado” e conseguimos ver sintomas desta ideia a surgir em 1956 com o filme “O Pintor e a Cidade”, nos enquadramentos que aparentam mostrar a vida como um ritual colectivo, disperso mas com uma organização divina; em 1962 com o “Acto da Primavera” na representação artificial dos camponeses para chegar a outro tipo de verdade e no carácter auto-consciente do artifício cinematográfico; e mais intensamente com a “Tetralogia dos Amores Frustrados” que contém “O Passado e o Presente” (1972), “Benilde ou a Virgem Mãe” (1975), “Amor de Perdição” (1978) e, finalmente, “Francisca” (1981). A partir da década da revolução, Oliveira começa a apontar para um certo extremo da arte cinematográfica em que os personagens e espaços são tratados como espectros da realidade e o artifício do cinema está completamente exposto. Diferentes variações desta ideia foram materializadas por realizadores como Bresson, Dreyer, Tarkovski e Antonioni porque desejavam criar um espectador que sentisse uma poética dos sentidos que fosse para além de qualquer tipo de necessidade hedonista e naturalista.",
			},
			{
				type: "text",
				text: "Para Manoel de Oliveira, o cinema era um processo de fixação audiovisual do teatro e o teatro era uma imitação do real em todos os seus sentidos, em contraste com a sua fase de cinema de montagem vertical em “Douro, Faina Fluvial” (1931) e do cinema quase neo- realista em pleno Estado Novo em “Aniki-Bóbó” (1942). O “teatro filmado” de Oliveira implicava várias características mais aparentes como a frontalidade dos actores e o modo fantasmagórico de declamar, os cenários falsos, os planos gerais e a persistência dos mesmos que contribuem para uma poética a partir do tempo, da não-ilusão e de uma imagem cristalizada (transparente e múltipla).",
			},
			{
				type: "text",
				text: "Irei analisar, especificamente, a segunda cena <a href='https://youtu.be/aYFfA46NoaE?si=V6nh_w4VZu6AsIB4&t=258'>(04:18-07:07)</a> do filme “Francisca” porque penso que articula a essência do que Oliveira procurava. Primeiramente, é relevante mencionar que este filme é uma adaptação do romance “Fanny Owen” de Agustina Bessa- Luís, que por si mesmo é baseado em “No Bom Jesus do Monte” de Camilo Castelo Branco e em documentos da altura, que são baseados em vivências reais. Parece ainda mais pertinente este filme ser um espelho do real em vez de uma réplica “naturalista” do mesmo pela acumulação de adaptações. Surpreendentemente, Camilo é um dos protagonistas, ou melhor, é o testemunha dos eventos do filme, como uma bússola moral e como um olhar perturbado e fascinado de um artista em relação ao real. Camilo testemunha a paixão funesta entre José Augusto Pinto de Magalhães, aristocrata do Porto, e Fanny Owen ou “aportuguesadamente”, Francisca, aristocrata inglesa a viver em Portugal com a família. Camilo e José vivem uma amizade cínica e intelectual, lembrando a intensidade das amizades dos surrealistas, em que discutem e confundem o modo de viver com as teorias que cada um tem sobre a arte e o mundo. Um mundo onde o Brasil acaba de ganhar independência deixando “uma fracção da juventude, que na guerra civil viu derrotados em 1847 os seus ideais tradicionalistas” e que “acaba por encarnar um tipo céptico, inclinado às paixões funestas.”2. Numa festa, quando Camilo tenta persuadir Fanny a não se interessar pelo mistério e falsas poesias do seu amigo, a menina, surpreendida, pergunta-lhe se ele é realmente amigo de José. O escritor elegantemente responde: “a amizade não proíbe a ingratidão da lucidez” e, mais importante ainda, “ele disse um dia: «não será longa a minha existência», e quem sonha com a morte aos 25 anos ou é poesia ou é crime”.",
			},
		],
	},
	{
		id: 2,
		slug: "page-2",
		title: "Another Woman EEA",
		content: [
			{
				type: "text",
				text: "Welcome to page two. Here you can organize your content however you like.",
			},
		],
	},
	{
		id: 3,
		slug: "page-3",
		title: "Análise do filme “La prima notte di quiete”",
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

let title, bar;

onMount(() => {
	setTimeout(() => {
		title.classList.add("hidden");
		bar.classList.add("hidden");
	}, 1500);
	setTimeout(() => {
		bar.classList.remove("hidden");
		bar.classList.add("disappear");
	}, 2000);
});
</script>

{#if currentPage === 'home'}
	<div class="homepage" transition:fade={{ duration: 300 }}>

			<div class="home-title">
				<h1 bind:this={title} class="text">Vasco Ayala</h1>
				<span bind:this={bar} class="bar"></span>
			</div>	

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
								{@html block.text}
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
