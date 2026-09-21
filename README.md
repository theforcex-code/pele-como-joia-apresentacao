# Pele como Jóia

Roteiro narrativo de um jantar imersivo em 8 etapas, como apresentação de slides.
Next.js 16 com Turbopack.

## Abrir em outro computador

```bash
git clone https://github.com/theforcex-code/pele-como-joia-apresentacao.git
cd pele-como-joia-apresentacao
npm install
npm run dev
```

Abre em http://localhost:3000.

O `node_modules` não vai pelo git, por isso o `npm install` é obrigatório na
primeira vez. No Windows, clone numa pasta de caminho curto (por exemplo
`C:\Projetos\`): o limite de 260 caracteres do sistema faz o clone falhar no
meio, com erro que não deixa clara a causa.

## Navegação

Setas, PageUp/PageDown e espaço mudam de slide. `Home` e `End` vão ao primeiro
e ao último. `F` entra em tela cheia. Os vídeos só tocam no slide visível.

## HTML estático

```bash
EXPORT=1 npm run build
```

Gera `/out` com o deck inteiro, incluindo as mídias. **Precisa ser servido por
HTTP** — os caminhos são absolutos e o `index.html` não funciona aberto direto
do disco. Para testar:

```bash
npx serve out
```

## Estrutura

- `lib/deck-data.ts` — o roteiro inteiro: textos, mídias e ordem dos slides
- `lib/deck-types.ts` — os tipos de slide (capa, abertura, board, som, mapa)
- `components/deck/slides.tsx` — como cada tipo é desenhado
- `app/deck.css` — a grade: margens, coluna de texto, proporção das mídias
- `public/media/` — vídeos e imagens

A mídia de cada board aparece na proporção do próprio arquivo, nunca esticada.
O layout de um board segue a orientação da mídia: soma de proporções abaixo de
1,70 usa `side`, acima usa `stack`.
