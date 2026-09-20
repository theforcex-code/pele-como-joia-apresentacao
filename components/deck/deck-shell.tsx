"use client";

import "lenis/dist/lenis.css";
import { ReactLenis, useLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import type Lenis from "lenis";

/**
 * Casca da apresentação: rolagem suave (Lenis), animações que respeitam "reduzir movimento"
 * e os controles de slide (teclado, vídeos só no slide visível, slides cobertos ocultos).
 */
export default function DeckShell({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user">
      {!reduce && <ReactLenis root options={{ lerp: 0.09 }} />}
      {children}
      <DeckControls />
    </MotionConfig>
  );
}

function DeckControls() {
  const lenis = useLenis();
  const lenisRef = useRef<Lenis | undefined>(undefined);
  useEffect(() => {
    lenisRef.current = lenis;
  }, [lenis]);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const deck = document.querySelector<HTMLElement>(".deck");
    const pages = Array.from(document.querySelectorAll<HTMLElement>(".page"));
    if (!deck || !pages.length) return;
    let tops: number[] = [];

    // Posição de cada slide no fluxo (grudados na tela, mas não no fluxo).
    const measure = () => {
      const gap = parseFloat(getComputedStyle(deck).rowGap) || 0;
      let y = deck.getBoundingClientRect().top + scrollY;
      tops = pages.map((p) => {
        const t = y;
        y += p.offsetHeight + gap;
        return t;
      });
    };
    const current = () => {
      const mid = scrollY + innerHeight / 2;
      let i = 0;
      while (i < tops.length - 1 && tops[i + 1] <= mid) i++;
      return i;
    };
    const visible = (i: number) => {
      const y = scrollY;
      // slides empilhados: só o que está na tela e o que está subindo por cima dele
      let j = 0;
      while (j < tops.length - 1 && tops[j + 1] <= y + 1) j++;
      return i === j || (i === j + 1 && tops[i] < y + innerHeight);
    };
    const update = () => {
      pages.forEach((p, i) => {
        const on = visible(i);
        p.classList.toggle("coberto", !on && tops[i] < scrollY);
        p.querySelectorAll("video").forEach((v) => {
          if (on && !reduce) {
            if (v.paused) {
              v.muted = true;
              v.play().catch(() => {});
            }
          } else if (!v.paused) v.pause();
        });
      });
    };

    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        update();
      });
    };
    const onResize = () => {
      measure();
      update();
    };
    const onVisibility = () => {
      if (!document.hidden) update();
    };
    const go = (i: number) => {
      const target = tops[Math.max(0, Math.min(pages.length - 1, i))];
      const l = lenisRef.current;
      if (l) l.scrollTo(target, { duration: 1.1 });
      else scrollTo({ top: target, behavior: reduce ? "auto" : "smooth" });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key;
      if (k === "ArrowDown" || k === "ArrowRight" || k === "PageDown" || k === " ") {
        e.preventDefault();
        go(current() + 1);
      } else if (k === "ArrowUp" || k === "ArrowLeft" || k === "PageUp") {
        e.preventDefault();
        go(current() - 1);
      } else if (k === "Home") {
        e.preventDefault();
        go(0);
      } else if (k === "End") {
        e.preventDefault();
        go(pages.length - 1);
      } else if (k === "f" || k === "F") {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen?.();
      }
    };

    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onResize);
    addEventListener("keydown", onKey);
    document.addEventListener("visibilitychange", onVisibility);
    const ro = new ResizeObserver(onResize);
    ro.observe(deck);
    measure();
    update();

    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
      removeEventListener("keydown", onKey);
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();
    };
  }, []);

  return null;
}
