export async function generateStaticParams() {
  return [{ slug: "instant-response" }];
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  const feature = params.slug.replace("-", " ");
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Feature: {feature}</h1>
      <p>This is the RealtorBot AI tool for the "{feature}" feature.</p>
    </main>
  );
}