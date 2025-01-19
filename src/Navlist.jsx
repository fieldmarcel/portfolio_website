import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

const Navlist = () => {
  return (
    <div className="list1 flex flex-col items-start justify-between bg-white text-gray-700 p-6 rounded-tr-lg rounded-3xl h-full">
      {/* Navigation Links */}
      <nav className="list flex flex-col items-start space-y-6 sm:space-y-8 text-lg font-semibold tracking-wide mb-6">
        <Link
          to="home" // target section's id
          smooth={true} // Enables smooth scrolling
          duration={500} // Animation duration in ms
          className="hover:text-purple-600 tracking-widest transition duration-200 cursor-pointer"
        >
          HOME
        </Link>
        <Link
          to="about" // target section's id
          smooth={true} // Enables smooth scrolling
          duration={500} // Animation duration in ms
          className="hover:text-purple-600 tracking-widest transition duration-200 cursor-pointer"
        >
          ABOUT
        </Link>
        <Link
          to="techstack" // target section's id
          smooth={true} // Enables smooth scrolling
          duration={1000} // Animation duration in ms
          className="hover:text-purple-600 tracking-widest transition duration-200 cursor-pointer"
        >
          TECH
        </Link>
        
       

        <Link
          to="projects" // target section's id
          smooth={true} // Enables smooth scrolling
          duration={1500} // Animation duration in ms
          className="hover:text-purple-600 tracking-widest transition duration-200 cursor-pointer"
        >
          WORK
        </Link>

        <Link
          to="contact" // target section's id
          smooth={true} // Enables smooth scrolling
          duration={2000} // Animation duration in ms
          className="hover:text-purple-600 tracking-widest transition duration-200 cursor-pointer"
        >
          CONTACT
        </Link>
      </nav>

      {/* Social Media Icons */}
      <div className="flex justify-center sm:space-x-4 space-x-2 sm:w-auto w-full">
        <a
          href="https://www.linkedin.com/in/shivanshu-tripathi-704a022b9/"
          className="p-2 sm:p-3 rounded-full border-2 border-gray-900 text-gray-700 hover:bg-blue-100 transition duration-200 m-1"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-lg sm:text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/zz_shivanshu95/"
          className="p-2 sm:block hidden sm:p-3 rounded-full border-2 border-black text-gray-700 hover:bg-pink-100 transition duration-200 m-1"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="text-lg sm:text-2xl" />
        </a>
        <a
          href="https://x.com/T_shivanshu9590"
          className="p-2 sm:p-3 rounded-full border-2 border-black text-gray-700 hover:bg-blue-100 transition duration-200 m-1"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="text-lg sm:text-2xl" />
        </a>
        <a
          href="https://www.youtube.com/@Shiva_Vox"
          className="p-2 sm:p-3 rounded-full border-2 border-black text-gray-700 hover:bg-red-100 transition duration-200 m-1"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-lg sm:text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Navlist;
