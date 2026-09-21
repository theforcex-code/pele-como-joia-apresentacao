import type { NextConfig } from "next";

/**
 * Por padrão o projeto roda como app Next (npm run dev / npm start).
 * Com EXPORT=1 o build gera HTML estático em /out, para hospedar em qualquer
 * servidor de arquivos. O /out precisa ser servido por HTTP: os caminhos são
 * absolutos e não funcionam abrindo o index.html direto do disco.
 */
const nextConfig: NextConfig = {
  ...(process.env.EXPORT === "1" ? { output: "export" as const } : {}),
};

export default nextConfig;
