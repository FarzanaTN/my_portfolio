import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <header>
        <h1>Farzana Tasnim</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2025 Farzana Tasnim</p>
      </footer>
    </div>
  );
}

export default App;
