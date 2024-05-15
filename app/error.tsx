'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto mt-8 max-w-md rounded-md border border-red-400 bg-red-100 p-6">
      <h2 className="mb-4 text-xl font-semibold text-red-800">
        Oops! Something went wrong...
      </h2>
      <p className="mb-2 text-red-600">Error: {error.message}</p>
      {error.digest && (
        <p className="mb-2 text-red-600">Error Digest: {error.digest}</p>
      )}
      <button
        className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:border-red-700 focus:outline-none"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
