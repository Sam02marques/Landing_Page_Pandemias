// SEÇÃO DA APRESENTAÇÃO DOS DADOS DA PANDEMIA

// IMPORTA O TIPO "PANDEMIA" DEFINIDO NA TIPAGEM GLOBAL DO PROJETO
import { Pandemia } from '@app/types/api';

// IMPORTA O "MOTION" DO FRAMER-MOTION PARA ANIMAÇÕES
import { motion } from 'framer-motion';

// IMPORTA O ÍCONE DE BIOHAZARD DO PACOTE REACT-ICONS
import { FaBiohazard } from 'react-icons/fa';

// DEFINE AS PROPRIEDADES (PROPS) ESPERADAS PELA FUNÇÃO COMPONENTE
interface PandemiasSectionProps {
  pandemias: Pandemia[]; // UM ARRAY DE OBJETOS DO TIPO "PANDEMIA"
}

// FUNÇÃO COMPONENTE QUE RECEBE A LISTA DE PANDEMIAS COMO PROPRIEDADE
export function PandemiasSection({ pandemias }: PandemiasSectionProps) {
  return (
    // INÍCIO DA SEÇÃO HTML COM ID PARA ÂNCORA E CLASSES DE ESTILO
    <section id="pandemias" className="p-6 bg-white rounded-lg shadow-md">

      {/* TÍTULO DA SEÇÃO COM ÍCONE E ESTILIZAÇÃO */}
      <h2 className="flex items-center text-3xl font-bold mb-6 text-gray-800">
        <FaBiohazard className="mr-3 text-red-600" /> {/* ÍCONE VERMELHO DE BIOHAZARD */}
        Pandemias Históricas
      </h2>

      {/* DIV PARA IMAGEM CENTRAL COM ANIMAÇÃO DE PULSAÇÃO */}
      <div className="flex justify-center mb-8">
        <motion.img
          src="/images/pandemia.png" // CAMINHO DA IMAGEM ESTÁTICA NA PASTA PUBLIC
          alt="Ilustração Pandemias" // TEXTO ALTERNATIVO
          className="h-80 object-contain" // ALTURA FIXA E AJUSTE SEM CORTAR
          animate={{
            scale: [1, 1.15, 1], // ANIMA ESCALA (ZOOM IN-OUT SUAVE)
          }}
          transition={{
            duration: 1, // DURAÇÃO DE CADA CICLO
            repeat: Infinity, // REPETE INFINITAMENTE
            repeatType: "loop", // LOOP CONTÍNUO
            ease: "easeInOut", // TRANSIÇÃO SUAVE
          }}
        />
      </div>

      {/* GRADE RESPONSIVA PARA APRESENTAR AS PANDEMIAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* PERCORRE O ARRAY DE PANDEMIAS COM .MAP */}
        {pandemias.map((pandemia, index) => (
          <motion.div
            key={pandemia.id} // CHAVE ÚNICA PARA CADA ELEMENTO
            className="p-5 border border-gray-200 rounded-lg hover:shadow-xl hover:border-red-500 transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }} // COMEÇA TRANSPARENTE E DESLOCADO PARA BAIXO
            animate={{ opacity: 1, y: 0 }} // ANIMAÇÃO PARA APARECER SUBINDO
            transition={{ duration: 0.5, delay: index * 0.1 }} // ATRASO PROGRESSIVO ENTRE OS ITENS
          >
            {/* NOME DA PANDEMIA */}
            <h3 className="text-xl font-semibold text-gray-900">{pandemia.nomePandemia}</h3>

            {/* PERÍODO DA PANDEMIA EM DESTAQUE VERMELHO */}
            <p className="text-sm text-red-700 font-medium my-1">Período: {pandemia.periodo}</p>

            {/* DESCRIÇÃO DA PANDEMIA */}
            <p className="text-gray-600 mt-2">{pandemia.descricao}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
