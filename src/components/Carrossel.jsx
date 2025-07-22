import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// ✅ Corrija aqui os imports das imagens
import easy002 from '../assets/easy002.png';
import molinos3 from '../assets/molinos001.png';
import oba from '../assets/oba.png';
import carrossel3 from '../assets/carrossel3.png';

function Carrossel() {
  return (
    <section id="projetos" className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-5xl font-bold text-center mb-6">
          Projetos em destaque
        </h2>

        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          autoPlay
          interval={4000}
          className="rounded-lg overflow-hidden"
        >
          {/* Slide 1 */}
          <div>
            <img
              src={easy002}
              alt="Slide 1"
              className="object-contain w-full h-[600px]"
            />
            <p className="bg-black/70 px-4 py-2 rounded text-sm text-white mt-4 w-fit mx-auto">
              Sistema de Gestão: Sistema de gerenciamento de armazéns
            </p>
          </div>

          {/* Slide 2 */}
          <div>
            <img
              src={molinos3}
              alt="Molinos 3 Arroyos"
              className="object-contain w-full h-[600px]"
            />
            <p className="bg-black/70 px-4 py-2 rounded text-sm text-white mt-4 w-fit mx-auto">
              Projeto: Molinos Tres Arroyos
            </p>
          </div>

          {/* Slide 3 */}
          <div>
            <img
              src={oba}
              alt="Slide 3"
              className="object-contain w-full h-[600px]"
            />
            <p className="bg-black/70 px-4 py-2 rounded text-sm text-white mt-4 w-fit mx-auto">
              Projeto: Jacto
            </p>
          </div>

          {/* Slide 4 */}
          <div>
            <img
              src={carrossel3}
              alt="Slide 4"
              className="object-contain w-full h-[600px]"
            />
            <p className="bg-black/70 px-4 py-2 rounded text-sm text-white mt-4 w-fit mx-auto">
              Projeto 3: Integração com APIs
            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Carrossel;
