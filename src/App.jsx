import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
