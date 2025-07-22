import React, { useState } from 'react';
import computadorImg from '../assets/Computador.png';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('skills');

  const translations = {
    pt: {
      title: 'Sobre mim',
      description:
        'Minha paixão por tecnologia começou na infância e, em 2010, dei os primeiros passos profissionais na área, realizando manutenção de hardware, formatação de computadores e reparos eletrônicos na Unicamp. Com o tempo, aprofundei meus conhecimentos como analista de sistemas, atuando com SQL, Oracle e desenvolvimento em C# .NET. Posteriormente, migrei para a área de negócios, onde adquiri uma visão mais estratégica e integrada dos processos. Estou sempre motivado a evoluir, aprimorar meus conhecimentos e contribuir com soluções que conectem de forma eficiente as necessidades dos stakeholders.',
      skillsLabel: 'Habilidades',
      educationLabel: 'Educação',
      experienceLabel: 'Experiência',
      toolsLabel: 'Ferramentas',
      skills: [
        'Análise funcional e técnica de sistemas ERP (SAP, EasyWMS®)',
        'Elaboração de documentos funcionais (AF, plano de testes, etc.)',
        'Integração entre sistemas (SAP x WMS, SAP x Fusion)',
        'Resolução de divergências de estoque e processos logísticos',
        'Levantamento de requisitos com stakeholders',
        'Comunicação clara e documentação de processos',

      ],
      education: [
        'Técnico em Eletroeletrônica - COTUCA Unicamp',
        'Bacharel em Ciência da Computação - UNIP',
        '*Cursos complementares:',
        '  – Treinamento Key User SAP',
        '  – Lógica de Programação e C# (.NET)',
        '  – Fundamentos de DevOps',
        '  – Gestão de Projetos com Scrum',
        '  – Inglês e Espanhol avançado',
      ],
      tools: [
        'Jira / Confluence',
        'LucidChart',
        'GIT',
        'SQL',
        'Oracle',
        'Python',
        'C# .NET',
      ],
      experience: [
        'Possuo perfil orientado à resolução de problemas e inovação contínua, com foco em resultados tangíveis.',
        'Tive a oportunidade de atuar em projetos desafiadores como Business Analyst, incluindo duas experiências internacionais.',
      ],
    },
    en: {
      title: 'About me',
      description:
        'My passion for technology started in childhood and in 2010, I took my first professional steps in the field. Since then, I’ve been improving my skills and participating in relevant projects across Brazil and Latin America.\n\nCurrently, I specialize in management systems such as SAP and EasyWMS®, focusing on functional analysis, logistics optimization, and systems integration.',
      skillsLabel: 'Skills',
      educationLabel: 'Education',
      experienceLabel: 'Experience',
      toolsLabel: 'Tools',
      skills: [
        'Functional and technical analysis of ERP systems (SAP, EasyWMS®)',
        'Creation of functional documents (FS, test plan, etc.)',
        'System integration (SAP x WMS, SAP x Fusion)',
        'Resolution of stock and logistics process discrepancies',
        'Requirements gathering with stakeholders',
        'Clear communication and process documentation',
      ],
      education: [
        'Technician in Electronics - COTUCA Unicamp',
        'Bachelor in Computer Science - UNIP',
        '*Additional courses:',
        '  – SAP Key User Training',
        '  – Programming Logic and C# (.NET)',
        '  – DevOps Fundamentals',
        '  – Project Management with Scrum',
        '  – Advanced English and Spanish',
      ],
      tools: [
        'Jira / Confluence',
        'LucidChart',
        'GIT',
        'SQL',
        'Oracle',
        'Python',
        'C# .NET',
      ],
      experience: [
        'I have a profile focused on problem solving and continuous improvement with results orientation.',
        'I’ve had the opportunity to work on challenging projects, including two international experiences.',
      ],
    },
    es: {
      title: 'Sobre mí',
      description:
        'Mi pasión por la tecnología comenzó en la infancia y, en 2010, di mis primeros pasos profesionales en el área. Desde entonces, he estado mejorando mis habilidades y participando en proyectos relevantes en Brasil y América Latina.\n\nActualmente, soy especialista en sistemas de gestión como SAP y EasyWMS®, con enfoque en análisis funcional, optimización logística e integración de sistemas.',
      skillsLabel: 'Habilidades',
      educationLabel: 'Educación',
      experienceLabel: 'Experiencia',
      toolsLabel: 'Herramientas',
      skills: [
        'Análisis funcional y técnico de sistemas ERP (SAP, EasyWMS®)',
        'Elaboración de documentos funcionales (AF, plan de pruebas, etc.)',
        'Integración entre sistemas (SAP x WMS, SAP x Fusion)',
        'Resolución de discrepancias de inventario y procesos logísticos',
        'Recolección de requisitos con stakeholders',
        'Comunicación clara y documentación de procesos',
        'q',
        'q',
        'q',
        '',
        '',
        '',
      ],
      education: [
        'Técnico en Electroelectrónica - COTUCA Unicamp',
        'Licenciatura en Ciencias de la Computación - UNIP',
        '*Cursos complementarios:',
        '  – Capacitación Key User SAP',
        '  – Lógica de Programación y C# (.NET)',
        '  – Fundamentos de DevOps',
        '  – Gestión de Proyectos con Scrum',
        '  – Inglés y Español avanzado',
      ],
      tools: [
        'Jira / Confluence',
        'LucidChart',
        'GIT',
        'SQL',
        'Oracle',
        'Python',
        'C# .NET',
      ],
      experience: [
        'Tengo un perfil orientado a la resolución de problemas e innovación continua, con enfoque en resultados.',
        'Tuve la oportunidad de participar en proyectos desafiantes, incluyendo dos experiencias internacionales.',
      ],
    },
  };

  const t = translations[language];

  return (
    <section id="about" className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-100 text-black rounded-2xl p-10 flex flex-col md:flex-row items-start gap-8 h-[500px]">


          {/* Imagem */}
          <div className="md:w-2/5 flex justify-center items-center h-full">

            <img src={computadorImg} alt="Computador" className="w-full max-w-xs md:max-w-sm rounded-xl shadow-md"/>
          </div>


          {/* Texto + abas */}
          <div className="md:w-3/5 md:pl-10 overflow-y-auto pr-2 h-full">

            <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
            <p className="mb-4 text-justify text-gray-800 whitespace-pre-line">
              {t.description}
            </p>

            {/* Tabs */}
            <div className="flex gap-4 mb-4 text-gray-400 font-semibold">
              {['skills', 'education', 'tools', 'experience'].map((tab) => (
                <span
                  key={tab}
                  className={`cursor-pointer ${
                    activeTab === tab ? 'text-black underline' : ''
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {t[`${tab}Label`] || tab}
                </span>
              ))}
            </div>

            {/* Conteúdo das abas */}
            {activeTab === 'skills' && (
              <ul className="list-disc pl-6 text-gray-700">
                {t.skills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {activeTab === 'education' && (
              <div className="text-gray-700 space-y-1">
                {t.education.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            )}
            {activeTab === 'tools' && (
              <ul className="list-disc pl-6 text-gray-700">
                {t.tools.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {activeTab === 'experience' && (
              <div className="text-gray-700 space-y-2">
                {t.experience.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
