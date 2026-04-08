import profilePic from "../assets/pfp.jpg";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1.8rem",
          marginTop: "2rem"
        }}
      >
        {/* Passport-size photo */}
        <img
          src={profilePic}
          alt="Prathyusha Mallela"
          className="contact-avatar"
        />

        {/* Contact information */}
        <div>
          <p>
            <strong>Email (Personal):</strong>{" "}
            <a href="mailto:prathyushamallela3@gmail.com">
              prathyushamallela3@gmail.com
            </a>
          </p>

          <p>
            <strong>Email (University):</strong>{" "}
            <a href="mailto:mallelap@oregonstate.edu">
              mallelap@oregonstate.edu
            </a>
          </p>

          <p>
            <strong>Email (Professional):</strong>{" "}
            <a href="mailto:prmallela@dekaresearch.com">
              prmallela@dekaresearch.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+19718954741">(971) 895-4741</a>
          </p>

          <p>
            <a
              href="https://www.linkedin.com/in/prathyusha-mallela"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
