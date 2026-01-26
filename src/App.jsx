import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Resume from "./pages/Resume";
import Presentation from "./pages/Presentation";
import Certificates from "./pages/Certificates";
import PGCertificate from "./pages/PGCertificate";
import ResearchNotes from "./pages/ResearchNotes";
import Hobbies from "./pages/Hobbies";
import MyProjects from "./pages/MyProjects";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Projects />
              <Articles />
              <Contact />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/myprojects" element={<MyProjects />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/pg-certificate" element={<PGCertificate />} />
        <Route path="/research-notes" element={<ResearchNotes />} />
        <Route path="/hobbies" element={<Hobbies/>} />
      </Routes>
    </div>
  );
}

export default App;
