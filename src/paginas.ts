type ContentBlock = {
	type: string;
	text?: string;
	src?: string;
	alt?: string;
};

interface Page {
	id: number;
	slug: string;
	title: string;
	content: ContentBlock[];
}

export enum PageSlugs {
	firstPage = "trab-final-mmap",
	secondPage = "another-woman-eea",
	thirdPage = "analise-prima-notte"
}

const pages: Page[] = [
	{
		id: 1,
		slug: PageSlugs.firstPage,
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
		slug: PageSlugs.secondPage,
		title: "another woman eea",
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
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Ao preparar este ensaio, folheei o meu pequeno caderno preto onde fui anotando várias frases marcantes e outros pensamentos durante este semestre e reencontrei uma transcrição que me tocou no “Discurso de Lísias”:",
			},
			{
				type: "quote",
				text: "“ [...] esse receio é muito mais justificado quando concerne a pessoas que se amam, porque em tudo vêem um motivo de lamentação e olham para os outros como se todos quisessem fazer-lhes mal.”. <sup>1</sup>",
			},
			{
				type: "text",
				text: "Enquanto fazia a cadeira de “Estética” apaixonei-me e senti-me levado por uma agressividade que me colocou num estado profundamente frágil e assustado como se fosse de novo uma criança. Sentia-me possuído por emoções avassaladoras que me fizeram questionar tudo. Para dar sentido à questão, pensei em como talvez o Homem tem as suas ocasionais crises em que questiona os seus sistemas de crenças e cai numa inevitável melancolia mas, rapidamente, devido a um esforço pragmático e talvez até psiquiátrico, volta ao seu antigo “eu”. O “eu” estruturado e com as certezas necessárias para andar na rua confiante. Na verdade, Marion Post (Gena Rowlands) evita durante toda a sua vida ter uma destas crises, talvez por não querer olhar para dentro com medo do abismo que poderá encontrar ou talvez por nunca se ter deixado ser possuída por este Eros que perturba a lucidez e a razão que me perturbou a mim.",
			},
			{
				type: "chapter",
				text: "Espírito reconhece Espírito",
			},
			{
				type: "text",
				text: "O filme “Another Woman” (1988) de Woody Allen começa com Marion Post a apresentar-se num monólogo interior como se fosse algo que repete de vez em quando para si mesma sobre a sua satisfação profissional e pessoal. Marion tem 50 anos, é uma professora de filosofia, está no seu segundo casamento, tem um irmão casado e uma mãe que morreu. Tudo aparenta estar organizado na vida de Marion e o espectador acredita nisso. Contudo, ao longo do filme, é revelado à protagonista o que os outros realmente pensam sobre ela, como se estas vozes não se aguentassem mais em silêncio e saíssem pelas paredes de todos estes lugares repetitivos do filme. A percepção da personagem choca profundamente com o real e o espectador é arrastado em todo esse auto-engano (self-deception como diz Marion ou self-deceit como diz Pippin sobre as personagens de Sirk que falaremos adiante). Quando ouvimos pela primeira vez algo que pertence a uma outra percepção da realidade, na única cena com a cunhada, é dito a Marion que é odiada pelo próprio irmão e o espectador, virgem de conhecimento sobre a relação dos irmãos, é agredido da mesma forma de Marion, porque nenhum dos dois suspeitava. Marion responde: “I’m sorry, I don't accept that” e Lynn afirma: “you're such a perceptive woman. How can you not understand his feelings?”, o que numa frase dá tudo sobre o filme: nem uma intelectual ávida leitora de poesia e filosofia escapa ao auto-engano na vida.",
			},
			{
				type: "text",
				text: "No início da escrita do filme, Allen descreve assim a ideia:",
			},
			{
				type: "quote",
				text: "“[...] uma mulher fria que não queria enfrentar nada de mau na sua vida, ou não queria ouvir nada de mau e evitava tudo e finalmente chegou a um ponto em que já não o conseguia evitar e começou a ouvi-lo a vir através da parede.”<sup>2</sup>",
			},
			{
				type: "text",
				text: "Nestes interiores bege e todos iguais da morna burguesia nova iorquina dos anos 80, Marion aluga um apartamento para “fugir do barulho das obras” ou do marido Ken (Ian Holm), enquanto escreve um livro sobre Heidegger. Quando diz: “I worked hard all day, and the work came very slowly”, só imaginamos os vários esforços ao longo da sua vida para criar esta profunda solidão e disciplina. Na tentativa de “shut myself off from everything, but the work” é quando começa a ver tudo: o sentimento de fado trágico na sua vida com um pai cínico e no fim da vida, uma mãe que chorava a ler Rilke, o distanciamento criado com o seu único irmão, a verdadeira razão pela amizade perdida da melhor amiga de infância, a culpa sobre o suicídio do primeiro marido, a inevitável diluição do seu casamento que era, desde a sua génese, adúltero e o desejo de ter sido mãe quando ainda podia. Este “ouvir através da parede” vem na forma de confissão de uma jovem em crise, que numa sessão de psicanálise, evoca imagens de um choque com o seu auto-engano. Marion ouve do outro lado da parede",
			},
			{
				type: "quote",
				text: "“I began having troubling thoughts about my life. Like there was something about it not real. Full of deceptions. That these... these deceptions had become so... so many, and so much a part of me now, that I couldn't even tell who I really was. And suddenly I began to perspire. I sat up in bed with my heart just pounding. And I looked at my husband next to me, and it was as if he... he was a stranger. And I turned on the light and I woke him up, and I asked him to hold me.”",
			},
			{
				type: "text",
				text: "Não sabemos muito sobre a vida de Marion a este ponto, a não ser o discurso inicial demasiado ordenado. Mas quando a jovem fala deste marido irreconhecível, o espectador tenta imaginar o seu marido, depois pensa no marido de Marion, que é o único marido de que conhecemos a cara neste mundo que nos é apresentado, e no fim talvez também pensemos no nosso próprio marido. A protagonista espreita pela porta de entrada no final da sessão de psicanálise e primeiro vê uma jovem e depois vê uma grávida, transformando o monólogo anterior numa visão ainda mais perturbadora.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Alguns decerto que ficariam frustrados ao ouvir as palavras da jovem grávida, Hope (Mia Farrow grávida do filho de Woody Allen), pela incompreensão desta perturbação, mas Marion fica em estado de aporia. Talvez por imediatamente se sentir em relação mimética com a jovem ou talvez ainda nem compreendeu o efeito que aquele momento teve em si. Há uma experiência estética que ameaça Marion, um belo que lhe revelou a verdade, levando a esta aporia quando espírito reconhece espírito, ou seja, quando Marion vê na jovem grávida, uma articulação sensível de si mesma. Quando, noutro dia, a voz volta e refere que houve dúvidas sobre o seu casamento no passado, as memórias da protagonista vêm como uma torrente incapaz de ser controlada e assim funcionam durante o resto do filme, numa espécie de fluxo da consciência. Marion entra numa profunda falta de conciliação entre o seu sistema pragmático, as suas pulsões emocionais e o tempo perdido.",
			},
			{
				type: "text",
				text: "É como se a vida de Marion fosse já um sonho e ao tentar que os episódios façam sentido ao perseguir esta grávida fantasmática pela rua, à procura do significado a partir dela, a vida vai lhe dando pistas. Por exemplo, quando ao cruzar-se com a amiga do passado, revela-se a percepção profundamente equivocada que tinha da sua atitude, da memória de toda aquela amizade e do fim da mesma. A amiga, Claire (Sandy Dennis), insiste que Marion atraiu o seu ex-namorado quando eram jovens e o roubou, mas Marion nega porque, de facto, não se rever nos “meaningful little looks” que a ex-amiga descreve. Mais tarde, em casa e sozinha, Marion lê o poema favorito da sua falecida mãe e, como se falasse com a filha a partir do poema, “O Torso Arcaico de Apolo” de Rilke, a mãe deixou gravadas lágrimas nos últimos versos:",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Pensamos logo nos lugares que a observam com a fria objectividade que os lugares normalmente nos observam: estes apartamentos bege com poltronas marcadas pelas leituras e os livros marcados pelo tempo; estas ruas insólitas nova iorquinas que parecem tão familiares mas tão iguais somente fazendo-nos concluir que tudo em Nova Iorque é, na verdade, imagem.",
			},
			{
				type: "text",
				text: "Em casa, Marion diz ao marido que não dormiu nada e ele muda de assunto, referindo o calendário ocupado dos dois com jantares compulsivos com casais amigos. Ela olha profundamente para os olhos do marido como se estivesse em tal desespero ou como se já não o reconhecesse. Que estranho que é estar numa relação e realmente conhecer (ou não) um Outro e perguntar-lhe sobre coisas e sentimentos. Ela pede “hold me” lembrando o monólogo inicial de Mia Farrow e tudo começa a cair a partir deste momento.",
			},
			{
				type: "chapter",
				text: "O Auto-Engano",
			},
			{
				type: "text",
				text: "Robert Pippin refere muitas vezes a ideia de self-deceit nos filmes de Douglas Sirk com as suas personagens alienadas das razões do seu sofrimento e dos falsos happy endings:",
			},
			{
				type: "quote",
				text: "“In Sirk’s case, the films manage both to indulge the audience’s expectations for melodrama, often satisfying them, even as the technique and style exaggerate those conventions, sometimes garishly, often bordering on kitsch, and thereby also expose the self-deceit and fantasy thinking behind those very expectations, both on the part of the characters and the viewers— a crucial Sirkian connection.” <sup>3</sup>",
			},
			{
				type: "text",
				text: "No caso de Woody Allen, ele cria o auto-engano de Marion no espectador a partir de um processo de identificação com a personagem. Ou seja, a partir da ausência de um jogo de saberes, o realizador faz com que a visão que Marion não vê ser, consequentemente, a visão que o espectador não vê ou não sabe sobre a protagonista. Isto cria uma ausência profunda de percepção sobre o que as outras personagens acham realmente sobre a protagonista, fazendo as revelações serem ultrajantes também para o espectador.",
			},
			{
				type: "text",
				text: "De facto, como o espectador, Marion começa a ver a sua vida como se estivesse também de fora. De repente não reconhece as suas palavras, acções e como as pessoas a vêem. Não reconhece o bem que fez quando uma ex-aluna a elogia por uma aula de “Ética e responsabilidade moral”, talvez porque Marion começa a ver a distância entre a filosofia que ensina e os seus actos adúlteros e insensíveis. Ou até quando ela deambula sem destino até ao escritório do irmão e ele admite que se afastou porque a irmã parecia desconfortável, especialmente quando ele, timidamente, lhe mostrou algo que tinha escrito. O irmão lembra-se das palavras exactas da irmã:",
			},
			{
				type: "quote",
				text: "“This is overblown. It's too emotional. It's maudlin. Your dreams may be meaningful to you, but to the objective observer they're… It's so embarrassing.”",
			},
			{
				type: "text",
				text: "Ela responde perplexa: “I said that?”.",
			},
			{
				type: "text",
				text: "Tendo em conta todo este palco de equívocos e enganos, o sonho que Marion tem um pouco após o meio do filme, serve como uma articulação sensível do que lhe faltava ver. Nestes lugares semi-familiares dos sonhos, Marion testemunha um depoimento final do pai ao psicanalista da jovem grávida em que enumera os seus remorsos finais, diferentes mas semelhantes aos de Marion: não ter passado a vida com a pessoa que amou, não ter amor pelo filho, ter sido demasiado severo com a filha e ter ficado “caught up in those stupid historical figures”, tendo pedido pouco dele mesmo na vida. O sonho depois transforma-se numa encenação em que a amiga actriz representa Marion no quarto com Ken. A jovem grávida também observa a peça mas na escuridão. A actriz reage de forma mais honesta ao marido do que Marion na vida real. Depois, Larry Lewis (Gene Hackman) surge do escuro e Marion deixa-se levar pela nostalgia do desejo que teve por ele. No fim do sonho, é confrontada com a possibilidade do seu primeiro marido, na verdade, ter se suicidado.",
			},
			{
				type: "chapter",
				text: "Eros contra Pragmatismo",
			},
			{
				type: "text",
				text: "Podemos classificar Marion como alguém de culto apolíneo pois é representada pela razão e tudo aponta para esta ter posto de parte o dionisíaco da sua vida, por querer estar completamente sobre controlo das suas accões, pulsões e crescimento intelectual desde cedo. Esta abdica do sentimento avassalador que eu senti enquanto fazia a cadeira de “Estética”: o Eros dionisíaco aludido tantas vezes no “Discurso de Lísias”:",
			},
			{
				type: "quote",
				text: "“É verdade que os amantes concordam que são mais doentes de espírito do que lúcidos, e que estão cientes da falta de bom senso, da desordem do seu pensamento e da incapacidade de se dominarem.”4",
			},
			{
				type: "text",
				text: "Marion Post afirma ao romancista e apaixonado Larry, que ama o marido, mas este tenta seduzi-la, apelando ao verdadeiro sentimento de Eros que ela está a querer abdicar. Enquanto tenta convencer o sedutor (e a si mesma) que ama Ken, Marion diz: “I love to read books with him”, revelando, precisamente, a troca do desejo pelo intelecto. Nesta cena estamos rodeados por estes intelectuais que vestem todos cores escuras do outono, relembrando uma natureza morta.",
			},
			{
				type: "text",
				text: "A personagem de Gene Hackman também tem uma presença bastante fantasmática, não só porque nunca o vemos a interagir com outras pessoas para além de Marion, mas também pela maneira que é filmado na cena da festa. Este fala fora de campo, como se a sua voz fosse um pensamento, enquanto Marion está sozinha, perturbada, em absorção e a câmara faz uma panorâmica até ele, enquadrando-o entre uma porta bege com uma janela de vidro típica de uma vivenda americana e uma prateleira de livros encadernados com lombada em pele decorada a ouro. Esta figura que vai e vem nos pequenos momentos de fraqueza existencial nas memórias de Marion faz dele o Eros personificado e possivelmente a salvação de Marion ao passar do mundo do inteligível para o sensível.",
			},
			{
				type: "text",
				text: "A última memória imposta que Marion tem no filme é da discussão com Sam, o seu antigo marido e professor, sobre o aborto que esta fez sem o consultar. Ela parece ter a certeza de que não queria ser mãe nesse momento:",
			},
			{
				type: "quote",
				text: "Marion: - Do you want to bring a child into this world? Really? You're the one that hates it so much, forever lecturing me on the pointlessness of existence. Sam: - I hate you so! To be capable of such a lack of feeling! Knowing how I felt! Caring only about how you felt! Your career. Your life of the mind.",
			},
			{
				type: "text",
				text: "O pragmatismo de Marion durante a sua vida levou-a a abdicar de pulsões que somente mais tarde se apercebe de as ter desejado tão profundamente. Quando no sonho o seu pai diz que estava “so caught up in those stupid historical figures”, pensamos nas abstrações que são as figuras históricas e na “life of the mind” e sentimos por estas pessoas destruídas pelo culto da cultura. Sobre o pragmatismo, F. Soares Gomes diz “o princípio fundamental da verdade de Peirce: «para se obter perfeita clareza nos nossos pensamentos sobre um objecto, basta-nos considerar que efeitos de género prático se podem conceber envolvidos no objecto — que sensações devemos esperar dele e que reacções devemos preparar” 5. Este sistema reflete a constante preocupação de Marion com os efeitos das suas decisões ao longo da sua vida, acabando na sua falta de acção ou alteração do rumo por um plano pré-definido, talvez fortemente sugerido pelo pai.",
			},
			{
				type: "chapter",
				text: "Mudar de Vida",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Quando Marion acidentalmente encontra a jovem grávida numa loja, por entre candeeiros de vidro fundido, ambas observam o quadro “Die Hoffnung I” (“A Esperança I”) de Klimt. Hope chora dizendo que o quadro é triste e Marion responde com uma visão ascética e intelectual a explicar a sua interpretação esperançosa da pintura. A jovem não reage para além de “Are you an artist?” e fala de como tem saudades de pintar (surge-nos na imaginação a imagem da jovem Marion a pintar). As duas passeiam pela cidade e vão almoçar. Após isto, Marion entra no seu escritório com cuidado e aproxima-se da câmara como se tivesse terror de ouvir o relato do encontro com a jovem grávida ao seu psicanalista do outro lado da parede. Ao mesmo tempo, esta antecipação cautelosa demonstra a procura de significado a partir da grávida como se Marion estivesse à procura de respostas num filme ou num romance e agora aguarda a próxima grande resposta à vida.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "quote",
				text: "“I met a really sad woman today. A woman you'd think would have everything, and she doesn't. She has nothing. So the result is she's led this… cold cerebral life, and... and has alienated everyone around her. She's pretended for so long that everything's fine, but you can see clearly how... how lost she is. She had an abortion years ago, which she regrets. She rationalises it in many ways, but I think the truth is she was afraid of the feelings she would have for a baby. And she's a very bright woman, very accomplished. But like me, she... Well, you know emotions have always embarrassed me. I've run away from men who I felt threatened me because the intensity of their passion just frightens me. I guess you can't keep deep feelings closed out forever, you know, so… I just don't want to look up when I'm her age and find my life is empty.”",
			},
			{
				type: "text",
				text: "Marion ouve a sua vida toda a ser resumida por outrem num discurso oposto à sua apresentação inicial e desta vez é Hope quem reconhece parte de si em Marion, parecendo querer mudar de vida. No fim, Hope fala do almoço entre as duas e que Marion ficou perturbada por ter visto uma amiga no restaurante. Enquanto isto é dito, voltamos ao restaurante e, numa cena belíssima, enquanto toca de novo a versão em piano da “Bilbao Song”, vemos Marion a levantar-se com um sorriso para ir cumprimentar a amiga. Esta pára em frente à porta que divide as salas, escondendo-se e mudando de expressão. Nem vemos a cara da amiga Lydia pois tudo o que Marion vê é o marido que já não lhe mostrava paixão, a roçar a sua mão na de outra mulher e olhando-a com um Eros intenso mas frívolo e odioso. No escritório, frio e escuro, vemos Marion a chorar pela primeira vez e pensamos na previsibilidade daquela traição. Ainda com o seu casaco vestido, chora e todo o controlo e razão é largado nesse momento e, este rosto frio e endurecido agora surpreende-nos com o desespero impotente de um choro.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Quando chega a casa, o plano mantém-se vazio até Marion entrar nele, aparentando uma extensão do tempo. Estes “codas” presentes no filme são espécies de silêncios imagéticos cheios do tremor existencial sentido por Marion. Após o calmo confronto feito de dois planos que separam o casal, Marion apercebe-se mais uma vez que a sua ausência emocional cegou-a:",
			},
			{
				type: "quote",
				text: "“Actually, if I'd had any perception, I would have been suspicious from the start. Because you and I committed adultery for months when you were married to Kathy.”",
			},
			{
				type: "text",
				text: "Ken mente sobre o caso não ser sério e que não irá durar com a sua frieza britânica e um olhar que não parece revelar empatia. Vemos a sua performance relembrando a performance que provavelmente fez à ex-mulher sobre Marion quando a traiu e a cena em que a mesma entrou a meio da festa perto do início do filme em que Ken pede desculpa dizendo “I accept your condemnation”. “Eu aceito a tua condenação”? Ou “eu aceito a tua condenação de mim”? Uma frase de uma frieza profunda que relembra o pai de Marion, o único outro britânico no filme.",
			},
			{
				type: "text",
				text: "No terceiro acto, Marion começa por dizer: “The following days, I didn't get any work done. Mostly I walked the streets and just thought about my life, trying to put everything in order.”. E de facto, parece que a protagonista começa a querer realmente arrumar a sua vida. Esta avisa o psicanalista do apartamento ao lado para resolver o problema “acústico” e pede o contacto da jovem grávida. Hope terminou o seu tratamento e mudou-se para fora, revelando que o próprio fantasma desta mudança desapareceu, após ter servido o seu propósito. Sentada no seu escritório, Marion abre o nunca lido romance do antigo amante, Larry Lewis, e finalmente deixa-se reviver as memórias de tempos repletos de desejo. No livro, Larry escreve sobre um encontro acidental com Marion em que falaram e passearam durante horas e como não conseguia esconder o seu desejo por ela. Começa a chover no Central Park e estes abrigam-se, fazendo pensar no quão boa é a chuva para aproximar duas pessoas, como quando eu acompanhei a minha namorada pela chuva sob o meu chapéu no nosso primeiro inocente almoço. Por entre a prosa, Larry revela a compreensão das paredes mentais que Marion tinha em relação ao Eros:",
			},
			{
				type: "quote",
				text: "“Her kiss was full of desire, and I knew I couldn't share that feeling with anyone else. And then a wall went up, and just as quickly I was screened out. But it was too late, because I now knew that she was capable of intense passion if she would one day just allow herself to feel.”",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "First image",
			},
			{
				type: "text",
				text: "Antes de vermos o filme, quando lemos o título “Another Woman” pensamos que será um filme de traição conjugal mas, rapidamente apercebemo-nos que tem que ver com o conflito da personagem ser articulado com uma outra mulher do outro lado da parede. Depois a protagonista desenvolve uma falta de reconhecimento de si própria, das suas acções e palavras durante o filme parecendo as de outra mulher (“I said that?”). Mais tarde, descobrimos a horrível traição do marido de Marion por outra mulher. No fim, vemos que Marion se está a transformar numa outra mulher que parece não ter mais culpa em sentir esta nostalgia por um desejo passado e emoções que lhe poderão tirar o controlo, a razão e a lucidez. Marion parece pronta para viver a vida com verdade e amor e deixar-se levar pelas emoções e pela imprevisibilidade da vida.",
			},
			{
				type: "author",
				text: "Lisboa, 31 de Janeiro de 2025 <br> Vasco Ayala Serôdio",
			},
		],
	},
	{
		id: 3,
		slug: PageSlugs.thirdPage,
		title: "análise do filme “La prima notte di quiete”",
		content: [
			{
				type: "title",
				text: "«Acossado e Míope no Escuro, Prestes a Ser Engolido Por Chamas»",
			},
			{
				type: "subtitle",
				text: "Análise do filme “La prima notte di quiete” (1972) de Valerio Zurlini <br> de Vasco Ayala Serôdio",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "subtitle",
				text: "Trabalho Final para a Unidade Curricular “História da Estética II” leccionada pela Professora Maria João Mayer Branco",
			},
			{
				type: "text",
				text: "Mestrado de Estética e Estudos Artísticos <br> Faculdade de Ciências Sociais e Humanas da Universidade Nova de Lisboa <br > 2025",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "text",
				text: "“La prima notte di quiete” (1972) de Valerio Zurlini abre com um plano de um pequeno barco à vela. Esta imagem leva-me sempre para a semelhante abertura da “Morte em Veneza” (1971), de Luchino Visconti — embora com um barco muito diferente. Ambas imagens são entradas em últimas grandes viagens. Mas, por agora, estamos mais a sul, na costa de Rimini. Do barco, um casal de estrangeiros pede direcções à figura que se encontra no cais, encasacada e com ares profundamente boémios. Alain Delon, aqui com o nome de Daniele Dominici, tem o olhar pleno de cansaço, mas também de um gozo rebelde — talvez seja do quão azuis são os seus olhos. Por vezes, o seu sorriso irrompe, mostrando-se sincero, mas também sarcástico e, acidentalmente, revela uma superioridade espiritual. Veste um sobretudo bege, “um símbolo de uma fascinante mas gasta masculinidade, [...] um refúgio, uma espécie de barreira, uma última proteção contra um mundo que o traiu.”1. Após a breve troca de palavras, passeia sozinho ao longo do pontão, em direcção ao Mar Adriático, deixando-se engolir pelo nevoeiro. Perguntamos então: de onde é que será que este homem vem e para onde será que vai? Se caminha sem destino, então sei que tipo de homem é.",
			},
			{
				type: "text",
				text: "Dominici vem para Rimini para substituir um professor de italiano durante 4 meses. Está, portanto, apenas de passagem e quando se acomodar naquela estância balnear fora de temporada, terá de partir. Este parece ser o movimento recorrente que o próprio homem de sobretudo bege e de cabelo e barba descuidados nos sugere — a eterna transitoriedade. Após deambular pelo porto, é-lhe introduzido o novo trabalho e, de imediato, este procura o jogo, num canto escuro da cidade. Conhece aí um grupo de homens duvidosos que “enganam o ócio com orgias, álcool e drogas”2 como todos naquele lugar perdido “a meio caminho entre Ancona e Veneza.”3. Floresce com eles uma espécie de amizade.",
			},
			{
				type: "text",
				text: "É como se Dominici tivesse naufragado naquele lugar, ou numa expressão inglesa que aprecio mais: “washed up on the shore”, como os estranhos troncos que não sabemos de onde aparecem nas praias invernais. Pode até ser um regresso a casa, mas uma espécie de entediante casa homogénea que, para ele, devem ser estas cidades desertas e cinzentas por onde passa. Talvez este regresso seja uma maneira de olhar para dentro e encontrar o grande segredo que o seu rosto evidencia. Este segredo é o fervor interno de todo o filme. Uma doença tão insuportável e incompreensível que poderá querer estar a dizer-nos algo mais. Uma “melancolia sem remédio”4. Mas de onde virá ela? De uma juventude perdida? De uma tragédia na família? De uma perda amorosa?",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "chapter",
				text: "Uma Ausência Insuportável",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "text",
				text: "Algo parece que foi arrancado à imagem, sente-se uma ausência insuportável, um luto por algo que nos parece incompreensível. Foi deixada na imagem a humidade que escorre pelos prédios abaixo, pega-se aos carros desportivos e enlouquece os homens e as mulheres. O filme parece figurar nas próprias características mais abstratas da imagem, o fim do mundo, ou até mais precisamente, uns anos após esse fim. Anos suficientes para já não ser novidade. Em cada cena, em cada plano, em cada fotograma pulsa o tédio, o quente invernal, o desconforto, o suor, e a humidade do siroco. É um discurso indirecto livre cinematográfico de um homem cansado, abatido e que me faz recordar aquela bela palavra inglesa, disillusionment, que implica um illusionment prévio. Palavra difícil de traduzir pois não é exactamente um desencanto, por encanto parecer demasiado ideal. Está mais próximo de desilusão, por ilusão implicar um engano dos sentidos e, dentro da sabedoria do filme, tudo parece desfazer-se como as folhas ensopadas pela humidade do Outono. É dos filmes mais melancólicos, desesperados e decadentes do cinema italiano:",
			},
			{
				type: "quote",
				text: "“[...] reencontramos algumas das errâncias (muitas delas nocturnas) familiares nos filmes de Fellini ou Antonioni. Em vez de seguirem uma trama clássica com objectivos definidos e conflitos a resolver, as personagens seguem uma trajectória sem rumo, feita de encontros sucessivos e de ilhas festivas que falham em dar sentido ao seu percurso interior. Esse cinema italiano da idade de ouro tinha algo de niilista e desencantado – e talvez tivesse razão em sê-lo, pois estava prestes a morrer. E quando não são festas que se percorrem como intrusos salvos por mariposas, são as moradias abandonadas, carregadas de histórias antigas, reflexo de um mundo outrora resplandecente que nunca mais viu a luz do dia - a história de um Renascimento outrora glorioso, testemunha paradoxal do declínio de um mundo mergulhado na sua última noite sem ainda o saber.”",
			},
			{
				type: "text",
				text: "Zurlini filma os corpos de forma intensa e próxima, até demasiado próxima, como uma força que agarra estas almas compostas por imagens revelando o seu interior no brilho dos olhares, na estranheza dos seus trejeitos e quase nunca no revelar da palavra. Todas as personagens parecem, na verdade, à beira da perdição, da prisão ou da morte. O convívio com prostitutas é comum e, por vezes, é difícil distinguir se certas mulheres estão com o grupo de jogadores por amizade, relação ou serviço. Parece que todos querem alimentar-se uns dos outros, tudo parece uma questão de cruel poder masculino, tudo parece jogo, tudo parece uma caça pervertida como na genial cena da festa de Elvira6 (Nicoletta Rizzi): as mulheres dançam, os homens deliciam-se, parece irromper o som de uma bomba a cair, as luzes explodem e pelas sinistras trevas do palacete, os homens perseguem as prostitutas em estilo de caça, possuindo-as. Lembra-me aquele doloroso poema de Herberto Helder:",
			},
			{
				type: "quote",
				text: "“Uma semana de bebedeira ininterrupta<br>— e aparecem as amiguinhas,<br>vamos todos de um lado para outro,<br>bando apocalíptico,<br>animado por um furor malsão, uma alegria brutal.<br>Arranjamos um quarto,<br>despimo-nos,<br>e depois estamos noutro quarto,<br>e estamos a despir-nos,<br>e de novo a fazer amor,<br>quatro, seis, oito em cima do tapete —<br>o terrível milagre de uma alucinação de pernas,<br>braços, seios, mãos, sexos, coxas, cabeças, vestidos, camisas.<br>E uma madrugada, só,<br>vagueando pelos cais desertos,<br>no meio da luz suja e trémula,<br>ressurge o horror da inteligência.<br>Vê-se tudo, e seria preciso morrer.<br>E então volta-se para casa,<br>procura-se a fotografia no livro,<br>no fundo de uma gaveta,<br>e está lá isto: o tempo não existe.”",
			},
			{
				type: "quote",
				text: "Herberto Helder, 1968. Apresentação do Rosto, Editora Ulisseia.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "text",
				text: "A cidade que os cerca, as ruas molhadas e os “cais desertos” que no filme rodeiam-se destes angustiantes tétrapodes de betão, estão completamente vazios e não só durante as insólitas horas escolares e de trabalho, mas também, na obscena noite. Aqui pinta-se o interior destas personagens, cheias de vestígios destroçados de um passado, sujas, partidas, vazias. Lembrou-me logo as tenebrosas paisagens de Hammershøi que, quando as vi pela primeira vez no Museu Nacional de Arte da Dinamarca, pareciam uma cidade sob regime autoritário em momento de recolher obrigatório.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "text",
				text: "Será que, após a grande farra, e por entre estas insólitas paisagens que provocam o “horror da inteligência” não nos terá já chegado “o cheiro da decomposição divina”7 ? Este Deus doente agora deixa-nos com a sua obra inacabada, imperfeita e em ruínas. Talvez seja Ele quem falte na imagem.",
			},
			{
				type: "chapter",
				text: "A Paixão e o Terrível Remorso",
			},
			{
				type: "text",
				text: "De forma fantasmagórica, a mulher de Dominici (Lea Massari) também se encontra em Rimini, num apartamento, depressiva, na cama, com os estores fechados, em constante disposição de “estar” e de “aguardar”, mas não parece ser por ele, nem por ninguém. Ela é, de forma um pouco infame da parte do realizador, a representação da culpa e do remorso que está sempre à espreita enquanto nos infecta lentamente. Ambos estão de luto por já não se amarem mas, para Dominici, esta mulher-abstração deixou de ser uma fantasia para se transformar num fantasma. Na primeira aula dada pelo professor, ele espreita como se tivesse que ter cuidado com o olhar para uma outra mulher-espectro que se torna de imediato a “fantasia”. A sua aluna, Vanina (Sonia Petrovna), revela logo que é uma alma que não consegue escapar à comoção da poesia, mesmo que tente.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "text",
				text: "O ideal do belo irrompe na vida de Dominici e comove-o a “melancolia sem remédio” de Vanina. Lembra-nos logo a “Morte em Veneza” em que Aschenbach fica de igual modo emocionado com o ideal de beleza de Tadzio. Mas aqui é um pouco diferente, Paul Vecchiali diz: “[Dominici] encontra, desta vez, uma mulher capaz de o rivalizar nesse registo – porque Sonia Petrovna tem aquele je-ne-sais-quoi que a torna cem vezes mais bela quando exibe uma expressão de manequim drogado do que quando sorri. E a sua beleza é desarmante, perfeita alma gémea de Delon neste filme.”",
			},
			{
				type: "text",
				text: "Vanina também se encontra de luto por ter deixado de amar o mulherengo e infame Gerardo. Deduzimos isto quando vemos, em casa de Gerardo, umas filmagens caseiras de uma viagem a Veneza, em que Vanina sorri como uma criança. Mas agora já não sorri. Mantém, cruelmente descrita pelo crítico, uma “expressão de manequim drogado”. Esta troca entre o novo-rico e detestável Gerardo para o intelectual Dominici lembrou-me aquela frase em Fedro: “É este o motivo porque [os apaixonados] evitam que os seus amados convivam com outros, pois receiam a concorrência de alguém que seja mais rico ou mais culto do que eles, uma vez que uns podem roubar-lhes a afeição por dinheiro e outros roubar-lha por subtilezas da inteligência.”",
			},
			{
				type: "text",
				text: "Há um plano em que, no preciso momento que precede o primeiro beijo proibido entre eles, Dominici conduz isolado no enquadramento, no escuro cerrado da noite, de forma apressada, por impulso, sem destino, como se estivesse prestes a ser engolido por chamas. Suavemente, invade pelo plano adentro, a pálida mão de Vanina acalmando o acossado e atrasando a sua perdição. Generosamente, Zurlini oferece-nos o fenómeno desta paixão num só plano.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "text",
				text: "Aqui, a paixão não se revela como uma solução existencial, nem de uma forma cínica em que a intensidade avassaladora do eros é em completo vão. Aparece sim como uma última noite de agitação antes da quietude, antes da cruel “prima notte di quiete”. Vários textos sobre o filme10 falam em almas perdidas que vagueiam rumo ao apocalipse, sem amor e repletos de luxúria. Penso que este apocalipse já lá vai, os animos acalmaram, o Homem aborreceu-se e, a estas almas perdidas, foi-lhes finalmente concebido aquilo que mais precisavam: de encontrarem-se (mesmo que isso implique ser por uma só breve noite).",
			},
			{
				type: "text",
				text: "Quando Dominici larga tudo por Vanina, deixando um rasto de destruição e raiva, fazendo-se à estrada para ir ter com ela, é tomado por um sentimento terrível. Pára várias vezes pela estrada, com um remorso angustiante, e telefona à mulher e aos amigos para certificar-se que esta não cumpriu a promessa de se suicidar. Ninguém consegue dar-lhe uma resposta e, no preciso momento de salto de fé desta maldita culpa, o carro de Dominici é arrasado por um camião. O grande Outro que se ausentou da imagem surge finalmente e aniquila Daniele. Quando por instantes, ele fica sozinho naquela mesma imagem do carro míope e descontrolado, perdido e acossado pela noite dentro — é então engolido pelas chamas tão recorrentes no filme. Será fatal o desejo ou será a culpa? Não podemos desejar loucamente ou não podemos culpar-nos em excesso? Zurlini problematiza esta culpa, este remorso que nos come por dentro todos os dias e que, provavelmente, foi-nos oferecido pela educação judaico-cristã. A Dominici parece somente restar que, inevitavelmente, “no caminho de regresso, a morte espera-o — sem pressa.”",
			},
			{
				type: "chapter",
				text: "Espectros da Ostentação",
			},
			{
				type: "text",
				text: "“Aqui diz que és muito rico” diz uma das amiguinhas a Dominici na festa de Elvira. Ele ri-se e nega. “Fizeste muitas viagens por mar”, ele confirma. “Vejo um enorme futuro, [...] vejo o signo do fogo, [...] na tua vida há um grande fogo e depois há uma grande escuridão”. Será este elemento das chamas a paixão iminente ou a morte por carbonização? O seu amigo “Spider” (Giancarlo Giannini), o único que tenta desvendar o enigma de Dominici, pergunta-lhe: “porque é que a morte é a primeira noite de sossego?”. Dominici responde com surpreendente paz: “porque finalmente dorme-se sem sonhos” e vemos nos seus olhos uma exaustão profunda da vida terrena.",
			},
			{
				type: "text",
				text: "Na cena anterior, Dominici leva “Spider” a um palacete abandonado, onde uma criança que ele conhecia em jovem, afogou-se. Estas insólitas histórias igualmente presentes na minha infância, de mortes de crianças em piscinas de grandes casas — tragédias no meio do luxo, quase irónicas. Neste palacete de família gritam os espectros da jovem diversão balnear que aguarda a inevitável tragédia: a vida adulta. Estes espectros lembram outro filme do mesmo realizador, “Estate Violenta” (1959) também passado em Rimini, em que o fim da juventude é a vida adulta e a vida adulta é ir para a guerra.",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "image",
				src: "https://via.placeholder.com/800x500?text=Image+1",
				alt: "image",
			},
			{
				type: "text",
				text: "“Não foi só por isso, era uma estirpe de tarados. Comidos pela sífilis durante gerações e pela doideira”12, acrescenta Dominici à história sobre a família do palacete. Percebemos então que este homem é assombrado pelos fantasmas da vida de classe alta, seja por ter visto um brilho opulento de um mundo passado que já não existe ou por ter presenciado estas famílias abastadas e pervertidas que gastaram tudo no jogo, no sexo e nas drogas, destruindo os filhos ou deixando-lhes esse legado.",
			},
			{
				type: "text",
				text: "Quando estão a deixar a casa, “Spider”, que fica um pouco mais atrás, pára, e no meio dos destroços diz que, de vez em quando, estas palavras vêm-lhe à mente: “Aquele que procuras não está mais aqui”, lembrando-nos do terrível sentimento de ausência no filme. Ao que Dominici responde: “Ressuscitou, como disse, ao terceiro dia. Anda, Ele é da Galileia. Lá O encontrarás.”13. Este Outro que falta parece mais completo agora: um passado longínquo, um legado terrível renunciado, a ilusão de ter tido tudo e agora não ter nada, a morte do pai na guerra em África e a velha mãe que espera um dia pelo corpo do filho. Jean-François Rauger elucida-nos:",
			},
			{
				type: "quote",
				text: "“Zurlini imaginava o filme como o último capítulo de uma trilogia que contasse, ao longo dos anos, a história de uma rica família da burguesia colonial italiana. “La prima notte di quiete” constitui a terceira parte deste fresco que nunca será filmado. O destino do seu protagonista é o de ser o último representante desta dinastia caída em desgraça, um homem sem classe, exilado no interior de Itália, no interior de si mesmo.” <sup>14</sup>.",
			},
			{
				type: "text",
				text: "Finalmente, vemos no realizador “o acto de um homem que sofreu e quer, antes de mais, exorcizar as suas memórias”15 e fazer contas com o seu passado. Os três filmes que considero ser os mais francos e justos de Zurlini também podiam constituir uma trilogia sobre esta personagem “D” exorcizada: “Estate Violenta”, “Cronaca Familiare” (1962) e“La prima notte di quiete”.",
			},
			{
				type: "text",
				text: "Em “Estate Violenta”, um jovem abastado, filho de um fascista, apaixona-se por uma mulher mais velha, viúva e mãe, enquanto está de férias em Rimini e decorrem os bombardeamentos de 1943 em Itália. Em jovem, esta melancólica personagem burguesa “D” procurou relações intensas com mulheres mais velhas por sentir-se deslocado da sua idade ou por estar de luto por uma mãe ausente. Em “Cronaca Familiare”, após a morte do irmão mais novo, um homem (Marcello Mastroianni), recorda como estiveram desencontrados a vida toda. Esta personagem “D” perdeu um familiar que podia ter sido um igual, podia ter sido alguém a quem pudesse partilhar as dores da família e do legado. Em “La prima notte di quiete”, está perdido, sozinho, destroçado e é tomado por uma paixão avassaladora que o faz abandonar tudo por uma rapariga mais nova, de forma destrutiva e até pueril.",
			},
			{
				type: "text",
				text: "Mas há algo que se mantém misterioso. Porque é que ele está sempre fora de tempo, sempre longe dos outros, sempre sozinho? Porquê tanto sofrimento? O mistério que o rosto de Delon carrega neste filme mantém-se. Vecchiali ajuda-nos mais uma vez:",
			},
			{
				type: "quote",
				text: "“O segredo que Delon-Dominici esconde ao espectador, e que Zurlini nos revela in extremis, é um falso segredo. O único, o verdadeiro, é aquele que Zurlini ainda nos esconde, o segredo da sua vida e das suas dores, enterrado sob tantas mentiras e verdades, sob tanta modéstia e impudor, que seria indecente querer saber mais.”<sup>16</sup>.",
			},
			{
				type: "chapter",
				text: "Uma Espécie de Estádio do Espelho Adulto",
			},
			{
				type: "text",
				text: "Seria realmente indecente querer saber mais porque este segredo é uma procura sem fim das dores que não conseguem ser moldadas em interpretações ou a qualquer tipo de sistema causal. Esta melancolia define-se por uma tentativa e incapacidade constante de se explicar a si mesma. Apesar deste absurdo, Zurlini faz com que esta melancolia transborde pela sua obra, mas o autor não sabe defini-la, Delon não sabe defini-la, Dominici muito menos e, nós espectadores, somos convidados a experimentar a melancolia do “Eu ser quem Eu sou” de Dominici. É, de modo geral, a estranheza de experimentarmos estes corpos e de estarmos eternamente sozinhos nesta condição. Surge como uma espécie de estádio do espelho adulto em que observamos o próprio brilho que anima os nossos olhos a questionar, precisamente, o que é que os anima. Nesses poucos segundos diante um espelho, somos assaltados pela estranheza profunda da vida, pelo puro bizarro de serem reais as pessoas que habitam os nossos dias, os amigos, os namorados, a família, o fenómeno impossível do decorrer do tempo e no fim perguntamos: “este sou eu?”",
			},
			{
				type: "author",
				text: "Lisboa, 5 de Junho de 2025 <br> Vasco Ayala Serôdio",
			},
		],
	},
];

export default pages;
