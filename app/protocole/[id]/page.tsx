"use client";

import { useState, useEffect } from "react";
import protocoles from "@/data/protocoles.json";
import { notFound } from "next/navigation";
import SchemaEtapes from "@/components/schemas/SchemaEtapes"; // Adjust the import path as necessary
import "../../globals.css"; // Import global styles

/**
 * Le composant ProtocolePage affiche les détails d'un protocole selon l'ID fourni.
 *
 * @param params - Une promesse résolvant un objet contenant l'ID du protocole.
 * @returns L'interface de la page du protocole, incluant le titre, le schéma et les instructions étape par étape.
 *
 * @remarques
 * - Attend l'ID du protocole depuis la promesse params avant d'afficher.
 * - Affiche un indicateur de chargement pendant l'attente de l'ID.
 * - Si le protocole n'est pas trouvé, déclenche une réponse notFound.
 * - Permet à l'utilisateur de sélectionner et mettre en surbrillance les étapes du protocole.
 */
export default function ProtocolePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [etapeActive, setEtapeActive] = useState(0);

  // Simuler l'attente des params pour la compatibilité
  const [id, setId] = useState<string>("");

  useEffect(() => {
    params.then((p) => setId(p.id));
  }, [params]);

  if (!id) return <div>Chargement...</div>;

  const protocole = protocoles.find((p) => p.id === id);
  if (!protocole) return notFound();

  return (
    <main className="protocole-container">
      <div className="schema-section">
        <h1 className="titre-protocole">{protocole.titre}</h1>
        <SchemaEtapes protocoleId={id} etapeActive={etapeActive} />
      </div>

      <div className="etapes-section">
        <h2 className="text-lg font-semibold mb-4">Étapes à suivre :</h2>
        <div className="etapes-list">
          {protocole.etapes.map((etape, index) => (
            <div
              key={index}
              className={`etape ${index === etapeActive ? "active" : ""} ${
                etape.startsWith("REMISE EN SERVICE") ? "remise-en-service" : ""
              }`}
              onClick={() => setEtapeActive(index)}
            >
              <span className="numero">{index + 1}</span>
              <span className="texte">{etape}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
