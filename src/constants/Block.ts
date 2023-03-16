import { SelectOptions } from '../types';

export const PATH = {
  SIGNUP: 'auth/signup',
  LOGIN: 'auth/signin',
  VALIDATE: 'auth/validate',
  USERCART: 'usercart',
  LIKED: 'usercart/liked',
  SHOP_CART: 'usercart/shop-cart',
  CREATE_NEW_CART: 'usercart/create-new',
  UPDATE_CART_NUMBER: 'usercart/cart',
  CHECKOUT: 'stripe',
};

export enum ROUTES {
  HOME = '/home',
  PHONES = '/phones',
  PHONE_PRODUCT = '/phones:model',
  TABLETS = '/tablets',
  TABLETS_PRODUCT = '/tablets:model',
  LAPTOPS = '/laptops',
  LAPTOPS_PRODUCT = '/laptops:model',
  LIKED = '/liked',
  LIKED_MODEL = '/liked:model',
  CART = '/cart',
  CART_MODEL = '/cart:model',
}

export enum BlockSectionsContent {
  phones = 'Smart Phones',
  tablets = 'Tablets',
  laptops = 'Laptops',
  liked = 'Wish List',
  cart = 'Shopping Cart',
}

export const BlockSortBy: SelectOptions = {
  popularity: {
    label: 'Popularity',
    value: 'bestSeller',
  },
  rating: {
    label: 'Rating',
    value: 'rating',
  },
  cheapest: {
    label: 'Price: Low to High',
    value: 'discountedPrice',
  },
  newest: {
    label: 'Newest Arrivals',
    value: 'createdAt',
  },
};

export const CartsPerPage = {
  EIGHT: 8,
  SIXTEEN: 16,
  TWENTY_FOUR: 24,
  THIRTY_TWO: 32,
};

export const CartPerPage: SelectOptions = {
  EIGHT: {
    label: '8',
    value: '8',
  },
  SIXTEEN: {
    label: '16',
    value: '16',
  },
  TWENTY_FOUR: {
    label: '24',
    value: '24',
  },
  THIRTY_TWO: {
    label: '32',
    value: '32',
  },
};

export const SCROLL_ID = {
  PRODUCT_TAB: 'Router__Bar__Top_Global',
};
