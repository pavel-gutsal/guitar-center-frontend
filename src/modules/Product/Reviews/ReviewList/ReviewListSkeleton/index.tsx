import { Skeleton } from '@mui/material';
import { SkeletonSX } from '../../../../Block/CartSceleton/CartSkeleton.styles';
import { SProsAndCons, SReviewBody } from '../ReviewBody/ReviewBody.style';
import { SGroupHorizontal, SReview, SReviewList } from '../ReviewList.style';
import {
  SAuthorGroup,
  SVerticalGroup,
  SMainText,
  SkeletonTextSX,
  SkeletonTextShortSX,
  SkeletonProsSX,
  SkeletonRoundSX,
} from './ReviewListSkeleton.styles';

const ReviewSkeleton = () => {
  return (
    <SReview>
      <SGroupHorizontal>
        <SAuthorGroup>
          <Skeleton
            sx={SkeletonRoundSX}
            animation="wave"
            variant="rectangular"
          />
        </SAuthorGroup>
        <SVerticalGroup>
          <Skeleton sx={SkeletonSX} animation="wave" variant="rectangular" />
        </SVerticalGroup>
      </SGroupHorizontal>
      <SReviewBody>
        <SMainText>
          <Skeleton
            sx={SkeletonTextSX}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton
            sx={SkeletonTextSX}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton
            sx={SkeletonTextShortSX}
            animation="wave"
            variant="rectangular"
          />
        </SMainText>
        <SProsAndCons>
          <Skeleton
            sx={SkeletonProsSX}
            animation="wave"
            variant="rectangular"
          />
          <Skeleton
            sx={SkeletonProsSX}
            animation="wave"
            variant="rectangular"
          />
        </SProsAndCons>
      </SReviewBody>
    </SReview>
  );
};

export const ReviewListSkeleton = () => {
  return (
    <SReviewList>
      <ReviewSkeleton />
      <ReviewSkeleton />
      <ReviewSkeleton />
    </SReviewList>
  );
};
