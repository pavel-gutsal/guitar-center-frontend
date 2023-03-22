import { useAppDispatch } from '../../../../../app/hooks';
import { Comment } from '../../../../../assets/SVG/Comment';
import { SCROLL_ID, Tab } from '../../../../../constants';
import { changeTab } from '../../../../../features/Tab/TabReducer';
import { scrollToView } from '../../../../utils';
import { IsAvailableLabel } from '../IsAvailableLabel';
import { RatingLabel } from '../RatingLabel';
import {
  SCommentText,
  SGroup,
  SHorizontalGroup,
  SReviews,
} from './UpperBar.styles';

interface Props {
  rating: number;
  comments: number;
}

export const UpperBar = ({ rating, comments }: Props) => {
  const dispatch = useAppDispatch();

  const navigateToReview = () => {
    dispatch(changeTab(Tab.REVIEWS));

    scrollToView(SCROLL_ID.PRODUCT_TAB);
  };

  return (
    <SHorizontalGroup>
      <IsAvailableLabel />
      <SGroup>
        <RatingLabel rating={rating} />
        <SReviews onClick={navigateToReview}>
          <Comment />
          <SCommentText>{`${comments} reviews`} </SCommentText>
        </SReviews>
      </SGroup>
    </SHorizontalGroup>
  );
};
