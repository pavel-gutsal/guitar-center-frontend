export enum Category {
  phones = 'phones',
  tablets = 'tablets',
  laptops = 'laptops',
}

export interface CatalogItem {
  _id: number;
  category: Category;
  model: string;
  name: string;
  mainPhoto: string;
  rating: number;
  totalPrice: number;
  discountedPrice: number;
  bestSeller: boolean;
  shortSpecs: string[][];
}

export interface Catalogue {
  array: CatalogItem[];
  length: number;
}

export enum Limit {
  EIGHT = 8,
  SIXTEEN = 16,
  TWENTY_FOUR = 24,
  THIRTY_TWO = 32,
}

export enum SortBy {
  RATING = 'rating',
  DISCOUNTEDPRICE = 'discountedPrice',
  POPULARITY = 'bestSeller',
  NEWEST = 'createdAt',
}

export interface SelectOptions {
  [key: string]: {
    label: string;
    value: string;
  };
}
