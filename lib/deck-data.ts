// Roteiro em seis mundos (Forma, Água, Matéria, Vida, Cristal, Dissolução).
import type { Slide } from "./deck-types";

export const slides: Slide[] = [
    {
      "type": "cover",
      "id": "capa",
      "media": {
        "kind": "video",
        "src": "/media/capa-forma-branca.mp4",
        "poster": "/media/capa-forma-branca.jpg",
        "r": 1.7918,
        "label": "capa-forma-branca"
      },
      "kicker": "Pele como jóia",
      "lines": [
        "O despertar",
        "da matéria"
      ],
      "sub": "Roteiro narrativo · jantar imersivo em seis mundos"
    },
    {
      "type": "manifesto",
      "id": "conceito",
      "kicker": "A Forma e a Matéria",
      "title": "Conceito estrutural",
      "html": "O despertar da matéria é um jantar multissensorial sobre a pele e a beleza sublime. A noite atravessa seis mundos, e cada mundo é um estado da matéria com identidade visual própria: a Forma, a água, a matéria que se organiza, a vida, o cristal e a dissolução, que devolve tudo à Forma. Cada prato acontece dentro de um mundo; a transformação acontece na passagem de um para o outro.",
      "nota": "Cada mundo é um <b>visual em loop</b>, disparado à mão por um técnico no iPad, no ritmo em que os pratos são servidos e degustados. As <b>passagens</b> ligam um mundo ao outro: entram fortes e se resolvem dentro do loop seguinte. Paredes, piso e mesa formam <b>um único ambiente contínuo</b>, com o convidado no meio dele."
    },
    {
      "type": "mapa",
      "id": "mapa",
      "kicker": "Mapa",
      "title": "O jantar",
      "cards": [
        {
          "media": {
            "kind": "video",
            "src": "/media/capa-forma-branca.mp4",
            "poster": "/media/capa-forma-branca.jpg",
            "r": 1.7918,
            "label": "capa-forma-branca",
            "pos": "50% 46%"
          },
          "n": "1",
          "title": "A Forma - Recepção",
          "desc": "A Forma existe sozinha, respira e revela sua estrutura.",
          "transition": false
        },
        {
          "media": {
            "kind": "video",
            "src": "/media/principal-1-gotas.mp4",
            "poster": "/media/principal-1-gotas.jpg",
            "r": 0.6744,
            "label": "principal-1-gotas"
          },
          "n": "2",
          "title": "Origem - Couvert",
          "desc": "A Forma se dissolve e abre o mundo da água.",
          "transition": false
        },
        {
          "media": {
            "kind": "image",
            "src": "/media/materia-1-malha-dourada.jpg",
            "r": 2.3337,
            "label": "materia-1-malha-dourada"
          },
          "n": "3",
          "title": "Matéria - Entrada",
          "desc": "Partículas se agrupam: pontos, linhas, malhas, volumes.",
          "transition": false
        },
        {
          "media": {
            "kind": "image",
            "src": "/media/vida-1-amanhecer.jpg",
            "r": 2.3337,
            "label": "vida-1-amanhecer"
          },
          "n": "4",
          "title": "Vida - Prato principal",
          "desc": "A matéria organizada cresce e vira paisagem botânica.",
          "transition": false
        },
        {
          "media": {
            "kind": "image",
            "src": "/media/cristal-1-gemas.jpg",
            "r": 2.5221,
            "label": "cristal-1-gemas"
          },
          "n": "5",
          "title": "Cristal - Sobremesa",
          "desc": "As fibras endurecem e o espaço vira cristal e luz.",
          "transition": false
        },
        {
          "media": {
            "kind": "image",
            "src": "/media/dissolucao-3-esferas.jpg",
            "r": 5.814,
            "label": "dissolucao-3-esferas"
          },
          "n": "6",
          "title": "Dissolução - Final",
          "desc": "O cristal se desfaz até virar água e reencontrar a Forma.",
          "transition": false
        }
      ]
    },
    {
      "type": "opener",
      "id": "forma",
      "dark": false,
      "media": {
        "kind": "video",
        "src": "/media/capa-forma-branca.mp4",
        "poster": "/media/capa-forma-branca.jpg",
        "r": 1.7918,
        "label": "capa-forma-branca"
      },
      "etapa": "Mundo 1 de 6",
      "fase": "Recepção",
      "title": "A Forma",
      "reino": "Forma · antes de tudo",
      "sub": "Antes do jantar começar",
      "narr": "A sala está em estado neutro e a Forma é a primeira coisa que o convidado encontra. Ela existe sozinha, quase como uma entidade, e não precisa ser explicada. Durante a recepção ela respira, se deforma, se multiplica e revela a estrutura que tem por dentro. Quando o jantar começa, a Forma não desaparece: ela se desfaz.",
      "atm": {
        "label": "Atmosfera",
        "html": "Branco leitoso, cromo e vidro. Luz, nunca cor. Movimento mínimo, quase estático, para não competir com a recepção."
      }
    },
    {
      "type": "item",
      "id": "forma-sequencia",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Recepção",
        "nome": "A Forma",
        "secao": "Sequência do loop"
      },
      "num": "01",
      "title": "A Forma respira",
      "html": "Um anel de cromo líquido pulsa no centro da parede principal. A voz que abre a noite tem corpo: faz a Forma vibrar e se desdobra em refrações sobre a mesa.",
      "tiles": [
        {
          "kind": "video",
          "src": "/media/inicio-9-forma-pb.mp4",
          "poster": "/media/inicio-9-forma-pb.jpg",
          "r": 1.3333,
          "label": "inicio-9-forma-pb"
        },
        {
          "kind": "video",
          "src": "/media/forma-1-circulos.mp4",
          "poster": "/media/forma-1-circulos.jpg",
          "r": 0.5625,
          "label": "forma-1-circulos",
          "pos": "50% 36%"
        },
        {
          "kind": "video",
          "src": "/media/inicio-10-anel-invertido.mp4",
          "poster": "/media/inicio-10-anel-invertido.jpg",
          "r": 0.6557,
          "label": "inicio-10-anel-invertido"
        }
      ],
      "layout": "stack"
    },
    {
      "type": "item",
      "id": "forma-sequencia-2",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Recepção",
        "nome": "A Forma",
        "secao": "Sequência do loop"
      },
      "num": "02",
      "title": "A sala branca",
      "html": "Paredes e piso formam um branco contínuo, sem canto nem horizonte. No piso, discos de luz marcam o caminho até os lugares.",
      "tiles": [
        {
          "kind": "image",
          "src": "/media/inicio-2-caixa-de-luz.jpg",
          "r": 1.4993,
          "label": "inicio-2-caixa-de-luz"
        },
        {
          "kind": "image",
          "src": "/media/inicio-3-discos.jpg",
          "r": 0.6834,
          "label": "inicio-3-discos",
          "pos": "50% 62%"
        },
        {
          "kind": "video",
          "src": "/media/inicio-7-portais.mp4",
          "poster": "/media/inicio-7-portais.jpg",
          "r": 0.5625,
          "label": "inicio-7-portais",
          "pos": "50% 55%"
        }
      ],
      "layout": "stack"
    },
    {
      "type": "som",
      "id": "forma-som",
      "dark": false,
      "hd": {
        "fase": "Recepção",
        "nome": "A Forma",
        "secao": "Sequência do loop"
      },
      "rows": [
        {
          "label": "Som",
          "html": "White noise constante e voz da Forma em eco e reverb, sem batida. Um tom puro e grave de fundo (sugestão: 528 Hz), que volta no Final.",
          "tiles": []
        }
      ]
    },
    {
      "type": "item",
      "id": "forma-transicao",
      "dark": false,
      "variant": "trans",
      "hd": {
        "fase": "Recepção",
        "nome": "A Forma",
        "secao": "Passagem"
      },
      "num": "",
      "title": "A Forma → Origem",
      "html": "A Forma se fragmenta e sua estrutura interna fica exposta. O que era sólido perde a borda, começa a escorrer e abre o primeiro mundo: a água.",
      "tiles": [
        {
          "kind": "video",
          "src": "/media/inicio-9-forma-pb.mp4",
          "poster": "/media/inicio-9-forma-pb.jpg",
          "r": 1.3333,
          "label": "inicio-9-forma-pb"
        },
        {
          "kind": "video",
          "src": "/media/agua-10-esfera.mp4",
          "poster": "/media/agua-10-esfera.jpg",
          "r": 0.5625,
          "label": "agua-10-esfera"
        }
      ],
      "layout": "stack"
    },
    {
      "type": "opener",
      "id": "origem",
      "dark": false,
      "media": {
        "kind": "video",
        "src": "/media/principal-1-gotas.mp4",
        "poster": "/media/principal-1-gotas.jpg",
        "r": 0.6744,
        "label": "principal-1-gotas"
      },
      "etapa": "Mundo 2 de 6",
      "fase": "Couvert",
      "title": "Origem",
      "reino": "Água",
      "sub": "O primeiro contato com a comida",
      "narr": "A dissolução da Forma revela um ambiente de água. A escala muda por completo: partículas, moléculas e pequenos fluxos. O couvert acontece dentro desse mundo e, enquanto as pessoas comem, a água deixa de ser só ambiente: as moléculas se aproximam, se agrupam e começam a formar estrutura.",
      "atm": {
        "label": "Atmosfera",
        "html": "Branco perolado, azuis profundos, prata e turquesa translúcido. Movimento fluido e contínuo, sensação de leveza."
      }
    },
    {
      "type": "item",
      "id": "origem-sequencia",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Couvert",
        "nome": "Origem",
        "secao": "Sequência do loop"
      },
      "num": "01",
      "title": "Gotas de Água",
      "html": "Gotas de água se formando e expandindo.",
      "tiles": [
        {
          "kind": "image",
          "src": "/media/couvert-1-lago-esferas.jpg",
          "r": 5.5866,
          "label": "couvert-1-lago-esferas"
        },
        {
          "kind": "image",
          "src": "/media/couvert-3-agua-bolhas.jpg",
          "r": 6.5147,
          "label": "couvert-3-agua-bolhas"
        },
        {
          "kind": "image",
          "src": "/media/couvert-2-mesa-agua.jpg",
          "r": 5.0251,
          "label": "couvert-2-mesa-agua"
        }
      ],
      "layout": "pano"
    },
    {
      "type": "item",
      "id": "origem-sequencia-2",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Couvert",
        "nome": "Origem",
        "secao": "Sequência do loop"
      },
      "num": "02",
      "title": "Moléculas se aproximam",
      "html": "Da superfície descemos até a profundidade. As partículas param de flutuar soltas, se atraem e começam a se organizar em pequenos agrupamentos.",
      "tiles": [
        {
          "kind": "video",
          "src": "/media/agua-8-ondas.mp4",
          "poster": "/media/agua-8-ondas.jpg",
          "r": 0.5625,
          "label": "agua-8-ondas"
        },
        {
          "kind": "video",
          "src": "/media/agua-9-ondas.mp4",
          "poster": "/media/agua-9-ondas.jpg",
          "r": 0.5625,
          "label": "agua-9-ondas"
        },
        {
          "kind": "video",
          "src": "/media/bio-3-profundidade.mp4",
          "poster": "/media/bio-3-profundidade.jpg",
          "r": 1.0,
          "label": "bio-3-profundidade"
        },
        {
          "kind": "video",
          "src": "/media/bio-1-profundidade.mp4",
          "poster": "/media/bio-1-profundidade.jpg",
          "r": 0.5625,
          "label": "bio-1-profundidade"
        }
      ],
      "layout": "stack"
    },
    {
      "type": "som",
      "id": "origem-som",
      "dark": false,
      "hd": {
        "fase": "Couvert",
        "nome": "Origem",
        "secao": "Sequência do loop"
      },
      "rows": [
        {
          "label": "Som",
          "html": "Água calma e ondas suaves na superfície. Na profundidade, sons subaquáticos, movimentação de líquido e pads etéreos.",
          "tiles": []
        },
        {
          "label": "Nos pratos",
          "html": "A mesa vira a própria superfície da água: gotas caem, formam ondas concêntricas e se espalham pelo espaço.",
          "tiles": []
        }
      ]
    },
    {
      "type": "item",
      "id": "origem-transicao",
      "dark": false,
      "variant": "trans",
      "hd": {
        "fase": "Couvert",
        "nome": "Origem",
        "secao": "Passagem"
      },
      "num": "",
      "title": "Origem → Matéria",
      "html": "Os agrupamentos param de se comportar como líquido. O movimento fica mais lento e mais firme, e a água entrega sua matéria ao mundo seguinte.",
      "tiles": [
        {
          "kind": "video",
          "src": "/media/bio-2-profundidade.mp4",
          "poster": "/media/bio-2-profundidade.jpg",
          "r": 0.5625,
          "label": "bio-2-profundidade"
        },
        {
          "kind": "image",
          "src": "/media/materia-3-circulos-ouro.jpg",
          "r": 2.3895,
          "label": "materia-3-circulos-ouro"
        }
      ],
      "layout": "stack"
    },
    {
      "type": "opener",
      "id": "materia",
      "dark": false,
      "media": {
        "kind": "video",
        "src": "/media/pratos-2-mandala-ouro.mp4",
        "poster": "/media/pratos-2-mandala-ouro.jpg",
        "r": 0.5625,
        "label": "pratos-2-mandala-ouro"
      },
      "etapa": "Mundo 3 de 6",
      "fase": "Entrada",
      "title": "Matéria",
      "reino": "Organização",
      "sub": "A matéria ganha estrutura",
      "narr": "Aqui a matéria se organiza sem nunca representar nada biológico. Partículas se aproximam, se agrupam e criam padrões; os padrões se repetem e viram estruturas maiores: pontos, linhas, malhas, superfícies e volumes. A sala passa de um estado fluido para um estado cada vez mais estruturado.",
      "atm": {
        "label": "Atmosfera",
        "html": "Preto, âmbar e ouro. Brilho de metal e de óleo sobre superfície escura. Movimento em camadas, que se repete e se adensa."
      }
    },
    {
      "type": "item",
      "id": "materia-sequencia",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Entrada",
        "nome": "Matéria",
        "secao": "Sequência do loop"
      },
      "num": "01",
      "title": "Pontos, linhas e malhas",
      "html": "A malha se desenha sozinha e se ramifica pelas paredes. Depois se acumula em camadas, como estratos que crescem um sobre o outro.",
      "tiles": [
        {
          "kind": "image",
          "src": "/media/materia-1-malha-dourada.jpg",
          "r": 2.3337,
          "label": "materia-1-malha-dourada"
        },
        {
          "kind": "image",
          "src": "/media/materia-2-ondas-minerais.jpg",
          "r": 2.8694,
          "label": "materia-2-ondas-minerais"
        }
      ],
      "layout": "pano"
    },
    {
      "type": "item",
      "id": "materia-sequencia-2",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Entrada",
        "nome": "Matéria",
        "secao": "Sequência do loop"
      },
      "num": "02",
      "title": "Óleo",
      "html": "Na mesa, a matéria aparece como óleo: superfície densa e brilhante, que envolve o que está servido e reflete a luz da sala.",
      "tiles": [
        {
          "kind": "image",
          "src": "/media/materia-4-oleo.jpg",
          "r": 2.4125,
          "label": "materia-4-oleo"
        },
        {
          "kind": "image",
          "src": "/media/materia-5-mesa-oleo.jpg",
          "r": 4.8426,
          "label": "materia-5-mesa-oleo"
        }
      ],
      "layout": "pano"
    },
    {
      "type": "som",
      "id": "materia-som",
      "dark": false,
      "hd": {
        "fase": "Entrada",
        "nome": "Matéria",
        "secao": "Sequência do loop"
      },
      "rows": [
        {
          "label": "Som",
          "html": "<em>(sugestão)</em> pulsos curtos e secos que se repetem e vão se sobrepondo, atrito de partículas e um grave contínuo por baixo, sem batida marcada.",
          "tiles": []
        },
        {
          "label": "Nos pratos",
          "html": "Óleo e matéria escura em volta do prato, com pequenos pontos de luz que se agrupam enquanto a entrada é servida.",
          "tiles": []
        }
      ]
    },
    {
      "type": "item",
      "id": "materia-transicao",
      "dark": false,
      "variant": "trans",
      "hd": {
        "fase": "Entrada",
        "nome": "Matéria",
        "secao": "Passagem"
      },
      "num": "",
      "title": "Matéria → Vida",
      "html": "Algumas estruturas param de só se repetir: começam a se expandir e a se ramificar. É o primeiro indício de uma forma viva.",
      "tiles": [
        {
          "kind": "video",
          "src": "/media/transicao-3-pele-clara.mp4",
          "poster": "/media/transicao-3-pele-clara.jpg",
          "r": 0.5625,
          "label": "transicao-3-pele-clara"
        },
        {
          "kind": "image",
          "src": "/media/vida-1-amanhecer.jpg",
          "r": 2.3337,
          "label": "vida-1-amanhecer"
        }
      ],
      "layout": "stack"
    },
    {
      "type": "opener",
      "id": "vida",
      "dark": false,
      "media": {
        "kind": "video",
        "src": "/media/pele-flor-branca.mp4",
        "poster": "/media/pele-flor-branca.jpg",
        "r": 1.7985,
        "label": "pele-flor-branca"
      },
      "etapa": "Mundo 4 de 6",
      "fase": "Prato principal",
      "title": "Vida",
      "reino": "Crescimento",
      "sub": "O salto qualitativo",
      "narr": "O que era organização começa a crescer, reagir e se desenvolver. Surgem formas simples, depois raízes, caules e folhas, até um organismo vegetal inteiro. A sala é tomada pela vida e o prato principal acontece dentro dela. Depois do ápice, o crescimento vira transformação e as estruturas se desfazem em fibras.",
      "atm": {
        "label": "Atmosfera",
        "html": "Verde profundo, terra úmida e luz de amanhecer. Movimento orgânico e lento, de coisa que cresce."
      }
    },
    {
      "type": "item",
      "id": "vida-sequencia",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Prato principal",
        "nome": "Vida",
        "secao": "Sequência do loop"
      },
      "num": "01",
      "title": "Paisagem botânica",
      "html": "A paisagem se abre no horizonte e o dia nasce dentro da sala. Na mesa, a vegetação cresce em volta de cada lugar.",
      "tiles": [
        {
          "kind": "image",
          "src": "/media/vida-1-amanhecer.jpg",
          "r": 2.3337,
          "label": "vida-1-amanhecer"
        },
        {
          "kind": "image",
          "src": "/media/vida-3-mesa-flores.jpg",
          "r": 5.0125,
          "label": "vida-3-mesa-flores"
        }
      ],
      "layout": "pano"
    },
    {
      "type": "item",
      "id": "vida-sequencia-2",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Prato principal",
        "nome": "Vida",
        "secao": "Sequência do loop"
      },
      "num": "02",
      "title": "A vida ocupa a mesa",
      "html": "O organismo se multiplica e toma a superfície inteira: folhas, talos e sementes sobre o tampo, entre os pratos.",
      "tiles": [
        {
          "kind": "image",
          "src": "/media/vida-4-abobrinha.jpg",
          "r": 2.3337,
          "label": "vida-4-abobrinha"
        },
        {
          "kind": "image",
          "src": "/media/vida-5-mesa-abobrinha.jpg",
          "r": 4.9875,
          "label": "vida-5-mesa-abobrinha"
        }
      ],
      "layout": "pano"
    },
    {
      "type": "item",
      "id": "vida-sequencia-3",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Prato principal",
        "nome": "Vida",
        "secao": "Sequência do loop"
      },
      "num": "03",
      "title": "Noite no jardim",
      "html": "A luz baixa e a mesma paisagem vira noite. A cor esquenta, a vegetação escurece e o mundo começa a se recolher.",
      "tiles": [
        {
          "kind": "image",
          "src": "/media/vida-2-noite.jpg",
          "r": 2.3337,
          "label": "vida-2-noite"
        },
        {
          "kind": "image",
          "src": "/media/vida-8-mesa-hibisco.jpg",
          "r": 5.0,
          "label": "vida-8-mesa-hibisco"
        }
      ],
      "layout": "pano"
    },
    {
      "type": "som",
      "id": "vida-som",
      "dark": false,
      "hd": {
        "fase": "Prato principal",
        "nome": "Vida",
        "secao": "Sequência do loop"
      },
      "rows": [
        {
          "label": "Som",
          "html": "<em>(sugestão)</em> vento em folhas, madeira e fibras, insetos distantes e cordas graves sustentadas por baixo.",
          "tiles": []
        },
        {
          "label": "Nos pratos",
          "html": "A vegetação cresce em volta do prato e, no fim da etapa, começa a secar e se desfazer em fibras.",
          "tiles": []
        }
      ]
    },
    {
      "type": "item",
      "id": "vida-transicao",
      "dark": false,
      "variant": "trans",
      "hd": {
        "fase": "Prato principal",
        "nome": "Vida",
        "secao": "Passagem"
      },
      "num": "",
      "title": "Vida → Cristal",
      "html": "A vida deixa para trás a própria forma: as estruturas vegetais se desfazem em fibras e entregam sua matéria ao mundo seguinte.",
      "tiles": [
        {
          "kind": "video",
          "src": "/media/pele-paisagem-seda.mp4",
          "poster": "/media/pele-paisagem-seda.jpg",
          "r": 0.75,
          "label": "pele-paisagem-seda"
        },
        {
          "kind": "video",
          "src": "/media/transicao-5-poeira-ouro.mp4",
          "poster": "/media/transicao-5-poeira-ouro.jpg",
          "r": 0.5625,
          "label": "transicao-5-poeira-ouro"
        }
      ],
      "layout": "stack"
    },
    {
      "type": "opener",
      "id": "cristal",
      "dark": false,
      "media": {
        "kind": "video",
        "src": "/media/cristais-4-prisma.mp4",
        "poster": "/media/cristais-4-prisma.jpg",
        "r": 0.5625,
        "label": "cristais-4-prisma"
      },
      "etapa": "Mundo 5 de 6",
      "fase": "Sobremesa",
      "title": "Cristal",
      "reino": "Transformação",
      "sub": "A matéria muda de estado",
      "narr": "As fibras se reorganizam, se compactam e criam uma estrutura nova. A matéria orgânica perde a aparência vegetal e fica mineral, rígida e translúcida. Surgem as primeiras formações cristalinas, que crescem, se conectam e transformam o espaço inteiro em cristal e luz. A sobremesa acontece nesse estado.",
      "atm": {
        "label": "Atmosfera",
        "html": "Cristal translúcido, prata e branco, com a luz se abrindo em arco-íris sobre fundo escuro."
      }
    },
    {
      "type": "item",
      "id": "cristal-sequencia",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Sobremesa",
        "nome": "Cristal",
        "secao": "Sequência do loop"
      },
      "num": "01",
      "title": "O cristal cresce",
      "html": "As formações se multiplicam e ocupam paredes e mesa, como um geodo crescendo em câmera lenta.",
      "tiles": [
        {
          "kind": "image",
          "src": "/media/cristal-1-gemas.jpg",
          "r": 2.5221,
          "label": "cristal-1-gemas"
        },
        {
          "kind": "image",
          "src": "/media/cristal-3-mesa-gemas.jpg",
          "r": 4.9505,
          "label": "cristal-3-mesa-gemas"
        }
      ],
      "layout": "pano"
    },
    {
      "type": "item",
      "id": "cristal-sequencia-2",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Sobremesa",
        "nome": "Cristal",
        "secao": "Sequência do loop"
      },
      "num": "02",
      "title": "Luz e refração",
      "html": "A luz atravessa as facetas e se abre em cor. Cada reflexo desenha um prisma novo sobre a mesa.",
      "tiles": [
        {
          "kind": "video",
          "src": "/media/cristais-3-facetas.mp4",
          "poster": "/media/cristais-3-facetas.jpg",
          "r": 0.5629,
          "label": "cristais-3-facetas"
        },
        {
          "kind": "video",
          "src": "/media/cristais-4-refracao.mp4",
          "poster": "/media/cristais-4-refracao.jpg",
          "r": 0.5625,
          "label": "cristais-4-refracao"
        },
        {
          "kind": "video",
          "src": "/media/final-3-luz.mp4",
          "poster": "/media/final-3-luz.jpg",
          "r": 0.6032,
          "label": "final-3-luz"
        },
        {
          "kind": "video",
          "src": "/media/joias-video-1-anel-borboleta.mp4",
          "poster": "/media/joias-video-1-anel-borboleta.jpg",
          "r": 0.8,
          "label": "joias-video-1-anel-borboleta"
        }
      ],
      "layout": "stack"
    },
    {
      "type": "item",
      "id": "cristal-sequencia-3",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Sobremesa",
        "nome": "Cristal",
        "secao": "Sequência do loop"
      },
      "num": "03",
      "title": "Pérola e filigrana",
      "html": "O mineral fica preciso e ornamental: fios de ouro, pérolas e pedras compõem a superfície, como uma jóia vista de perto.",
      "tiles": [
        {
          "kind": "image",
          "src": "/media/cristal-2-perolas.jpg",
          "r": 2.7322,
          "label": "cristal-2-perolas"
        },
        {
          "kind": "image",
          "src": "/media/cristal-4-mesa-filigrana.jpg",
          "r": 4.8426,
          "label": "cristal-4-mesa-filigrana"
        }
      ],
      "layout": "pano"
    },
    {
      "type": "som",
      "id": "cristal-som",
      "dark": false,
      "hd": {
        "fase": "Sobremesa",
        "nome": "Cristal",
        "secao": "Sequência do loop"
      },
      "rows": [
        {
          "label": "Som",
          "html": "Fricção mineral, cristais tilintando, drone grave e batidas tectônicas quase sísmicas.",
          "tiles": []
        },
        {
          "label": "Nos pratos",
          "html": "Reflexos de cristal e luz colorida em volta da sobremesa, que no fim começam a se quebrar em fragmentos.",
          "tiles": []
        }
      ]
    },
    {
      "type": "item",
      "id": "cristal-transicao",
      "dark": false,
      "variant": "trans",
      "hd": {
        "fase": "Sobremesa",
        "nome": "Cristal",
        "secao": "Passagem"
      },
      "num": "",
      "title": "Cristal → Dissolução",
      "html": "Os cristais começam a se fragmentar. O mundo inteiro volta para a escala microscópica.",
      "tiles": [
        {
          "kind": "video",
          "src": "/media/final-5-dispersao.mp4",
          "poster": "/media/final-5-dispersao.jpg",
          "r": 0.5625,
          "label": "final-5-dispersao"
        },
        {
          "kind": "video",
          "src": "/media/final-6-diamante-po.mp4",
          "poster": "/media/final-6-diamante-po.jpg",
          "r": 1.7985,
          "label": "final-6-diamante-po"
        }
      ],
      "layout": "stack"
    },
    {
      "type": "opener",
      "id": "dissolucao",
      "dark": false,
      "media": {
        "kind": "video",
        "src": "/media/final-5-dispersao.mp4",
        "poster": "/media/final-5-dispersao.jpg",
        "r": 0.5625,
        "label": "final-5-dispersao"
      },
      "etapa": "Mundo 6 de 6",
      "fase": "Final",
      "title": "Dissolução",
      "reino": "Retorno",
      "sub": "Tudo volta ao começo",
      "narr": "Os cristais não somem: eles se quebram em fragmentos, depois em partículas cada vez menores, até voltarem ao estado molecular. As moléculas se reorganizam e voltam a formar água. A água encontra novamente a Forma, e a Forma pode começar a experiência de novo.",
      "atm": {
        "label": "Atmosfera",
        "html": "Do preto e branco de volta ao branco do início, passando pela água. Movimento que desacelera até o repouso."
      }
    },
    {
      "type": "item",
      "id": "dissolucao-sequencia",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Final",
        "nome": "Dissolução",
        "secao": "Sequência do loop"
      },
      "num": "01",
      "title": "Fragmento, partícula, molécula",
      "html": "O que era sólido se parte, vira pó e depois ponto de luz. A escala diminui até restar só movimento.",
      "tiles": [
        {
          "kind": "video",
          "src": "/media/final-5-dispersao.mp4",
          "poster": "/media/final-5-dispersao.jpg",
          "r": 0.5625,
          "label": "final-5-dispersao"
        },
        {
          "kind": "video",
          "src": "/media/bb-7-explosao.mp4",
          "poster": "/media/bb-7-explosao.jpg",
          "r": 0.5625,
          "label": "bb-7-explosao"
        },
        {
          "kind": "video",
          "src": "/media/foco-energia-2.mp4",
          "poster": "/media/foco-energia-2.jpg",
          "r": 1.0,
          "label": "foco-energia-2"
        },
        {
          "kind": "video",
          "src": "/media/bb-8-estrelas.mp4",
          "poster": "/media/bb-8-estrelas.jpg",
          "r": 0.5625,
          "label": "bb-8-estrelas"
        }
      ],
      "layout": "stack"
    },
    {
      "type": "item",
      "id": "dissolucao-sequencia-2",
      "dark": false,
      "variant": "seq",
      "hd": {
        "fase": "Final",
        "nome": "Dissolução",
        "secao": "Sequência do loop"
      },
      "num": "02",
      "title": "A água encontra a Forma",
      "html": "As moléculas voltam a formar água, a água se aquieta, e a sala volta a ser a mesma luz que recebeu os convidados.",
      "tiles": [
        {
          "kind": "image",
          "src": "/media/dissolucao-3-esferas.jpg",
          "r": 5.814,
          "label": "dissolucao-3-esferas"
        },
        {
          "kind": "image",
          "src": "/media/dissolucao-2-flores-azuis.jpg",
          "r": 5.7471,
          "label": "dissolucao-2-flores-azuis"
        },
        {
          "kind": "image",
          "src": "/media/dissolucao-1-dentes-de-leao.jpg",
          "r": 5.5866,
          "label": "dissolucao-1-dentes-de-leao"
        }
      ],
      "layout": "pano"
    },
    {
      "type": "som",
      "id": "dissolucao-som",
      "dark": false,
      "hd": {
        "fase": "Final",
        "nome": "Dissolução",
        "secao": "Sequência do loop"
      },
      "rows": [
        {
          "label": "Som",
          "html": "O mesmo som da abertura: white noise constante e voz da Forma em eco e reverb, sem batida, com o tom grave de fundo. Tudo se dissolve de volta nele. A voz da Forma pode voltar para uma última frase de despedida.",
          "tiles": []
        }
      ]
    },
    {
      "type": "item",
      "id": "dissolucao-transicao",
      "dark": false,
      "variant": "trans",
      "hd": {
        "fase": "Final",
        "nome": "Dissolução",
        "secao": "Passagem"
      },
      "num": "",
      "title": "Dissolução → A Forma",
      "html": "A água encontra a Forma. O anel volta a se fechar no centro da parede e o ciclo pode recomeçar.",
      "tiles": [
        {
          "kind": "video",
          "src": "/media/agua-10-esfera.mp4",
          "poster": "/media/agua-10-esfera.jpg",
          "r": 0.5625,
          "label": "agua-10-esfera"
        },
        {
          "kind": "video",
          "src": "/media/capa-forma-branca.mp4",
          "poster": "/media/capa-forma-branca.jpg",
          "r": 1.7918,
          "label": "capa-forma-branca"
        }
      ],
      "layout": "stack"
    },
    {
      "type": "resumo",
      "id": "quadro-resumo",
      "kicker": "6 mundos",
      "title": "Quadro-resumo",
      "head": [
        "",
        "#",
        "Etapa do jantar",
        "Mundo",
        "Estado da matéria",
        "Cor dominante",
        "Elo de passagem"
      ],
      "rows": [
        {
          "thumb": {
            "kind": "image",
            "src": "/media/capa-forma-branca.jpg",
            "r": 1.7918,
            "label": "capa-forma-branca"
          },
          "cells": [
            "1",
            "Recepção",
            "<b>A Forma</b>",
            "Forma",
            "Branco, cromo",
            "A Forma se fragmenta e escorre"
          ]
        },
        {
          "thumb": {
            "kind": "image",
            "src": "/media/principal-1-gotas.jpg",
            "r": 0.6744,
            "label": "principal-1-gotas"
          },
          "cells": [
            "2",
            "Couvert",
            "<b>Origem</b>",
            "Água",
            "Azul, prata, turquesa",
            "As moléculas se agrupam"
          ]
        },
        {
          "thumb": {
            "kind": "image",
            "src": "/media/materia-1-malha-dourada.jpg",
            "r": 2.3337,
            "label": "materia-1-malha-dourada"
          },
          "cells": [
            "3",
            "Entrada",
            "<b>Matéria</b>",
            "Organização",
            "Preto, âmbar, ouro",
            "As estruturas se ramificam"
          ]
        },
        {
          "thumb": {
            "kind": "image",
            "src": "/media/vida-1-amanhecer.jpg",
            "r": 2.3337,
            "label": "vida-1-amanhecer"
          },
          "cells": [
            "4",
            "Prato principal",
            "<b>Vida</b>",
            "Crescimento",
            "Verde, terra, amanhecer",
            "A vida se desfaz em fibras"
          ]
        },
        {
          "thumb": {
            "kind": "image",
            "src": "/media/cristal-1-gemas.jpg",
            "r": 2.5221,
            "label": "cristal-1-gemas"
          },
          "cells": [
            "5",
            "Sobremesa",
            "<b>Cristal</b>",
            "Transformação",
            "Cristal, prata, arco-íris",
            "Os cristais se fragmentam"
          ]
        },
        {
          "thumb": {
            "kind": "image",
            "src": "/media/dissolucao-3-esferas.jpg",
            "r": 5.814,
            "label": "dissolucao-3-esferas"
          },
          "cells": [
            "6",
            "Final",
            "<b>Dissolução</b>",
            "Retorno",
            "Preto e branco, depois branco",
            "A água reencontra a Forma"
          ]
        }
      ]
    }
  ];
