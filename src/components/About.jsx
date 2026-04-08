import { courses,skills } from "../data";

export default function About() {
  return (
    <section id="about">
      <h2>All about me!</h2>

      <p>
  I bring over <strong>8 years of experience</strong> in backend and systems
  development, with a professional journey spanning entrepreneurship,
  fintech, and applied artificial intelligence.
</p>

<p>
  I began my career as an entrepreneur immediately after my undergraduate
  studies, working on energy management systems with a strong emphasis on
  embedded systems development. I later joined a multinational fintech
  organization, where I was a key contributor to the design and development
  of <strong>AI-driven fraud detection and anti–money laundering (AML)</strong>{" "}
  systems. My work involved building models to reduce false positives,
  identify fraudulent transactions, and developing backend services and
  intuitive user interfaces that enabled caseworkers to define rules,
  monitor alerts, and investigate fraud efficiently.
</p>

<p>
  After five years in the fintech domain, I pursued a{" "}
  <strong>Master’s in Computer Science</strong> with a minor in{" "}
  <strong>Artificial Intelligence</strong>, specializing in{" "}
  <strong>Causal Inference</strong> and{" "}
  <strong>Probabilistic Graphical Models</strong>. 
  </p>
  <p>
  I worked under <a href= "https://www.karthikamohan.com/"><strong> Dr. Mohan</strong></a> {" "} for my master's project titled 
  <strong> "Computing Ripple Effects in Supply Chain Networks Using Dynamic Causal Graphs." </strong> This work models supply chain interactions using a 
    <strong> Dynamic Causal Bayesian Network</strong>  to analyze ripple effects 
  caused by disruptions across complex supply chain systems. A  
  <strong> particle filtering algorithm </strong>  was applied to quantify the 
  impact of such events on key outcome variables. The approach demonstrates how causal modeling can be leveraged to improve 
  supply chain resilience, providing a strong foundation for building robust, 
  real-world systems grounded in causal inference.
</p>
<p>During my graduate studies, I also worked as a <strong>Salesforce Analyst Programmer</strong> at the
  university, contributing to the development, testing, and maintenance of
  systems supporting exam scheduling and Graduate Committee Requirement
  workflows.
</p>

<p>
  I am currently a <strong>Machine Learning Engineer</strong> at 
  <strong> Deka Research and Development</strong> in Manchester, New Hampshire,
  where I work on building reliable systems, developing intelligent models,
  and solving complex, real-world problems at scale.
</p>


<p>
  <strong>Undergraduate Education:</strong> Bachelor’s in Electrical and
  Electronics Engineering, PESIT, Bangalore, India (2008–2012)
</p>

<p>
  <strong>Graduate Education:</strong> Master’s in Computer Science with a
  minor in Artificial Intelligence, Oregon State University, Oregon, USA
  (2022–2025)
</p>

<p></p>

      <h3>Skills</h3>
      <div className="skill-bubbles">
        {skills.map((skill) => (
          <span key={skill} className="skill-bubble">
            {skill}
          </span>
        ))}
      </div>

      <h3>Courses Taken At Master Level</h3>

      <div className="course-bubbles">
        {courses.map((course) => (
          <span key={course} className="course-bubble">
            {course}
          </span>
        ))}
      </div>
    </section>
  );
}
