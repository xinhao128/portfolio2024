import { useRef } from "react";
import "./App.scss";
import About from "./about/About";
import Skills from "./skills/Skills";
import Timeline from "./experience/Timeline";
import Projects from "./projects/Projects";
import Navbar from "./navbar/Navbar";
import useScrollSpy from "./utils/useScrollSpy";
import Footer from "./footer/Footer";
import { Outlet, Route, Routes } from "react-router-dom";
import ScrollToHashElement from "./utils/ScrollToHashElement";
import SoeWebsites from "./soe-websites/SoeWebsites";
// import useWindowResizeThreshold from "./utils/useWindowResizeThreshold";

// const MAX_MOBILE_WIDTH = 856;

function App() {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);

  const sectionRefs = [section1Ref, section2Ref, section3Ref, section4Ref];

  // const [isMobileSize] = useWindowResizeThreshold(MAX_MOBILE_WIDTH);

  // const threshold = useMemo(() => {
  //   if (isMobileSize) {
  //     return 0.05;
  //   } else {
  //     return 0.05;
  //   }
  // }, [isMobileSize]);

  // seems to require a shorter threshold to section detection to work correctly
  const [activeSection] = useScrollSpy(sectionRefs, {
    threshold: 0.05,
  });

  return (
    <>
      <ScrollToHashElement />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <nav>
                <Navbar activeSection={activeSection} />
              </nav>
              <main>
                <Outlet />
                <About id="about" innerRef={section1Ref} />
                <Skills id="skills" innerRef={section2Ref} />
                <Timeline id="experience" innerRef={section3Ref} />
                <Projects id="projects" innerRef={section4Ref} />
                <Footer />
              </main>
            </>
          }
        >
          <Route path="/soe-websites" element={<SoeWebsites />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
