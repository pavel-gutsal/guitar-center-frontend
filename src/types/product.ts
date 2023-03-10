import { CatalogItem } from './catalogue';

export interface SpecsBrief {
  diagonal: string;
  memory?: string;
  os?: string;
  processor: string;
  ram?: string;
  gpu?: string;
  screen?: string;
  screenType?: string;
  battery?: string;
  core?: string;
  camera?: string;
  selfie?: string;
}

export enum CategoryUpercase {
  phone = 'Phone',
  tablet = 'Tablet',
  laptop = 'Laptop',
}

export interface Specification {
  [key: string]: {
    [key: string]: string;
  };
}

export interface Details {
  category: CategoryUpercase;
  model: string;
  _id: string;
  comments: number;
  specsBriefIcon: SpecsBrief;
  photos: string[];
  specifications: Specification;
}

export interface Product {
  item: CatalogItem | null;
  details: Details | null;
  error: string | null;
}
