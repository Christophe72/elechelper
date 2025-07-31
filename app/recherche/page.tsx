import Link from "next/link";
import pannes from "@/data/pannes.json";

export default function RecherchePage() {
  return (
    <main className="main-container">
      <header className="page-header">
        <h1 className="page-title">🔍 Recherche de panne</h1>
        <p className="page-description">
          Diagnostiquez rapidement les problèmes électriques par symptômes
        </p>
      </header>

      <div className="search-grid">
        <section className="search-section">
          <h2 className="section-title">
            🔍 Symptômes courants
            <span className="search-count">({pannes.length})</span>
          </h2>

          <div className="symptom-cards">
            {pannes.map((panne, index) => (
              <Link
                key={index}
                href={`/protocole/${panne.protocoleId}`}
                className="symptom-card"
              >
                <div className="symptom-header">
                  <h3 className="symptom-title">{panne.symptome}</h3>
                </div>

                <p className="symptom-description">
                  Diagnostic et réparation étape par étape
                </p>

                <div className="symptom-footer">
                  <span className="symptom-protocol">
                    → Protocole disponible
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Section recherche rapide */}
      <section className="quick-search">
        <h2 className="section-title">⚡ Recherche rapide</h2>
        <div className="quick-symptoms">
          <Link
            href="/protocole/prise-ne-fonctionne-pas"
            className="quick-symptom"
          >
            🔌 Prise défaillante
          </Link>
          <Link
            href="/protocole/disjoncteur-qui-saute"
            className="quick-symptom"
          >
            ⚡ Disjoncteur qui saute
          </Link>
          <Link
            href="/protocole/differentiel-qui-saute"
            className="quick-symptom"
          >
            🛡️ Différentiel qui déclenche
          </Link>
          <Link href="/protocole/court-circuit" className="quick-symptom">
            🚨 Court-circuit
          </Link>
        </div>
      </section>
    </main>
  );
}
