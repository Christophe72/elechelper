type Fiche = {
  titre: string;
  contenu: React.ReactNode;
};

/**
 * Dictionnaire des fiches d'information électrique.
 *
 * Chaque fiche est identifiée par une clé unique (string) et contient :
 * - `titre` : Le titre de la fiche.
 * - `contenu` : Le contenu JSX de la fiche, incluant des listes d'informations
 *   sur les couleurs des fils électriques et les tensions usuelles.
 *
 * Exemples de fiches :
 * - "couleurs-fils" : Détaille les couleurs des fils électriques et leur usage (neutre, phase, terre).
 * - "tensions-usuelles" : Présente les différentes tensions électriques courantes et leurs catégories (TBT, BT, HTA, etc.).
 */
const fiches: Record<string, Fiche> = {
  "couleurs-fils": {
    titre: "Couleurs des fils",
    contenu: (
      <ul className="list-disc pl-5">
        <li>
          <span className="font-semibold text-blue-600">Bleu</span> : Neutre
        </li>
        <li>
          <span className="font-semibold text-red-600">Brun/Rouge/Noir</span> :
          Phase
        </li>
        <li>
          <span className="font-semibold text-green-600">Vert/Jaune</span> :
          Terre
        </li>
      </ul>
    ),
  },
  "tensions-usuelles": {
    titre: "Tensions usuelles",
    contenu: (
      <div>
        <ul className="list-disc pl-5 mb-2">
          <li>
            <span className="font-semibold">230V</span> : Monophasé
          </li>
          <li>
            <span className="font-semibold">3x220V</span> : Triphasé (ancienne
            norme)
          </li>
          <li>
            <span className="font-semibold">3x380V</span> : Triphasé (ancienne
            norme)
          </li>
          <li>
            <span className="font-semibold">400V</span> : Triphasé (norme
            actuelle)
          </li>
        </ul>
        <ul className="list-disc pl-5">
          <li>
            <span className="font-semibold">TBT</span> : &lt; 50V
          </li>
          <li>
            <span className="font-semibold">BT</span> : 50V à 1000V
          </li>
          <li>
            <span className="font-semibold">HTA</span> : 1kV à 50kV
          </li>
          <li>
            <span className="font-semibold">HTB</span> : 50kV à 225kV
          </li>
          <li>
            <span className="font-semibold">THT</span> : &gt; 225kV
          </li>
        </ul>
      </div>
    ),
  },
};

export default async function FichePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fiche = fiches[id as keyof typeof fiches];
  if (!fiche) return <div className="p-4">Fiche non trouvée</div>;

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-2">{fiche.titre}</h1>
      <br />
      <div>{fiche.contenu}</div>
      <br />
    </main>
  );
}
