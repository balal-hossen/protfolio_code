import React from "react";
import { motion } from "framer-motion";
import devImg1 from "../assets/image/fi.jpg";
import devImg2 from "../assets/image/fiver.jpg";
// import devImg3 from "../assets/image/image.jpg";
import video from "../assets/image/13232-246463976_small.mp4";
import video1 from "../assets/image/3129-166335878_small.mp4";

const About = () => {
  return (
    <div className="max-w-8xl min-h-screen mx-auto px-6 py-12 font-inter bg-cover bg-center bg-no-repeat">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 font-poppins text-white text-center lg:text-left">
        About Me
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* ✅ Left: Animated Images with Background Video */}
        <div className="flex-1 flex w-full mx-auto min-h-[300px] sm:min-h-[400px] lg:h-screen justify-center items-center relative overflow-hidden rounded-xl">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Animated Developers */}
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 z-10">
            <motion.img
              src={devImg1}
              alt="Developer 1"
              className="absolute top-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover rounded-lg shadow-lg"
              initial={{ x: -100 }}
              animate={{ x: [-100, 100, -100] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <motion.img
              src={devImg2}
              alt="Developer 2"
              className="absolute top-[50px] sm:top-[60px] right-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-lg"
              initial={{ y: 100 }}
              animate={{ y: [80, 50, 80] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* ✅ Right: Text Area with Background Video */}
        <motion.div
          className="relative flex-1 text-center lg:text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl mt-10 lg:mt-0 overflow-hidden rounded-xl min-h-[400px] lg:h-screen"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay content */}
          <div className="relative z-10 bg-opacity-80 p-6 h-full overflow-y-auto">
            <p className="text-base sm:text-lg text-white leading-relaxed rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              Hi, I’m{" "}
              <span className="font-bold text-blue-600">BALAL HOSSEN</span> — a
              passionate <span className="font-semibold">MERN stack developer</span>{" "}
              dedicated to building dynamic, responsive, and scalable web
              applications. <br />
              <br />
              I specialize in creating seamless user experiences using
              technologies like{" "}
              <span className="font-medium">
                React.js, Node.js, Express.js, MongoDB
              </span>
              , and integrating tools like{" "}
              <span className="font-medium">
                Firebase, Stripe, Tailwind CSS
              </span>{" "}
              to ensure secure and modern functionality. <br />
              <br />
              With a solid foundation in both frontend and backend development,
              I love transforming innovative ideas into beautiful and efficient
              digital products. I’m continuously learning and updating my
              skillset to stay current in this fast-evolving tech world. <br />
              <br />
              Beyond coding, I also focus on clean UI design, code optimization,
              performance, and real-world project building. I am currently open
              to remote job opportunities, internships, or collaboration on
              impactful web-based projects. <br />
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
