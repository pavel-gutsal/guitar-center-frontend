export enum Category {
  phones = 'phones',
  tablets = 'tablets',
  laptops = 'laptops',
  liked = 'liked',
  cart = 'cart',
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

export interface ShoppintCard {
  number: number;
  name: string;
  details: CatalogItem | undefined;
}

export interface ModifiedCatalogItem extends CatalogItem {
  liked: boolean;
  inCart: boolean;
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

export enum ModifyOption {
  INCART = 'inCart',
  ISLIKED = 'isLiked',
}
