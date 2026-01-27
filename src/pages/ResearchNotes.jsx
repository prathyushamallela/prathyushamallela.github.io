import reportPdf from "../assets/PrathyushaMallela_Research1.pdf";

export default function ResearchNotes() {
  return (
    <>
      <section>
        <h2>Research Notes</h2>

        <p>
          My ongoing research notes maintained in GoodNotes, covering machine
          learning, AI systems, and related topics.
        </p>

        <p>
          Due to security restrictions, these notes are best viewed directly in
          GoodNotes Web.
        </p>

        <a
          className="button"
          href="https://web.goodnotes.com/s/xYakqmFEyCMcrJCTT2nTYv#page-25"
          target="_blank"
          rel="noreferrer"
          style={{ marginTop: "1.5rem", display: "inline-block" }}
        >
          Open Research Notes
        </a>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <h3>Research Report (View Only)</h3>

        <p>This report is shared for viewing purposes only.</p>

        <div className="pdf-container">
          <iframe
            src={`${reportPdf}#toolbar=0&navpanes=0&scrollbar=0`}
            title="Research Report"
            className="pdf-frame"
          />
          <div className="watermark">Prathyusha</div>
        </div>
      </section>
    </>
  );
}
