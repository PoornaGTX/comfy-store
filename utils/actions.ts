import { ProductsResponse } from '@/utils/types';
import { customFetch } from '@/utils/customFetch';

const url = '/products?featured=true';

export const fetchProducts = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  console.log(response);

  return { ...response.data };
};
