import React, { useEffect, useRef } from "react";
import { RxTextAlignRight, RxCross2 } from "react-icons/rx";
import Navlist from "./Navlist";

const Nav = ({ isopen, setisopen }) => {
  const navRef = useRef(null); 

  const handleNav = () => {
    setisopen(!isopen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setisopen(false); 
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setisopen]);

  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4 text-white">
        <div className="nav rounded-full flex justify-center sm:ml-10 items-center text-purple-800 sm:text-4xl text-xl sm:w-1/4 sm:h-14 h-10 p-2">
          <button to="/home" className="hover:text-purple-600 tracking-widest transition duration-200">
          Shivanshu Tripathi

          </button>
        </div>
        <div className="flex flex-row items-center">
        <a
          href="/Shivanshu_Resume.pdf"
          download
          className="px-7 py-2 bg-black text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
        >
           RESUME
        </a>
          {/* <button
            type="button"
            onClick={handleNav}
            className="bg-gray-300 sm:mr-32 rounded-full flex justify-center items-center text-gray-700 sm:w-16 sm:h-14 p-2"
          >
            {isopen ? <RxCross2 size={24} /> : <RxTextAlignRight size={24} />}
          </button> */}
        </div>
        {/* <div
          ref={navRef} 
          className={`fixed sm:top-20 right-2 top-20 sm:right-36 sm:w-80 w-40 transition-opacity duration-300 ${
            isopen ? "opacity-100" : "opacity-0"
          }`}
        >
          <Navlist />
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
