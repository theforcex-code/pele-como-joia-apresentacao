"use client";

import { motion, type Variants } from "motion/react";

// Tags que o texto animado pode assumir (um título continua sendo h1/h2/h3 para leitores de tela e SEO).
const tags = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  animationType?: "letters" | "words";
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  initialY?: number;
  initialOpacity?: number;
  animateY?: number;
  animateOpacity?: number;
  /** Elemento renderizado. Padrão: div. */
  as?: keyof typeof tags;
  /** Anima quando o texto entra na tela, em vez de ao montar. */
  inView?: boolean;
  /** Com inView: anima só na primeira vez. */
  once?: boolean;
  /** Com inView: fração do texto visível para disparar (0 a 1). */
  amount?: number;
}

export default function AnimatedText({
  text,
  className = "text-4xl font-bold",
  animationType = "letters",
  duration = 0.6,
  delay = 0,
  staggerDelay = 0.05,
  initialY = 10,
  initialOpacity = 0,
  animateY = 0,
  animateOpacity = 1,
  as = "div",
  inView = false,
  once = true,
  amount = 0.5,
}: AnimatedTextProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: initialY,
      opacity: initialOpacity,
    },
    visible: {
      y: animateY,
      opacity: animateOpacity,
      transition: {
        duration: duration,
        ease: "easeOut",
      },
    },
  };

  const words = text.split(" ");

  // Letras agrupadas por palavra: a quebra de linha só acontece entre palavras.
  const renderLetters = () =>
    words.map((word, w) => (
      <span key={`word-${w}`} className="inline-block whitespace-nowrap" aria-hidden="true">
        {word.split("").map((char, index) => (
          <motion.span key={`letter-${w}-${index}`} variants={itemVariants} className="inline-block">
            {char}
          </motion.span>
        ))}
        {w < words.length - 1 && (
          <motion.span variants={itemVariants} className="inline-block" style={{ whiteSpace: "pre" }}>
            {" "}
          </motion.span>
        )}
      </span>
    ));

  const renderWords = () =>
    words.map((word, index) => (
      <motion.span key={`word-${index}`} variants={itemVariants} className="mr-2 inline-block" aria-hidden="true">
        {word}
      </motion.span>
    ));

  const Tag = tags[as];
  const trigger = inView
    ? { whileInView: "visible", viewport: { once, amount } }
    : { animate: "visible" };

  return (
    <Tag className={className} aria-label={text} variants={containerVariants} initial="hidden" {...trigger}>
      {animationType === "letters" ? renderLetters() : renderWords()}
    </Tag>
  );
}
