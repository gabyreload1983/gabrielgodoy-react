import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <ProjectList />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
