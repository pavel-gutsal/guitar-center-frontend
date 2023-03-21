import { IMAGES } from '../../../../assets';
import { SBlob, SCategoryBlob, SWrapper } from './CategoryBlob.style';

export const CategoryBlob = () => {
  return (
    <SCategoryBlob>
      <SWrapper>
        <SBlob>
          <img src={IMAGES.ANIMATED.BLOBCATEGORY} alt="blob" />
        </SBlob>
        <SBlob>
          <img src={IMAGES.ANIMATED.BLOBCATEGORY} alt="blob" />
        </SBlob>
      </SWrapper>
    </SCategoryBlob>
  );
};
