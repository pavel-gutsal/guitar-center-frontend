import { Rating } from '@mui/material';
import { IMAGES } from '../../../../assets';
import { Review } from '../../types';
import { ReviewBody } from './ReviewBody';
import {
  SReview,
  SGroupHorizontal,
  SReviewList,
  SAuthor,
  SRatingValue,
  SNameGroup,
  SRatingGroup,
  SAuthorGroup,
  SIcon,
  SBadge,
  SPostDate,
  SVerticalGroup,
} from './ReviewList.style';

interface Props {
  reviews: Review[];
}

export const ReviewList = ({ reviews }: Props) => {
  return (
    <SReviewList>
      {reviews.map((review) => (
        <SReview key={review.id}>
          <SGroupHorizontal>
            <SAuthorGroup>
              <SIcon src={IMAGES.PERSONICON} />
              <SNameGroup>
                <SAuthor>{review.author}</SAuthor>
                <SBadge>customer review</SBadge>
              </SNameGroup>
            </SAuthorGroup>
            <SVerticalGroup>
              <SPostDate>{review.date.formatted}</SPostDate>
              <SRatingGroup>
                <Rating
                  name="half-rating-read"
                  defaultValue={review.rating}
                  precision={0.5}
                  readOnly
                />
                <SRatingValue>{review.rating}</SRatingValue>
              </SRatingGroup>
            </SVerticalGroup>
          </SGroupHorizontal>
          <ReviewBody review={review} />
        </SReview>
      ))}
    </SReviewList>
  );
};
