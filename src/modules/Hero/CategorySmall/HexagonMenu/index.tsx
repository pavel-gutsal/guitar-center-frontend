import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';
import { IMAGES } from '../../../../assets';
import { ROUTES } from '../../../../constants';
import { useLikedCartRoute } from '../../../../hooks/useLikeCartRoute.hook';
import {
  SContainer,
  SGroupFirst,
  SHexagonMenu,
  SImage,
  SGroupLast,
  SHexagon,
  SContent,
} from './HexagonMenu.style';
import { reset as catalogueQueryReset } from '../../../../features/CatalogueQuery/CatalogueQueryReducer';

export const HexagonMenu = () => {
  const { ref: hexagonRef, inView: HexagonInView } = useInView({
    threshold: 1,
    delay: 300,
    triggerOnce: true,
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { likedSectionNavigate, inCartSectionNavigate } = useLikedCartRoute();

  const navigateHandler = (path: string) => {
    navigate(path);
    dispatch(catalogueQueryReset());
  };

  return (
    <SHexagonMenu>
      <SContainer ref={hexagonRef}>
        <SGroupFirst>
          <SHexagon
            onClick={() => navigateHandler(ROUTES.PHONES)}
            inView={HexagonInView}
            delay={3}
          >
            <SContent>
              <SImage src={IMAGES.CATEGORY_SVG.PHONE} alt="phone" />
            </SContent>
          </SHexagon>
          <SHexagon
            onClick={() => navigateHandler(ROUTES.TABLETS)}
            inView={HexagonInView}
            delay={5}
          >
            <SContent>
              <SImage src={IMAGES.CATEGORY_SVG.TABLET} alt="tablet" />
            </SContent>
          </SHexagon>
          <SHexagon
            onClick={() => navigateHandler(ROUTES.LAPTOPS)}
            inView={HexagonInView}
            delay={1}
          >
            <SContent>
              <SImage src={IMAGES.CATEGORY_SVG.LAPTOP} alt="laptop" />
            </SContent>
          </SHexagon>
        </SGroupFirst>
        <SGroupLast>
          <SHexagon
            onClick={inCartSectionNavigate}
            inView={HexagonInView}
            delay={2}
          >
            <SContent>
              <SImage src={IMAGES.CATEGORY_SVG.HEART} alt="heart" />
            </SContent>
          </SHexagon>
          <SHexagon
            onClick={likedSectionNavigate}
            inView={HexagonInView}
            delay={4}
          >
            <SContent>
              <SImage src={IMAGES.CATEGORY_SVG.CART} alt="cart" />
            </SContent>
          </SHexagon>
        </SGroupLast>
      </SContainer>
    </SHexagonMenu>
  );
};
