
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <ul className="projects-list">
        {projects.map((p) => (
          <li key={p.name} className="project-card">

            <h3>{p.name}</h3>

            {/* Display GIF or image if available */}
            {p.image && (
              <img
                src={p.image}
                alt={`${p.name} simulation`}
                className="project-image"
                loading="lazy"
              />
            )}

            {/* Project description */}
            {p.description && (
              <p className="project-description">
                {p.description}
              </p>
            )}

            {/* Technologies */}
            {p.technologies && (
              <div className="project-technologies">
                {p.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <a
              className="button"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>

          </li>
        ))}
      </ul>
    </section>
  );
}
