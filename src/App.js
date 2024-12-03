import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Techstack from "./Techstack";
import Contact from "./Contact";
// import Connect from "./Connect";
// import Gsap from "./Gsap";
function App() {
  // console.log(Gsap);
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Techstack/>
                <Projects/>
                {/* <Connect/> */}
                <Contact/>
                {/* <Gsap  />; */}
                
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/gsap" element={<Gsap />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
