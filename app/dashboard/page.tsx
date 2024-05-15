'use client';

import Link from 'next/link';
import Authenticator from '../lib/authenticator';

export default function Page() {
  return (
    <Authenticator.Private>
      <div className="flex h-full flex-col items-center justify-center gap-10">
        <h1 className="text-center text-5xl">
          Welcome to the storage management system!
        </h1>
        <Link
          href="/dashboard/products"
          className="inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Go to products
        </Link>
      </div>
    </Authenticator.Private>
  );
}
