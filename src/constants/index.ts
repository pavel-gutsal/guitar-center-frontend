export const PATH = {
  SIGNUP: 'auth/signup',
  LOGIN: 'auth/signin',
};

export enum ROUTES {
  SIGNUP = '/signup',
  LOGIN = '/login',
  HOME = '/home',
  PHONES = '/phones',
  TABLETS = '/tablets',
  LAPTOPS = '/laptops',
}

export enum BlockSectionsContent {
  phones = 'Smart Phones',
  tablets = 'Tablets',
  laptops = 'Laptops',
}

export const BlockSortBy = {
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
