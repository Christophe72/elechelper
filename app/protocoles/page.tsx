import Link from "next/link";
import protocoles from "@/data/protocoles.json";

export default function ProtocolesPage() {
  return (
    <main className="main-container">
      <header className="page-header">
        <h1 className="page-title">✅ Protocoles de dépannage</h1>
        <p className="page-description">
          Procédures étape par étape avec schémas interactifs pour le dépannage
          électrique
        </p>
      </header>

      <div className="protocols-grid">
        <section className="protocol-section">
          <h2 className="section-title">
            🔧 Protocoles disponibles
            <span className="protocol-count">({protocoles.length})</span>
          </h2>

          <div className="protocol-cards">
            {protocoles.map((proto) => (
              <Link
                key={proto.id}
                href={`/protocole/${proto.id}`}
                className="protocol-card"
              >
                <div className="protocol-card-header">
                  <h3 className="protocol-title">{proto.titre}</h3>
                </div>

                <div className="protocol-card-footer">
                  <span className="protocol-steps">
                    {proto.etapes?.length || 0} étapes
                  </span>
                  <span className="protocol-arrow">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
