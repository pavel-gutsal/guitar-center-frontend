/* eslint-disable consistent-return */
import { IMAGES } from '../../../../../assets';
import { Review } from '../../../types';
import {
  SMainText,
  SReviewBody,
  SProsAndCons,
  SGroupHorizontal,
  SImage,
  SText,
} from './ReviewBody.style';

interface Props {
  review: Review;
}

export const ReviewBody = ({ review }: Props) => {
  return (
    <SReviewBody>
      <SMainText>{review.message}</SMainText>
      <SProsAndCons>
        {review.pros.length > 0 &&
          review.pros.map((positive, index) => {
            if (!positive) return;
            return (
              <SGroupHorizontal key={index}>
                <SImage src={IMAGES.POSITIVE} />
                <SText>{positive}</SText>
              </SGroupHorizontal>
            );
          })}
        {review.cons.length > 0 &&
          review.cons.map((negative, index) => {
            if (!negative) return;
            return (
              <SGroupHorizontal key={index}>
                <SImage src={IMAGES.NEGATIVE} />
                <SText>{negative}</SText>
              </SGroupHorizontal>
            );
          })}
      </SProsAndCons>
    </SReviewBody>
  );
};
