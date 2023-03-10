import { SelectOptions } from '../types';

export const PATH = {
  SIGNUP: 'auth/signup',
  LOGIN: 'auth/signin',
};

export enum ROUTES {
  SIGNUP = '/signup',
  LOGIN = '/login',
  HOME = '/home',
  PHONES = '/phones',
  PHONE_PRODUCT = '/phones:model',
  TABLETS = '/tablets',
  TABLETS_PRODUCT = '/tablets:model',
  LAPTOPS = '/laptops',
  LAPTOPS_PRODUCT = '/laptops:model',
}

export enum BlockSectionsContent {
  phones = 'Smart Phones',
  tablets = 'Tablets',
  laptops = 'Laptops',
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
