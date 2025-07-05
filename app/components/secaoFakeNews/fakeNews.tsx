import { FakeNews } from '@app/types/api';
import { motion } from 'framer-motion';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';
interface FakeNewsSectionProps {
  fakeNews: FakeNews[];
}
//COMPONENTE DA SEÇÃO DE FAKENEWS
export function FakeNewsSection({ fakeNews }: FakeNewsSectionProps) {
  return (
    <section id="fakenews" className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="flex items-center text-2xl font-semibold mb-4">
        <FaExclamationTriangle className="mr-2 text-red-500" />
        Fake News e Fatos
      </h2>
      <div className="flex justify-center mb-8">
        <img
          src="/images/noticias.png"
          alt="Ilustração de um jornal escrito Fake News"
          className="h-60 object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="space-y-6">
        {fakeNews.map((news) => (
          <motion.div
            key={news.id}
            className="p-4 bg-gray-100 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start mb-2">
              <FaTimesCircle className="text-red-500 mr-2 mt-1" />
              <div>
                <h3 className="font-bold text-red-500">Mentira:</h3>
                <p className="text-gray-700">{news.mentira}</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 mr-2 mt-1" />
              <div>
                <h3 className="font-bold text-green-500">Verdade:</h3>
                <p className="text-gray-700">{news.verdade}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}