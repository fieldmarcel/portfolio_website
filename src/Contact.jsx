import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import  {useRef}  from "react";


const Contact = () => {
  // Animation variants
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: delay,
      },
    },
  });

  const container1 = (delay) => ({
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  });

  // References for Framer Motion animations
  const refLeft = useRef(null);
  const isLeftInView = useInView(refLeft);

  return (
    <div
      className="flex flex-col items-center justify-center text-gray-800 p-8"
      style={{
        background: "linear-gradient(0deg, #D690FF, #BB16F2)", // Background gradient
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="text-white font-extrabold tracking-wider text-5xl sm:text-6xl lg:text-[7rem] mb-12 text-center z-10 bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
        Contact Me
      </div>

      {/* Form and SVG Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:gap-12 z-10">
        {/* Form Section */}
        <div
         
          className="w-full h-auto lg:w-1/2 max-w-md bg-white shadow-2xl rounded-3xl p-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Get in Touch
          </h2>
          <form
            action="https://formspree.io/f/mwpkezwq"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Full Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name..."
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message..."
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* SVG Section */}
        <div
         
          className="hidden lg:block flex justify-center lg:w-1/2 mt-10 lg:mt-0"
        >
          <img
            src="/beauty.svg"
            alt="Decorative Design"
            className="w-full sm:w-3/4 lg:w-full max-w-md"
          />
        </div>
      </div>

      {/* Social Links Section */}
      <motion.div
        ref={refLeft}
        variants={container1(0.3)}
        initial="hidden"
        animate={isLeftInView ? "visible" : "hidden"}
        className="flex flex-col items-center mt-16 w-full bg-gradient-to-r from-white to-slate-50 p-10 rounded-3xl shadow-xl"
      >
        <h2 className="sm:text-5xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 mb-8 text-center">
          Let's Connect
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {[
            {
              href: "https://www.linkedin.com/in/shivanshu-tripathi-704a022b9/",
              icon: <FaLinkedin />,
              color: "text-blue-500",
            },
            {
              href: "https://www.instagram.com/zz_shivanshu95/",
              icon: <AiFillInstagram />,
              color: "text-pink-600",
            },
            {
              href: "https://x.com/T_shivanshu9590",
              icon: <FaSquareXTwitter />,
              color: "text-black",
            },
            {
              href: "https://github.com/fieldmarcel",
              icon: <FaGithubSquare />,
              color: "text-gray-800",
            },
            {
              href: "https://leetcode.com/u/Shivanshu-Tripathi/",
              icon: <SiLeetcode />,
              color: "text-yellow-500",
            },
            {
              href: "https://www.youtube.com/@Shiva_Vox",
              icon: <FaYoutube />,
              color: "text-red-500",
            },
          ].map(({ href, icon, color }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-transform transform hover:scale-125 ${color} text-5xl`}
              aria-label="Social Link"
            >
              {icon}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Download Resume
        </a>
      </motion.div>

      <div className="text-center text-sm text-gray-700 mt-10">
        <p>©2024 Shivanshu Tripathi. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
