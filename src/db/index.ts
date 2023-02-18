export interface CatalogItem {
  id: number;
  model: string;
  mainPhoto: string;
  rating: number;
  totalPrice: number;
  discount: number | null;
  bestSeller: boolean;
  ShortSpecs: string[][];
}

export const database = {
  phones: [
    {
      id: 1,
      model: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray (SM-A736BZAHSEK)',
      mainPhoto:
        'https://content.rozetka.com.ua/goods/images/big_tile/263857428.jpg',
      rating: 4.5,
      bestSeller: false,
      totalPrice: 550,
      discount: 0.2,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 2,
      model: 'realme 10 4G 8/128GB (Rush Black)',
      mainPhoto:
        'https://www.ctrs.com.ua/_next/image/?url=https://i.citrus.world/imgcache/size_180/uploads/shop/d/3/d3377115cec2bf49ea5b21a3ee6a0c2a.jpg&w=256&q=60',
      rating: 4.3,
      bestSeller: false,
      totalPrice: 450,
      discount: null,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 3,
      model: 'OPPO A17k 3/64GB (Blue)',
      mainPhoto:
        'https://i.citrus.world/imgcache/size_180/uploads/shop/b/8/b8236485187b5143fcc0d5c8bd6a3f10.jpg',
      rating: 4.7,
      bestSeller: true,
      totalPrice: 350,
      discount: null,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 4,
      model: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray (SM-A736BZAHSEK)',
      mainPhoto:
        'https://content.rozetka.com.ua/goods/images/big_tile/263857428.jpg',
      rating: 4.5,
      bestSeller: true,
      totalPrice: 550,
      discount: null,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 5,
      model: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray (SM-A736BZAHSEK)',
      mainPhoto:
        'https://content.rozetka.com.ua/goods/images/big_tile/263857428.jpg',
      rating: 4.5,
      bestSeller: true,
      totalPrice: 550,
      discount: 0.2,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 6,
      model: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray (SM-A736BZAHSEK)',
      mainPhoto:
        'https://content.rozetka.com.ua/goods/images/big_tile/263857428.jpg',
      rating: 4.5,
      bestSeller: true,
      totalPrice: 550,
      discount: null,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 7,
      model: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray (SM-A736BZAHSEK)',
      mainPhoto:
        'https://content.rozetka.com.ua/goods/images/big_tile/263857428.jpg',
      rating: 4.5,
      bestSeller: true,
      totalPrice: 550,
      discount: 0.2,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 8,
      model: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray (SM-A736BZAHSEK)',
      mainPhoto:
        'https://content.rozetka.com.ua/goods/images/big_tile/263857428.jpg',
      rating: 4.5,
      bestSeller: true,
      totalPrice: 550,
      discount: 0.2,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 9,
      model: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray (SM-A736BZAHSEK)',
      mainPhoto:
        'https://content.rozetka.com.ua/goods/images/big_tile/263857428.jpg',
      rating: 4.5,
      bestSeller: true,
      totalPrice: 550,
      discount: 0.2,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 10,
      model: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray (SM-A736BZAHSEK)',
      mainPhoto:
        'https://content.rozetka.com.ua/goods/images/big_tile/263857428.jpg',
      rating: 4.5,
      bestSeller: true,
      totalPrice: 550,
      discount: 0.2,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 11,
      model: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray (SM-A736BZAHSEK)',
      mainPhoto:
        'https://content.rozetka.com.ua/goods/images/big_tile/263857428.jpg',
      rating: 4.5,
      bestSeller: true,
      totalPrice: 550,
      discount: 0.2,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 12,
      model: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray (SM-A736BZAHSEK)',
      mainPhoto:
        'https://content.rozetka.com.ua/goods/images/big_tile/263857428.jpg',
      rating: 4.5,
      bestSeller: true,
      totalPrice: 550,
      discount: 0.2,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
    {
      id: 13,
      model: 'Samsung Galaxy A73 2022 A736B 8/256GB Gray (SM-A736BZAHSEK)',
      mainPhoto:
        'https://content.rozetka.com.ua/goods/images/big_tile/263857428.jpg',
      rating: 4.5,
      bestSeller: true,
      totalPrice: 550,
      discount: 0.2,
      ShortSpecs: [
        ['Display', 'Super AMOLED Display'],
        ['Screen Size', '6.5 inch'],
        ['Weights', '189g'],
        ['Processor', 'Mediatek Helio G96'],
        ['Camera', '108 Mp + 8 Mp + 2 Mp + 2 Mp'],
        ['Battery', '5000mAh'],
      ],
    },
  ] as CatalogItem[],
};
