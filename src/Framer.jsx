import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

export default function Framer() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const width = window.innerWidth; // Width of the screen
    const x = (t / 10) % width; // Smooth horizontal scrolling
    ref.current.style.transform = `translateX(${-x}px)`; // Scroll left to right
  });

  return (
    <div className="  relative w-[98.9vw] h-screen overflow-hidden ">
      <div
        className="  absolute top-1/3 -translate-y-1 tracking-widest from-neutral-400 to-slate-600 text-6xl font-extrabold sm:text-9xl whitespace-nowrap opacity-20 text-gray-700 "
        style={{ willChange: "transform" }}
        ref={ref}
      >
        SHIVANSHU TRIPATHI &nbsp; SHIVANSHU TRIPATHI &nbsp; SHIVANSHU TRIPATHI
      </div>
    </div>
  );
}
