export default function FeaturePage({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h3>Feature: {params.slug}</h3>
      <p>This is the page for feature: {params.slug}</p>
    </main>
  );
}