import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ConnectContact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-gray-800 p-8 relative"
      style={{
        background: "linear-gradient(135deg, #c1aef5, #5c25f7)",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* SVG Background Design */}
      <img
        src="/beauty.svg"
        alt="Decorative Design"
        className="absolute top-0 right-0 w-[35%] opacity-20"
      />
      <img
        src="/beauty.svg"
        alt="Decorative Design"
        className="absolute bottom-0 left-0 w-[35%] opacity-20"
      />

      {/* Header */}
      <div className="text-white font-bold tracking-wider text-5xl sm:text-6xl lg:text-[7rem] mb-10 text-center z-10">
        Contact Me
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:gap-12 z-10">
        {/* Form Section */}
        <div className="w-full max-w-md bg-white shadow-lg rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Get in Touch
          </h2>
          <form
            action="https://formspree.io/f/mwpkezwq"
            method="POST"
            className="space-y-6"
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Full name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name..."
                className="w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message..."
                className="w-full px-4 py-2 bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Connect Section */}
        <div className="flex flex-col items-center lg:w-1/3 mt-12 lg:mt-0">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            Let's Connect
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="" className="text-gray-200 hover:text-blue-600">
              <FaLinkedin className="text-4xl" />
            </a>
            <a href="" className="text-gray-200 hover:text-pink-500">
              <AiFillInstagram className="text-4xl" />
            </a>
            <a href="" className="text-gray-200 hover:text-blue-400">
              <FaSquareXTwitter className="text-4xl" />
            </a>
            <a href="" className="text-gray-200 hover:text-red-500">
              <MdEmail className="text-4xl" />
            </a>
            <a href="" className="text-gray-200 hover:text-black">
              <FaGithubSquare className="text-4xl" />
            </a>
            <a href="" className="text-gray-200 hover:text-orange-500">
              <SiLeetcode className="text-4xl" />
            </a>
          </div>

          <h3 className="text-2xl font-semibold text-white mb-4">Profiles</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/home" className="text-gray-200 hover:underline">
              Home
            </a>
            <a href="/projects" className="text-gray-200 hover:underline">
              Projects
            </a>
            <a href="/blog" className="text-gray-200 hover:underline">
              Blog
            </a>
            <a href="/contact" className="text-gray-200 hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-white z-10">
        <p>©2024 Shivanshu Tripathi. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ConnectContact;
