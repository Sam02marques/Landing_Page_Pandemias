import { Vacina } from '@app/types/api';
import { motion } from 'framer-motion';
import { FaSyringe } from 'react-icons/fa';

interface VacinasSectionProps {
  vacinas: Vacina[];
}

export function VacinasSection({ vacinas }: VacinasSectionProps) {
  return (
    <section id="vacinas" className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="flex items-center text-2xl font-semibold mb-4">
        <FaSyringe className="mr-2 text-blue-500" /> Vacinas Desenvolvidas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vacinas.map((vacina) => (
          <motion.div
            key={vacina.id}
            className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-medium text-lg">{vacina.nome}</h3>
            <p className="text-gray-600">Doença: {vacina.doenca}</p>
            <p className="text-sm text-gray-500 mt-2">Ano de Criação: {vacina.ano_criacao}</p>
            <p className="text-sm text-gray-500">Doses: {vacina.doses}</p>
            <p className="text-sm text-gray-500">Via de Administração: {vacina.via_administracao}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}