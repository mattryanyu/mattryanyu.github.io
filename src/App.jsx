import "./App.css";
import resume from "./data/resume.json";
import NavBar from "./components/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Stats from "./components/sections/Stats";
import Experience from "./components/sections/Experience";
import Qualifications from "./components/sections/Qualifications";
import BeyondWork from "./components/sections/BeyondWork";
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
        <Experience resume={resume} />
        <Qualifications resume={resume} />
        <BeyondWork resume={resume} />
        <Contact resume={resume} />
        <Footer resume={resume} />
      </div>
    </>
  );
}

export default App;
