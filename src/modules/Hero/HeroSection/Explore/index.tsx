import { IMAGES } from '../../../../assets';
import { SCROLL_ID } from '../../../../constants';
import { scrollToView } from '../../../utils';
import { SExplore, SText, SButton, SArrowDown } from './Explore.style';

export const Explore = () => {
  const navigateToCategory = () => {
    scrollToView(SCROLL_ID.CATEGORY);
  };

  return (
    <SExplore>
      <SButton onClick={navigateToCategory}>
        <SText>Explore</SText>
        <SArrowDown src={IMAGES.ARROWDOWN} />
      </SButton>
    </SExplore>
  );
};
