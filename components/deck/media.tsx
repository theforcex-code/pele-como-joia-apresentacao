import type { CSSProperties } from "react";
import type { Media } from "@/lib/deck-types";

export type CSSVars = CSSProperties & Record<`--${string}`, string | number>;

/** Vídeo em loop (toca só quando o slide está na tela; ver DeckShell) ou imagem. */
export function MediaEl({ m, className }: { m: Media; className?: string }) {
  const style = m.pos ? { objectPosition: m.pos } : undefined;
  if (m.kind === "video") {
    return (
      <video
        className={className}
        src={m.src}
        poster={m.poster}
        muted
        loop
        playsInline
        preload="none"
        style={style}
      />
    );
  }
  // eslint-disable-next-line @next/next/no-img-element -- mídia estática do roteiro, sem otimização do Next
  return <img className={className} src={m.src} alt="" style={style} />;
}

/**
 * Quadros numa linha, todos na mesma altura, cada um na proporção do próprio arquivo (nada esticado).
 * A linha ocupa a largura da área até a altura dela acabar: o CSS usa --sum (soma das proporções) e --n.
 */
export function Tiles({ tiles }: { tiles: Media[] }) {
  const sum = tiles.reduce((acc, t) => acc + t.r, 0);
  const style: CSSVars = { "--n": tiles.length, "--sum": sum.toFixed(4) };
  return (
    <div className="area">
      <div className="tiles" data-n={tiles.length} style={style}>
        {tiles.map((t, i) => (
          <figure className="t" key={`${i}-${t.src}`} style={{ "--r": t.r } as CSSVars}>
            <MediaEl m={t} />
            {t.label && <figcaption className="sr">{t.label}</figcaption>}
          </figure>
        ))}
      </div>
    </div>
  );
}
