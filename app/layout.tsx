// IMPORTA O TIPO Metadata DO NEXT PARA DEFINIR METADADOS DA PÁGINA
import type { Metadata } from "next";

// IMPORTA O ARQUIVO GLOBAL DE ESTILOS CSS
import "./styles/globals.css";

// IMPORTA O COMPONENTE DE RODAPÉ (FOOTER)
import Footer from './components/layout/footer';

// IMPORTA A FONTE "INTER" DO GOOGLE FONTS VIA NEXT.JS
import { Inter } from "next/font/google";

// CONFIGURA A FONTE INTER COM SUPORTE AO SUBCONJUNTO LATINO
const inter = Inter({ subsets: ["latin"] });

// DEFINE OS METADADOS PADRÕES DA PÁGINA (TÍTULO E DESCRIÇÃO)
export const metadata: Metadata = {
  title: "DataVírus", // TÍTULO QUE APARECE NA ABA DO NAVEGADOR
  description: "Uma landing page informativa sobre pandemias históricas.", // DESCRIÇÃO USADA PARA SEO
};

// DEFINE O COMPONENTE ROOTLAYOUT QUE ENVOLVE TODA A ESTRUTURA DA APLICAÇÃO
export default function RootLayout({
  children, // RECEBE OS COMPONENTES FILHOS (OU SEJA, O CONTEÚDO DAS PÁGINAS)
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="pt-BR">

      {/* BODY DA PÁGINA COM A CLASSE DA FONTE APLICADA */}
      <body className={inter.className}>

        {/* CONTEÚDO PRINCIPAL DA PÁGINA É RENDERIZADO AQUI */}
        <main>{children}</main>

        {/* O COMPONENTE FOOTER É RENDERIZADO EM TODAS AS PÁGINAS, APÓS O MAIN */}
        <Footer />
      </body>
    </html>
  );
}
