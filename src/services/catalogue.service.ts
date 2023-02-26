import { useQuery } from '@tanstack/react-query';
import { get } from '../api/common';
import { Catalogue, Category, SortBy } from '../types';

interface Props {
  category: Category;
  page: number;
  limit: number;
  sortBy: SortBy;
}

export const useGetCatalogue = ({ category, page, limit, sortBy }: Props) => {
  const { data, isLoading, isError, error } = useQuery(
    [category, page, limit, sortBy],
    () =>
      get<Catalogue>(
        `catalogue/${category}?page=${page}&limit=${limit}&sortBy=${sortBy}`
      )
  );

  return { data, isLoading, isError, error };
};
