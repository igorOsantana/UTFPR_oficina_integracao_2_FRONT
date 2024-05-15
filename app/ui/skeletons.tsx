export function ProductSkeleton() {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200"></div>
        <div className="min-w-0">
          <div className="h-5 w-32 rounded-md bg-gray-200"></div>
          <div className="mt-2 h-4 w-24 rounded-md bg-gray-200"></div>
        </div>
      </div>
      <div className="mt-2 h-4 w-16 rounded-md bg-gray-200"></div>
    </div>
  );
}

export function ProductListSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2">
          <div className="mt-4">
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}

export const LoadingSpinner = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-900">
      <h1 className="text-white">Processing...</h1>
    </div>
  );
};
