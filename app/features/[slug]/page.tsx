export async function generateStaticParams() {
  return [{ slug: "instant-response" }];
}

export default function HomePage() {
  return (
    <main style={{
      fontFamily: "Georgia, serif",
      background: "linear-gradient(to bottom, #f8f5f0, #e6e0d4)",
      padding: "4rem 2rem",
      color: "#2e2e2e",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{
          fontSize: "3rem",
          marginBottom: "1rem",
          color: "#1a1a1a",
          letterSpacing: "1px"
        }}>
          Welcome to <span style={{ color: "#bfa67a" }}>RealtorBot AI</span>
        </h1>
        <p style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>
          Your premium AI assistant for luxury real estate success.
        </p>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          alignItems: "center",
          fontSize: "1.1rem",
        }}>
          {features.map((feature) => (
            <a
              key={feature}
              href={`/features/${feature.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                display: "inline-block",
                background: "#1a1a1a",
                color: "#fdfcf9",
                padding: "0.8rem 1.5rem",
                borderRadius: "6px",
                textDecoration: "none",
                boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                transition: "background 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#bfa67a")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#1a1a1a")}
            >
              {feature}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

const features = [
  "Instant Lead Response",
  "Appointment Scheduler",
  "MLS & Social Marketing Tools",
  "Autofill Real Estate Forms",
  "Contract Breakdown Assistant",
  "Local Area Guides",
];
