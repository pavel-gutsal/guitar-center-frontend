import { Category } from '../../../types';

export const enum Action {
  FORWARD_START = 'forward Start',
  FORWARD_FINISH = 'forward Finish',
  BACKWARD_START = 'backward Start',
  BACKWARD_FINISH = 'backward Finish',
  SELECT_START = 'select picture START',
  SELECT_FINISH = 'select picture FINISH',
}

export interface Carousel {
  position: {
    prev: number | null;
    current: number | null;
    next: number | null;
  };
  index: {
    prev: number | null;
    current: number | null;
    next: number | null;
  };
  length: number | null;
}

export const enum Movements {
  FORWARD = 'move forward',
  BACKWARD = 'move backward',
  SELECT = 'select',
}

export const enum SortByReviews {
  LATEST = 'date',
  RATING = 'rating',
}

export interface TDate {
  formatted: string;
  normalised: number;
}

export interface Review {
  id: string;
  device: Category;
  author: string;
  date: TDate;
  rating: number;
  message: string;
  pros: string[];
  cons: string[];
}
