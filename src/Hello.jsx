import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Hello = () => {
  return (
    <>
      <div className="p-5 text-center text-lg bg-white rounded-lg shadow-lg">
        <p className="mb-2">Heyy! Hi 👋</p>
        <p>Let's connect & collaborate:</p>
        <div className="flex items-center justify-center gap-6 mt-4">
          {/* Mail Icon */}
          <a
            href="mailto:shiva4850t@gmail.com"
            className="text-blue-500 hover:text-blue-700 text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/shivanshu-tripathi-704a022b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hello;
