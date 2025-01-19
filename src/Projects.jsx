import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useInView } from "framer-motion";
import  {useRef}  from "react";
const Projects = () => {
  const container= (delay)=>({
    hidden:{y:100, opacity:0},
    visible:{y:0, opacity:1,
      transition:{
        duration:1.5,delay:delay
      },
    },
    
    });
    const refLeft = useRef(null);
    const isLeftInView = useInView(refLeft);
  const data = [
    {
      id: "1",
      name: "FightClub",
      detail:
        "FightClub is a dynamic platform dedicated to the world of combat sports and wrestling. Explore news, events, and updates from the Titan UFO and Freestyle Wrestling Academy. Stay connected with exclusive insights into training sessions, membership plans.",
      image: "fight5.svg",
      techstack: "#reactjs #tailwind #css #framer",
      github: "https://github.com/fieldmarcel/react-fightclub",
      liveDemo: "https://fightclub-nine.vercel.app/",
    },
    {
      id: "2",
      name: "Ecommerce",
      detail:
        "Ecommerce is a modern shopping platform offering a seamless online shopping experience. Browse a wide range of products, enjoy intuitive navigation, and benefit from secure payment options. Built to deliver exceptional user engagement.",
      image: "Group 1 (1).svg",
      techstack: "#reactjs #tailwind #api #nodejs",
      github: "https://github.com/fieldmarcel/ecommerce",
      liveDemo: "https://ecommerce-xi-lovat.vercel.app",
    },
    {
      id: "3",
      name: "Portfolio App",
      detail:
        "This is my professional showcase for creative and tech enthusiasm. It highlights my projects, skills, and experiences in a visually captivating and responsive design that leaves a lasting impression.",
      image: "G2.svg",
      techstack: "#tailwind #reactjs #framer",
      github: "https://github.com/fieldmarcel/Pexels--API",
      liveDemo: "https://ecoliving-demo.com",
    },
    {
      id: "4",
      name: "Recipeapp",
      detail:
        "RecipeApp is a food lover's haven, providing an extensive collection of recipes from around the world. Discover, save, and share your favorite recipes with an intuitive interface and easy-to-follow instructions.",
      image: "Group 1 (2).svg",
      techstack: "#mernstack #api #tailwind #reactjs",
      github: "https://github.com/fieldmarcel/foodchef",
      liveDemo: "https://foodchef-pi.vercel.app/",
    },
    
  ];

  return (
    <div id="projects" className="flex flex-col items-start inset-0 h-full w-full bg-[linear-gradient(to_right,#E3D8EA_1px,transparent_2px),linear-gradient(to_bottom,#E3D8EA_1px,transparent_1px)] bg-[size:6rem_4rem] p-6 sm:p-10"  >
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-wider text-gray-800">
        <span className=" sm:ml-9 font-thin text-purple-600">|</span> Web Folio
      </h1>
      <h2 className="text-lg sm:ml-9  sm:text-xl lg:text-2xl font-medium text-gray-600 mb-8">
        Showcasing some of my recent projects and achievements.
      </h2>

      {/* Projects Grid */}
      <motion.div  
      ref={refLeft}
       variants= {container(0.3)}
       initial ="hidden"
       animate={isLeftInView ? "visible" : "hidden"}
       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:m-10 gap-6 sm:gap-8">
        {data.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* Project Image */}
            <motion.div className="relative group"
            variants= {container(0.8)}
            initial ="hidden"
            animate="visible">
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-48 sm:h-64 lg:h-72 object-contain group-hover:brightness-90 transition duration-300"
              />
              {/* Overlay with Live Demo */}
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-purple-600 px-4 py-2 rounded-full text-sm sm:text-base hover:bg-purple-700"
                >
                  Live Demo <GoArrowUpRight className="inline ml-1" />
                </a>
              </div>
            </motion.div>

            {/* Project Details */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {project.detail}
              </p>
              <p className="text-xs sm:text-sm font-medium text-purple-500 mb-4">
                {project.techstack}
              </p>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-gray-800 px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-gray-700"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-purple-600 px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-purple-700"
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
