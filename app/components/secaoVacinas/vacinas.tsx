// IMPORTA O TIPO "VACINA" DEFINIDO NA TIPAGEM GLOBAL DO PROJETO
import { Vacina } from '@app/types/api';

// IMPORTA O "MOTION" DO FRAMER-MOTION PARA ANIMAÇÕES
import { motion } from 'framer-motion';

// IMPORTA O ÍCONE DE SERINGA DO PACOTE REACT-ICONS
import { FaSyringe } from 'react-icons/fa';

// IMPORTA O COMPONENTE DE IMAGEM OTIMIZADA DO NEXT.JS
import Image from 'next/image';

// DEFINE AS PROPRIEDADES ESPERADAS PELO COMPONENTE
interface VacinasSectionProps {
  vacinas: Vacina[]; // ARRAY DE VACINAS
}

// COMPONENTE RESPONSÁVEL POR EXIBIR OS DADOS DAS VACINAS
export function VacinasSection({ vacinas }: VacinasSectionProps) {
  return (
    // SEÇÃO PRINCIPAL COM ESTILIZAÇÃO DE ESPAÇAMENTO, COR DE FUNDO, BORDA E SOMBRA
    <section id="vacinas" className="p-6 bg-white rounded-lg shadow-md">

      {/* TÍTULO DA SEÇÃO COM ÍCONE DE SERINGA E TEXTO */}
      <h2 className="flex items-center text-2xl font-semibold mb-4">
        <FaSyringe className="mr-2 text-green-500" /> Vacinas Desenvolvidas
      </h2>

      {/* IMAGEM CENTRAL USANDO NEXT/IMAGE COM EFEITO DE ZOOM NO HOVER */}
      <div className="flex justify-center mb-8">
        <Image
          src="/images/vacina.png" // CAMINHO DA IMAGEM NA PASTA PUBLIC
          alt="Ilustração de Vacina" // TEXTO ALTERNATIVO PARA ACESSIBILIDADE
          width={2048} // LARGURA ORIGINAL DA IMAGEM
          height={2048} // ALTURA ORIGINAL DA IMAGEM
          className="h-60 object-contain transition-transform duration-300 hover:scale-110" // TAMANHO VISUAL + ZOOM SUAVE
        />
      </div>

      {/* GRADE RESPONSIVA COM 1 A 3 COLUNAS PARA EXIBIR AS VACINAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* MAPEIA O ARRAY DE VACINAS E GERA UM BLOCO PARA CADA UMA */}
        {vacinas.map((vacina) => (
          <motion.div
            key={vacina.id} // CHAVE ÚNICA USADA PELO REACT
            className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition" // ESTILIZAÇÃO DO CARD
            initial={{ opacity: 0, y: 20 }} // COMEÇA COM OPACIDADE 0 E DESCIDO
            animate={{ opacity: 1, y: 0 }} // ANIMAÇÃO PARA FICAR VISÍVEL E SUBIR
            transition={{ duration: 0.5 }} // DURAÇÃO DA ANIMAÇÃO
          >

            {/* NOME DA VACINA */}
            <h3 className="font-medium text-lg">{vacina.nome}</h3>

            {/* DOENÇA QUE A VACINA COMBATE */}
            <p className="text-gray-600">Doença: {vacina.doenca}</p>

            {/* ANO EM QUE A VACINA FOI CRIADA */}
            <p className="text-sm text-gray-500 mt-2">Ano de Criação: {vacina.ano_criacao}</p>

            {/* QUANTIDADE DE DOSES NECESSÁRIAS */}
            <p className="text-sm text-gray-500">Doses: {vacina.doses}</p>

            {/* VIA DE ADMINISTRAÇÃO (ORAL, INJETÁVEL ETC.) */}
            <p className="text-sm text-gray-500">Via de Administração: {vacina.via_administracao}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
