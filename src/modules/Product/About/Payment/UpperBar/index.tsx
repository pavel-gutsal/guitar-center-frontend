import { Rating } from '@mui/material';
import { Comment } from '../../../../../assets/SVG/Comment';
import { Correct } from '../../../../../assets/SVG/Correct';
import { SRatingSX } from '../../../../Block/Cart/Cart.styles';
import {
  SAvailable,
  SAvailableText,
  SCommentText,
  SGroup,
  SHorizontalGroup,
  SRating,
  SRatingText,
  SReviews,
} from './UpperBar.styles';

interface Props {
  rating: number;
  comments: number;
}

export const UpperBar = ({ rating, comments }: Props) => {
  return (
    <SHorizontalGroup>
      <SAvailable>
        <Correct />
        <SAvailableText>Is avaialble</SAvailableText>
      </SAvailable>
      <SGroup>
        <SRating>
          <Rating
            name="size-large"
            value={rating}
            precision={0.1}
            sx={SRatingSX}
            readOnly
          />
          <SRatingText>{rating}</SRatingText>
        </SRating>
        <SReviews>
          <Comment />
          <SCommentText>{`${comments} reviews`} </SCommentText>
        </SReviews>
      </SGroup>
    </SHorizontalGroup>
  );
};
