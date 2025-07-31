import Link from "next/link";

export default function FichesPage() {
  const fiches = [
    {
      id: "couleurs-fils",
      titre: "Couleurs des fils électriques",
      description:
        "Code couleur normalisé pour l'identification des conducteurs",
      icon: "🎨",
      category: "Normes",
    },
    {
      id: "tensions-usuelles",
      titre: "Tensions usuelles",
      description: "Tensions électriques courantes et leurs classifications",
      icon: "⚡",
      category: "Mesures",
    },
    {
      id: "outils-securite",
      titre: "Outils de sécurité",
      description: "Équipements de protection individuelle et collective",
      icon: "🛡️",
      category: "Sécurité",
    },
    {
      id: "symboles-electriques",
      titre: "Symboles électriques",
      description: "Symboles normalisés pour schémas électriques",
      icon: "📐",
      category: "Schémas",
    },
  ];

  const fichesParCategorie = fiches.reduce((acc, fiche) => {
    if (!acc[fiche.category]) acc[fiche.category] = [];
    acc[fiche.category].push(fiche);
    return acc;
  }, {} as Record<string, typeof fiches>);

  return (
    <main className="main-container">
      <header className="page-header">
        <h1 className="page-title">📋 Fiches techniques</h1>
        <p className="page-description">
          Références rapides et informations pratiques pour les électriciens
        </p>
      </header>

      <div className="fiches-grid">
        {Object.entries(fichesParCategorie).map(
          ([category, fichesCategory]) => (
            <section key={category} className="fiches-section">
              <h2 className="section-title">
                {category}
                <span className="fiches-count">({fichesCategory.length})</span>
              </h2>

              <div className="fiches-cards">
                {fichesCategory.map((fiche) => (
                  <Link
                    key={fiche.id}
                    href={`/fiches/${fiche.id}`}
                    className="fiche-card"
                  >
                    <div className="fiche-icon">{fiche.icon}</div>
                    <div className="fiche-content">
                      <h3 className="fiche-title">{fiche.titre}</h3>
                      <p className="fiche-description">{fiche.description}</p>
                    </div>
                    <div className="fiche-arrow">→</div>
                  </Link>
                ))}
              </div>
            </section>
          )
        )}
      </div>

      {/* Section aide rapide */}
      <section className="quick-help">
        <h2 className="section-title">🆘 Aide rapide</h2>
        <div className="help-cards">
          <div className="help-card emergency">
            <h3>🚨 Urgence électrique</h3>
            <p>Coupez immédiatement l&apos;alimentation générale</p>
            <span className="help-number">☎️ 15 / 18</span>
          </div>

          <div className="help-card safety">
            <h3>⚠️ Consignes de sécurité</h3>
            <ul>
              <li>Toujours couper l&apos;alimentation</li>
              <li>Vérifier l&apos;absence de tension</li>
              <li>Porter les EPI appropriés</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
