//PAGINA PRINCIPAL

"use client";

import { useEffect, useState } from 'react';
import {PandemiasSection} from './components/secaoPandemia/pandemias';
import {VacinasSection} from './components/secaoVacinas/vacinas';
import {FakeNewsSection} from './components/secaoFakeNews/fakeNews';
import { fetchPandemias, fetchVacinas, fetchFakeNews } from './lib/api';
import { Pandemia, Vacina, FakeNews } from './types/api';
import {IntroSection} from './components/secaoIntro/intro';

export default function Home() {
  const [pandemias, setPandemias] = useState<Pandemia[]>([]);
  const [vacinas, setVacinas] = useState<Vacina[]>([]);
  const [fakeNews, setFakeNews] = useState<FakeNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [pandemiasData, vacinasData, fakeNewsData] = await Promise.all([
          fetchPandemias(),
          fetchVacinas(),
          fetchFakeNews(),
        ]);
        setPandemias(pandemiasData);
        setVacinas(vacinasData);
        setFakeNews(fakeNewsData);
      } catch (err) {
        setError('Falha ao carregar os dados. Verifique se a API está rodando.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-blue-500 animate-pulse" style={{ width: '80%' }} />
        </div>
        <span>Carregando a página...</span>
      </div>
    );
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto py-12 space-y-20">
        <IntroSection/>
        <PandemiasSection pandemias={pandemias} />
        <VacinasSection vacinas={vacinas} />
        <FakeNewsSection fakeNews={fakeNews} />
      </main>
    </div>
    
  );


}