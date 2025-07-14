export async function generateStaticParams() {
  return [
    { slug: "instant-response" },
    { slug: "appointment-scheduler" },
    { slug: "mls-social-tools" },
    { slug: "autofill-forms" },
    { slug: "contract-breakdown" },
    { slug: "local-area-guides" }
  ];
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  const feature = params.slug.replace("-", " ");
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{feature}</h1>
      <p>This RealtorBot tool helps with: {feature}</p>
    </main>
  );
}