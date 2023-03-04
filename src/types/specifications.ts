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
