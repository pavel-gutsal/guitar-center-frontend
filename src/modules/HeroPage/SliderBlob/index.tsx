import { IMAGES } from '../../../assets';
import { SBlob, SSliderBlob, SWrapper } from './SliderBlob.style';

export const SliderBlob = () => {
  return (
    <SSliderBlob>
      <SWrapper>
        <SBlob>
          <img src={IMAGES.ANIMATED.BLOB} alt="blob" />
        </SBlob>
        <SBlob>
          <img src={IMAGES.ANIMATED.BLOB} alt="blob" />
        </SBlob>
      </SWrapper>
    </SSliderBlob>
  );
};
