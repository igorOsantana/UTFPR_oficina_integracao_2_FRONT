import { createProduct } from '@/app/lib/actions';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';

export type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateProductModal({
  isOpen,
  onClose,
}: CreateProductModalProps) {
  const [errorMessage, dispatch] = useFormState(createProduct, undefined);
  return (
    <div
      className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="rounded bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">Create new product</h2>
        <form action={dispatch}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input mt-1 block w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700">
              Quantity:
            </label>
            <input
              min={1}
              max={10000000}
              required
              inputMode="numeric"
              type="number"
              id="quantity"
              className="form-input mt-1 block w-full"
              name="quantity"
            />
          </div>
          <div
            className="flex h-8 space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
          <div className="flex justify-around">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 rounded bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
