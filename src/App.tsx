import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Skills from "./skills/Skills";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
