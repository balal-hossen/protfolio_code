import React from "react";
import MEDCMS from "./projectDemo/MEDCMS";
//import video from '../assets/image/152522-803189119_small.mp4'

const Projects = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🔵 Overlay (optional: dark layer over video for better contrast) */}
      <div className="absolute top-0 left-0 w-full h-full  z-10"></div>

      {/* 🔵 Foreground Content */}
      <div className="relative z-20 py-0">
        <h2 className="text-cyan-400 text-xl sm:text-2xl font-semibold text-center relative my-10">
          <span className="relative z-10 px-4 bg-dark text-3xl font-bold">My Projects</span>
          <span className="absolute left-15 top-1/2 w-1/3 h-px bg-cyan-400 transform -translate-y-1/2"></span>
          <span className="absolute right-15 top-1/2 w-1/3 h-px bg-cyan-400 transform -translate-y-1/2"></span>
        </h2>

        <div className="grid gap-10 w-full max-w-7xl mx-auto px-4 space-y-12">
          <div className="w-full">
            <MEDCMS />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
