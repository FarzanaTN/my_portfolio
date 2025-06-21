// src/components/Header.js
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const particlesInit = async (main) => {
  await loadFull(main);
};

const Header = () => {
  return (
    <header className="header-section">
      <Particles
        id="headerParticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } }
          },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 120, opacity: 0.4, width: 1 },
            move: { enable: true, speed: 1 },
            number: { value: 30 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } }
          }
        }}
      />
      <div className="header-content">
        <h1>Farzana Tasnim</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
