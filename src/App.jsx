import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

// Import page components
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Hotels from './pages/Hotels';
import Restaurants from './pages/Restaurants';
import Contact from './pages/Contact';

// Import CSS for the CityTours design
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/vendors.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.main-menu') && !event.target.closest('.cmn-toggle-switch')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />} />
            <Route path="/about" element={<About isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />} />
            <Route path="/tours" element={<Tours isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />} />
            <Route path="/hotels" element={<Hotels isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />} />
            <Route path="/restaurants" element={<Restaurants isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />} />
            <Route path="/contact" element={<Contact isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;