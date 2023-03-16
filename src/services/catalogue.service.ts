import { useQuery } from '@tanstack/react-query';
import { isNil } from 'lodash';
import { get, post } from '../api/common';
import { PATH } from '../constants';
import { Cart, CatalogItem, Catalogue, Category, SortBy } from '../types';

interface GetCatalogueProps {
  category: Category;
  page: number;
  limit: number;
  sortBy: SortBy;
}

export const useGetCatalogue = ({
  category,
  page,
  limit,
  sortBy,
}: GetCatalogueProps) => {
  const { data, isLoading, isError, error } = useQuery(
    [category, page, limit, sortBy],
    () =>
      get<Catalogue>(
        `catalogue/${category}?page=${page}&limit=${limit}&sortBy=${sortBy}`
      )
  );

  return { data, isLoading, isError, error };
};

interface GetCatalogueByModelProps {
  category: Category;
  user: string | null;
  bearToken: string | null;
  list: string[] | Cart[] | null;
}

export const useGetCatalogByModel = ({
  category,
  user,
  bearToken,
  list,
}: GetCatalogueByModelProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [category, user],
    queryFn: () =>
      post(
        category === Category.liked ? PATH.LIKED : PATH.SHOP_CART,
        { list },
        bearToken
      ),
    enabled:
      !isNil(user) && !isNil(bearToken) && !isNil(list) && list?.length > 0,
  });

  const modelList = data as CatalogItem[];

  return { modelList, isLoading, isError, error };
};
