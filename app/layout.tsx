import "./globals.css";
import AppLayout from "@/components/AppLayout";

export const metadata = {
  title: "ElecHelper - Assistant Électricien",
  description:
    "Application d'aide au dépannage électrique avec protocoles interactifs et schémas visuels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head />
      <body className="bg-white text-black font-sans">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
