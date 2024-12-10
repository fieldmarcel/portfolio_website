import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useRef } from "react";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Framer from "./Framer";
import { useState } from "react";

const Home = ({ isopen }) => {
  //  const [issee, setissee] = useState(false)

  //  const handleimage=(!issee);
  // Using image paths that will reference the public directory
  let data = ["/img1.jpg", "/img2.jpg", "/img2.jpg", "/img1.jpg"];

  return (
    <div className=" flex flex-col mt-5 sm:mt-0  justify-center items-center h-screen p-6 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-200">
      <div
        className="text-center space-y-4 transition-opacity duration-500 ${
         "
      >
        <div className="flex flex-row items-center justify-center space-x-6">
          <h2 className="  text-2xl sm:text-4xl uppercase translate-y-2 tracking-wide">
            I'm
          </h2>
          <h1 className="text-5xl sm:text-6xl italic font-semibold text-primary uppercase tracking-wide">
            Shivanshu
          </h1>
          <img
            src="/img1.jpg" // Correct path for images in public folder
            alt="Shivanshu"
            className={` w-20 h-16 sm:w-24 sm:h-20 object-cover object-top rounded-full shadow-lg shadow-stone-700
               border-black   transform translate-x-2 translate-y-2 border-4
               ${isopen ? "opacity-0" : "opacity-100"} sm:opacity-100
               `}
          ></img>
        </div>

        {/* Second Row (Image Carousel) */}
        <div className="flex flex-row items-center justify-center sm:space-x-6 space-x-6 text-2xl sm:text-4xl font-subheading text-secondary">
          <span>a Web</span>

          <div className="  sm:w-24 sm:h-20 w-20 h-16 rounded-full overflow-hidden sm:rounded-full sm:overflow-hidden border-black shadow-lg shadow-stone-700 transform translate-x-2 translate-y-3 border-4 
            ">
            {/* Image Carousel */}
            <Carousel
            className={`  ${isopen ?"opacity-0":"opacity-100"}sm:opacity-100
`}
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
                    src={image} // Path to images in public folder
                    alt={`carousel-image-${index}`}
                    className={`sm:w-24    sm:object-contain 
                       
                            ${isopen ?"opacity-0":"opacity-100"}sm:opacity-100

                      `}
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <span className="font-bold text-4xl">Developer</span>
        </div>

        {/* Third Row */}
        <div className="flex flex-row items-center justify-center space-x-6 text-2xl sm:text-4xl font-subheading text-secondary">
          <span>based in India</span>
          <img
            src="/india.jpg" // Correct path for images in public folder
            alt="India"
            className={`w-20  sm:w-24  object-center object-contain rounded-full border-black shadow-lg shadow-stone-700 transform translate-x-2 translate-y-3 border-4
 ${isopen ? "opacity-0" : "opacity-100"} sm:opacity-100              
              `}
          />
        </div>

        {/* Description */}
        <p className="text-sm sm:text-sm text-body sm:mt-10 py-5  max-w-lg mx-auto">
          I have experience of 1 year working on useful and mindful products
          <br /> together with startups and known brands.
        </p>

        {/* Button */}
        <button className=" px-8 py-4 bg-white text-black text-lg uppercase font-semibold tracking-wider rounded-full hover:bg-purple-700 hover:text-white transition">
          Hello!
        </button>
      </div>
      <Framer />
    </div>
  );
};

export default Home;
