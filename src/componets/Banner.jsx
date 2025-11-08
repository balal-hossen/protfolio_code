import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img1 from "../assets/image/fiver.jpg";
import { Link } from "react-router-dom"; // corrected from "react-router"
import resumePDF from "../assets/image/MD. BALAL HOSSEN.pdf"; // path to your PDF

const Banner = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative px-6 md:px-16"
     /*  style={{
        backgroundImage: `url("/luminous-trails.svg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }} */
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 backdrop-blur-sm z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center max-w-7xl w-full gap-10">

        {/* Left: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left text-white space-y-6">
          <h2 className="text-4xl lg:text-5xl md:text-3xl text-red-600 font-semibold">
            <Typewriter
              words={["Hi, I'm Balal Hossen"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <h2 className="text-2xl md:text-3xl font-semibold">
            <Typewriter
              words={[
                "Frontend Developer",
                "MERN Stack Developer",
                "React Enthusiast",
                "UI/UX Lover",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="text-lg md:text-xl">
            I'm a Front-End focused MERN Stack Developer skilled in JavaScript,
            React, and Tailwind CSS. I also work with Express.js and MongoDB to
            build full-stack features when needed. I enjoy learning new tools
            and turning ideas into responsive, user-friendly web applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 text-center">

 

  <Link to="coverletter">
    <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white text-lg transition">
      Cover Letter
    </button>
  </Link>

 {/* Resume PDF Button */}
<a
  href="https://docs.google.com/document/d/18ATKUPzmcYd-CroU9vQcXDrxOLgDvmmh1wHy_FKdR_0/edit?tab=t.0"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white text-lg transition">
    Resume
  </button>
</a>


</div>

         
        </div>

        {/* Right: Image */}
        <div className="relative inline-block p-1 lg:ml-40 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 animate-spin-fast">
          <div className="bg-white rounded-full p-1">
            <img
              src={img1}
              alt="Belal Khan"
              className="rounded-full border-4 border-white shadow-lg 
              lg:w-80 lg:h-80 md:w-64 md:h-64 sm:w-52 sm:h-52 w-40 h-40 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
