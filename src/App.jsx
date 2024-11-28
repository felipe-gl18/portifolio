import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Aboutme from "./components/Aboutme/Aboutme";
import Projects from "./components/Projects/Projects";
import Contactme from "./components/Contactme/Contactme";
import { useRef, useState } from "react";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  function handleModalIsOpen() {
    setModalIsOpen(!modalIsOpen);
  }
  function scrollIntoAboutMeRef() {
    aboutMeRef.current.scrollIntoView();
  }
  function scrollIntoProjectsRef() {
    projectsRef.current.scrollIntoView();
  }
  return (
    <>
      <Navbar
        scrollIntoAboutMeRef={scrollIntoAboutMeRef}
        scrollIntoProjectsRef={scrollIntoProjectsRef}
      />
      <Aboutme aboutMeRef={aboutMeRef} handleModalIsOpen={handleModalIsOpen} />
      <Projects projectsRef={projectsRef} />
      <Contactme
        handleModalIsOpen={handleModalIsOpen}
        modalIsOpen={modalIsOpen}
      />
    </>
  );
}

export default App;
