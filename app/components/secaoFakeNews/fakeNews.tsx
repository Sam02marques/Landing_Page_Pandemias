// IMPORTA O TIPO "FAKENEWS" DEFINIDO NA TIPAGEM GLOBAL DO PROJETO
import { FakeNews } from '@app/types/api';

// IMPORTA A FUNÇÃO "MOTION" DO FRAMER-MOTION PARA ANIMAÇÕES
import { motion } from 'framer-motion';

// IMPORTA ÍCONES UTILIZADOS PARA REPRESENTAR MENTIRA, VERDADE E ALERTA
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';

// IMPORTA O COMPONENTE DE IMAGEM OTIMIZADA DO NEXT.JS
import Image from 'next/image';

// DEFINE AS PROPRIEDADES ESPERADAS PELO COMPONENTE
interface FakeNewsSectionProps {
  fakeNews: FakeNews[]; // ARRAY DE OBJETOS DO TIPO FAKENEWS
}

// COMPONENTE QUE RENDERIZA A SEÇÃO DE FAKE NEWS E FATOS VERDADEIROS
export function FakeNewsSection({ fakeNews }: FakeNewsSectionProps) {
  return (
    // SEÇÃO COM ESPAÇAMENTO, FUNDO BRANCO, BORDA ARREDONDADA E SOMBRA
    <section id="fakenews" className="p-6 bg-white rounded-lg shadow-md">

      {/* TÍTULO DA SEÇÃO COM ÍCONE DE ALERTA E TEXTO */}
      <h2 className="flex items-center text-2xl font-semibold mb-4">
        <FaExclamationTriangle className="mr-2 text-red-500" /> {/* ÍCONE VERMELHO DE ALERTA */}
        Fake News e Fatos
      </h2>

      {/* IMAGEM ILUSTRATIVA NO CENTRO COM EFEITO DE ZOOM NO HOVER */}
      <div className="flex justify-center mb-8">
        <Image
          src="/images/noticias.png" // CAMINHO DA IMAGEM NA PASTA PUBLIC
          alt="Ilustração de um jornal escrito Fake News" // TEXTO ALTERNATIVO
          width={2048} // TAMANHO ORIGINAL
          height={2048}
          className="h-60 object-contain transition-transform duration-300 hover:scale-110" // ESTILO E ANIMAÇÃO DE ZOOM
        />
      </div>

      {/* CONTAINER PARA LISTA DE FAKE NEWS COM ESPAÇAMENTO ENTRE OS CARDS */}
      <div className="space-y-6">
        {/* PERCORRE CADA ITEM DE FAKE NEWS E RENDERIZA UM BLOCO */}
        {fakeNews.map((news) => (
          <motion.div
            key={news.id} // CHAVE ÚNICA PARA CADA ITEM
            className="p-4 bg-gray-100 rounded-lg" // CARD COM FUNDO CLARO E BORDA ARREDONDADA
            initial={{ opacity: 0, x: -20 }} // INICIA INVISÍVEL E DESLOCADO À ESQUERDA
            animate={{ opacity: 1, x: 0 }} // ANIMAÇÃO PARA APARECER VINDO DA ESQUERDA
            transition={{ duration: 0.5 }} // DURAÇÃO DA ANIMAÇÃO
          >
            {/* BLOCO DA MENTIRA */}
            <div className="flex items-start mb-2">
              <FaTimesCircle className="text-red-500 mr-2 mt-1" /> {/* ÍCONE DE X VERMELHO */}
              <div>
                <h3 className="font-bold text-red-500">Mentira:</h3> {/* TÍTULO MENTIRA */}
                <p className="text-gray-700">{news.mentira}</p> {/* CONTEÚDO DA MENTIRA */}
              </div>
            </div>

            {/* BLOCO DA VERDADE */}
            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" /> {/* ÍCONE DE CHECK VERDE */}
              <div>
                <h3 className="font-bold text-green-500">Verdade:</h3> {/* TÍTULO VERDADE */}
                <p className="text-gray-700">{news.verdade}</p> {/* CONTEÚDO DA VERDADE */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
