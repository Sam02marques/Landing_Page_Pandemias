import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-4 space-x-6">
          <a
            href="https://github.com/sam02marques" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-marques-90b818284/" // Coloque aqui o link do seu LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:marquessam02@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          Desenvolvido por Samuel Marques de Araujo
        </p>
        <p className="text-gray-600 text-xs mt-2">
          &copy; {currentYear} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
