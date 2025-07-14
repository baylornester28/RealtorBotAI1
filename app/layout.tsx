export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#fff' }}>{children}</body>
    </html>
  );
}