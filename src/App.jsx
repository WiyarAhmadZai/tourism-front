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
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Afghanistan Tourism</h1>
        <p>This is a simple React application.</p>
      </header>
    </div>
  );
}

export default App;
