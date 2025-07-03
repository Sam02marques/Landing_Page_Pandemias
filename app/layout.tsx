import type { Metadata } from "next";
import "./styles/globals.css";
import Footer from './components/layout/footer';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pandemias Históricas",
  description: "Uma landing page informativa sobre pandemias históricas.",
};

export default function RootLayout({
  children, // <-- O seu componente Home (de page.tsx) entra aqui!
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main>{children}</main> {/* O conteúdo da sua página é renderizado aqui */}
        <Footer />              {/* 2. E o Footer aparece logo abaixo, em todas as páginas */}
      </body>
    </html>
  );
}