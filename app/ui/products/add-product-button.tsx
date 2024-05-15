import { useState } from 'react';
import CreateProductModal from './create-product-modal';

export default function AddProductButton() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      <button
        className="w-80 self-end rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
        onClick={openModal}
      >
        Add
      </button>
      <CreateProductModal isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
}
