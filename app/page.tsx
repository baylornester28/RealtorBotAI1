import Link from 'next/link';

const features = [
  "instant-response",
  "appointment-scheduler",
  "mls-social-tools",
  "autofill-forms",
  "contract-breakdown",
  "local-area-guides"
];

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', background: '#f6f6f6', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome to RealtorBot AI</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Your luxury real estate assistant is ready.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {features.map((feature) => (
          <Link key={feature} href={`/features/${feature}`}>
            <a style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#1a1a1a',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              boxShadow: '0 3px 8px rgba(0,0,0,0.15)',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#bfa67a")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#1a1a1a")}
            >
              ▶ {feature.replace(/-/g, " ")}
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}