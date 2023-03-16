import { useMemo, useState } from 'react';
import { isNil } from 'lodash';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  toggleInCart,
  toggleLike,
} from '../../features/userCart/UserCartReducer';
import { SBlockContainer } from '../../pages/BlockContent/BlockContent.styles';
import { useGetCatalogByModel } from '../../services/catalogue.service';
import { Category, ModifiedCatalogItem, ModifyOption } from '../../types';
import { SBlock } from '../Block/Block.styles';
import { BlockHead } from '../Block/BlockHead';
import { SCartContainer } from '../Block/CardContainer/CardContainer.styles';
import { Cart } from '../Block/Cart';
import { CartSceleton } from '../Block/CartSceleton';
import { normalizeCatalogue } from '../Block/utils';
import { useUpdateUserCart } from '../../services/userCart.service';
import { SCartWrapper, SLiked } from './Liked.style';
import { modalHandle } from '../../features/Auth/AuthReducer';
import { EmptyWishList } from './EmptyWishList';

export const Liked = () => {
  const [emptyPage, setEmptyPage] = useState(false);
  const dispatch = useAppDispatch();

  const location = useLocation();
  const category = location.pathname.slice(1) as Category;
  const { user, bearToken } = useAppSelector((state) => state.auth);
  const { userCartExist, likedArray, cartArray } = useAppSelector(
    (state) => state.userCart
  );

  const { modelList, isLoading, isError, error } = useGetCatalogByModel({
    category: Category.liked,
    user,
    bearToken,
    list: likedArray,
  });

  const { updateUserCart, updateUserCartLoading, updateUserCartIsError } =
    useUpdateUserCart(user, bearToken);

  const modifiedCatalogue: ModifiedCatalogItem[] | undefined = useMemo(
    (): ModifiedCatalogItem[] | undefined =>
      normalizeCatalogue({
        userCartExist,
        cartArray,
        likedArray,
        catalogue: modelList,
      }),
    [userCartExist, cartArray, likedArray, modelList]
  );

  const openModalHandler = () => {
    dispatch(modalHandle(true));
    document.body.style.overflowY = ' hidden';
  };

  const toggleLiked = (model: string) => {
    updateUserCart({ model, option: ModifyOption.ISLIKED });
    dispatch(toggleLike(model));
  };

  const onHeartClick = (model: string) => {
    if (isNil(user) || isNil(bearToken)) {
      openModalHandler();
    } else if (likedArray?.length === 1) {
      setEmptyPage(true);
      setTimeout(() => {
        toggleLiked(model);
      }, 350);
    } else {
      toggleLiked(model);
    }
  };

  const onBuyClick = (model: string) => {
    if (isNil(user) || isNil(bearToken)) {
      openModalHandler();
    } else {
      dispatch(toggleInCart(model));
      updateUserCart({ model, option: ModifyOption.INCART });
    }
  };

  return (
    <SLiked>
      <SBlockContainer>
        <SBlock>
          <BlockHead category={category} />
          {userCartExist && likedArray && likedArray.length > 0 && (
            <SCartContainer
              cartsNumber={likedArray.length || 1}
              paddingTop="20px"
            >
              {likedArray &&
                likedArray.length > 0 &&
                isLoading &&
                likedArray.map((el, index) => <CartSceleton key={index} />)}
              {modifiedCatalogue &&
                modifiedCatalogue.map((cart) => {
                  return (
                    <SCartWrapper
                      key={cart.model}
                      liked={cart.liked}
                      emptyPage={emptyPage}
                    >
                      <Cart
                        product={cart}
                        onHeartClick={() => onHeartClick(cart.model)}
                        onBuyClick={() => onBuyClick(cart.model)}
                        updateUserCartLoading={updateUserCartLoading}
                      />
                    </SCartWrapper>
                  );
                })}
            </SCartContainer>
          )}
          {userCartExist && likedArray && likedArray.length === 0 && (
            <EmptyWishList />
          )}
        </SBlock>
      </SBlockContainer>
    </SLiked>
  );
};
