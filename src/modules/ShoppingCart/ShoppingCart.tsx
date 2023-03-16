import { useState, useMemo } from 'react';
import { isNil } from 'lodash';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { SBlockContainer } from '../../pages/BlockContent/BlockContent.styles';
import { useGetCatalogByModel } from '../../services/catalogue.service';
import { Cart, Category, ModifyOption, ShoppintCard } from '../../types';
import { SBlock } from '../Block/Block.styles';
import { BlockHead } from '../Block/BlockHead';
import { Card } from './Card';
import { SCardContainer, SShoppingCart, SWrapper } from './ShoppingCart.style';
import { Checkout } from './Checkout';
import {
  useUpdateFullyUserCart,
  useUpdateUserCart,
} from '../../services/userCart.service';
import {
  modifyCart,
  toggleInCart,
} from '../../features/userCart/UserCartReducer';
import { EmptyCart } from './EmptyCart';
import { useCheckout } from '../../services/checkout.service';

export const ShoppingCart = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const category = location.pathname.slice(1) as Category;

  const { user, bearToken } = useAppSelector((state) => state.auth);
  const { userCartExist, likedArray, cartArray } = useAppSelector(
    (state) => state.userCart
  );

  const { modelList, isLoading, isError, error } = useGetCatalogByModel({
    category: Category.cart,
    user,
    bearToken,
    list: cartArray,
  });

  const { updateUserCart, updateUserCartLoading, updateUserCartIsError } =
    useUpdateUserCart(user, bearToken);

  const {
    updateUserCartNumber,
    updateUserCartNumberLoading,
    updateUserCartNumberIsError,
  } = useUpdateFullyUserCart(user, bearToken);

  const { checkout } = useCheckout();

  const normilizedList = useMemo<ShoppintCard[] | undefined>(() => {
    if (
      isNil(bearToken) ||
      isNil(user) ||
      isNil(userCartExist) ||
      isNil(cartArray) ||
      isNil(modelList) ||
      modelList.length === 0
    ) {
      return undefined;
    }

    return cartArray.map((cart) => {
      const details = modelList.find((model) => model.model === cart.model);
      return { ...cart, details };
    });
  }, [bearToken, user, userCartExist, cartArray, modelList]);

  const deleteCard = (model: string) => {
    updateUserCart({ model, option: ModifyOption.INCART });
    dispatch(toggleInCart(model));
  };

  const deleteHandler = (model: string) => {
    if (cartArray && cartArray.length === 1) {
      setFadeOut(true);
      setTimeout(() => {
        deleteCard(model);
        setFadeOut(false);
      }, 300);
    } else {
      deleteCard(model);
    }
  };

  const updateCartNumber = (updatedCart: Cart) => {
    if (isNil(cartArray)) return;

    updateUserCartNumber(updatedCart);

    const updatedCartArray = cartArray.map((cart) =>
      cart.model === updatedCart.model ? updatedCart : cart
    );

    dispatch(
      modifyCart({ exist: true, cart: updatedCartArray, liked: likedArray })
    );
  };

  const increaseNumberHandler = (cart: ShoppintCard) => {
    const updatedCart: Cart = { number: cart.number + 1, model: cart.model };
    updateCartNumber(updatedCart);
  };

  const decreaseNumberHandler = (cart: ShoppintCard) => {
    if (cart.number === 0) return;
    const updatedCart: Cart = { number: cart.number - 1, model: cart.model };

    updateCartNumber(updatedCart);
  };

  // make check for 0 values
  const checkoutHandler = () => {
    if (cartArray && cartArray.length > 0) {
      checkout(cartArray);
    }
  };

  return (
    <SShoppingCart>
      <SBlockContainer>
        <SBlock>
          <BlockHead category={category} />
          <SWrapper>
            <SCardContainer>
              {normilizedList &&
                normilizedList.length > 0 &&
                normilizedList.map((cart) => {
                  if (
                    isNil(cart) ||
                    isNil(cart.details) ||
                    isNil(cart.details.model)
                  )
                    return undefined;
                  return (
                    <Card
                      key={cart.details.model}
                      cart={cart}
                      deleteHandler={deleteHandler}
                      increaseNumberHandler={increaseNumberHandler}
                      decreaseNumberHandler={decreaseNumberHandler}
                    />
                  );
                })}
            </SCardContainer>
            {((normilizedList && normilizedList.length > 0) || fadeOut) && (
              <Checkout
                normilizedList={normilizedList}
                fadeOut={fadeOut}
                checkoutHandler={checkoutHandler}
              />
            )}
          </SWrapper>
          {!fadeOut && cartArray?.length === 0 && <EmptyCart />}
        </SBlock>
      </SBlockContainer>
    </SShoppingCart>
  );
};
