// src/components/PandemiasSection.tsx
import { Pandemia } from '@app/types/api';
import { motion } from 'framer-motion';
import { FaVirus } from 'react-icons/fa';

interface PandemiasSectionProps {
  pandemias: Pandemia[];
}

export default function PandemiasSection({ pandemias }: PandemiasSectionProps) {
  return (
    <section id="pandemias" className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="flex items-center text-2xl font-semibold mb-4">
        <FaVirus className="mr-2 text-red-500" /> Pandemias Históricas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pandemias.map((pandemia) => (
          <motion.div
            key={pandemia.id}
            className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-medium text-lg">{pandemia.nomePandemia} ({pandemia.período})</h3>
            <p className="text-gray-600">{pandemia.descricao}</p>
            <p className="text-sm text-gray-500 mt-2">Impacto: {pandemia.sintomas}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}