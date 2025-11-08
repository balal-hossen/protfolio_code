import React from "react";
import { motion } from "framer-motion";
import devImg1 from "../assets/image/fi.jpg";
import devImg2 from "../assets/image/WhatsApp Image 2025-10-22 at 17.32.35_c040e8fd.jpg";

const About = () => {
  return (
    <div className="max-w-8xl min-h-screen mx-auto px-6 py-12 font-inter bg-cover bg-center bg-no-repeat">
      
      <h2 className="text-cyan-400 text-xl sm:text-2xl font-semibold text-center relative my-10">
        <span className="relative z-10 px-4 text-3xl font-bold bg-dark">About Me</span>
        <span className="absolute left-10 top-1/2 w-1/3 h-px bg-cyan-400 transform -translate-y-1/2"></span>
        <span className="absolute right-10 top-1/2 w-1/3 h-px bg-cyan-400 transform -translate-y-1/2"></span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* ✅ Left: Animated Images */}
        <div className="flex-1 flex w-full mx-auto min-h-[300px] sm:min-h-[400px] lg:h-screen justify-center items-center relative overflow-hidden rounded-xl">
          <div>
            <img src={devImg2} alt="" />
          </div>
        </div>

        {/* ✅ Right: Text Area */}
        <motion.div
          className="relative flex-1 text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl mt-10 lg:mt-0 overflow-hidden rounded-xl min-h-[400px] lg:h-screen"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className="relative z-10 bg-opacity-80 p-6 h-full overflow-y-auto">
            <p className="text-base sm:text-lg leading-relaxed rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-justify">
              Hi, I’m{" "}
              <span className="font-bold text-blue-600">BALAL HOSSEN</span> — a
              passionate{" "}
              <span className="font-semibold">MERN stack developer</span>{" "}
              dedicated to building dynamic, responsive, and scalable web
              applications.
              <br />
              <br />I specialize in creating seamless user experiences using
              technologies like{" "}
              <span className="font-medium">
                React.js, Node.js, Express.js, MongoDB
              </span>
              , and integrating tools like{" "}
              <span className="font-medium">
                Firebase, Stripe, Tailwind CSS
              </span>{" "}
              to ensure secure and modern functionality.
              <br />
              <br />
              With a solid foundation in both frontend and backend development,
              I love transforming innovative ideas into beautiful and efficient
              digital products. I’m continuously learning and updating my
              skillset to stay current in this fast-evolving tech world.
              <br />
              <br />
              Beyond coding, I also focus on clean UI design, code optimization,
              performance, and real-world project building. I am currently open
              to remote job opportunities, internships, or collaboration on
              impactful web-based projects.
              <br />
              <br />
              Let’s build something amazing together!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
