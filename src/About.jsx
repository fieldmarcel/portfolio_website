import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const container = (delay) => ({
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
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
        duration: 1.5,
        delay: delay,
      },
    },
  });

  const refLeft = useRef(null);
  const isLeftInView = useInView(refLeft);
  const refRight = useRef(null);
  const isRightInView = useInView(refRight); // Added ref for right column

  return (
    <div id="about"
      className="about flex flex-col md:flex-row gap-6 p-4 sm:p-6"
      style={{
        backgroundImage: `url('/Rectangle.svg')`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Left Column */}
      <motion.div
        ref={refLeft}
        variants={container1(0.4)}
        initial="hidden"
        animate={isLeftInView ? "visible" : "hidden"}
        className="flex flex-col w-full md:w-1/3 p-4 md:mr-2"
      >
        <h1 className="text-3xl md:text-6xl mb-4 text-primary tracking-wider font-bold">
          Overview
        </h1>
        <p className="text-body text-sm sm:text-md sm:leading-7 leading-5 sm:mb-6">
          Hello! I am{" "}
          <span className="font-bold text-primary">Shivanshu Tripathi</span>, a
          third-year Bachelor of Technology student from India, pursuing
          Electronics and Communications Engineering at IIITDM Kurnool. As a
          passionate <span className="font-bold">Full-Stack Developer</span>, I
          enjoy working on both the front-end and back-end aspects of web
          applications. I also love crafting aesthetically pleasing websites and
          editing professional YouTube videos.
        </p>
        <div className="h-48 sm:h-96 w-48 sm:w-96 rounded-full sm:block hidden">
          <img src="Untitled (3).svg" alt="Figma Icon" />
        </div>
      </motion.div>

      {/* Middle Column */}
      <motion.div
        variants={container(0.4)}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-between items-center w-full md:w-1/4 p-4 sm:p-6 bg-white rounded-md rounded-br-3xl shadow-lg"
      >
        <div className="w-10 h-10 sm:h-16 sm:w-16 rounded-full flex items-center justify-center sm:mb-4 ">
          <img src="Untitled (3).svg" alt="Icon" />
        </div>
        <h1 className="text-2xl md:text-4xl mb-2 font-semibold tracking-wide text-primary sm:mb-3 text-center">
          Key Highlights
        </h1>
        <ul className="text-body  text-sm sm:text-base text-center sm:mb-6 mb-3 list-disc ml-2">
          <li>Proficient in Full-Stack Development</li>
          <li>Experience with MERN stack projects</li>
          <li>Created 10+ dynamic, user-focused applications</li>
          <li>Skilled in C++, JavaScript, React, and Node.js</li>
        </ul>
        <div className="w-48 sm:w-64 h-48 sm:h-64">
          <img
            src="/img1.jpg"
            alt="Skillset Illustration"
            className="w-full h-full object-cover  object-top rounded-lg rounded-br-3xl"
          />
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        ref={refRight}
        variants={container1(0.4)} // Use the same container1 variant as left column
        initial="hidden"
        animate={isRightInView ? "visible" : "hidden"}
        className="hidden sm:flex flex-col justify-start items-end w-full md:w-1/3 p-4 md:ml-2 space-y-4"
      >
        <div className="relative w-48 sm:w-64 h-48 sm:h-64">
          <img
            src="/img1.jpg"
            alt="Professional Image"
            className="w-full h-full object-cover object-top rounded-2xl"
          />
          <a
            href="#"
            className="absolute top-2 right-2 flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-all"
            title="View More"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 sm:w-6 h-5 sm:h-6 text-primary"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="flex items-start space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9l3 3m0 0l3-3m-3 3V4m8 8a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-body text-sm sm:text-md text-justify">
            With a keen eye for design and an analytical mindset, I thrive on solving
            complex problems and delivering user-friendly applications. My journey in
            tech combines creativity with logic to build impactful digital experiences.
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <div className="flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 9l3 3m0 0l3-3m-3 3V4m8 8a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-body text-sm sm:text-md text-justify">
            Outside of coding, I enjoy exploring video editing and delving into
            creative pursuits. My dedication to learning and growing fuels my
            ambition to excel in the tech industry.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
