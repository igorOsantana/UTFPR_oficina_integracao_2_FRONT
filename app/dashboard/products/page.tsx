'use client';

import Authenticator from '@/app/lib/authenticator';
import ProductList from '@/app/ui/products/list';

export default async function Page() {
  return (
    <Authenticator.Private>
      <div className="flex flex-col gap-3">
        <ProductList />
      </div>
    </Authenticator.Private>
  );
}
