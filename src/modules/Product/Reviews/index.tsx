import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { ReviewSortBy } from '../../../constants';
import { useGetReview } from '../../../services/review.service';
import { CatalogItem } from '../../../types';
import { SelectElement } from '../../Block/SelectElement';
import { RatingLabel } from '../About/Payment/RatingLabel';
import { BuyCard } from '../Specs/BuyCard';
import { SortByReviews } from '../types';
import { ReviewList } from './ReviewList';
import { ReviewListSkeleton } from './ReviewList/ReviewListSkeleton';
import {
  SGroupVertical,
  SHorizontalGroup,
  SReviewBody,
  SReviews,
  STitle,
  STitleElement,
  SGroupHeader,
} from './Reviews.styles';

interface Props {
  briefData: CatalogItem;
  limit: number;
}

export const Reviews = ({ briefData, limit }: Props) => {
  const [sortBy, setSortBy] = useState(SortByReviews.LATEST);
  const {
    data: reviews,
    isLoading,
    sortReviews,
  } = useGetReview({
    category: briefData.category,
    limit,
    sortBy,
  });

  const sortByHandler = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as SortByReviews);
    sortReviews(event.target.value as SortByReviews);
  };

  return (
    <SReviews>
      <SReviewBody>
        <SGroupHeader>
          <STitle>
            <span>{`Reviews: `}</span>
            {briefData.name}
          </STitle>
          <SHorizontalGroup>
            <SGroupVertical>
              <STitleElement>Total score</STitleElement>
              <RatingLabel rating={briefData.rating} />
            </SGroupVertical>
            <SGroupVertical>
              <STitleElement>Sort by</STitleElement>
              <SelectElement
                minWidth={160}
                onChange={sortByHandler}
                selectValue={String(sortBy)}
                selectOptions={ReviewSortBy}
                defaultValue={String(ReviewSortBy.LATEST.value)}
              />
            </SGroupVertical>
          </SHorizontalGroup>
        </SGroupHeader>
        {isLoading && <ReviewListSkeleton />}
        {reviews && reviews.length > 0 && <ReviewList reviews={reviews} />}
      </SReviewBody>
      <BuyCard briefData={briefData} compact />
    </SReviews>
  );
};
