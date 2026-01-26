import posterPDF from "../assets/Prathyusha_Mallela.pdf";

export default function Presentation() {
  return (
    <section>
      <h2>Project Presentation</h2>

      <p>
        Below is the poster presentation for one of my projects.
      </p>

      <a className="button" href={posterPDF} download>
        Download Poster (PDF)
      </a>

      <div style={{ marginTop: "2rem", height: "900px" }}>
        <iframe
          src={posterPDF}
          title="Project Poster"
          width="100%"
          height="100%"
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: "6px"
          }}
        />
      </div>
    </section>
  );
}
