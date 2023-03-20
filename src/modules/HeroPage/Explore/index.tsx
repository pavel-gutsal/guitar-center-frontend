import { IMAGES } from '../../../assets';
import { SExplore, SText, SButton, SArrowDown } from './Explore.style';

export const Explore = () => {
  return (
    <SExplore>
      <SButton>
        <SText>Explore</SText>
        <SArrowDown src={IMAGES.ARROWDOWN} />
      </SButton>
    </SExplore>
  );
};
