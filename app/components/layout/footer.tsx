// IMPORTA OS ÍCONES DO REACT-ICONS (GITHUB, LINKEDIN E ENVELOPE/EMAIL)
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// DEFINE O COMPONENTE FUNCTIONAL FOOTER
const Footer = () => {
  // PEGA O ANO ATUAL PARA EXIBIR NO RODAPÉ
  const currentYear = new Date().getFullYear();

  return (
    // SEÇÃO DE FOOTER COM FUNDO ESCURO, TEXTO BRANCO E PADDING VERTICAL
    <footer className="bg-gray-800 text-white py-8">
      {/* CONTAINER CENTRALIZADO COM PADDING HORIZONTAL E TEXTO CENTRALIZADO */}
      <div className="container mx-auto px-6 text-center">

        {/* CONTAINER COM OS ÍCONES DE REDES SOCIAIS ALINHADOS HORIZONTALMENTE */}
        <div className="flex justify-center mb-4 space-x-6">

          {/* LINK PARA O GITHUB */}
          <a
            href="https://github.com/sam02marques" // LINK DO GITHUB
            target="_blank" // ABRE EM NOVA ABA
            rel="noopener noreferrer" // MELHORIA DE SEGURANÇA PARA NOVAS ABAS
            aria-label="GitHub" // LABEL PARA ACESSIBILIDADE
            className="text-gray-400 hover:text-white transition-colors duration-300" // COR E EFEITO DE HOVER
          >
            <FaGithub size={28} /> {/* ÍCONE DO GITHUB COM TAMANHO 28PX */}
          </a>

          {/* LINK PARA O LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/samuel-marques-90b818284/" // LINK DO LINKEDIN
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={28} /> {/* ÍCONE DO LINKEDIN COM TAMANHO 28PX */}
          </a>

          {/* LINK PARA ENVIO DE EMAIL */}
          <a
            href="mailto:marquessam02@gmail.com" // LINK PARA ABRIR CLIENTE DE EMAIL
            aria-label="Email"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaEnvelope size={28} /> {/* ÍCONE DE EMAIL COM TAMANHO 28PX */}
          </a>
        </div>

        {/* TEXTO DE CRÉDITO */}
        <p className="text-gray-500 text-sm">
          Desenvolvido por Samuel Marques de Araujo
        </p>

        {/* TEXTO COM O ANO E DIREITOS RESERVADOS */}
        <p className="text-gray-600 text-xs mt-2">
          &copy; {currentYear} Lançado sob a Licença MIT.
        </p>
      </div>
    </footer>
  );
};

// EXPORTA O COMPONENTE PARA SER UTILIZADO EM OUTRAS PARTES DO PROJETO
export default Footer;
