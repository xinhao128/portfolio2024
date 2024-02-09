import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Skills from "./skills/Skills";
import Timeline from "./experience/Timeline";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <About />
        <Skills />
        <Timeline />
      </main>
    </>
  );
}

export default App;
