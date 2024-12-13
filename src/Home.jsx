import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Hello from "./Hello";
import Framer from "./Framer";

const Home = ({ isopen }) => {
  // Constants for animation timing
  const ANIMATION_DURATION = 1.5;
  const DELAY_INCREMENT = 0.5;

  // Animation container factory
  const container = (delayIndex) => ({
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: ANIMATION_DURATION,
        delay: delayIndex * DELAY_INCREMENT,
      },
    },
  });

  const [ishello, setishello] = useState(false);

  const handlehello = () => {
    setishello(!ishello);
  };

  // Using image paths that will reference the public directory
  let data = ["/c.jpg", "/i3.jpg", "/ux.jpg", "/i2.jpg"];

  return (
    <div className="flex flex-col mt-5 sm:mt-0 justify-center items-center h-screen p-6 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-200">
      <div className="text-center space-y-4 transition-opacity duration-500">
        {/* First Row */}
        <motion.div
          className="flex flex-row items-center justify-center space-x-6"
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl sm:text-4xl uppercase sm:translate-y-2 tracking-wide">
            I'm
          </h2>
          <h1 className="text-3xl sm:text-6xl italic font-semibold text-primary uppercase tracking-wide">
            Shivanshu
          </h1>
          <img
            src="/img1.jpg"
            alt="Shivanshu"
            className={`w-20 h-16 sm:w-24 sm:h-20 object-cover object-top rounded-full shadow-lg shadow-stone-700 border-black transform translate-x-2 translate-y-2 border-4 ${
              isopen ? "opacity-0" : "opacity-100"
            } sm:opacity-100`}
          ></img>
        </motion.div>

        {/* Second Row (Image Carousel) */}
        <motion.div
          className="flex flex-row items-center justify-center sm:space-x-6 space-x-6 text-2xl sm:text-4xl font-subheading text-secondary"
          variants={container(1)}
          initial="hidden"
          animate="visible"
        >
          <span>a Web</span>

          <div className="sm:w-24 sm:h-20 w-20 h-16 rounded-full overflow-hidden border-black shadow-lg shadow-stone-700 transform translate-x-2 translate-y-3 border-4">
            <Carousel
              className={`${isopen ? "opacity-0" : "opacity-100"} sm:opacity-100`}
              autoPlay={true}
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              stopOnHover={false}
              axis="vertical"
              transitionTime={500}
              swipeable={true}
            >
              {data.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`carousel-image-${index}`}
                    className={`  w-full h-full object-cover object-center ${
                      isopen ? "opacity-0" : "opacity-100"
                    } sm:opacity-100`}
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <span className="font-bold text-4xl">Developer</span>
        </motion.div>

        {/* Third Row */}
        <motion.div
          className="flex flex-row items-center justify-center space-x-6 text-2xl sm:text-4xl font-subheading text-secondary"
          variants={container(1.5)}
          initial="hidden"
          animate="visible"
        >
          <span>based in India</span>
          <img
            src="/india.jpg"
            alt="India"
            className={`w-20 sm:w-24 object-center object-contain rounded-full border-black shadow-lg shadow-stone-700 transform translate-x-2 translate-y-3 border-4 ${
              isopen ? "opacity-0" : "opacity-100"
            } sm:opacity-100`}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-sm text-body sm:mt-10 py-5 max-w-lg mx-auto"
          variants={container(2)}
          initial="hidden"
          animate="visible"
        >
          I have been developing web apps since 1 year as well as working on <br/>useful and mindful products
          
        </motion.p>

        {/* Button */}
        <motion.div
          className=""
          variants={container(2.5)}
          initial="hidden"
          animate="visible"
        >
          <button
            className="px-8 py-4 bg-white text-black text-lg uppercase font-semibold tracking-wider rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out sm:text-base sm:px-6 sm:py-3"
            type="button"
            onClick={handlehello}
          >
            {ishello ? "Whassup!" : "Hello!👋"}
          </button>

          {ishello && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 w-11/12 sm:w-80 p-6 rounded-xl shadow-xl z-50 transition-transform duration-300 ease-in-out">
              <Hello />
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={handlehello}
              >
                &times;
              </button>
            </div>
          )}

          {ishello && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={handlehello}
            ></div>
          )}
        </motion.div>
      </div>

      <Framer />
    </div>
  );
};

export default Home;