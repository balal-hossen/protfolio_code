import React from 'react';
import Banner from '../componets/Banner';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import WhatApps from './WhatApps';
//import video from '../assets/image/13949-253035804_small.mp4'
const Home = () => {
  return (
    <div className="relative w-full h-full bg-blue-950 text-white" id="home">
     

      {/* Content Over Video */}
      <div className="relative z-10 bg-opacity-60">
        <Banner/>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <WhatApps />
      </div>
    </div>
  );
};

export default Home;
