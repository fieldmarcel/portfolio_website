import React from "react";
import { motion } from "framer-motion";

const techIcons = [
  { src: "/css.png", alt: "CSS" },
  { src: "/html.png", alt: "HTML" },
  { src: "/js.png", alt: "JavaScript" },
  { src: "/react.png", alt: "React" },
  { src: "/node.png", alt: "Node.js" },
  { src: "/tcss.png", alt: "Tailwind CSS" },
  { src: "/git.png", alt: "Tailwind CSS" },
  { src: "/github.png", alt: "Tailwind CSS" },
  { src: "/python.png", alt: "Tailwind CSS" },
  { src: "/postman.png", alt: "Tailwind CSS" },
  { src: "/mysql.png", alt: "Tailwind CSS" },
  { src: "/mongo.png", alt: "Tailwind CSS" },
  { src: "/boot.png", alt: "Tailwind CSS" },
  { src: "/express.png", alt: "Tailwind CSS" },
  { src: "/vs.png", alt: "Tailwind CSS" },
  { src: "/download.png", alt: "Tailwind CSS" },

  { src: "/cpp.png", alt: "Tailwind CSS" },




];

const Techstack = () => {
  const dragConstraints = { left: 0, right: 0, top: 0, bottom: 0 };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-800 flex flex-col items-center text-white py-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold tracking-wide">Tech Stack</h1>
        <p className="mt-3 text-lg text-gray-200">
          My expertise includes the following technologies:
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {techIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center p-6 bg-white rounded-lg shadow-xl"
            drag
            dragConstraints={dragConstraints}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            whileDrag={{scale:1.2}}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-16 h-16 object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="mt-20 text-center">
        <p className="text-lg font-medium">
          Drag and interact with the icons to explore!
        </p>
        <p className="mt-3 text-gray-300">
          Built using Framer Motion for seamless animations.
        </p>
      </div>
    </div>
  );
};

export default Techstack;
