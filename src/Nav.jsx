import React, { useEffect } from "react";
import { RxTextAlignRight, RxCross2 } from "react-icons/rx";
import Navlist from "./Navlist";
const Nav = ({ isopen, setisopen }) => {
  const handleNav = () => {
    setisopen(!isopen); // Correctly toggles navigation state
  };
useEffect(() => {
  

    document.addEventListener('mousedown',()=>{
setisopen(false);
    }
    )
})

  return (
    <div >
      <div className="flex flex-row justify-between items-center p-4 text-white">
        <div className=" nav bg-white rounded-full flex justify-center sm:ml-10 items-center text-purple-800 sm:text-4xl sm:w-1/4 sm:h-14 h-10 p-2 ">
       Shivanshu Tripathi  
        </div>

        <button
          type="button"
          onClick={handleNav}
          className="bg-white sm:mr-32 rounded-full flex justify-center items-center text-gray-700 sm:w-16 sm:h-14 p-2"
        >
          {isopen ? <RxCross2 size={24} /> : <RxTextAlignRight size={24} />}
        </button>
      </div>

      <div
        className={`fixed sm:top-20 right-4 sm:right-36  sm:w-80 transition-opacity duration-300 ${
          isopen ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navlist />
      </div>
    </div>
  );
};

export default Nav;
