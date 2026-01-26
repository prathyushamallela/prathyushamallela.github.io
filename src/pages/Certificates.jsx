import { useEffect } from "react";

export default function Certificates() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section>
      <h2>Certificates</h2>

      <p>
        Below are professional certifications I have earned.
      </p>

      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="d8815acc-e1d4-4de3-8e1c-fbcd1627c5ca"
        data-share-badge-host="https://www.credly.com"
      />
    </section>
  );
}
