import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import Speech from "speak-tts";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger icons

const Navbar = () => {
  const speech = new Speech();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (speech.hasBrowserSupport()) {
      speech.init({
        volume: 1,
        lang: "en-US",
        rate: 1,
        pitch: 1,
        voice: "Google US English",
      });
    }
  }, []);

  const speakText = (text) => {
    speech.speak({ text });
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-950 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center h-16">
        {/* Left: Name */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          💞Balal Hossen💞
        </div>

        {/* Center & Right */}
        <div className="flex items-center">
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg text-gray-700 dark:text-gray-300 mr-3">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    smooth
                    to={`/#${section}`}
                    onClick={() => speakText(section)}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition capitalize"
                  >
                    {section}
                  </Link>
                </li>
              )
            )}
          </ul>
          <Link to="cv">
            <button className="w-full px-6 py-1 bg-blue-600 hover:bg-blue-700 rounded text-white text-lg transition">
              Profile
            </button>
          </Link>
          {/* Resume Button Desktop */}
          <div className="hidden md:block ml-6">
            <a
              href="/Balal Hossen CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden ml-2">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-300 text-lg">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    smooth
                    to={`/#${section}`}
                    onClick={() => {
                      speakText(section);
                      setIsOpen(false); // close menu on click
                    }}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition capitalize"
                  >
                    {section}
                  </Link>
                </li>
              )
            )}
          </ul>
          <a
            href="/Balal Hossen CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className=" block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-center"
          >
            View CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
