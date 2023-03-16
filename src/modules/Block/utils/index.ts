import { isNil } from 'lodash';
import {
  Cart,
  CatalogItem,
  // Catalogue,
  ModifiedCatalogItem,
} from '../../../types';

interface Props {
  catalogue: CatalogItem[] | undefined;
  userCartExist: boolean;
  cartArray: Cart[] | null;
  likedArray: string[] | null;
}

export const normalizeCatalogue = ({
  catalogue,
  userCartExist,
  cartArray,
  likedArray,
}: Props): ModifiedCatalogItem[] | undefined => {
  if (isNil(catalogue) || catalogue?.length === 0) {
    return undefined;
  }

  return catalogue.map((cart: CatalogItem): ModifiedCatalogItem => {
    let liked = false;
    let inCart = false;

    if (userCartExist && likedArray && likedArray.length > 0) {
      liked = likedArray?.includes(cart.model);
    }

    if (userCartExist && cartArray && cartArray.length > 0) {
      inCart = cartArray.some((el) => el.name === cart.model);
    }

    return { ...cart, liked, inCart };
  });
};
