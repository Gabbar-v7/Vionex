import { useState, useCallback } from "react";
import { Link } from "react-router";

export function AppLogo({ to }: { to: string }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <Link
      to={to}
      className="flex items-center gap-4 hover:opacity-80 transition-opacity"
    >
      <div className="w-12 h-12 rounded-lg flex items-center justify-center">
        {!logoError ? (
          <img
            src="/assets/images/logo-dark.webp"
            alt="Vionex Logo"
            loading="lazy"
            onError={() => setLogoError(true)}
            className="w-12 h-12 object-contain"
          />
        ) : (
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">V</span>
          </div>
        )}
      </div>
      <span className="text-2xl font-bold text-foreground">Vionex</span>
    </Link>
  );
}
