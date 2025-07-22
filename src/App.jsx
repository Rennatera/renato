import React from 'react';
import Carrossel from './components/Carrossel';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Typewriter from 'typewriter-effect';
import fotoPerfil from './assets/foto-perfil.jpeg';
//import ContactForm from './components/ContactForm';



function App() {
  return (
    <>
      <Header />
      
      <main className="pt-20 w-full bg-gray-900 text-white">
        
        
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-10 md:px-14 lg:px-6 py-6">
          
          {/* Texto à esquerda */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-5xl font-bold text-blue-400 mb-2">Olá, sou</h1>
            <h2 className="text-4xl font-bold text-white mb-4">
              <Typewriter
                options={{
                  strings: ['Renato Cossi', 'Business Analyst'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  pauseFor: 2000,
                }}
              />
            </h2>
            <p className="text-1xl text-white mb-10">
              Sou movido pelo desafio de alinhar tecnologia aos objetivos de negócio. Trabalho com foco em colaboração entre áreas, clareza nos processos e entrega de soluções que realmente fazem a diferença.
            </p>
            <div className="flex gap-4">
              <a 
                href="/RENATO COSSI.pdf" 
                download 
                className="text-1xl border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Imagem à direita<div className="md:w-1/2 mt-10 md:mt-0 flex justify-center"> */}
          
          <div className="md:w-1/2 mt-16 md:mt-20 mb-16 md:mb-20 flex justify-center">
            <img
              src={fotoPerfil}
              alt="Foto de Renato"
              className="w-80 h-80 object-cover rounded-full border-4 border-blue-400 shadow-lg"
            />
          </div>
        </div>
      </main>

      <About />
      <Carrossel />
      <Footer />

      
    </>
  );
}

export default App;
