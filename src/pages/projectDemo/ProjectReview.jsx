// src/pages/ProjectOverview.jsx
import { motion } from "framer-motion";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaUserMd, FaLaptopCode, FaDatabase, FaLock, FaCloudUploadAlt, FaRocket } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiFirebase, SiStripe } from "react-icons/si";
import { Link } from "react-router-dom";

export default function ProjectOverview() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Project Overview | MCMS</title>
      </Helmet>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
      >
        <h1 className="text-4xl font-bold">Medical Camp Management System</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto">
          A full-featured MERN web application for organizing, managing, and participating in medical camps efficiently.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto p-6 space-y-16">

        {/* Project Description */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <FaRocket className="text-red-500" /> Project Description
          </h2>
          <p className="leading-relaxed bg-white p-4 rounded-lg shadow">
            The Medical Camp Management System (MCMS) is designed to make the process of organizing and participating 
            in medical camps easier and faster. Organizers can create and manage camps, while participants can register, 
            make payments, and give feedback. The system ensures secure authentication, smooth navigation, and 
            responsive design for all devices.
          </p>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaUserMd className="text-blue-600" /> User Benefits
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="p-4 bg-white shadow rounded-lg">📅 Organizers can easily create, update, and delete camps.</li>
            <li className="p-4 bg-white shadow rounded-lg">📝 Participants can register, make payments, and give feedback online.</li>
            <li className="p-4 bg-white shadow rounded-lg">🔍 Advanced search, sorting, and pagination features.</li>
            <li className="p-4 bg-white shadow rounded-lg">📊 Analytics dashboard for better management decisions.</li>
          </ul>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaRocket className="text-green-600" /> Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Organizer Dashboard",
              "Participant Dashboard",
              "Camp Registration Modal",
              "Stripe Payment Integration",
              "Feedback & Ratings System",
              "JWT Protected Routes"
            ].map((f, i) => (
              <div key={i} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">{f}</div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaLaptopCode className="text-purple-600" /> Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-lg">
            <span className="flex items-center gap-2"><SiReact className="text-cyan-500"/> React</span>
            <span className="flex items-center gap-2"><SiNodedotjs className="text-green-500"/> Node.js</span>
            <span className="flex items-center gap-2"><SiExpress className="text-gray-700"/> Express.js</span>
            <span className="flex items-center gap-2"><SiMongodb className="text-green-700"/> MongoDB</span>
            <span className="flex items-center gap-2"><SiFirebase className="text-yellow-500"/> Firebase Authentication</span>
            <span className="flex items-center gap-2"><SiStripe className="text-purple-500"/> Stripe Payment</span>
          </div>
        </motion.section>

        {/* Future Plans */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <FaCloudUploadAlt className="text-indigo-600" /> Future Plans
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mobile App Version using React Native</li>
            <li>AI-based Camp Recommendation System</li>
            <li>Multi-language Support</li>
            <li>Volunteer Management System</li>
          </ul>
        </motion.section>

      </div>
      <div className="flex justify-center mt-6 py-4">
  <Zoom>
    <Link
      to="/"
      className="flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold shadow-lg text-white
                 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                 bg-[length:200%_200%] animate-gradient-x
                 transition transform hover:scale-105"
    >
    <AiOutlineArrowLeft className="text-xl" />
      Back to Projects
    </Link>
  </Zoom>
</div>
    </div>
  );
}
