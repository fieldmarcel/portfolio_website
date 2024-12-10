import React, { useState } from "react";
import Nav from "./Nav";
import Home from "./Home";

const Layout = () => {
  const [isopen, setisopen] = useState(false);

  return (
    <div>
      <Nav isopen={isopen} setisopen={setisopen} />
      <Home isopen={isopen} />
    </div>
  );
};

export default Layout;
