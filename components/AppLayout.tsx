"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import Spinner from "./Spinner";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const pathname = usePathname();

  // Loading initial de l'app
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 secondes de loading initial

    return () => clearTimeout(timer);
  }, []);

  // Loading entre les pages
  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500); // 0.5 secondes de loading entre pages

    return () => clearTimeout(timer);
  }, [pathname]);

  // Affichage du spinner initial
  if (isLoading) {
    return <Spinner fullscreen text="Initialisation d'ElecHelper..." />;
  }

  return (
    <div className="app-layout">
      <Navigation />

      <main className="app-main">
        {isPageLoading ? (
          <div className="page-loading">
            <Spinner size="large" text="Chargement..." />
          </div>
        ) : (
          <div className="page-content">{children}</div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p className="footer-text">
            ⚡ ElecHelper - Assistant électricien professionnel
          </p>
          <p className="footer-safety">
            ⚠️ Respectez toujours les consignes de sécurité électrique
          </p>
        </div>
      </footer>
    </div>
  );
}
