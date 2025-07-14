export default function FeatureLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: "1rem", backgroundColor: "#f8f8f8" }}>
      <h2>Feature</h2>
      {children}
    </div>
  );
}