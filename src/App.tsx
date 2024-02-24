import React, { useRef } from "react";
import "./App.scss";
import About from "./about/About";
import Skills from "./skills/Skills";
import Timeline from "./experience/Timeline";
import Projects from "./projects/Projects";
import Navbar from "./navbar/Navbar";
import useScrollSpy from "./utils/useScrollSpy";

function App() {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);

  const sectionRefs = [section1Ref, section2Ref, section3Ref, section4Ref];

  const [activeSection] = useScrollSpy(sectionRefs, {
    threshold: 0.3
  });

  return (
    <>
      <nav>
        <Navbar activeSection={activeSection} />
      </nav>
      <main>
        <About id="about" innerRef={section1Ref} />
        <Skills id="skills" innerRef={section2Ref} />
        <Timeline id="experience" innerRef={section3Ref} />
        <Projects id="projects" innerRef={section4Ref} />
      </main>
    </>
  );
}

export default App;
