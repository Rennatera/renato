import React from 'react';
import brFlag from "../assets/brasil.png";
import usFlag from "../assets/eua.png";
import esFlag from "../assets/espanha.png";
import { useLanguage } from '../context/LanguageContext'; // se você estiver usando contexto

function Header() {
  const { setLanguage } = useLanguage(); // se estiver usando context

  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md fixed w-full z-50">
      <div className="max-w-7xl px-6 mx-auto flex items-center justify-between py-4">

        {/* Nome à esquerda */}
        <div className="text-2xl font-bold text-blue-400">Portfólio</div>

        {/* Navegação */}
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-blue-400">Sobre</a>
          <a href="#projetos" className="text-white hover:text-blue-400 transition">Projetos</a>
          <a href="#contato" className="hover:text-blue-400 transition">Contato</a>
        </nav>

        {/* Botões de idioma */}
        <div className="flex gap-2">
          <button onClick={() => setLanguage('pt')} className="w-8 h-8 rounded-full overflow-hidden border border-white">
            <img src={brFlag} alt="Português" className="w-full h-full object-cover" />
          </button>
          <button onClick={() => setLanguage('en')} className="w-8 h-8 rounded-full overflow-hidden border border-white">
            <img src={usFlag} alt="English" className="w-full h-full object-cover" />
          </button>
          <button onClick={() => setLanguage('es')} className="w-8 h-8 rounded-full overflow-hidden border border-white">
            <img src={esFlag} alt="Español" className="w-full h-full object-cover" />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
