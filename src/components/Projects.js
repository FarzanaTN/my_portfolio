// components/Projects.js
import React from 'react';

const Projects = () => (
  <section id="projects" className="fade-in">
    <h2>Projects</h2>

    <div className="project">
      <h3>Cosmo Shooter Game</h3>
      <p>A shooting game using SDL2 for C language.</p>
      <a href="https://github.com/yourusername/cosmo-shooter">GitHub</a>
      <a href="https://cosmo-shooter-demo.netlify.app">Live Demo</a>
    </div>

    <div className="project">
      <h3>Hotel Management System</h3>
      <p>A Java project using Java Swing.</p>
      <a href="https://github.com/yourusername/hotel-management-java">GitHub</a>
      <a href="https://hotel-management-java-demo.netlify.app">Live Demo</a>
    </div>

    <div className="project">
      <h3>Learnloop</h3>
      <p>An Android project using Flutter.</p>
      <a href="https://github.com/yourusername/learnloop">GitHub</a>
      <a href="https://learnloop-demo.netlify.app">Live Demo</a>
    </div>

    <div className="project">
      <h3>Hotel Management System (DBMS)</h3>
      <p>A database project using MySQL.</p>
      <a href="https://github.com/yourusername/hotel-dbms">GitHub</a>
      <a href="https://hotel-dbms-demo.netlify.app">Live Demo</a>
    </div>

    <div className="project">
      <h3>MedWise</h3>
      <p>A software project using Next.js.</p>
      <a href="https://github.com/yourusername/medwise">GitHub</a>
      <a href="https://medwise-demo.netlify.app">Live Demo</a>
    </div>
  </section>
);

export default Projects;
