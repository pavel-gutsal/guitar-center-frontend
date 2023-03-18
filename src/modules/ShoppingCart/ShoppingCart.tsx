import { useState, useMemo } from 'react';
import { isNil } from 'lodash';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { SBlockContainer } from '../../pages/BlockContent/BlockContent.styles';
import { useGetCatalogByModel } from '../../services/catalogue.service';
import {
  Cart,
  Category,
  ModifyOption,
  PaymentConfig,
  ShoppintCard,
} from '../../types';
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
import { CheckoutModal } from './CheckoutModal';
import { useStripeConfig } from '../../hooks/useStripeConfig.hook';

export const ShoppingCart = () => {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [stripeConfig, setStripeConfig] = useState<
    PaymentConfig | null | undefined
  >(null);
  const [fadeOut, setFadeOut] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const category = location.pathname.slice(1) as Category;

  const { user, bearToken } = useAppSelector((state) => state.auth);
  const { userCartExist, likedArray, cartArray } = useAppSelector(
    (state) => state.userCart
  );

  const { modelList } = useGetCatalogByModel({
    category: Category.cart,
    user,
    bearToken,
    list: cartArray,
  });

  const { updateUserCart } = useUpdateUserCart(user, bearToken);

  const { updateUserCartNumber } = useUpdateFullyUserCart(user, bearToken);

  const { fetchPaymentIntent, loading: loadingStripeConfig } =
    useStripeConfig();

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
      }, 400);
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

  const openCheckoutModalHanler = async () => {
    const response = await fetchPaymentIntent();

    if (
      isNil(response) ||
      isNil(response?.clientSecret) ||
      isNil(response?.publishableKey) ||
      isNil(response?.paymentID)
    ) {
      toast.error(`Failed to proccess order!`, {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'dark',
      });
    } else {
      setCheckoutModalOpen(true);
      setStripeConfig(response);
      document.body.style.overflowY = 'hidden';
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
                openCheckoutModalHanler={openCheckoutModalHanler}
                loading={loadingStripeConfig}
              />
            )}
          </SWrapper>
          {!fadeOut && cartArray?.length === 0 && <EmptyCart />}
        </SBlock>
        {checkoutModalOpen &&
          stripeConfig &&
          normilizedList &&
          normilizedList.length > 0 && (
            <CheckoutModal
              setCheckoutModalOpen={setCheckoutModalOpen}
              stripeConfig={stripeConfig}
              normilizedList={normilizedList}
            />
          )}
      </SBlockContainer>
    </SShoppingCart>
  );
};
