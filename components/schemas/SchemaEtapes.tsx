import React from "react";
import { IconesElectriques } from "./IconesTechniques";

interface Element {
  type: keyof typeof IconesElectriques;
  x: number;
  y: number;
  etapesActives: number[];
  size?: number;
}

interface Connexion {
  from: { x: number; y: number };
  to: { x: number; y: number };
  etapesActives: number[];
  color?: string;
  label?: string;
}

interface Annotation {
  x: number;
  y: number;
  text: string;
  etapeActive: number;
}

interface SchemaConfig {
  elements: Element[];
  connexions: Connexion[];
  annotations: Annotation[];
  width: number;
  height: number;
}

interface SchemaEtapesProps {
  protocoleId: string;
  etapeActive: number;
  etapes: string[];
}

export default function SchemaEtapes({
  protocoleId,
  etapeActive,
}: Omit<SchemaEtapesProps, "etapes">) {
  const getSchemaConfig = (id: string): SchemaConfig => {
    switch (id) {
      case "prise-ne-fonctionne-pas":
      case "prise-fonctionne-pas":
        return {
          width: 500,
          height: 300,
          elements: [
            { type: "prise", x: 80, y: 120, etapesActives: [0, 7], size: 60 },
            {
              type: "disjoncteur",
              x: 320,
              y: 120,
              etapesActives: [1, 6],
              size: 60,
            },
            {
              type: "multimetre",
              x: 80,
              y: 200,
              etapesActives: [0, 2],
              size: 60,
            },
          ],
          connexions: [
            {
              from: { x: 140, y: 150 },
              to: { x: 320, y: 150 },
              etapesActives: [2, 3],
              color: "#ff6b6b",
              label: "Phase",
            },
            {
              from: { x: 140, y: 160 },
              to: { x: 320, y: 160 },
              etapesActives: [2, 3],
              color: "#2196f3",
              label: "Neutre",
            },
            {
              from: { x: 140, y: 170 },
              to: { x: 320, y: 170 },
              etapesActives: [2, 3],
              color: "#4caf50",
              label: "Terre",
            },
          ],
          annotations: [
            { x: 80, y: 100, text: "1. Vérifier tension", etapeActive: 0 },
            { x: 320, y: 100, text: "2. Contrôler DJ", etapeActive: 1 },
            { x: 200, y: 190, text: "3. Tester continuité", etapeActive: 2 },
            {
              x: 200,
              y: 90,
              text: "4. Vérifier boîte dérivation",
              etapeActive: 3,
            },
            { x: 80, y: 80, text: "5. Remplacer prise", etapeActive: 4 },
            { x: 320, y: 80, text: "6. Remettre DJ ON", etapeActive: 6 },
            { x: 80, y: 60, text: "7. Tester fonctionnement", etapeActive: 7 },
          ],
        };

      case "interrupteur-ne-fonctionne-pas":
        return {
          width: 500,
          height: 300,
          elements: [
            {
              type: "interrupteur",
              x: 80,
              y: 120,
              etapesActives: [0, 1, 6],
              size: 60,
            },
            {
              type: "ampoule",
              x: 320,
              y: 120,
              etapesActives: [6, 7],
              size: 60,
            },
            { type: "multimetre", x: 80, y: 200, etapesActives: [1], size: 60 },
            {
              type: "disjoncteur",
              x: 200,
              y: 50,
              etapesActives: [0, 5],
              size: 60,
            },
          ],
          connexions: [
            {
              from: { x: 140, y: 150 },
              to: { x: 320, y: 150 },
              etapesActives: [2, 6],
              color: "#ff6b6b",
              label: "Phase commutée",
            },
            {
              from: { x: 230, y: 110 },
              to: { x: 110, y: 120 },
              etapesActives: [0],
              color: "#2196f3",
              label: "Alimentation",
            },
          ],
          annotations: [
            { x: 80, y: 100, text: "1. Vérifier alimentation", etapeActive: 0 },
            {
              x: 80,
              y: 180,
              text: "2. Tester avec multimètre",
              etapeActive: 1,
            },
            { x: 200, y: 190, text: "3. Contrôler connexions", etapeActive: 2 },
            {
              x: 80,
              y: 80,
              text: "4. Remplacer si défectueux",
              etapeActive: 3,
            },
            { x: 80, y: 60, text: "6. Tester fonctionnement", etapeActive: 6 },
          ],
        };

      case "telerupteur-ne-fonctionne-pas":
        return {
          width: 500,
          height: 300,
          elements: [
            {
              type: "telerupteur",
              x: 200,
              y: 80,
              etapesActives: [0, 1, 5, 7],
              size: 60,
            },
            {
              type: "boutonPoussoir",
              x: 80,
              y: 150,
              etapesActives: [2, 8],
              size: 50,
            },
            {
              type: "boutonPoussoir",
              x: 320,
              y: 150,
              etapesActives: [2, 8],
              size: 50,
            },
            {
              type: "ampoule",
              x: 200,
              y: 200,
              etapesActives: [8, 9],
              size: 60,
            },
            { type: "multimetre", x: 80, y: 80, etapesActives: [1], size: 50 },
            {
              type: "disjoncteur",
              x: 350,
              y: 80,
              etapesActives: [0, 7],
              size: 50,
            },
          ],
          connexions: [
            {
              from: { x: 380, y: 110 },
              to: { x: 230, y: 110 },
              etapesActives: [0, 7],
              color: "#ff6b6b",
              label: "Alimentation",
            },
            {
              from: { x: 105, y: 175 },
              to: { x: 220, y: 140 },
              etapesActives: [2, 8],
              color: "#673ab7",
              label: "Commande",
            },
            {
              from: { x: 345, y: 175 },
              to: { x: 250, y: 140 },
              etapesActives: [2, 8],
              color: "#673ab7",
              label: "Commande",
            },
            {
              from: { x: 230, y: 140 },
              to: { x: 230, y: 200 },
              etapesActives: [8, 9],
              color: "#ffeb3b",
              label: "Éclairage",
            },
          ],
          annotations: [
            { x: 200, y: 60, text: "1. Vérifier alimentation", etapeActive: 0 },
            { x: 80, y: 60, text: "2. Contrôler bobinage", etapeActive: 1 },
            {
              x: 80,
              y: 130,
              text: "3. Tester boutons poussoirs",
              etapeActive: 2,
            },
            { x: 200, y: 40, text: "4. Vérifier connexions", etapeActive: 3 },
            { x: 200, y: 20, text: "5. Contrôler contacts", etapeActive: 4 },
            {
              x: 200,
              y: 280,
              text: "8. Tester fonctionnement",
              etapeActive: 8,
            },
            { x: 200, y: 260, text: "9. Vérifier éclairage", etapeActive: 9 },
          ],
        };

      case "contacteur-ne-fonctionne-pas":
        return {
          width: 500,
          height: 300,
          elements: [
            {
              type: "contacteur",
              x: 200,
              y: 100,
              etapesActives: [0, 1, 2, 6, 9],
              size: 60,
            },
            { type: "moteur", x: 350, y: 180, etapesActives: [10], size: 60 },
            {
              type: "disjoncteur",
              x: 80,
              y: 100,
              etapesActives: [0, 8],
              size: 50,
            },
            {
              type: "multimetre",
              x: 80,
              y: 180,
              etapesActives: [1, 2],
              size: 50,
            },
            {
              type: "interrupteur",
              x: 350,
              y: 100,
              etapesActives: [8, 9],
              size: 50,
            },
          ],
          connexions: [
            {
              from: { x: 130, y: 125 },
              to: { x: 200, y: 125 },
              etapesActives: [0, 8],
              color: "#ff6b6b",
              label: "Alimentation bobine",
            },
            {
              from: { x: 375, y: 125 },
              to: { x: 230, y: 125 },
              etapesActives: [8, 9],
              color: "#795548",
              label: "Commande",
            },
            {
              from: { x: 230, y: 160 },
              to: { x: 375, y: 180 },
              etapesActives: [9, 10],
              color: "#607d8b",
              label: "Puissance moteur",
            },
          ],
          annotations: [
            {
              x: 200,
              y: 80,
              text: "1. Vérifier alimentation bobine",
              etapeActive: 0,
            },
            {
              x: 80,
              y: 160,
              text: "2. Contrôler tension commande",
              etapeActive: 1,
            },
            {
              x: 80,
              y: 60,
              text: "3. Tester continuité bobine",
              etapeActive: 2,
            },
            {
              x: 200,
              y: 60,
              text: "4. Vérifier contacts auxiliaires",
              etapeActive: 3,
            },
            {
              x: 200,
              y: 40,
              text: "5. Contrôler contacts puissance",
              etapeActive: 4,
            },
            { x: 200, y: 20, text: "6. Vérifier connexions", etapeActive: 5 },
            { x: 350, y: 80, text: "8. Remettre alimentation", etapeActive: 8 },
            { x: 350, y: 60, text: "9. Tester contacteur", etapeActive: 9 },
            { x: 350, y: 160, text: "10. Vérifier moteur", etapeActive: 10 },
          ],
        };

      case "disjoncteur-saute":
        return {
          width: 500,
          height: 300,
          elements: [
            {
              type: "disjoncteur",
              x: 200,
              y: 80,
              etapesActives: [0, 2, 5],
              size: 60,
            },
            { type: "prise", x: 80, y: 180, etapesActives: [1, 6], size: 50 },
            { type: "prise", x: 200, y: 180, etapesActives: [1, 6], size: 50 },
            { type: "prise", x: 320, y: 180, etapesActives: [1, 6], size: 50 },
          ],
          connexions: [
            {
              from: { x: 230, y: 140 },
              to: { x: 105, y: 180 },
              etapesActives: [1, 5, 6],
              color: "#ff6b6b",
            },
            {
              from: { x: 230, y: 140 },
              to: { x: 225, y: 180 },
              etapesActives: [1, 5, 6],
              color: "#ff6b6b",
            },
            {
              from: { x: 230, y: 140 },
              to: { x: 345, y: 180 },
              etapesActives: [1, 5, 6],
              color: "#ff6b6b",
            },
          ],
          annotations: [
            { x: 200, y: 60, text: "1. Identifier circuit", etapeActive: 0 },
            { x: 80, y: 160, text: "2. Débrancher appareils", etapeActive: 1 },
            { x: 200, y: 40, text: "3. Réinitialiser DJ", etapeActive: 2 },
            { x: 200, y: 20, text: "5. Réenclencher à vide", etapeActive: 5 },
            { x: 80, y: 140, text: "6. Reconnecter un par un", etapeActive: 6 },
          ],
        };

      case "differentiel-saute":
        return {
          width: 500,
          height: 300,
          elements: [
            {
              type: "differentiel",
              x: 200,
              y: 80,
              etapesActives: [0, 2, 5],
              size: 60,
            },
            { type: "prise", x: 80, y: 180, etapesActives: [1, 6], size: 50 },
            { type: "prise", x: 200, y: 180, etapesActives: [1, 6], size: 50 },
            { type: "prise", x: 320, y: 180, etapesActives: [1, 6], size: 50 },
          ],
          connexions: [
            {
              from: { x: 230, y: 140 },
              to: { x: 105, y: 180 },
              etapesActives: [1, 5, 6],
              color: "#9c27b0",
            },
            {
              from: { x: 230, y: 140 },
              to: { x: 225, y: 180 },
              etapesActives: [1, 5, 6],
              color: "#9c27b0",
            },
            {
              from: { x: 230, y: 140 },
              to: { x: 345, y: 180 },
              etapesActives: [1, 5, 6],
              color: "#9c27b0",
            },
          ],
          annotations: [
            { x: 200, y: 60, text: "1. Identifier circuit", etapeActive: 0 },
            { x: 80, y: 160, text: "2. Débrancher appareils", etapeActive: 1 },
            { x: 200, y: 40, text: "3. Tester différentiel", etapeActive: 2 },
            { x: 200, y: 20, text: "5. Réenclencher à vide", etapeActive: 5 },
            { x: 80, y: 140, text: "6. Reconnecter un par un", etapeActive: 6 },
          ],
        };

      case "rj45-ethernet":
        return {
          width: 500,
          height: 300,
          elements: [
            { type: "ordinateur", x: 80, y: 120, etapesActives: [5], size: 60 },
            {
              type: "rj45",
              x: 200,
              y: 120,
              etapesActives: [0, 1, 4],
              size: 60,
            },
            {
              type: "routeur",
              x: 320,
              y: 120,
              etapesActives: [2, 3],
              size: 60,
            },
          ],
          connexions: [
            {
              from: { x: 140, y: 150 },
              to: { x: 200, y: 150 },
              etapesActives: [0, 1, 4],
              color: "#00bcd4",
              label: "Câble RJ45",
            },
            {
              from: { x: 260, y: 150 },
              to: { x: 320, y: 150 },
              etapesActives: [0, 1, 4],
              color: "#00bcd4",
              label: "Câble RJ45",
            },
          ],
          annotations: [
            { x: 200, y: 100, text: "1. Vérifier connexions", etapeActive: 0 },
            { x: 200, y: 80, text: "2. Tester câble", etapeActive: 1 },
            { x: 320, y: 100, text: "3. Contrôler routeur", etapeActive: 2 },
            {
              x: 320,
              y: 80,
              text: "4. Redémarrer équipements",
              etapeActive: 3,
            },
            { x: 200, y: 60, text: "5. Vérifier connexion", etapeActive: 4 },
            { x: 80, y: 100, text: "6. Tester avec PC", etapeActive: 5 },
          ],
        };

      case "circuit-surcharge":
        return {
          width: 500,
          height: 300,
          elements: [
            {
              type: "disjoncteur",
              x: 200,
              y: 80,
              etapesActives: [0, 2, 5],
              size: 60,
            },
            { type: "prise", x: 80, y: 180, etapesActives: [1, 6], size: 50 },
            { type: "prise", x: 200, y: 180, etapesActives: [1, 6], size: 50 },
            { type: "prise", x: 320, y: 180, etapesActives: [1, 6], size: 50 },
            { type: "prise", x: 400, y: 180, etapesActives: [1, 6], size: 50 },
            { type: "multimetre", x: 80, y: 80, etapesActives: [2], size: 50 },
          ],
          connexions: [
            {
              from: { x: 230, y: 140 },
              to: { x: 105, y: 180 },
              etapesActives: [0, 1, 6],
              color: "#ff6b6b",
              label: "Surcharge",
            },
            {
              from: { x: 230, y: 140 },
              to: { x: 225, y: 180 },
              etapesActives: [0, 1, 6],
              color: "#ff6b6b",
            },
            {
              from: { x: 230, y: 140 },
              to: { x: 345, y: 180 },
              etapesActives: [0, 1, 6],
              color: "#ff6b6b",
            },
            {
              from: { x: 230, y: 140 },
              to: { x: 425, y: 180 },
              etapesActives: [0, 1, 6],
              color: "#ff6b6b",
            },
          ],
          annotations: [
            { x: 200, y: 60, text: "1. Identifier appareils", etapeActive: 0 },
            {
              x: 80,
              y: 160,
              text: "2. Débrancher non essentiels",
              etapeActive: 1,
            },
            { x: 80, y: 60, text: "3. Vérifier capacité", etapeActive: 2 },
            { x: 200, y: 40, text: "4. Répartir la charge", etapeActive: 3 },
            { x: 200, y: 20, text: "6. Remettre DJ ON", etapeActive: 5 },
            { x: 80, y: 140, text: "7. Reconnecter un par un", etapeActive: 6 },
            {
              x: 320,
              y: 160,
              text: "8. Vérifier pas de surcharge",
              etapeActive: 7,
            },
            {
              x: 320,
              y: 140,
              text: "9. Contrôler température",
              etapeActive: 8,
            },
          ],
        };

      case "court-circuit":
        return {
          width: 500,
          height: 300,
          elements: [
            {
              type: "disjoncteur",
              x: 200,
              y: 80,
              etapesActives: [0, 4, 6],
              size: 60,
            },
            {
              type: "prise",
              x: 80,
              y: 180,
              etapesActives: [1, 2, 3],
              size: 50,
            },
            {
              type: "multimetre",
              x: 320,
              y: 80,
              etapesActives: [2, 4],
              size: 50,
            },
            {
              type: "interrupteur",
              x: 320,
              y: 180,
              etapesActives: [1, 2, 3],
              size: 50,
            },
          ],
          connexions: [
            {
              from: { x: 230, y: 140 },
              to: { x: 105, y: 180 },
              etapesActives: [1, 2, 3],
              color: "#f44336",
              label: "Court-circuit",
            },
            {
              from: { x: 230, y: 140 },
              to: { x: 345, y: 180 },
              etapesActives: [1, 2, 3],
              color: "#f44336",
            },
            {
              from: { x: 350, y: 110 },
              to: { x: 230, y: 110 },
              etapesActives: [4, 5],
              color: "#4caf50",
              label: "Test isolement",
            },
          ],
          annotations: [
            { x: 200, y: 60, text: "1. Couper alimentation", etapeActive: 0 },
            { x: 80, y: 160, text: "2. Identifier source", etapeActive: 1 },
            { x: 320, y: 60, text: "3. Vérifier câbles", etapeActive: 2 },
            { x: 320, y: 160, text: "4. Remplacer composants", etapeActive: 3 },
            { x: 320, y: 40, text: "5. Contrôle isolement", etapeActive: 4 },
            { x: 200, y: 40, text: "6. Vérifier connexions", etapeActive: 5 },
            { x: 200, y: 20, text: "7. Remettre alimentation", etapeActive: 6 },
            { x: 80, y: 140, text: "8. Surveiller 15 min", etapeActive: 7 },
          ],
        };

      default:
        return {
          width: 400,
          height: 300,
          elements: [],
          connexions: [],
          annotations: [],
        };
    }
  };

  const config = getSchemaConfig(protocoleId);

  return (
    <div className="schema-container">
      <svg
        width={config.width}
        height={config.height}
        viewBox={`0 0 ${config.width} ${config.height}`}
      >
        {/* Connexions */}
        {config.connexions.map((conn, index) => (
          <g key={`conn-${index}`}>
            <line
              x1={conn.from.x}
              y1={conn.from.y}
              x2={conn.to.x}
              y2={conn.to.y}
              stroke={
                conn.etapesActives.includes(etapeActive)
                  ? conn.color || "#4ecdc4"
                  : "#ccc"
              }
              strokeWidth="4"
              strokeDasharray={
                conn.etapesActives.includes(etapeActive) ? "0" : "5,5"
              }
            />
            {conn.label && conn.etapesActives.includes(etapeActive) && (
              <text
                x={(conn.from.x + conn.to.x) / 2}
                y={(conn.from.y + conn.to.y) / 2 - 10}
                fontSize="10"
                fill="#333"
                textAnchor="middle"
                fontWeight="bold"
              >
                {conn.label}
              </text>
            )}
          </g>
        ))}

        {/* Éléments */}
        {config.elements.map((element, index) => (
          <g
            key={`element-${index}`}
            transform={`translate(${element.x}, ${element.y})`}
          >
            {IconesElectriques[element.type]({
              active: element.etapesActives.includes(etapeActive),
              size: element.size || 50,
            })}
          </g>
        ))}

        {/* Annotations */}
        {config.annotations.map((ann, index) => (
          <text
            key={`ann-${index}`}
            x={ann.x}
            y={ann.y}
            fontSize="12"
            fill={ann.etapeActive === etapeActive ? "#333" : "#999"}
            fontWeight={ann.etapeActive === etapeActive ? "bold" : "normal"}
            textAnchor="middle"
          >
            {ann.text}
          </text>
        ))}
      </svg>
    </div>
  );
}
