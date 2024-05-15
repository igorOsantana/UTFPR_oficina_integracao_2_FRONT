'use client';

export type ProductItemProps = {
  id: string;
  name: string;
  quantity: number;
  onDelete: (id: string) => void;
};
export default function ProductItem(props: ProductItemProps) {
  return (
    <li className="flex items-center justify-between px-2 py-4">
      <div className="flex flex-col">
        <span className="font-medium">{props.name}</span>
        <span className="text-xs text-gray-500">{props.quantity} units</span>
      </div>
      <button
        onClick={() => props.onDelete(props.id)}
        className="text-red-600 hover:text-red-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M13.293 6.293a1 1 0 011.414 1.414L11.414 11l3.293 3.293a1 1 0 01-1.414 1.414L10 12.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 11 5.293 7.707a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
  );
}
