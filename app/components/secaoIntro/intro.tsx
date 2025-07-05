// DEFINE O COMPONENTE IntroSection RESPONSÁVEL PELA INTRODUÇÃO DA PÁGINA
export function IntroSection() {
  return (
    // SEÇÃO COM TEXTO CENTRALIZADO, PADDING VERTICAL, FUNDO BRANCO, SOMBRA E BORDA ARREDONDADA
    <section className="text-center py-16 bg-white shadow-md rounded-lg">

      {/* CONTAINER CENTRAL COM PADDING HORIZONTAL E CENTRALIZAÇÃO */}
      <div className="container mx-auto px-6">

        {/* TÍTULO PRINCIPAL COM FONTES GRANDES E NEGRITO */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          DataVírus
        </h1>

        {/* PARÁGRAFO DESCRITIVO COM TEXTO CENTRALIZADO E LIMITE DE LARGURA */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Este é um espaço informativo dedicado a explorar pandemias históricas, o desenvolvimento das vacinas e a análise de notícias falsas, a partir do consumo de uma{' '}

          {/* LINK PARA A API NO GITHUB, COM ESTILIZAÇÃO E ABERTURA EM NOVA ABA */}
          <a
            href="https://github.com/Sam02marques/pandemia-API" // LINK DO REPOSITÓRIO DA API
            target="_blank" // ABRE EM NOVA ABA
            rel="noopener noreferrer" // SEGURANÇA PARA LINKS EXTERNOS
            className="text-blue-600 hover:text-blue-800" // COR AZUL PADRÃO COM HOVER MAIS ESCURO
          >
            API
          </a>

          {' '}Desenvolvida com esse propósito.
        </p>
      </div>
    </section>
  );
};
