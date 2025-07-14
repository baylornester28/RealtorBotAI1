export async function generateStaticParams() {
  return [
    { slug: "instant-response" }
  ];
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  const feature = params.slug.replace("-", " ");
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>{feature}</h1>
      <p>This is the feature page for RealtorBot AI’s: {feature} tool.</p>
    </main>
  );
}
