import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pele como Jóia",
  description: "O despertar da matéria. Roteiro narrativo do jantar imersivo em 8 etapas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
