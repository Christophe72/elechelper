export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head />
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  );
}
