import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/projects" element={<ProjectList />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
