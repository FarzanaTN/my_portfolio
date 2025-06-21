import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Your Name</h1>
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
        <p>&copy; 2025 Your Name</p>
      </footer>
    </div>
  );
}

export default App;
