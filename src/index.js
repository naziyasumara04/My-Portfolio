import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  </React.StrictMode>
);
