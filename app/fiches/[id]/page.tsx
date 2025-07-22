const fiches = {
  "couleurs-fils": {
    titre: "Couleurs des fils",
    contenu: "Bleu = neutre, Brun/Rouge/Noir = phase, Vert/Jaune = terre",
  },
  "tensions-usuelles": {
    titre: "Tensions usuelles",
    contenu: "230V monophasé, 400V triphasé, TBT < 50V",
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
      <p>{fiche.contenu}</p>
    </main>
  );
}
