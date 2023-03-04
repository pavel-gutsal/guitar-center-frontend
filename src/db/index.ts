// eslint-disable-next-line import/no-cycle
import { laptops } from './laptops';
import { phones } from './phones';
import { tablets } from './tablets';
import { product } from './product';

export const database = {
  phones,
  tablets,
  laptops,
  product,
};
