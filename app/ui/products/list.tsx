'use client';

import { useEffect, useState } from 'react';
import DeleteProductModal from './delete-product-modal';
import ProductItem from './product-item';
import { ProductsService } from '@/app/lib/services/products-service';
import useDebounce from '@/app/lib/hooks';
import { Product } from '@/app/lib/entities';
import Loading from '@/app/dashboard/products/loading';
import AddProductButton from './add-product-button';
import SearchProductInput from './search-product-input';

export default function ProductList() {
  const [selectedProductId, setSelectedProductId] = useState('');
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const debounceSearchTerm = useDebounce(searchTerm, 600);

  const productsService = new ProductsService();

  useEffect(() => {
    async function getProducts() {
      const res = await productsService.getAll(debounceSearchTerm);
      if (res.errorMsg !== null) {
        throw res.errorMsg;
      }
      setProducts(res.products);
      setLoading(false);
    }
    if (!isOpenDeleteModal) {
      setLoading(true);
      getProducts();
    }
  }, [debounceSearchTerm, isOpenDeleteModal]);

  function openDeleteModal(id: string) {
    setSelectedProductId(id);
    setIsOpenDeleteModal(true);
  }

  function closeDeleteModal() {
    setIsOpenDeleteModal(false);
  }

  async function deleteProduct() {
    await productsService.delete(selectedProductId);
    alert('Product deleted successfully!');
    closeDeleteModal();
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <DeleteProductModal
        isOpen={isOpenDeleteModal}
        onClose={closeDeleteModal}
        onDelete={deleteProduct}
      />
      <ul>
        <SearchProductInput value={searchTerm} onChange={handleSearchChange} />
        {loading ? (
          <Loading />
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductItem
              key={product.id}
              {...product}
              onDelete={openDeleteModal}
            />
          ))
        ) : (
          <p className="m-52 text-center text-2xl text-gray-600">
            No products found.
          </p>
        )}
      </ul>
      <AddProductButton />
    </>
  );
}
