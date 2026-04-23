import "./App.css";
import resume from "./data/resume.json";
import NavBar from "./components/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Stats from "./components/sections/Stats";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <NavBar />
      <link rel="icon" href="favicon-clr.svg" />
      <link rel="mask-icon" href="favicon-clr.svg" color="#000000" />
      <link rel="apple-touch-icon" href="favicon-clr.svg" />
      <div className="pt-14">
        <Hero />
        <About resume={resume} />
        <Stats resume={resume} />
        <Skills resume={resume} />
        <Experience resume={resume} />
        <Certifications resume={resume} />
        <Education resume={resume} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
