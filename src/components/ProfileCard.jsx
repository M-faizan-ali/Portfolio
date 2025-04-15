import {
    Phone,
    Mail,
    MapPin,
    PhoneCall,
    Download,
    Instagram,
    Linkedin,
    Facebook,
    Github,
  } from "lucide-react";
  
  export default function ProfileCard() {
    return (
      <div className="pt-15px bg-white shadow-lg rounded-lg flex flex-col items-center gap-5 justify-between">
        
        {/* 1. Image */}
        <div className="mt-[25px]">
          <img
            src="./assets/Faizan-img.jpg"
            alt="Profile"
            className="w-[300px] h-[300px] object-cover rounded-xl"
          />
        </div>
  
        {/* 2. Name + Title */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mt-4">M Faizan Ali</h2> {/* Larger text for name */}
          <p className="text-xl text-gray-500">Software Developer</p> {/* Larger text for title */}
        </div>
  
        {/* 3. Contact Info */}
        <div className="space-y-3 mt-4 text-xl text-gray-700"> {/* General text size for all contact info */}
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-green-500" />
            <span>+123 456 7890</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-red-500" />
            <span>faizan@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-500" />
            <span>Karachi, Pakistan</span>
          </div>
        </div>
  
        {/* 4. Buttons */}
        <div className="flex flex-row gap-2 mt-4 w-full px-4 text-lg">
          <button className="bg-blue-600 text-white py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-blue-700 transition w-1/2">
            <PhoneCall size={18} />
            <span className="whitespace-nowrap">Book a Call</span>
          </button>
          <button className="bg-gray-800 text-white py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-black transition w-1/2">
            <Download size={18} />
            <span className="whitespace-nowrap">Download CV</span>
          </button>
        </div>
  
        {/* 5. Social Icons */}
        <div className="flex gap-6 mt-6 mb-6 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-gray-700 hover:text-pink-600 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-gray-700 hover:text-blue-600 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="text-gray-700 hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="text-gray-700 hover:text-black transition" />
          </a>
        </div>
      </div>
    );
  }
  