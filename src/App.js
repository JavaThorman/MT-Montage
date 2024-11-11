// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import the page components
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import Contact from './pages/Contact';
// Import styles
import './styles.css';


function App() {
  return (
    <Router>
      <div>
        <header>
          <nav className="top-nav-left">
            <ul>
              <li><Link to="/home">Home</Link></li>
            </ul>
          </nav>
          <nav className="top-nav-right">
            <ul>
              <li><Link to="/showcase">Showcase</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            {/* Define the routes for each page */}
            <Route path="/home" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/contact" element={<Contact />} />
            {/* Default route for the main page */}
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
