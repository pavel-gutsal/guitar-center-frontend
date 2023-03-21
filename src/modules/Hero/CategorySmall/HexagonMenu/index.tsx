import { IMAGES } from '../../../../assets';
import {
  SContainer,
  SGroupFirst,
  SHexagonMenu,
  SImage,
  SGroupLast,
  SHexagon,
  SContent,
} from './HexagonMenu.style';

export const HexagonMenu = () => {
  return (
    <SHexagonMenu>
      <SContainer>
        <SGroupFirst>
          <SHexagon>
            <SContent>
              <SImage src={IMAGES.CATEGORY_SVG.PHONE} alt="phone" />
            </SContent>
          </SHexagon>
          <SHexagon>
            <SContent>
              <SImage src={IMAGES.CATEGORY_SVG.TABLET} alt="tablet" />
            </SContent>
          </SHexagon>
          <SHexagon>
            <SContent>
              <SImage src={IMAGES.CATEGORY_SVG.LAPTOP} alt="laptop" />
            </SContent>
          </SHexagon>
        </SGroupFirst>
        <SGroupLast>
          <SHexagon>
            <SContent>
              <SImage src={IMAGES.CATEGORY_SVG.HEART} alt="heart" />
            </SContent>
          </SHexagon>
          <SHexagon>
            <SContent>
              <SImage src={IMAGES.CATEGORY_SVG.CART} alt="cart" />
            </SContent>
          </SHexagon>
        </SGroupLast>
      </SContainer>
    </SHexagonMenu>
  );
};
