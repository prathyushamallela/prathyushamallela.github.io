import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.name}>
            <strong>{p.name}</strong>
            <br />
            <a className="button" href={p.url} target="_blank">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
