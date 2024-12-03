import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Projects = () => {
  const dragConstraints = { left: 100, right: 300, top: 100, bottom: 200 };
  

  const data = [
    {
      id: "1",
      name: "FightClub",
      detail:
        "Fight Club is a platform dedicated to the UFO and Freestyle Wrestling Academy named TITAN. Learn about happenings in sports and wrestling at TITAN, along with pricing and subscription plans.",
      image: "fight5.svg",
      techstack: "#reactjs #tailwind #css #framer",
      github: "https://github.com/fieldmarcel/react-fightclub",
      liveDemo: "https://fightclub-nine.vercel.app/",
    },
    {
      id: "2",
      name: "Ecommerce",
      detail:
        "FitnessPro is a comprehensive fitness management platform that tracks your workouts, offers diet suggestions, and helps you stay motivated with progress charts and community support.",
      image: "fight5.svg",
      techstack: "#reactjs #tailwind #api #nodejs",
      github: "https://github.com/fieldmarcel/ecommerce",
      liveDemo: "https://fitnesspro-demo.com",
    },
    {
      id: "3",
      name: "PexelsAPI",
      detail:
        "EcoLiving is a platform sharing sustainable living tips, DIY projects, and eco-friendly product recommendations to promote a greener lifestyle.",
      image: "fight5.svg",
      techstack: "#mernstack #tailwind #reactjs",
      github: "https://github.com/fieldmarcel/Pexels--API",
      liveDemo: "https://ecoliving-demo.com",
    },
    {
      id: "4",
      name: "Recipeapp",
      detail:
        "Newsify is a news aggregation platform delivering trending headlines, weather updates, and personalized content based on user preferences.",
      image: "fight5.svg",
      techstack: "#mernstack #api #tailwind #reactjs",
      github: "https://github.com/username/newsify",
      liveDemo: "https://newsify-demo.com",
    },
  ];

  return (
    <div  
      className="flex flex-col items-start p-6 bg-gray-100">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl h-10 font-bold mb-8 tracking-wider">
        <span className="font-thin ml-6 mb-6">|</span> Web Folio
      </h1>

      {/* Projects Grid */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-12  m-4 mx-2 sm:mx-8">
        {data.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg hover:shadow-lg p-4 sm:p-6 transform hover:scale-105 transition duration-300 relative"
          >
            {/* Project Image with Overlay */}
            <motion.div className="relative group">
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-64 sm:h-64 lg:h-96 rounded-lg mb-4 object-fill hover:scale-105 transform transition duration-300"
              />
              {/* Overlay with Live Demo */}
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold text-lg sm:text-xl bg-white px-4 py-2 rounded-full hover:bg-gray-700"
                >
                  <GoArrowUpRight className="w-8 h-8" />
                </a>
              </div>
            </motion.div>

            {/* Project Details */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">
                {project.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {project.detail}
              </p>
              <p className="text-sm sm:text-base font-bold text-primary mb-2">
                {project.techstack}
              </p>
              <div className="flex gap-2 items-center justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-purple-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-purple-700 text-sm sm:text-base font-medium"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-purple-500 px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:bg-purple-600 text-sm sm:text-base font-medium"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
