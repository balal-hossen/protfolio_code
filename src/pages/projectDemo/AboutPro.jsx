import { Fade, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineArrowLeft } from "react-icons/ai";

const AboutPro = () => {
  const aboutAnimUrl = "https://assets2.lottiefiles.com/packages/lf20_x62chJ.json"; // Replace with your favorite animation URL

  return (
    <div className="bg-base-200 min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-12">
          <Typewriter
            words={['About HobbyHub']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
          />
        </h1>

        {/* Top Section with Animation */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <Zoom>
            <Lottie
              animationData={null}
              path={aboutAnimUrl} // Directly load from URL
              loop={true}
            />
          </Zoom>
          <Fade direction="up">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>HobbyHub</strong> is a modern web platform where people
              can discover, join, and create local hobby-based groups — from
              hiking adventures to book clubs, painting circles, gaming squads,
              and more. We aim to connect like-minded people through shared
              interests, encourage collaboration, and build a strong community.
            </p>
          </Fade>
        </div>

        {/* Technologies Used */}
        <Fade direction="left" triggerOnce>
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">🛠 Technologies Used</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <ul className="list-disc pl-6 space-y-2">
                <li>React (Vite) – SPA Frontend</li>
                <li>Tailwind CSS + DaisyUI – Styling</li>
                <li>Firebase Authentication – Email/Password & Google Login</li>
                <li>MongoDB + Express.js – Database & API</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2">
                <li>React Router – Routing</li>
                <li>SweetAlert2 – Success/Error Alerts</li>
                <li>React Awesome Reveal – Animations</li>
                <li>React Simple Typewriter – Typing Effect</li>
              </ul>
            </div>
          </div>
        </Fade>

        {/* Features */}
        <Fade direction="right" triggerOnce>
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">✨ Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Responsive design for mobile, tablet, and desktop</li>
              <li>Secure authentication with private/protected routes</li>
              <li>Ability to create and manage hobby groups</li>
              <li>Join groups before the start date expires</li>
              <li>View all groups with detailed information</li>
              <li>Update or delete groups you created</li>
              <li>Beautiful UI with animations and smooth interactions</li>
            </ul>
          </div>
        </Fade>

        {/* User Benefits */}
        <Fade direction="up" triggerOnce>
          <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">💡 User Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Connect with people who share the same passions</li>
              <li>Discover new hobbies and activities in your area</li>
              <li>Organize events and invite members easily</li>
              <li>Stay informed with schedules & meeting details</li>
              <li>Access platform from any device</li>
              <li>Enjoy a seamless, interactive experience</li>
            </ul>
          </div>
        </Fade>

        {/* Future Plans */}
        <Fade direction="up" triggerOnce>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">🚀 Future Plans</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Add real-time chat for group members</li>
              <li>Event reminder notifications</li>
              <li>Location-based hobby suggestions</li>
              <li>Photo and video sharing within groups</li>
            </ul>
          </div>
        </Fade>
<div className="flex justify-center mt-12">
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
    </div>
  );
};

export default AboutPro;
