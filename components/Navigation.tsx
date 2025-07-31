"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "🏠 Accueil", description: "Page principale" },
    {
      href: "/protocoles",
      label: "✅ Protocoles",
      description: "Dépannage électrique",
    },
    {
      href: "/fiches",
      label: "📋 Fiches",
      description: "Références techniques",
    },
    {
      href: "/recherche",
      label: "🔍 Recherche",
      description: "Recherche de panne",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Navigation Desktop */}
      <nav className="nav-desktop">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            ⚡ ElecHelper
          </Link>

          <div className="nav-links">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${
                  isActive(item.href) ? "nav-link-active" : ""
                }`}
                title={item.description}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Navigation Mobile */}
      <nav className="nav-mobile">
        <div className="nav-mobile-header">
          <Link href="/" className="nav-logo">
            ⚡ ElecHelper
          </Link>

          <button
            className="nav-mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu de navigation"
          >
            <span className={`hamburger ${isMenuOpen ? "hamburger-open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`nav-mobile-menu ${
            isMenuOpen ? "nav-mobile-menu-open" : ""
          }`}
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-mobile-link ${
                isActive(item.href) ? "nav-mobile-link-active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="nav-mobile-link-label">{item.label}</span>
              <span className="nav-mobile-link-desc">{item.description}</span>
            </Link>
          ))}
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="nav-mobile-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
}
