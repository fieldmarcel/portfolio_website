import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techIcons1 = [
  { src: "/css.png", alt: "CSS" },
  { src: "/html.png", alt: "HTML" },
  { src: "/js.png", alt: "JavaScript" },
  { src: "/react.png", alt: "React" },
  { src: "/tcss.png", alt: "Tailwind CSS" },
  { src: "/boot.png", alt: "Bootstrap" },
  { src: "/download (3).jpg", alt: "Redux" },
  { src: "/download (4).png", alt: "Next.js" },
  { src: "/download (5).png", alt: "TypeScript" },

];

const techIcons2 = [
  { src: "/mysql.png", alt: "MySQL" },
  { src: "/mongo.png", alt: "MongoDB" },
  { src: "/express.png", alt: "Express.js" },
  { src: "/node.png", alt: "Node.js" },
{ src: "/download (3).png", alt: "Firebase" },

];

const techIcons3 = [
  { src: "/git.png", alt: "Git" },
  { src: "/github.png", alt: "GitHub" },
  // { src: "/postman.png", alt: "Postman" },
  { src: "/vs.png", alt: "VS Code" },
    { src: "/download (2).jpg", alt: "Figma" },

];

const Techstack = () => {
  // Animation variants
  const containerLeft = (delay) => ({
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

  const containerRight = (delay) => ({
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

  const dragConstraints = { left: 0, right: 0, top: 0, bottom: 0 };

  // Use refs for viewport animations
  const refLeft = useRef(null);
  const isLeftInView = useInView(refLeft);

  const refRight = useRef(null);
  // const isRightInView = useInView(refRight, { once: true });
  const isRightInView = useInView(refRight);


  return (
    <div id="techstack"
  className={`text-white flex flex-col items-center py-10 ${
    window.innerWidth < 1024
      ? "bg-gradient-to-b from-purple-600  to-purple-900 min-h-screen"
      : "h-screen "
  }max-h-[100vh] overflow-y-auto`}
  style={{
    backgroundImage: window.innerWidth >= 1000 ? `url('/bg.svg')` : "", 
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    height: "100vh",
    width: "98.9vw",
  }}
>
      {/* Header */}
      <div className="text-center">
      <h1 className=" techstack mt-2 text-4xl sm:text-6xl  font-thin tracking-wide text-zinc-800">
  Tech Stack
</h1>
<p className="mt-2 text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed">
  My expertise include the following technologies:
</p>

      </div>



      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-20 w-full">
        {/* Frontend & Frameworks */}
        <motion.div
          ref={refLeft}
          className="flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-lg"
          variants={containerLeft(0.3)}
          initial="hidden"
          animate={isLeftInView ? "visible" : "hidden"}
        >
          <h2 className="text-xl font-semibold mb-4">Frontend & Frameworks</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
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
                  className="w-6 sm:w-20 h-6 sm:h-20 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend & Frameworks */}
        <motion.div
          ref={refRight}
          className="flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-lg"
          variants={containerRight(0.3)}
          initial="hidden"
          animate={isRightInView ? "visible" : "hidden"}
        >
          <h2 className="text-xl font-semibold mb-4">Backend & Frameworks</h2>
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
                  className="w-6 sm:w-20 h-6 sm:h-20 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          ref={refRight}
          className="flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-lg"
          variants={containerRight(0.3)}
          initial="hidden"
          animate={isRightInView ? "visible" : "hidden"}
        >
          <h2 className="text-xl font-semibold mb-4">Tools & Technologies</h2>
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
                  className="w-6 sm:w-20 h-6 sm:h-20 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-center">
        <p className="text-sm sm:text-lg text-gray-300">
          Drag and interact with the icons & be happy!
        </p>
      </div>
    </div>
  );
};

export default Techstack;
