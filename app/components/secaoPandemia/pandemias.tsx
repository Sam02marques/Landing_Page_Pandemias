// SEÇÃO DA APRESENTAÇÃO DOS DADOS DA PANDEMIA

import { Pandemia } from '@app/types/api';
import { motion } from 'framer-motion';
import { FaBiohazard } from 'react-icons/fa';

interface PandemiasSectionProps {
  pandemias: Pandemia[];
}

export function PandemiasSection({ pandemias }: PandemiasSectionProps) {
  return (
    <section id="pandemias" className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="flex items-center text-3xl font-bold mb-6 text-gray-800">
        <FaBiohazard className="mr-3 text-red-600" />
        Pandemias Históricas
      </h2>
      <div className="flex justify-center mb-8">
        <motion.img
          src="/images/pandemia.png"
          alt="Ilustração Pandemias"
          className="h-80 object-contain"
          animate={{
        scale: [1, 1.15, 1],
          }}
          transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pandemias.map((pandemia, index) => (
          <motion.div
            key={pandemia.id}
            className="p-5 border border-gray-200 rounded-lg hover:shadow-xl hover:border-red-500 transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-900">{pandemia.nomePandemia}</h3>
            <p className="text-sm text-red-700 font-medium my-1">Período: {pandemia.periodo}</p>
            <p className="text-gray-600 mt-2">{pandemia.descricao}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}