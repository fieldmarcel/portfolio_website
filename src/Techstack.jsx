import React from "react";
import { motion } from "framer-motion";

const techIcons1 = [
  { src: "/css.png", alt: "CSS" },
  { src: "/html.png", alt: "HTML" },
  { src: "/js.png", alt: "JavaScript" },
  { src: "/react.png", alt: "React" },
  { src: "/node.png", alt: "Node.js" },
  { src: "/tcss.png", alt: "Tailwind CSS" },
];

const techIcons2 = [
  { src: "/mysql.png", alt: "MySQL" },
  { src: "/mongo.png", alt: "MongoDB" },
  { src: "/express.png", alt: "Express.js" },
  { src: "/boot.png", alt: "Bootstrap" },
];

const techIcons3 = [
  { src: "/git.png", alt: "Git" },
  { src: "/github.png", alt: "GitHub" },
  { src: "/postman.png", alt: "Postman" },
  { src: "/vs.png", alt: "VS Code" },
];

const Techstack = () => {
  const dragConstraints = { left: 0, right: 0, top: 0, bottom: 0 };

  return (
    <div
      className="text-white flex flex-col items-center py-10 min-h-screen"
      style={{
        backgroundImage: `url('/group.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide">
          Tech Stack
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          A comprehensive overview of the tools and technologies I work with:
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 px-4 lg:px-20 w-full">
        {/* Frontend & Frameworks */}
        <div className=" uppercase bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
          <h2 className=" tech text-xl font-bold mb-4 relative before:absolute before:content-[''] before:bg-primary before:h-1 before:w-16 before:rounded before:-top-3 before:left-1/2 before:-translate-x-1/2 text-center">
            Frontend & Frameworks
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {techIcons1.map((icon, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center p-3 bg-white rounded-lg shadow-lg"
                drag
                dragConstraints={dragConstraints}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-12 sm:w-16 h-12 sm:h-16 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend & Frameworks */}
        <div className="backdrop-blur-50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
          <h2 className="text-xl font-semibold text-center mb-4 uppercase tracking-wider">
            <span className=" tech bg-black text-white px-2 py-1 rounded-md">
              Backend & Frameworks
            </span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {techIcons2.map((icon, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center p-3 bg-white rounded-lg shadow-lg"
                drag
                dragConstraints={dragConstraints}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-12 sm:w-16 h-12 sm:h-16 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
          <h2 className=" uppercase tech text-xl font-light italic text-center mb-4">
            Tools <span className="font-bold">&</span> Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {techIcons3.map((icon, index) => (
              <motion.div
                key={index}
                className="flex justify-center items-center p-3 bg-white rounded-lg shadow-lg"
                drag
                dragConstraints={dragConstraints}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-12 sm:w-16 h-12 sm:h-16 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-center">
        <p className="text-sm sm:text-lg text-gray-300">
          Drag and interact with the icons & have fun exploring!
        </p>
      </div>
    </div>
  );
};

export default Techstack;
