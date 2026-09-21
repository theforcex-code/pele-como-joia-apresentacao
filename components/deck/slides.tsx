import type { ReactNode } from "react";
import AnimatedText from "@/components/ui/animated-text";
import { MediaEl, Tiles, type CSSVars } from "@/components/deck/media";
import { slides } from "@/lib/deck-data";
import type { Slide, StageHeader } from "@/lib/deck-types";

/* Títulos: letras subindo uma a uma quando o slide entra na tela (uma vez só). */
function Anim({
  text,
  as = "span",
  className = "",
  delay = 0,
  stagger = 0.03,
}: {
  text: string;
  as?: "span" | "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <AnimatedText
      text={text}
      as={as}
      className={className}
      animationType="letters"
      staggerDelay={stagger}
      duration={0.6}
      delay={delay}
      inView
      once
      amount={0.4}
    />
  );
}

/** HTML do roteiro (negrito, itálico, listas), sem alterar o texto. */
function Html({ as: Tag = "p", html, className }: { as?: "p" | "div" | "ul"; html: string; className?: string }) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function Page({ slide, cls, n, style, children }: { slide: Slide; cls: string; n?: number; style?: CSSVars; children: ReactNode }) {
  const dark = "dark" in slide && slide.dark ? " dark" : "";
  return (
    <section className={`page ${cls}${dark}`} id={slide.id} style={style}>
      <div className="stage">
        {children}
        {n !== undefined && <span className="pg">{String(n).padStart(2, "0")}</span>}
      </div>
    </section>
  );
}

/* Cabeçalho dos slides de etapa: fase · etapa · parte (a fase some quando a etapa não tem). */
function StageHd({ hd }: { hd: StageHeader }) {
  return (
    <header className="hd">
      {hd.fase && <span className="fase">{hd.fase}</span>}
      <b>{hd.nome}</b>
      {hd.secao && <span>{hd.secao}</span>}
    </header>
  );
}

/* Cabeçalho dos slides de visão geral: rótulo pequeno em cima, título embaixo. */
function OverviewHd({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <header className="hd">
      {kicker && <span>{kicker}</span>}
      <Anim as="h2" className="ttl" text={title} />
    </header>
  );
}

function SlideView({ s, n }: { s: Slide; n: number }) {
  switch (s.type) {
    case "cover":
      return (
        <section className="page cover" id={s.id}>
          <MediaEl m={s.media} />
          <span className="pg">{String(n).padStart(2, "0")}</span>
          <div className="title">
            <p className="kicker">{s.kicker}</p>
            <h1>
              {s.lines.map((line, i) => (
                <Anim key={line} className="line" text={line} delay={0.15 + i * 0.3} stagger={0.04} />
              ))}
            </h1>
            <p className="sub">{s.sub}</p>
          </div>
        </section>
      );

    case "manifesto":
      return (
        <Page slide={s} n={n} cls="manifesto ov">
          <div className="in">
            <OverviewHd kicker={s.kicker} title={s.title} />
            <div className="ct">
              <Html className="statement" html={s.html} />
              {s.nota && <Html className="nota" html={s.nota} />}
            </div>
          </div>
        </Page>
      );

    case "conceito":
      return (
        <Page slide={s} n={n} cls="conceito-b ov">
          <div className="in">
            <OverviewHd kicker={s.kicker} title={s.title} />
            <div className="ct">
              <div className="strip">
                {s.strip.flatMap((item, i) => [
                  ...(i > 0 ? [<span className="arrow" key={`a${i}`} aria-hidden="true">→</span>] : []),
                  <figure className="t" key={`f${i}`}>
                    <MediaEl m={item.media} />
                    <figcaption>{item.label}</figcaption>
                  </figure>,
                ])}
              </div>
              <div className="cols3">
                {s.cols.map((html, i) => (
                  <Html as="div" key={i} html={html} />
                ))}
              </div>
            </div>
          </div>
        </Page>
      );

    case "mapa":
      return (
        <Page slide={s} n={n} cls="mapa ov">
          <div className="in">
            <OverviewHd kicker={s.kicker} title={s.title} />
            <div className="ct">
              <div className="map">
                {s.cards.map((c) => (
                  <figure className={`t${c.transition ? " is-transition" : ""}`} key={c.title}>
                    <MediaEl m={c.media} />
                    <figcaption>
                      {c.n}
                      <strong>{c.title}</strong>
                      <span>{c.desc}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </Page>
      );

    case "opener":
      // A imagem da abertura fica na proporção dela; só as horizontais são recortadas num retrato (0,8).
      return (
        <Page slide={s} n={n} cls="opener" style={{ "--r": s.crop ?? Math.min(s.media.r, 0.8) }}>
          {s.extra?.length ? (
            <div className="media mediabox">
              {[s.media, ...s.extra].map((m, i) => (
                <MediaEl key={`${i}-${m.src}`} m={m} className="m" />
              ))}
            </div>
          ) : (
            <MediaEl m={s.media} className="media" />
          )}
          <div className="in">
            <header className="hd">
              {s.fase && <span>{s.fase}</span>}
              <b>{s.etapa}</b>
            </header>
            <Anim as="h2" text={s.title} stagger={0.035} />
            <p className="reino">{s.reino}</p>
            <h3>{s.sub}</h3>
            <Html className="narr" html={s.narr} />
            <div className="atm">
              <b>{s.atm.label}</b>
              <Html html={s.atm.html} />
            </div>
          </div>
        </Page>
      );

    case "item":
      return (
        <Page slide={s} n={n} cls={s.variant}>
          <div className="in">
            <StageHd hd={s.hd} />
            <div className="ct">
              <div className={`item ${s.layout}`}>
                <div className="txt">
                  {(s.num || s.title) && (
                    <h3 className="ttl">
                      {s.num && <span className="num">{s.num}</span>}
                      <Anim text={s.title} />
                    </h3>
                  )}
                  <Html html={s.html} />
                </div>
                {s.tiles.length > 0 && (
                  <Tiles tiles={s.variant === "trans" ? s.tiles.map((t) => ({ ...t, r: 9 / 16, k: 1 })) : s.tiles} />
                )}
              </div>
            </div>
          </div>
        </Page>
      );

    case "board":
      return (
        <Page slide={s} n={n} cls={s.full ? "board full" : "board"}>
          <div className="in">
            <Tiles tiles={s.tiles} />
          </div>
        </Page>
      );

    case "som":
      return (
        <Page slide={s} n={n} cls="som">
          <div className="in">
            <StageHd hd={s.hd} />
            <div className="ct">
              <div className="rows">
                {s.rows.map((r) => (
                  <div className={`r${r.tiles.length ? " has-media" : ""}`} key={r.label}>
                    <Anim as="h3" className="ttl" text={r.label} />
                    <div className="body">
                      <Html as="div" html={r.html.startsWith("<p") ? r.html : `<p>${r.html}</p>`} />
                      {r.tiles.length > 0 && <Tiles tiles={r.tiles} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Page>
      );

    case "resumo":
      return (
        <Page slide={s} n={n} cls="resumo ov">
          <div className="in">
            <OverviewHd kicker={s.kicker} title={s.title} />
            <div className="ct">
              <table className="sum">
                <colgroup>
                  {s.head.map((_, i) => (
                    <col key={i} />
                  ))}
                </colgroup>
                <thead>
                  <tr>
                    {s.head.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.rows.map((r, ri) => (
                    <tr key={ri}>
                      <td>
                        {/* eslint-disable-next-line @next/next/no-img-element -- miniatura estática */}
                        <img src={r.thumb.src} alt="" />
                      </td>
                      {r.cells.map((html, i) => {
                        const label = s.head[i + 1];
                        return (
                          <td
                            key={i}
                            className={i === 0 ? "n" : undefined}
                            data-l={label && label !== "#" ? label : undefined}
                            dangerouslySetInnerHTML={{ __html: html }}
                          />
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Page>
      );

    case "testes":
      return (
        <Page slide={s} n={n} cls="testes ov">
          <div className="in">
            <OverviewHd title={s.title} />
            <div className="pilha">
              {s.tiles.map((m, i) => (
                <figure key={`${i}-${m.src}`} style={{ aspectRatio: m.r }}>
                  <MediaEl m={m} />
                </figure>
              ))}
            </div>
          </div>
        </Page>
      );

    case "notas":
      return (
        <Page slide={s} n={n} cls="notes ov">
          <div className="in">
            <OverviewHd title={s.title} />
            <div className="ct">
              <Html as="ul" className="l" html={s.html} />
            </div>
          </div>
        </Page>
      );
  }
}

export function Slides() {
  return slides.map((s, i) => <SlideView key={s.id} s={s} n={i + 1} />);
}
