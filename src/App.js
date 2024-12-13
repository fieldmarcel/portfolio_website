import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Techstack from "./Techstack";
import Contact from "./Contact";
import Blog from "./Blog"; 
import Layout from "./Layout";

function App() {
  const [isopen, setisopen] = useState(false); // State for navigation

  return (
    <div className="App">
      <BrowserRouter>
        <Nav isopen={isopen} setisopen={setisopen} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home isopen={isopen} />
                <About />
                <Techstack />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} /> {/* Blog route */}
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
