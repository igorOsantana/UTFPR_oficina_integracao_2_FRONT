export type DeleteProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

export default function DeleteProductModal({
  isOpen,
  onClose,
  onDelete,
}: DeleteProductModalProps) {
  return (
    <div
      className={`fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="rounded bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">Confirm Delete</h2>
        <p className="mb-4 text-gray-700">
          Are you sure you want to delete this product?
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 rounded bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
