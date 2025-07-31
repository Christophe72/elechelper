"use client";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "white";
  text?: string;
  fullscreen?: boolean;
}

export default function Spinner({
  size = "medium",
  color = "primary",
  text = "Chargement...",
  fullscreen = false,
}: SpinnerProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  const colorClasses = {
    primary: "border-blue-600",
    secondary: "border-gray-600",
    white: "border-white",
  };

  const spinnerContent = (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`
        ${sizeClasses[size]} 
        border-4 border-gray-200 border-t-4 
        ${colorClasses[color]} 
        rounded-full animate-spin
      `}
      ></div>
      {text && (
        <p
          className={`text-sm ${
            color === "white" ? "text-white" : "text-gray-600"
          } font-medium`}
        >
          {text}
        </p>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div className="spinner-fullscreen">
        <div className="spinner-content">
          ⚡<div className="spinner-large"></div>
          <p className="spinner-text">ElecHelper</p>
          <p className="spinner-subtext">{text}</p>
        </div>
      </div>
    );
  }

  return spinnerContent;
}

// Composant de loading pour les pages
export function PageSpinner({
  text = "Chargement de la page...",
}: {
  text?: string;
}) {
  return (
    <div className="page-spinner">
      <Spinner size="large" text={text} />
    </div>
  );
}

// Composant de loading inline
export function InlineSpinner({ text }: { text?: string }) {
  return (
    <div className="inline-spinner">
      <Spinner size="small" text={text} />
    </div>
  );
}
