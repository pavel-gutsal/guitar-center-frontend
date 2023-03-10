// eslint-disable-next-line import/no-cycle
import { laptops } from './laptops';
import { phones } from './phones';
import { tablets } from './tablets';
import { productPhones } from './product-phone';

export const database = {
  phones,
  tablets,
  laptops,
  productPhones,
};
