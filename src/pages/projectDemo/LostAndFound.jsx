import { motion } from "framer-motion";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaReact, FaNodeJs, FaLock, FaMobileAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiVercel, SiNetlify } from "react-icons/si";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const LostAndFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">
      <Helmet>
        <title>Lost & Found | WhereIsIt</title>
      </Helmet>

      {/* Header */}
      <motion.header
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="py-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow">
          WhereIsIt — Lost & Found Platform
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          A smart and user-friendly platform to connect lost items with their rightful owners.
        </p>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 pb-20 space-y-16">
        {/* Project Description */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-3">📌 Project Description</h2>
          <p className="leading-relaxed">
            <strong>WhereIsIt</strong> is a full-stack Lost & Found web application that helps users 
            report lost items, search for found ones, and recover belongings through a safe and secure 
            platform. Users can create posts with detailed descriptions, upload images, specify location, 
            and contact owners/finders directly. The platform is built for speed, security, and ease of 
            use, ensuring that anyone — whether tech-savvy or not — can navigate it effortlessly.
          </p>
        </motion.section>

        {/* User Benefits */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold mb-3">💡 User Benefits</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Quickly report lost or found items with image and location.",
              "Browse and search items by title, category, or location.",
              "Connect securely with finders/owners without sharing personal details publicly.",
              "Track and manage your own posts from a personalized dashboard.",
              "Access the platform anytime from mobile or desktop devices.",
              "Enjoy a completely free-to-use service without hidden charges."
            ].map((benefit, i) => (
              <motion.li
                key={i}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
                whileHover={{ scale: 1.03 }}
              >
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Key Features */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-3">🚀 Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email/Password & Google Authentication</li>
            <li>JWT Protected Private Routes for security</li>
            <li>Create posts with images, category, and location</li>
            <li>Real-time status updates for recovery tracking</li>
            <li>Fully responsive design for all devices</li>
          </ul>
        </motion.section>

        {/* Future Updates */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-3">🔮 Future Enhancements</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-powered image recognition to match lost items faster.</li>
            <li>Integration with Google Maps for better location tracking.</li>
            <li>Multi-language support for global accessibility.</li>
            <li>Push notifications for instant updates.</li>
            <li>Verified badges for trusted users.</li>
          </ul>
        </motion.section>

        {/* Tech Stack with Icons */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">🛠 Tech Stack</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
              <FaReact className="text-blue-500 text-3xl" /> React.js
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
              <SiTailwindcss className="text-cyan-500 text-3xl" /> Tailwind CSS
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
              <FaNodeJs className="text-green-600 text-3xl" /> Node.js
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
              <SiMongodb className="text-green-700 text-3xl" /> MongoDB
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
              <SiFirebase className="text-yellow-500 text-3xl" /> Firebase Auth
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
              <FaLock className="text-purple-500 text-3xl" /> JWT Security
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
              <SiNetlify className="text-green-500 text-3xl" /> Netlify (Client)
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
              <SiVercel className="text-black text-3xl" /> Vercel (Server)
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow">
              <FaMobileAlt className="text-pink-500 text-3xl" /> Fully Responsive
            </motion.div>
          </div>
        </motion.section>
      </main>
      <div className="flex justify-center mt-4 py-4">
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
};

export default LostAndFound;
