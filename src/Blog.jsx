import React from "react";

const Blog = () => {
  return (
    <div className="p-10 flex justify-center">
      <a
        href="/resume.pdf"
        download
        className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Blog;
