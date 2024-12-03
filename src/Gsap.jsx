// import React, { useEffect, useRef } from "react";
// import {gsap} from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import Projects from "./Projects";
// import Contact from "./Contact";

// gsap.registerPlugin(ScrollTrigger);

// function Gsap  ()  {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const sections = gsap.utils.toArray(".section"); // Target sections by a shared class

//     sections.forEach((section, i) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top bottom",
//         end: "bottom bottom",
//         scrub: true,
//         onEnter: () => changeBackground(section, i),
//         onLeaveBack: () => changeBackground(section, i - 1),
//       });
//     });

//     function changeBackground(section, index) {
//       const bgColors = ["white", "black"]; // Define background colors
//       gsap.to(containerRef.current, {
//         backgroundColor: bgColors[index] || "black", // Fallback color
//         duration: 1,
//         ease: "power1.out",
//       });
//     }
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen transition-colors duration-500"
//     >
//       <div className="section">
//         <Projects />
//       </div>
//       <div className="section">
//         <Contact />
//       </div>
//     </div>
//   );
// };

// export default Gsap;
