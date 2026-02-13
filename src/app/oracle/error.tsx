"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function OracleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[MET4:Oracle] Error:", error);
  }, [error]);

  return (
    <section className="error-boundary">
      <p className="eyebrow">Oracle Offline</p>
      <h1>The Oracle has gone silent.</h1>
      <p>Style DNA analysis could not be loaded. The signal may be corrupted or temporarily unavailable.</p>
      <div className="error-actions">
        <button onClick={reset}>Consult Again</button>
        <Link href="/">Return to Node Map</Link>
      </div>
    </section>
  );
}
