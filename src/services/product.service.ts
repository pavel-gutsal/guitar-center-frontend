import { useQuery } from '@tanstack/react-query';
import { get } from '../api/common';
import { Product } from '../types';

export const useGetProduct = (model: string | undefined) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [model],
    queryFn: () => get<Product>(`catalogue/product/${model}`),
    enabled: !!model,
  });

  return { data, isLoading, isError, error };
};
