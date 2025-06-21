import React from 'react';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project">
      <h3>Weather App</h3>
      <p>A weather forecast app using OpenWeather API.</p>
      <a href="https://github.com/yourusername/weather-app">GitHub</a> |
      <a href="https://weatherapp-demo.netlify.app">Live Demo</a>
    </div>
    {/* Add more projects here */}
  </section>
);

export default Projects;
