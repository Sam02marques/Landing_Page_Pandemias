// PAGINA PRINCIPAL

// ATIVA O MODO CLIENTE DO NEXT.JS PARA USAR HOOKS (COMO useState E useEffect)
"use client";

// IMPORTA OS HOOKS DO REACT
import { useEffect, useState } from 'react';

// IMPORTA OS COMPONENTES DAS SEÇÕES DA PÁGINA
import { PandemiasSection } from './components/secaoPandemia/pandemias';
import { VacinasSection } from './components/secaoVacinas/vacinas';
import { FakeNewsSection } from './components/secaoFakeNews/fakeNews';
import { IntroSection } from './components/secaoIntro/intro';

// IMPORTA AS FUNÇÕES QUE FAZEM AS REQUISIÇÕES À API
import { fetchPandemias, fetchVacinas, fetchFakeNews } from './lib/api';

// IMPORTA OS TIPOS UTILIZADOS NOS STATES
import { Pandemia, Vacina, FakeNews } from './types/api';

// COMPONENTE PRINCIPAL DA PÁGINA HOME
export default function Home() {

  // ESTADO PARA ARMAZENAR OS DADOS DE PANDEMIAS
  const [pandemias, setPandemias] = useState<Pandemia[]>([]);

  // ESTADO PARA ARMAZENAR OS DADOS DE VACINAS
  const [vacinas, setVacinas] = useState<Vacina[]>([]);

  // ESTADO PARA ARMAZENAR OS DADOS DE FAKE NEWS
  const [fakeNews, setFakeNews] = useState<FakeNews[]>([]);

  // ESTADO PARA SABER SE OS DADOS AINDA ESTÃO SENDO CARREGADOS
  const [loading, setLoading] = useState(true);

  // ESTADO PARA CAPTURAR MENSAGENS DE ERRO (CASO OCORRA ALGUMA FALHA NA API)
  const [error, setError] = useState<string | null>(null);

  // useEffect PARA BUSCAR OS DADOS ASSIM QUE A PÁGINA É CARREGADA
  useEffect(() => {
    // FUNÇÃO ASSÍNCRONA PARA BUSCAR OS DADOS DA API
    const loadData = async () => {
      try {
        // CHAMA TODAS AS REQUISIÇÕES EM PARALELO USANDO PROMISE.ALL
        const [pandemiasData, vacinasData, fakeNewsData] = await Promise.all([
          fetchPandemias(),
          fetchVacinas(),
          fetchFakeNews(),
        ]);

        // ARMAZENA OS DADOS NOS ESTADOS CORRESPONDENTES
        setPandemias(pandemiasData);
        setVacinas(vacinasData);
        setFakeNews(fakeNewsData);

      } catch (err) {
        // EM CASO DE ERRO, DEFINE UMA MENSAGEM PARA EXIBIR NA TELA
        setError('Falha ao carregar os dados. Verifique se a API está rodando.');
        console.error(err);

      } finally {
        // FINALIZA O CARREGAMENTO, INDEPENDENTE DO RESULTADO
        setLoading(false);
      }
    };

    // CHAMA A FUNÇÃO PARA CARREGAR OS DADOS
    loadData();
  }, []);

  // SE AINDA ESTIVER CARREGANDO, EXIBE UMA TELA DE LOADING
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

  // SE HOUVER ERRO, EXIBE A MENSAGEM DE ERRO NA TELA
  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">{error}</div>;
  }

  // SE TUDO DER CERTO, RENDERIZA O CONTEÚDO DA PÁGINA
  return (
    <div className="min-h-screen bg-gray-50"> {/* CONTAINER COM ALTURA MÍNIMA DA TELA INTEIRA */}
      <main className="container mx-auto py-12 space-y-20"> {/* CONTAINER CENTRAL COM ESPAÇAMENTO ENTRE SEÇÕES */}
        <IntroSection/> {/* SEÇÃO INTRODUTÓRIA */}
        <PandemiasSection pandemias={pandemias} /> {/* SEÇÃO COM DADOS DE PANDEMIAS */}
        <VacinasSection vacinas={vacinas} /> {/* SEÇÃO COM DADOS DE VACINAS */}
        <FakeNewsSection fakeNews={fakeNews} /> {/* SEÇÃO COM DADOS DE FAKE NEWS */}
      </main>
    </div>
  );
}
