import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import page components
import Home from './pages/Home';

// Import CSS for the CityTours design
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/vendors.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;