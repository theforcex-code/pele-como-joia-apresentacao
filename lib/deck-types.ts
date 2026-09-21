/** Imagem ou vídeo, com a proporção real do arquivo (largura / altura). */
export type Media = {
  kind: "video" | "image";
  src: string;
  poster?: string;
  r: number;
  /** peso na linha: 1 = altura cheia, 0.6 = 60% da altura do maior. Padrão 1. */
  k?: number;
  pos?: string;
  label?: string;
};

/** Cabeçalho dos slides de etapa: fase · nome da etapa · parte. */
export type StageHeader = { fase: string; nome: string; secao: string };

export type Slide =
  | { type: "cover"; id: string; media: Media; kicker: string; lines: string[]; sub: string }
  | {
      type: "manifesto"; id: string; kicker: string; title: string; html: string;
      /** texto menor, abaixo do principal */
      nota?: string;
    }
  | {
      type: "conceito";
      id: string;
      kicker: string;
      title: string;
      strip: { media: Media; label: string }[];
      cols: string[];
    }
  | {
      type: "mapa";
      id: string;
      kicker: string;
      title: string;
      cards: { media: Media; n: string; title: string; desc: string; transition: boolean }[];
    }
  | {
      type: "opener";
      id: string;
      dark: boolean;
      media: Media;
      /** proporção de exibição da mídia (recorte por object-fit); padrão: a do arquivo, no máximo 0,8. */
      crop?: number;
      /** mídias extras: a abertura mostra media + extra lado a lado, na mesma caixa */
      extra?: Media[];
      etapa: string;
      fase: string;
      title: string;
      reino: string;
      sub: string;
      narr: string;
      atm: { label: string; html: string };
    }
  | {
      type: "item";
      id: string;
      dark: boolean;
      variant: "seq" | "trans";
      hd: StageHeader;
      num: string;
      title: string;
      html: string;
      tiles: Media[];
      /** side: mídia ao lado do texto; stack: mídia embaixo, na largura toda. */
      layout: "side" | "stack";
    }
  | {
      /** Board só de mídia: os quadros ocupam o slide inteiro, sem cabeçalho nem texto. */
      type: "board";
      id: string;
      dark: boolean;
      /** full: sem a margem do slide, a mídia ocupa a altura toda. */
      full?: boolean;
      tiles: Media[];
    }
  | {
      type: "som";
      id: string;
      dark: boolean;
      hd: StageHeader;
      rows: { label: string; html: string; tiles: Media[] }[];
    }
  | {
      type: "resumo";
      id: string;
      kicker: string;
      title: string;
      head: string[];
      rows: { thumb: Media; cells: string[] }[];
    }
  | { type: "notas"; id: string; title: string; html: string };
