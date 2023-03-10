import { Rating } from '@mui/material';
import { SRatingSX } from '../../../../Block/Cart/Cart.styles';
import { SRating, SRatingText } from './RatingLabel.styles';

interface Props {
  rating: number;
}

export const RatingLabel = ({ rating }: Props) => {
  return (
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
  );
};
