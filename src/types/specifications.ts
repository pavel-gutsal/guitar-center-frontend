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

export interface Product {
  category: CategoryUpercase;
  comments: number;
  specsBriefIcon: SpecsBrief;
  photos: string[];
  specifications: Specification;
}
