export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, fontFamily: 'sans-serif', background: '#f8f8f8' }}>{children}</body>
    </html>
  );
}
