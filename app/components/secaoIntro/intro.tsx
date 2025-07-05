

export function IntroSection() {
  return (
    <section className="text-center py-16 bg-white shadow-md rounded-lg">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          DataVírus
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Este é um espaço informativo dedicado a explorar pandemias históricas, o desenvolvimento das vacinas e a análise de notícias falsas, a partir do consumo de uma{' '}
            <a
                href="https://github.com/Sam02marques/pandemia-API"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600  hover:text-blue-800"
            >
                API
            </a>
            {' '}desenvolvida com esse propósito.
        </p>    </div>
    </section>
  );
};