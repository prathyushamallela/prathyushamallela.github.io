import resumePDF from "../assets/PrathyushaMallela_Resume.pdf";

export default function Resume() {
  return (
    <section>
      <h2>Resume</h2>

      <p>
        View or download my resume below.
      </p>

      <a className="button" href={resumePDF} download>
        Download Resume (PDF)
      </a>

      <div style={{ marginTop: "2rem", height: "800px" }}>
        <iframe
          src={resumePDF}
          title="Resume"
          width="100%"
          height="100%"
          style={{ border: "1px solid #e5e7eb", borderRadius: "6px" }}
        />
      </div>
    </section>
  );
}
