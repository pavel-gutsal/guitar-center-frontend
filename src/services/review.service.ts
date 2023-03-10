import { useQuery, useQueryClient } from '@tanstack/react-query';
import { get } from '../api/common';
import { QueryKeys } from '../constants';
import { Review, SortByReviews } from '../modules/Product/types';
import { Category } from '../types';

const sortData = (data: Review[], sortBy: SortByReviews): Review[] => {
  if (sortBy === SortByReviews.RATING) {
    return data.sort((a, b) => b.rating - a.rating);
  }

  return data.sort((a, b) => b.date.normalised - a.date.normalised);
};

interface Props {
  category: Category;
  limit: number;
  sortBy: SortByReviews;
}

export const useGetReview = ({ category, limit }: Props) => {
  const queryClient = useQueryClient();

  const sortReviews = (sortBy: SortByReviews) => {
    const data: Review[] | undefined = queryClient.getQueryData([
      QueryKeys.REVIEWS,
      category,
    ]);

    if (data && data.length > 0) {
      queryClient.setQueryData(
        [QueryKeys.REVIEWS, category],
        sortData(data, sortBy)
      );
    }
  };

  const { data, isLoading, isError, error } = useQuery(
    [QueryKeys.REVIEWS, category],
    () =>
      get<Review[]>(`${QueryKeys.REVIEWS}?device=${category}&limit=${limit}`),
    {
      onSuccess: (response: Review[]) => {
        queryClient.setQueryData(
          [QueryKeys.REVIEWS, category],
          sortData(response, SortByReviews.LATEST)
        );
      },
    }
  );

  return { data, isLoading, isError, error, sortReviews };
};
