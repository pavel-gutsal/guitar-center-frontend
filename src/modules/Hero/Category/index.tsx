import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useAppDispatch } from '../../../app/hooks';
import { IMAGES } from '../../../assets';
import { ROUTES, SCROLL_ID } from '../../../constants';
import {
  SCategory,
  SContainer,
  SButtonMobile,
  SImage,
  SButtonTablet,
  SButtonLaptop,
  SWrapper,
} from './Category.style';
import { reset as catalogueQueryReset } from '../../../features/CatalogueQuery/CatalogueQueryReducer';
import { CategoryBlob } from './CategoryBlob';
import { CategoryText } from './CategoryText';

export const Category = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { ref: categoryRef, inView: CategoryView } = useInView({
    threshold: 1,
    delay: 300,
    triggerOnce: true,
  });

  const navigateHandler = (path: string) => {
    navigate(path);
    dispatch(catalogueQueryReset());
  };

  return (
    <SCategory id={SCROLL_ID.CATEGORY} ref={categoryRef} inView={CategoryView}>
      <CategoryText />
      <SWrapper>
        <SContainer>
          <SButtonMobile onClick={() => navigateHandler(ROUTES.PHONES)}>
            <span />
            <span />
            <span />
            <span />
            <span>
              <SImage src={IMAGES.CATEGORY.PHONE} />
            </span>
          </SButtonMobile>
          <SButtonTablet onClick={() => navigateHandler(ROUTES.TABLETS)}>
            <span />
            <span />
            <span />
            <span />
            <span>
              <SImage src={IMAGES.CATEGORY.Tablet} />
            </span>
          </SButtonTablet>
          <SButtonLaptop onClick={() => navigateHandler(ROUTES.LAPTOPS)}>
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
