import { useNavigate } from 'react-router-dom';
import { ChevronRight } from '../../../../assets/SVG/ChevronRight';
import { ROUTES, SCROLL_ID } from '../../../../constants';
import { Category } from '../../../../types';
import { BlockHomeButtonIcon } from '../Buttons/BlockHomeButtonIcon';
import { BlockLinkCart } from '../Buttons/BlockLinkCart';
import { BlockLinkLaptops } from '../Buttons/BlockLinkLaptops';
import { BlockLinkLiked } from '../Buttons/BlockLinkLiked';
import { BlockLinkPhones } from '../Buttons/BlockLinkPhones';
import { BlockLinkTablet } from '../Buttons/BlockLinkTablet';
import { SModel, SRouterBar } from './RouterBar.styles';

interface Props {
  category: Category;
  model?: string | undefined;
}

export const RouterBar = ({ category, model }: Props) => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate(ROUTES.HOME);
  };

  const navigateCategory = () => {
    switch (category) {
      case Category.phones:
        navigate(ROUTES.PHONES);
        break;
      case Category.tablets:
        navigate(ROUTES.TABLETS);
        break;
      case Category.laptops:
        navigate(ROUTES.LAPTOPS);
        break;
      case Category.liked:
        navigate(ROUTES.LIKED);
        break;
      case Category.cart:
        navigate(ROUTES.CART);
        break;
      default:
        break;
    }
  };

  return (
    <SRouterBar id={SCROLL_ID.PRODUCT_TAB}>
      <BlockHomeButtonIcon onClick={navigateHome} />
      <ChevronRight />
      {category === Category.phones && (
        <BlockLinkPhones onClick={navigateCategory} />
      )}
      {category === Category.tablets && (
        <BlockLinkTablet onClick={navigateCategory} />
      )}
      {category === Category.laptops && (
        <BlockLinkLaptops onClick={navigateCategory} />
      )}
      {category === Category.liked && (
        <BlockLinkLiked onClick={navigateCategory} />
      )}
      {category === Category.cart && (
        <BlockLinkCart onClick={navigateCategory} />
      )}
      {model && (
        <>
          <ChevronRight />
          <SModel>{model}</SModel>
        </>
      )}
    </SRouterBar>
  );
};
