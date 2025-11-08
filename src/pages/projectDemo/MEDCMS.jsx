// src/pages/Projects.jsx
import React, { useEffect, useState } from "react";
import project1 from "../../assets/image/lost.png";
import medical from "../../assets/image/medical-camp.png";
import hubbyhub from "../../assets/image/hubbyHub.png";
import ridex from "../../assets/image/ridex.png";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
} from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";

const AnimatedWrapper = ({ children, direction, delay }) => {
  const controls = useAnimation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = window.pageYOffset + window.innerHeight;
      if (top > 100) setVisible(true);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.7, delay },
      });
    }
  }, [visible, controls, delay]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const MEDCMS = () => {
  const projects = [
     {
      title: "RIDEX-Smart Ride Sharing Platform",
      team:'Team Project (6 Members)',
      desc: "RIDEX is a smart ride-sharing platform that connects riders and passengers for real-time, safe, and convenient trips. It was collaboratively developed by a six-member team with a focus on modern UI, performance, and scalability.",
      image: ridex,
      tech: ["React.js","Next.js",'Socket.io','AI','JWT','GSAP', "Firebase", "MongoDB", "Express", "Tailwind CSS", "ShadCN"],
      live: "https://ridex-ride-sharing.vercel.app",
      client: "https://github.com/rubel6610/RideX-Frontend",
      server: "https://github.com/rubel6610/ridex-backend",
      details: "/ridexDetails",
    },

     {
      title: "Medical Camp",
      desc: "The Medical Camp Management System (MCMS) is designed to make the process of organizing and participating in medical camps easier and faster. Organizers can create and manage camps, while participants can register, make payments, and give feedback. The system ensures secure authentication, smooth navigation, and responsive design for all devices.",
      image: medical,
      tech: ["React", "Firebase", "MongoDB", "Express", "Tailwind CSS"],
      live: "https://medical-camp-10888.web.app/",
      client: "https://github.com/BELALKHANBK/Medical-Camp_Client-side",
      server: "https://github.com/BELALKHANBK/medical-camp-server-side",
      details: "/medicalcamp",
    },
    {
      title: "Lost And Found",
      desc: "WhereIsIt is a full-stack Lost & Found web application that helps users report lost items, search for found ones, and recover belongings through a safe and secure platform. Users can create posts with detailed descriptions, upload images, specify location, and contact owners/finders directly. The platform is built for speed, security.",
      image: project1,
      tech: ["React", "Firebase", "MongoDB", "Express", "Stripe", "Tailwind CSS"],
      live: "https://lost-and-found-website-8c162.web.app",
      client: "https://github.com/BELALKHANBK/lost-and-found",
      server: "https://github.com/BELALKHANBK/lost-and-found-server-site",
      details: "/lostAndFoundDetails",
    },
   
    {
      title: "HobbyHub",
      desc: "HobbyHub is a modern web platform where people can discover, join, and create local hobby-based groups — from hiking adventures to book clubs, painting circles, gaming squads, and more. We aim to connect like-minded people through shared interests, encourage collaboration, and build a strong community Responsive design for mobile, tablet, and desktop.",
      image: hubbyhub,
      tech: ["React", "Firebase", "MongoDB", "Express", "Tailwind CSS", "DaisyUI"],
      live: "https://ubiquitous-alpaca-b56333.netlify.app",
      client: "https://github.com/BELALKHANBK/hubbyhub-client-side",
      server: "https://github.com/BELALKHANBK/hobbyhub-server-side",
      details: "/hubbyhubDetails",
    },
   
  ];

  return (
    <div className="min-h-screen text-white py-16 px-4 md:px-10 font-poppins">
      {/* Heading */}
      

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimatedWrapper key={index} direction="bottom" delay={index * 0.2}>
            <div className="bg-[#112240] border border-cyan-500 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300 flex flex-col overflow-hidden">
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3 uppercase">
                  {project.title}
                  {project.team ? <span className="text-sm text-white font-bold block mt-1">{project.team}</span> : null}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="border border-cyan-500 text-cyan-400 text-xs px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-cyan-500 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-600 hover:text-white transition"
                  >
                    <FaGithub /> Repo
                  </a>
                  <Link
                    to={project.details}
                    className="flex items-center gap-2 border border-cyan-500 text-cyan-400 px-4 py-2 rounded hover:bg-cyan-600 hover:text-white transition"
                  >
                    <TbListDetails /> Details
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </div>
  );
};

export default MEDCMS;
