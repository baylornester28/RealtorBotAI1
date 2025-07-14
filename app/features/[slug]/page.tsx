// app/features/[slug]/page.tsx

export async function generateStaticParams() {
  return [
    { slug: "instant-response" },
    { slug: "seo-wizard" },
  ];
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Feature: {params.slug.replace("-", " ")}</h1>
      <p>This is the RealtorBot AI tool for the "{params.slug}" feature.</p>
    </main>
  );
}
