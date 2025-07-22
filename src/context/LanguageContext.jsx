// src/context/LanguageContext.jsx
import React, { createContext, useContext, useState } from 'react';

// 1. Cria o contexto
const LanguageContext = createContext();

// 2. Exporta o Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Hook para consumir o contexto
export const useLanguage = () => useContext(LanguageContext);
