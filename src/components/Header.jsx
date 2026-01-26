
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <h1>Prathyusha Mallela</h1>

        <div className="contact-inline">
          <a href="tel:+19718954741">(971) 895-4741</a>
          <span>•</span>

          <a href="mailto:prathyushamallela3@gmail.com">
            prathyushamallela3@gmail.com
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/prathyusha-mallela/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://github.com/PrathyushaMallela"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <p>Machine Learning Engineer | IoT Certified | Backend Developer | Causal Inferencing and Probabilistic Graphical Models</p>


      <nav>
        <Link to="/">Home</Link>
        <Link to="/myprojects">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/presentation">Presentation</Link>
        <Link to="/certificates">Certificates</Link>
        <Link to="/pg-certificate">PG Certificate</Link>
        <Link to="/research-notes">Research Notes</Link>
        <Link to="/hobbies">Hobbies and Me</Link>
        
      </nav>
    </header>
  );
}
