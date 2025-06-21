import React from 'react';
import './About.css';
import profileImage from './profile.jpg'; 

const About = () => (
  <section id="about" className="fade-in">
    <img src={profileImage} alt="Farzana Tasnim" className="profile-img" />
    <h2>About Me</h2>
    <p>Assalamualaikum! I’m a passionate developer who loves building beautiful interfaces and smooth user experiences. I work with React, Flutter, and more.</p>
  </section>
);

export default About;
