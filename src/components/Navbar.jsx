import React, { useState, useEffect } from "react";
import {
  Home,
  Info,
  Briefcase,
  Layers,
  FileText,
  Phone,
  Moon,
  Sun,
  Send,
} from "lucide-react";
import { Link } from 'react-router-dom'; // Import Link

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'fixed top-0 left-50% transform -translate-x-50% z-50 rounded-b-none'
          : 'relative'
      }`}
      style={{
        marginBottom: isScrolled ? '0px' : '20px',
        marginTop: isScrolled ? '0px' : '20px',
      }}
    >
      <nav
        className="bg-white border border-gray-200 p-4 shadow-sm rounded-xl w-[90%] mx-auto"
      >
        <div className="max-w-7xl  flex items-center justify-between space-x-6 text-lg">
          <div className="flex-shrink-0 text-3xl text-blue-500 font-bold uppercase">
            Faizan Ali
          </div>

          <div className="flex space-x-6 text-gray-700 text-lg">
            <Link to="/" className="flex items-center gap-2 hover:underline">
              <Home size={18} /> Home
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:underline">
              <Info size={18} /> About
            </Link>
            <Link to="/services" className="flex items-center gap-2 hover:underline">
              <Briefcase size={18} /> Services
            </Link>
            <Link to="/work" className="flex items-center gap-2 hover:underline">
              <Layers size={18} /> Works
            </Link>
            <Link to="#" className="flex items-center gap-2 hover:underline">
              <FileText size={18} /> Blog
            </Link>
            <Link to="/contact" className="flex items-center gap-2 hover:underline">
              <Phone size={18} /> Contact
            </Link>
          </div>

          <div className="mr-2 text-lg">
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 hover:text-black transition"
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </div>

          <div>
            <button className="bg-black text-white px-5 py-3 rounded flex items-center gap-3 hover:bg-blue-500 transition text-lg rounded-xl">
              Let’s Talk
              <Send size={18} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
