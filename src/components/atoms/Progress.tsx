// src/components/ui/progress.tsx
import React from "react";

interface ProgressProps {
  value: number; // current progress value
  max?: number;  // maximum value (default 100)
  className?: string; // additional styling
}

export const Progress: React.FC<ProgressProps> = ({ value, max = 100, className }) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={`w-full h-4 bg-slate-200 rounded overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-indigo-600 transition-all duration-300 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
