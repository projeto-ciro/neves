import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ciro Neves - Emagrecimento Rápido e Saudável Após os 40",
  description: "Programa de emagrecimento especializado para pessoas acima de 40 anos. Reprogramação metabólica com resultados comprovados. Participe do Desafio Você + Magra.",
  keywords: "emagrecimento, metabolismo, saúde, fitness, 40 anos, Ciro Neves",
  openGraph: {
    title: "Ciro Neves - Emagrecimento Rápido e Saudável Após os 40",
    description: "Programa de emagrecimento especializado para pessoas acima de 40 anos. Reprogramação metabólica com resultados comprovados.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciro Neves - Emagrecimento Rápido e Saudável Após os 40",
    description: "Programa de emagrecimento especializado para pessoas acima de 40 anos. Reprogramação metabólica com resultados comprovados.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
