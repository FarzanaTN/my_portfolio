import React from 'react';

const Header = ({ darkMode, setDarkMode }) => (
  <header>
    <h1>Farzana Tasnim</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  </header>
);

export default Header;
