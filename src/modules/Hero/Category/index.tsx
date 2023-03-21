import { IMAGES } from '../../../assets';
import {
  SCategory,
  SContainer,
  SButtonMobile,
  SImage,
  SButtonTablet,
  SButtonLaptop,
  SWrapper,
} from './Category.style';
import { CategoryBlob } from './CategoryBlob';
import { CategoryText } from './CategoryText';

export const Category = () => {
  return (
    <SCategory>
      <CategoryText />
      <SWrapper>
        <SContainer>
          <SButtonMobile>
            <span />
            <span />
            <span />
            <span />
            <span>
              <SImage src={IMAGES.CATEGORY.PHONE} />
            </span>
          </SButtonMobile>
          <SButtonTablet>
            <span />
            <span />
            <span />
            <span />
            <span>
              <SImage src={IMAGES.CATEGORY.Tablet} />
            </span>
          </SButtonTablet>
          <SButtonLaptop>
            <span />
            <span />
            <span />
            <span />
            <span>
              <SImage src={IMAGES.CATEGORY.LAPTOP} />
            </span>
          </SButtonLaptop>
        </SContainer>
        <CategoryBlob />
      </SWrapper>
    </SCategory>
  );
};
