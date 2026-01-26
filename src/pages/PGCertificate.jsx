import certificateImg from "../assets/bits-pilani-iot-certificate.jpeg";

export default function PGCertificate() {
  return (
    <section>
      <h2>Post Graduate Certificate – Internet of Things</h2>

      <p>
        Post Graduate Certificate focused on Internet of Things (IoT),
        covering hardware, software, networking, cloud integration,
        and large-scale data processing.
      </p>

      {/* Certificate Image */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <img
          src={certificateImg}
          alt="PG Certificate in IoT"
          style={{
            maxWidth: "100%",
            border: "1px solid #1f2937",
            borderRadius: "8px"
          }}
        />
      </div>

      {/* Courses */}
      <section>
        <h3>Courses</h3>
        <div className="course-bubbles">
          <span className="course-bubble">IoT Technologies and Applications</span>
          <span className="course-bubble">Communication and Networking</span>
          <span className="course-bubble">Hardware Architectures for IoT</span>
          <span className="course-bubble">Software and Programming for IoT</span>
          <span className="course-bubble">Sensors, Actuators and Signal Processing</span>
          <span className="course-bubble">Data Management for IoT</span>
        </div>
      </section>

      {/* Project */}
      <section>
        <h3>Capstone Project</h3>
        <p>
          <strong>Smart Intruder System using IoT</strong>
        </p>
        <p>
          Implemented a cloud-integrated IoT intrusion detection system using
          Raspberry Pi 4 (SoC) with real-time sensor inputs and alerting.
        </p>
        <p>
          <strong>Role:</strong> Software Application Developer (Android & Web using REST APIs),
          Cloud Developer (Firebase, AWS)
        </p>
      </section>

      {/* Skills */}
      <section>
        <h3>Skills Acquired</h3>
        <div className="course-bubbles">
          <span className="course-bubble">Android Development</span>
          <span className="course-bubble">Scala</span>
          <span className="course-bubble">Hibernate</span>
          <span className="course-bubble">Statistical Data Analysis</span>
          <span className="course-bubble">Apache Spark</span>
          <span className="course-bubble">Kafka</span>
          <span className="course-bubble">REST APIs</span>
          <span className="course-bubble">Firebase</span>
          <span className="course-bubble">AWS</span>
          <span className="course-bubble">Raspberry Pi</span>
        </div>
      </section>
    </section>
  );
}
