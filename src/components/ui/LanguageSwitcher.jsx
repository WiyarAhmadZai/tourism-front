import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="uppercase">{i18n.language}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <button 
          onClick={() => changeLanguage('en')}
          className={`block w-full text-left px-4 py-2 text-sm ${
            i18n.language === 'en' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('ps')}
          className={`block w-full text-left px-4 py-2 text-sm ${
            i18n.language === 'ps' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          پښتو
        </button>
        <button 
          onClick={() => changeLanguage('fa')}
          className={`block w-full text-left px-4 py-2 text-sm ${
            i18n.language === 'fa' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          دری
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;