import React from "react";

interface IconProps {
  active: boolean;
  size?: number;
}

export const IconesElectriques = {
  prise: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <rect
        x="10"
        y="15"
        width="30"
        height="20"
        fill={active ? "#ff6b6b" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
        rx="3"
      />
      <circle cx="20" cy="25" r="3" fill="#333" />
      <circle cx="30" cy="25" r="3" fill="#333" />
      <rect x="23" y="30" width="4" height="8" fill="#333" />
      <text x="25" y="44" textAnchor="middle" fontSize="8" fill="#333">
        PRISE
      </text>
    </svg>
  ),

  disjoncteur: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <rect
        x="15"
        y="10"
        width="20"
        height="30"
        fill={active ? "#45b7d1" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
      />
      <rect x="20" y="15" width="10" height="5" fill="#333" />
      <line x1="25" y1="20" x2="25" y2="35" stroke="#333" strokeWidth="2" />
      <circle cx="25" cy="32" r="2" fill={active ? "#fff" : "#666"} />
      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        DJ
      </text>
    </svg>
  ),

  multimetre: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <rect
        x="10"
        y="15"
        width="30"
        height="20"
        fill={active ? "#4ecdc4" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
        rx="3"
      />
      <text x="25" y="28" textAnchor="middle" fontSize="8" fill="#333">
        {active ? "230V" : "---"}
      </text>
      <line x1="15" y1="35" x2="10" y2="45" stroke="#red" strokeWidth="2" />
      <line x1="35" y1="35" x2="40" y2="45" stroke="#000" strokeWidth="2" />
      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        MULTI
      </text>
    </svg>
  ),

  interrupteur: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <rect
        x="15"
        y="15"
        width="20"
        height="20"
        fill={active ? "#ffa726" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
      />
      <rect
        x="20"
        y="20"
        width="10"
        height="10"
        fill={active ? "#fff" : "#ccc"}
        stroke="#333"
        strokeWidth="1"
      />
      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        INTER
      </text>
    </svg>
  ),

  ampoule: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="20"
        r="8"
        fill={active ? "#ffeb3b" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
      />
      <rect x="22" y="28" width="6" height="4" fill="#333" />
      <rect x="20" y="32" width="10" height="3" fill="#333" />
      {active && (
        <>
          <line
            x1="15"
            y1="10"
            x2="17"
            y2="12"
            stroke="#ffd700"
            strokeWidth="2"
          />
          <line
            x1="35"
            y1="10"
            x2="33"
            y2="12"
            stroke="#ffd700"
            strokeWidth="2"
          />
          <line
            x1="10"
            y1="20"
            x2="12"
            y2="20"
            stroke="#ffd700"
            strokeWidth="2"
          />
          <line
            x1="40"
            y1="20"
            x2="38"
            y2="20"
            stroke="#ffd700"
            strokeWidth="2"
          />
        </>
      )}
      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        ÉCLAIRAGE
      </text>
    </svg>
  ),

  differentiel: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <rect
        x="10"
        y="10"
        width="30"
        height="25"
        fill={active ? "#9c27b0" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
      />
      <rect x="15" y="15" width="8" height="3" fill="#333" />
      <rect x="27" y="15" width="8" height="3" fill="#333" />
      <circle cx="19" cy="25" r="3" fill={active ? "#fff" : "#666"} />
      <circle cx="31" cy="25" r="3" fill={active ? "#fff" : "#666"} />
      <text x="25" y="30" textAnchor="middle" fontSize="6" fill="#333">
        30mA
      </text>
      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        DIFF
      </text>
    </svg>
  ),

  rj45: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <rect
        x="15"
        y="15"
        width="20"
        height="15"
        fill={active ? "#00bcd4" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
        rx="2"
      />
      <rect x="18" y="18" width="2" height="9" fill="#333" />
      <rect x="21" y="18" width="2" height="9" fill="#333" />
      <rect x="24" y="18" width="2" height="9" fill="#333" />
      <rect x="27" y="18" width="2" height="9" fill="#333" />
      <rect x="30" y="18" width="2" height="9" fill="#333" />
      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        RJ45
      </text>
    </svg>
  ),

  routeur: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <rect
        x="10"
        y="15"
        width="30"
        height="20"
        fill={active ? "#607d8b" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
        rx="3"
      />
      <circle cx="18" cy="25" r="2" fill={active ? "#4caf50" : "#666"} />
      <circle cx="25" cy="25" r="2" fill={active ? "#4caf50" : "#666"} />
      <circle cx="32" cy="25" r="2" fill={active ? "#4caf50" : "#666"} />
      <rect x="15" y="20" width="3" height="2" fill="#333" />
      <rect x="22" y="20" width="3" height="2" fill="#333" />
      <rect x="29" y="20" width="3" height="2" fill="#333" />
      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        ROUTEUR
      </text>
    </svg>
  ),

  ordinateur: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <rect
        x="10"
        y="10"
        width="30"
        height="20"
        fill={active ? "#424242" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
        rx="2"
      />
      <rect
        x="12"
        y="12"
        width="26"
        height="16"
        fill={active ? "#1976d2" : "#ccc"}
      />
      <ellipse cx="25" cy="33" rx="8" ry="2" fill="#333" />
      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        PC
      </text>
    </svg>
  ),

  telerupteur: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <rect
        x="10"
        y="10"
        width="30"
        height="25"
        fill={active ? "#673ab7" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
        rx="2"
      />
      {/* Bobine */}
      <circle
        cx="25"
        cy="22"
        r="6"
        fill={active ? "#fff" : "#ccc"}
        stroke="#333"
        strokeWidth="1"
      />
      <text x="25" y="25" textAnchor="middle" fontSize="8" fill="#333">
        A1
      </text>

      {/* Contacts */}
      <line x1="15" y1="15" x2="20" y2="15" stroke="#333" strokeWidth="2" />
      <line x1="30" y1="15" x2="35" y2="15" stroke="#333" strokeWidth="2" />

      {/* Boutons poussoirs */}
      <circle
        cx="15"
        cy="40"
        r="3"
        fill={active ? "#4caf50" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="1"
      />
      <circle
        cx="35"
        cy="40"
        r="3"
        fill={active ? "#4caf50" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="1"
      />

      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        TÉLÉR
      </text>
    </svg>
  ),

  contacteur: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <rect
        x="10"
        y="10"
        width="30"
        height="25"
        fill={active ? "#795548" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
        rx="2"
      />
      {/* Bobine */}
      <rect
        x="20"
        y="15"
        width="10"
        height="6"
        fill={active ? "#fff" : "#ccc"}
        stroke="#333"
        strokeWidth="1"
      />
      <text x="25" y="19" textAnchor="middle" fontSize="6" fill="#333">
        A1-A2
      </text>

      {/* Contacts principaux */}
      <line x1="15" y1="25" x2="20" y2="25" stroke="#333" strokeWidth="3" />
      <line x1="30" y1="25" x2="35" y2="25" stroke="#333" strokeWidth="3" />
      <line x1="15" y1="30" x2="20" y2="30" stroke="#333" strokeWidth="3" />
      <line x1="30" y1="30" x2="35" y2="30" stroke="#333" strokeWidth="3" />

      {/* Contacts auxiliaires */}
      <circle
        cx="15"
        cy="40"
        r="2"
        fill={active ? "#ff9800" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="1"
      />
      <circle
        cx="35"
        cy="40"
        r="2"
        fill={active ? "#ff9800" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="1"
      />

      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        CONTACT
      </text>
    </svg>
  ),

  moteur: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="22"
        r="12"
        fill={active ? "#607d8b" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
      />
      <circle
        cx="25"
        cy="22"
        r="8"
        fill={active ? "#37474f" : "#ccc"}
        stroke="#333"
        strokeWidth="1"
      />
      <circle cx="25" cy="22" r="3" fill="#333" />

      {/* Bornes de connexion */}
      <rect x="18" y="8" width="3" height="4" fill="#333" />
      <rect x="25" y="8" width="3" height="4" fill="#333" />
      <rect x="32" y="8" width="3" height="4" fill="#333" />
      <text x="20" y="7" fontSize="6" fill="#333">
        U
      </text>
      <text x="26" y="7" fontSize="6" fill="#333">
        V
      </text>
      <text x="33" y="7" fontSize="6" fill="#333">
        W
      </text>

      {/* Base */}
      <rect x="15" y="34" width="20" height="4" fill="#333" />

      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        MOTEUR
      </text>
    </svg>
  ),

  boutonPoussoir: ({ active, size = 50 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="12"
        fill={active ? "#4caf50" : "#e0e0e0"}
        stroke="#333"
        strokeWidth="2"
      />
      <circle
        cx="25"
        cy="25"
        r="8"
        fill={active ? "#fff" : "#f5f5f5"}
        stroke="#333"
        strokeWidth="1"
      />
      <circle cx="25" cy="25" r="4" fill={active ? "#2e7d32" : "#ccc"} />

      {/* Bornes */}
      <rect x="22" y="10" width="2" height="5" fill="#333" />
      <rect x="26" y="10" width="2" height="5" fill="#333" />
      <rect x="22" y="35" width="2" height="5" fill="#333" />
      <rect x="26" y="35" width="2" height="5" fill="#333" />

      <text x="25" y="48" textAnchor="middle" fontSize="8" fill="#333">
        BP
      </text>
    </svg>
  ),
};
