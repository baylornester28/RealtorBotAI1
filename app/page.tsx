export default function HomePage() {
  const features = [
    "Instant Lead Response",
    "Appointment Scheduler",
    "MLS & Social Marketing Tools",
    "Autofill Real Estate Forms",
    "Contract Breakdown Assistant",
    "Local Area Guides"
  ];

  return (
    <main style={{ padding: "3rem", textAlign: "center", background: "#fff" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#222" }}>Welcome to RealtorBot AI</h1>
      <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>Your luxury real estate assistant is ready.</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {features.map((feat, i) => (
          <li key={i} style={{ margin: "0.5rem 0", fontSize: "1.1rem" }}>▶ {feat}</li>
        ))}
      </ul>
    </main>
  );
}
