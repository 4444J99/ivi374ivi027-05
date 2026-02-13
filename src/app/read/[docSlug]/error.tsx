"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ReaderError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[MET4:Reader] Error:", error);
  }, [error]);

  return (
    <section className="error-boundary">
      <p className="eyebrow">Reader Fault</p>
      <h1>This text could not be rendered.</h1>
      <p>The canonical reader encountered a signal break. The document may need to be re-ingested.</p>
      <div className="error-actions">
        <button onClick={reset}>Retry</button>
        <Link href="/">Return to Node Map</Link>
      </div>
    </section>
  );
}
