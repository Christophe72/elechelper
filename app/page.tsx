import Link from "next/link";
import protocoles from "@/data/protocoles.json";
import pannes from "@/data/pannes.json";
import "./globals.css"; // Import global styles

export default function HomePage() {
  return (
    <main className="main-container">
      <header className="page-header">
        <h1 className="page-title">⚡ ElecHelper</h1>
        <p className="page-description">
          Votre assistant électricien professionnel avec protocoles interactifs
          et schémas visuels
        </p>
      </header>

      {/* Navigation rapide */}
      <section className="quick-nav">
        <div className="nav-cards">
          <Link href="/protocoles" className="nav-card protocoles">
            <div className="nav-card-icon">✅</div>
            <div className="nav-card-content">
              <h3>Protocoles</h3>
              <p>{protocoles.length} procédures disponibles</p>
            </div>
          </Link>

          <Link href="/recherche" className="nav-card recherche">
            <div className="nav-card-icon">🔍</div>
            <div className="nav-card-content">
              <h3>Recherche</h3>
              <p>{pannes.length} symptômes référencés</p>
            </div>
          </Link>

          <Link href="/fiches" className="nav-card fiches">
            <div className="nav-card-icon">📋</div>
            <div className="nav-card-content">
              <h3>Fiches</h3>
              <p>Références techniques</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Protocoles populaires */}
      <section className="section">
        <h2 className="section-title">� Protocoles populaires</h2>
        <div className="popular-protocols">
          <Link
            href="/protocole/prise-ne-fonctionne-pas"
            className="popular-protocol"
          >
            <span className="popular-icon">🔌</span>
            <span>Prise défaillante</span>
          </Link>
          <Link
            href="/protocole/differentiel-qui-saute"
            className="popular-protocol"
          >
            <span className="popular-icon">🛡️</span>
            <span>Différentiel qui saute</span>
          </Link>
          <Link href="/protocole/court-circuit" className="popular-protocol">
            <span className="popular-icon">🚨</span>
            <span>Court-circuit</span>
          </Link>
          <Link
            href="/protocole/circuit-surcharge"
            className="popular-protocol"
          >
            <span className="popular-icon">⚡</span>
            <span>Circuit surchargé</span>
          </Link>
        </div>
      </section>

      {/* Sécurité */}
      <section className="safety-reminder">
        <div className="safety-card">
          <h3>⚠️ Rappel sécurité</h3>
          <ul>
            <li>Toujours couper l&apos;alimentation avant intervention</li>
            <li>Vérifier l&apos;absence de tension avec un VAT</li>
            <li>Porter les équipements de protection individuelle</li>
            <li>Respecter les consignations électriques</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
