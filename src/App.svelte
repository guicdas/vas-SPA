<script>
import { onMount } from "svelte";
import { fade } from "svelte/transition";

let currentPage = "home";

const pages = [
	{
		id: 1,
		slug: "page-1",
		title: "trabalho final mmap",
		content: [
			{
				type: "title",
				text: "“O Plano que Tudo Revela e Tudo Reflete”<p> A Imagem Cristalizada no Cinema de Manoel de Oliveira</p>",
			},
			{
				type: "subtitle",
				text: "Trabalho Final para a Unidade Curricular “Modernismo e Modernismos na Arte do Século XX em Portugal” leccionada pela Professora Joana Cunha Leal na Nova FCSH",
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
				text: "Irei analisar, especificamente, a segunda cena <a href='https://youtu.be/aYFfA46NoaE?si=V6nh_w4VZu6AsIB4&t=258' noreferrer >(04:18-07:07)</a> do filme “Francisca” porque penso que articula a essência do que Oliveira procurava. Primeiramente, é relevante mencionar que este filme é uma adaptação do romance “Fanny Owen” de Agustina Bessa- Luís, que por si mesmo é baseado em “No Bom Jesus do Monte” de Camilo Castelo Branco e em documentos da altura, que são baseados em vivências reais. Parece ainda mais pertinente este filme ser um espelho do real em vez de uma réplica “naturalista” do mesmo pela acumulação de adaptações. Surpreendentemente, Camilo é um dos protagonistas, ou melhor, é o testemunha dos eventos do filme, como uma bússola moral e como um olhar perturbado e fascinado de um artista em relação ao real. Camilo testemunha a paixão funesta entre José Augusto Pinto de Magalhães, aristocrata do Porto, e Fanny Owen ou “aportuguesadamente”, Francisca, aristocrata inglesa a viver em Portugal com a família. Camilo e José vivem uma amizade cínica e intelectual, lembrando a intensidade das amizades dos surrealistas, em que discutem e confundem o modo de viver com as teorias que cada um tem sobre a arte e o mundo. Um mundo onde o Brasil acaba de ganhar independência deixando “uma fracção da juventude, que na guerra civil viu derrotados em 1847 os seus ideais tradicionalistas” e que “acaba por encarnar um tipo céptico, inclinado às paixões funestas.”<sup>2</sup>. Numa festa, quando Camilo tenta persuadir Fanny a não se interessar pelo mistério e falsas poesias do seu amigo, a menina, surpreendida, pergunta-lhe se ele é realmente amigo de José. O escritor elegantemente responde: “a amizade não proíbe a ingratidão da lucidez” e, mais importante ainda, “ele disse um dia: «não será longa a minha existência», e quem sonha com a morte aos 25 anos ou é poesia ou é crime”.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Colocando o conteúdo e a contextualização de parte, penso que podemos começar a descascar as ideias formais desta cena. Da mesma forma como o espectador vê a tinta e uma perspectiva não-canónica nos quadros do modernismo, em 'Francisca', o espectador vê, com transparência, o cenário e a representação da vida filmada. Na segunda cena do filme, José Augusto olha pesadamente para a câmara (ou através dela) durante 15 segundos enquanto está de costas para os convidados do baile de máscaras que dançam e sorriem de forma excessiva e expressiva. Oliveira não escolhia os seus actores para “interpretarem” as personagens mas para “serem” as personagens. Isto é uma ideia comum nos grandes realizadores, aliás, Bresson falava no processo de “retirar” com a câmara o que o actor nem suspeitava ter dentro de si. A cara torta, a altura impressionante e a postura de “Drácula” de Diogo Dória criam formas que lembram o expressionismo. Durante o filme todo, esta figura molda-se neste estranho ser e só conseguimos pensar como a câmara de cinema é cruel para com os rostos e corpos. Mas esta, na verdade, meramente “apanha sem saber o que é, e fixa com a indiferença escrupulosa da máquina.”<sup>3</sup>.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Na “Imagem-Movimento”, Gilles Deleuze refere que “O rosto é essa placa nervosa porta-órgãos que sacrificou o essencial da sua mobilidade global e que recolhe ou exprime ao ar livre todos os tipos de pequenos movimentos locais que o resto do corpo mantém habitualmente escondidos.”<sup>4</sup>. Acerca dos famosos planos aproximados das actrizes suecas nos filmes de Ingmar Bergman que olham directamente para a câmara, Deleuze também refere que “Bergman levou ao seu extremo o niilismo do rosto, isto é, a sua relação no medo com o vazio ou com a ausência, o medo do rosto frente ao seu nada.”<sup>5</sup>. Nesta cena de “Francisca”, José Augusto não parece temer o “nada” ou o abismo como Liv Ullman em “Persona” (1966), ele parece olhar directamente para o abismo, ignorando o facto do abismo olhá-lo de volta. Suspeitamos a razão deste olhar porque nos intertítulos anteriores à cena sabemos da morte de sua mãe. Este formato emprestado ao cinema mudo é usado no filme todo e funciona para um acumular de significados e informações que, seguidamente, desaguam no plano.",
			},
			{
				type: "text",
				text: "Oliveira diz: “Todos os meus filmes mostram que, de facto, todos os homens entram em agonia no momento em que chegam ao mundo”<sup>6</sup> (Dostoiévski era uma grande referência para o realizador) e mais uma vez, Deleuze, refere algo semelhante: “É bom com efeito que a personagem seja neurótica, para melhor indicar o parto difícil de um sujeito no mundo.”<sup>7</sup> . Introduzir-nos a uma personagem que está imediatamente perturbada é uma ideia predominante a partir do cinema pós-guerra (especialmente no Film-Noir) mas uma personagem que, para além disso, também nos interpela, relembra os vários regard caméra do cinema de vanguarda nos anos 60 em diante.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Neste caso, acho pertinente comparar a cena referida a “Um Bar no Folies-Bergère” (1882) de Édouard Manet. A barista olha-nos como José Augusto mas parece temer o abismo como Liv Ullman, no entanto, possui um rosto mais difícil de ler. Ela interpela o espectador ao olhar para nós, mas o próprio enquadramento desta pintura provoca-nos quando reparamos que todo o seu fundo é um espelho e há a possibilidade de estarmos no lugar do cavalheiro reflectido à direita. Questões múltiplas colocam-se sobre a realidade que o quadro nos apresenta, se estamos perante uma visão subjectiva ou numa visão espectral. Seja qual for, a protagonista olha-nos perdida e perplexa. “Facingness” é um termo que Michael Fried usa sobre o estado dos sujeitos de Manet que olham directamente para o espectador, questionando-o sobre a existência da obra de arte como objecto em si e não representação e, questionando o espectador como espectador de uma obra de arte plana e não como um mero observador de uma janela ilusória para outro mundo. Uma “Facingness” no cinema como a de “Francisca” coloca também múltiplas questões sobre a subjectividade que nos observa, que mundo existe dentro do plano, quais as regras que o regem e quem somos nós espectadores.",
			},
			{
				type: "text",
				text: "Para além disto tudo, esta segunda cena de “Francisca” consegue também figurar o fenómeno da curiosidade do início de um filme, ou seja, o momento em que o espectador é confrontado com a presença de uma personagem e se questiona: Que ser é este? Qual é a sua história? Que subjectividade dá vida a estes olhos? Para onde vai e de onde vem? Adicionado a isto, temos o terror de sermos confrontados por este sujeito de difícil parto no mundo.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "José Augusto julgava-se Byron e personifica perfeitamente o dandy que “se torna sinónimo de uma postura ideológica pró-aristocrática e da concomitante rejeição dos códigos de conduta e dos valores burgueses. […] o dandy opõe-lhes um sentimento de superioridade elitista, cultivando a irresponsabilidade no decurso de um dia-a-dia votado ao ócio.”<sup>8</sup>. Uma vida levada ao paroxismo do ideal romântico e que coloca perigosas teorias sobre a vida, o amor e a arte. José Augusto ama por prestígio, ama se ela for amada por outros e convence-se amar para sofrer mais tarde. Num confronto entre Camilo e José Augusto, este cria vários aforismos que articulam a sua funesta visão sobre como irá possuir Fanny Owen:",
			},
			{
				type: "dialog",
				text: "<ul><li>“Excitar pela minha própria severidade”</li> <li>“Prometer, submeter, dar esperança”</li> <li>“Alimentar o desejo para estudar as consequências da insaciedade”</li> <li>“Roçar-lhe na testa com um beijo e depois passar sem tocar”</li> <li>“Olhar para ela com um ar profundo e austero”</li> <li>“Sonhar ilusões e recolher vergonha, humilhação e culpa”</li> <li>“Produzir um anjo na plenitude do martirio”</li> <li>“Não era mais belo que procriar?”</li> <li>“Não é ser realmente fecundo e mais conforme a obra de Deus?”</li> <li>“A mim só a perfeição me diz alguma coisa. A perfeição mesmo que seja no vício”. <sup>9</sup></li></ul>",
			},
			{
				type: "text",
				text: "Seria isto tudo pela arte? Seria uma tentativa de trazer os seus ideais estéticos para o real? Tentava ele viver o ideal puro do dandy e dos princípios byronianos para se aproximar ao génio do poeta? Camilo, na sua ingrata lucidez, diz que Byron era, na verdade, o “evangelho dos egoístas”.",
			},
			{
				type: "chapter",
				text: "O Teatro Ontológico",
			},
			{
				type: "text",
				text: "Oliveira percebeu muito cedo que no cinema clássico há um processo de identificação com o protagonista(s), devido à montagem, que faz-nos torcer pela personagem, mas que isto era um artifício que não lhe interessava.",
			},
			{
				type: "quote",
				text: "“Por isso, quanto mais dor se inflige à vítima, mais o público se identifica com ela, a ponto de o próprio espectador se tornar uma vítima […]. E quando a vítima finalmente se vinga do seu carrasco, todo o público se sente aliviado, e é assim que funciona um bom filme policial - é uma forma muito simples de chegar ao público” <sup>10</sup>",
			},
			{
				type: "text",
				text: "Havendo este processo de flagelação e depois de prazer no espectador de cinema e mais tarde, de forma mais infame, no espectador de televisão (seja nos policiais ou até no desenrolar de uma notícia chocante no telejornal), poderemos chamar a este ser, “O Espectador Frustrado” (em irónico contraste com o termo de Rancière, “O Espectador Emancipado”). Oliveira desejava voltar à essência “pobre” do cinema, usando a expressão de Grotowski, “Teatro Pobre”, como um retorno ao teatro sem os artifícios modernos, que se foca no núcleo da própria forma artística, a encenação e a verdade observada no actor de parte do espectador. Segundo António-Pedro Vasconcelos, Oliveira era igualmente “clássico e vanguardista, conservador e anarquista”<sup>11</sup>. Esta seguinte passagem poderá iluminar melhor o desejo de Oliveira:",
			},
			{
				type: "quote",
				text: "“O cinema está muito gasto. Todos os processos, todas as virtuosidades técnicas estão cansados. Pensei nisso ao fazer o Amor de Perdição e resolvi regressar aos primórdios, esquecer tudo, voltar ao princípio, como se fosse o primeiro cinema”. <sup>12</sup>",
			},
			{
				type: "text",
				text: "Onde é que o “teatro filmado” entra nesta teoria? Para quem leu “Notas sobre o Cinematógrafo” de Robert Bresson sabe que teatro é uma palavra proibida e a teatralidade é recusada no cinema:",
			},
			{
				type: "quote",
				text: "“Nada soa mais falso num filme do que aquele tom natural do teatro a copiar a vida e a traçar sobre sentimentos demasiado estudados.”. <sup>13</sup>",
			},
			{
				type: "text",
				text: "Para compreendermos a ideia de Oliveira, precisamos de compreender que a questão “é mais ontológica do que genológica.”<sup>14</sup> e que Oliveira pensava o termo “teatro” como a imitação da vida. Ou seja, tudo o que não é vida, é teatro, porque é uma imitação do real e essa mesma é um espectro e, se for tratada como tal, o espectador poderá aceder à abstracção dos sentidos. A realidade-espelho e estes fantasmas ou as abstrações da alma relembram a literatura e o cinema de Alain Robbe-Grillet com as suas figuras anónimas e abstractas, também o distanciamento criado no “Teatro Épico” de Bertolt Brecht e até a artificialidade em relação a uma ideia de naturalismo em realizadores clássicos como Douglas Sirk, em que situa os seus filmes, como Oliveira, numa espécie de “terra do cinema”. Um filme em que acreditamos na realidade apresentada mas que não possui os princípios naturalistas mas sim princípios mais instintivos e abstractos.",
			},
			{
				type: "quote",
				text: "“Não se trata de filmar pessoas, mas de filmar fantasmas. Fantasmas não podem falar na nossa língua nem mover-se com qualquer espécie de naturalismo”. <sup>15</sup>",
			},
			{
				type: "text",
				text: "Na verdade, exactamente como Bresson, Oliveira não acreditava na representação do actor como uma mediação do significado, porque procurava a existência pura do actor, ou melhor da personagem, ou ainda melhor do próprio Ser. Ambos procuravam essa autenticidade absoluta no cinema depurado de artifícios, simplesmente tinham diferentes termos.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "O realizador procurava como filmar a alma humana a partir de um “êxtase da persistência dos planos”<sup>16</sup> com uma câmara testemunhada, provocada, olhada, desafiada, a partir da não-ilusão dos artifícios do cinema e da revelação poética a partir deste “teatro filmado” que surge numa imagem cristalizada. No “Dia do Desespero” (1992), filme sobre o último dia de Camilo Castelo Branco, os actores Mário Barroso e Teresa Madruga apresentam-se como eles próprios na Casa-Museu do autor e revelam o contexto do fatídico dia. Por entre a montagem, os actores evocam o fantasma de “Camilo […] sempre o magro e libidinoso, o carnal e o espiritual, o romântico dandy do Guichard e do S. João e aquele espectro angustioso, sentado à mesa de trabalho, em S. Miguel de Seide, a ouvir as lamentações das árvores e os diálogos dos seus personagens. Ouve-os e vê-os, ao pé de si, como irrompidos da sua intimidade ou da penumbra que lhe inunda o escritório […].”<sup>17</sup>.",
			},
			{
				type: "text",
				text: "Tal como no “Dia do Desespero” é feito numa articulação mais directa, existe este fenómeno que atravessa o cinema de Oliveira em que, simultaneamente, coexistem o actor e a personagem, o cenário e o espaço, o espectador e a câmara, etc. Chamemos a isto uma imagem cristalizada, que é, precisamente, transparente e múltipla. Vemos todas as suas múltiplas faces ao mesmo tempo sem opacidade ilusória, apontando para a ideia que só a partir da não-ilusão poderemos atingir uma poética dos sentidos. Em “Francisca” vemos simultaneamente a cena pretendida no século XIX e os actores ali no cenário há 40 anos a fingirem ser aquelas personagens numa espécie de hipnose colectiva ou brincadeira.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Camilo, também ele um dandy, mas nunca tão infame como José Augusto, parece observar todo aquele drama com um grande peso e melancolia. “Traga mais Cognac” ordena ele ao empregado do Guichard e termina assim o filme após saber da morte do amigo. Talvez ao escrever o seu livro “No Bom Jesus do Monte”, queria ilibar-se de alguma culpa. Saberia Camilo mais alguma coisa sobre a forçada castidade de José Augusto para com Fanny Owen? Este final excita a imaginação sobre a futura tortura que Camilo passará quando “ouvir” e “ver” Fanny e José como fantasmas “ao pé de si, como irrompidos da sua intimidade ou da penumbra que lhe inunda o escritório […].”. Sentimos a perturbação dele como se toda aquela abstração de almas que testemunhámos fosse talvez o próprio olhar fascinado do escritor romântico. E não será também todo o cinema de Oliveira esse olhar puramente estético que observa as formas mundanas retiradas do seu naturalismo a dançarem num espelho da vida iluminando intensamente a estranheza desta mesma?",
			},
			{
				type: "author",
				text: "Lisboa, 11 de Janeiro de 2025 <br> Vasco Ayala Serôdio",
			},
		],
	},
	{
		id: 2,
		slug: "page-2",
		title: "another woman eea",
		content: [
			{
				type: "text",
				text: "Nad de importante aqui meu puto vai ver o outro pdf",
			},
		],
	},
	{
		id: 3,
		slug: "page-3",
		title: "análise do filme “La prima notte di quiete”",
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
