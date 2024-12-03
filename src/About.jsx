import React from "react";

const About = () => {
  return (
    <div className=" about flex flex-col md:flex-row gap-6 p-4 sm:p-6 "style={{
    backgroundImage: `url('/Rectangle.svg')`,
    backgroundSize: 'cover',
    height: '100vh', 
    width: '100%',
  }}>
      {/* Left Column */}
      <div className="flex flex-col w-full md:w-1/3 p-4 md:mr-2">
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
        {/* Placeholder for Figma Icon */}
        <div className="h-48 sm:h-96 w-48 sm:w-96 rounded-full sm:block hidden sm:flex sm:items-center sm:justify-center">
          <img src="Untitled (3).svg" alt="Figma Icon" />
        </div>
      </div>

      {/* Middle Column */}
      <div className="flex flex-col justify-between items-center w-full md:w-1/4 p-4 sm:p-6 bg-white rounded-md rounded-br-3xl shadow-lg">
        {/* Icon at the Top */}
        <div className="sm:h-12 sm:w-12 w-10 h-10 sm:h-16 sm:w-16 rounded-full flex items-center justify-center sm:mb-4 mb-2">
          <img src="Untitled (3).svg" alt="Icon" />
        </div>
        <h1 className="text-2xl md:text-4xl font-semibold tracking-wide text-primary sm:mb-3 text-center">
          120%
        </h1>
        <h3 className="text-body text-sm sm:text-lg text-center sm:mb-6 mb-3">
          Experienced in C++, JavaScript, and Full-Stack Development
        </h3>
        <div className="w-48 sm:w-64 h-52 sm:h-64 flex items-center justify-center">
          <img
            src="/img1.jpg"
            alt="Skillset"
            className="w-full h-full object-cover object-top rounded-lg rounded-br-3xl"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="sm:block hidden flex sm:flex-col justify-start items-end w-full md:w-1/3 p-4 md:ml-2 space-y-4">
        {/* Image with Circular Icon */}
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

        {/* First Paragraph with Icon */}
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

        {/* Second Paragraph with Icon */}
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
      </div>
    </div>
  );
};

export default About;
