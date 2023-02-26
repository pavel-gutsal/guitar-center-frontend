import { Category, CatalogItem } from '../types';

export const tablets = [
  {
    id: 1,
    category: Category.tablets,
    model: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    mainPhoto:
      'https://www.ctrs.com.ua/_next/image/?url=https://i.citrus.world/imgcache/size_180/uploads/shop/4/b/4b6cbaafd752196f5ae835f9fccef49a.jpg&w=256&q=60',
    rating: 3.3,
    bestSeller: false,
    totalPrice: 650,
    discountedPrice: 650,
    shortSpecs: [
      ['Display', 'Retina'],
      ['Screen Size', '10.2 inch'],
      ['Processor', 'Apple A13 Bionic'],
      ['CPU Cores', '6'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 2,
    category: Category.tablets,
    model: 'Samsung Galaxy Tab А8 10.5" 4/64GB LTE Dark Grey (SM-X205NZAESEK)',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/1/0/1063856dd2688ed21280e6db1bb25ec1.jpg',
    rating: 4.0,
    bestSeller: false,
    totalPrice: 285,
    discountedPrice: 285,
    shortSpecs: [
      ['Display', 'WUXGA'],
      ['Screen Size', '10.5 inch'],
      ['Processor', 'Unisoc Tiger T618'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 3,
    category: Category.tablets,
    model: 'realme Pad 10.4" 4/64GB Wi-Fi (Grey)',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1670506695-realme.jpg',
    rating: 3.3,
    bestSeller: false,
    totalPrice: 130,
    discountedPrice: 110,
    shortSpecs: [
      ['Display', 'WUXGA+'],
      ['Screen Size', '10.4 inch'],
      ['Processor', 'MediaTek Helio G80'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 4,
    category: Category.tablets,
    model: 'Lenovo Tab M10 (3rd Gen) Wi-Fi 4/64GB Storm Grey (ZAAE0027UA)',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/d/d/ddce0d3c85da1f73d7087b84e851581f.jpg',
    rating: 5,
    bestSeller: true,
    totalPrice: 240,
    discountedPrice: 200,
    shortSpecs: [
      ['Display', 'WUXGA'],
      ['Screen Size', '10.1 inch'],
      ['Processor', 'Unisoc Tiger T610'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 5,
    category: Category.tablets,
    model: 'Samsung Galaxy Tab S8 11" 8/128GB Wi-Fi Dark Grey (SM-X700NZAASEK)',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/9/7/971d223601bf85a8e008b9241bfef060.jpg',
    rating: 4.8,
    bestSeller: true,
    totalPrice: 680,
    discountedPrice: 620,
    shortSpecs: [
      ['Display', 'WQXGA'],
      ['Screen Size', '11 inch'],
      ['Processor', 'Qualcomm Snapdragon 8 Gen 1'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '128 GB'],
    ],
  },
  {
    id: 6,
    category: Category.tablets,
    model: 'Apple iPad Pro 12.9" 128GB M2 Wi-Fi Space Gray (MNXP3) 2022',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1666951077-ipad-pro-q123-cellular-5g-12-9-in-6th-generation-space-gray-pdp-image-position-1b-wwce.jpg',
    rating: 5,
    bestSeller: false,
    totalPrice: 1360,
    discountedPrice: 1280,
    shortSpecs: [
      ['Display', 'Liquid Retina XDR'],
      ['Screen Size', '12.9 inch'],
      ['Processor', 'Apple M2'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '128 GB'],
    ],
  },
  {
    id: 7,
    category: Category.tablets,
    model: 'Apple iPad mini 8.3" 64GB Wi-Fi Space Gray (MK7M3) 2021',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/a/1/a140b205d86f22cd67f394c9e0ebbe3e.jpg',
    rating: 4.8,
    bestSeller: false,
    totalPrice: 670,
    discountedPrice: 610,
    shortSpecs: [
      ['Display', 'Liquid Retina'],
      ['Screen Size', '8.3 inch'],
      ['Processor', 'Apple A15'],
      ['CPU Cores', '6'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 8,
    category: Category.tablets,
    model: `Apple iPad Air 10.9'' 64GB Wi-Fi Space Grey (MM9C3) 2022`,
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/d/3/d39d62d734897fb9eb3732905fc02682.jpg',
    rating: 4.6,
    bestSeller: false,
    totalPrice: 780,
    discountedPrice: 720,
    shortSpecs: [
      ['Display', 'Liquid Retina'],
      ['Screen Size', '10.9 inch'],
      ['Processor', 'Apple M1'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 9,
    category: Category.tablets,
    model: `Xiaomi Redmi Pad 3/64GB Moonlight Silver (VHU4206EU)`,
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1665064073-tablet-silver-7.jpg',
    rating: 4.3,
    bestSeller: false,
    totalPrice: 250,
    discountedPrice: 250,
    shortSpecs: [
      ['Display', '2K'],
      ['Screen Size', '10.61 inch'],
      ['Processor', 'MediaTek Helio G99'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 10,
    category: Category.tablets,
    model: `https://i.citrus.world/imgcache/size_180/uploads/shop/2/c/2c4155ade72c352b2b522a9a157681ca.jpg`,
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1665064073-tablet-silver-7.jpg',
    rating: 4.5,
    bestSeller: false,
    totalPrice: 890,
    discountedPrice: 800,
    shortSpecs: [
      ['Display', 'Ratina'],
      ['Screen Size', '10.2 inch'],
      ['Processor', 'Apple A13 Bionic'],
      ['CPU Cores', '6'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 11,
    category: Category.tablets,
    model: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    mainPhoto:
      'https://www.ctrs.com.ua/_next/image/?url=https://i.citrus.world/imgcache/size_180/uploads/shop/4/b/4b6cbaafd752196f5ae835f9fccef49a.jpg&w=256&q=60',
    rating: 3.3,
    bestSeller: false,
    totalPrice: 550,
    discountedPrice: 480,
    shortSpecs: [
      ['Display', 'Retina'],
      ['Screen Size', '10.2 inch'],
      ['Processor', 'Apple A13 Bionic'],
      ['CPU Cores', '6'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 12,
    category: Category.tablets,
    model: 'Samsung Galaxy Tab А8 10.5" 4/64GB LTE Dark Grey (SM-X205NZAESEK)',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/1/0/1063856dd2688ed21280e6db1bb25ec1.jpg',
    rating: 4.0,
    bestSeller: false,
    totalPrice: 285,
    discountedPrice: 285,
    shortSpecs: [
      ['Display', 'WUXGA'],
      ['Screen Size', '10.5 inch'],
      ['Processor', 'Unisoc Tiger T618'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 13,
    category: Category.tablets,
    model: 'realme Pad 10.4" 4/64GB Wi-Fi (Grey)',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1670506695-realme.jpg',
    rating: 3.3,
    bestSeller: false,
    totalPrice: 130,
    discountedPrice: 130,
    shortSpecs: [
      ['Display', 'WUXGA+'],
      ['Screen Size', '10.4 inch'],
      ['Processor', 'MediaTek Helio G80'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 14,
    category: Category.tablets,
    model: 'Lenovo Tab M10 (3rd Gen) Wi-Fi 4/64GB Storm Grey (ZAAE0027UA)',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/d/d/ddce0d3c85da1f73d7087b84e851581f.jpg',
    rating: 5,
    bestSeller: true,
    totalPrice: 140,
    discountedPrice: 140,
    shortSpecs: [
      ['Display', 'WUXGA'],
      ['Screen Size', '10.1 inch'],
      ['Processor', 'Unisoc Tiger T610'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 15,
    category: Category.tablets,
    model: 'Samsung Galaxy Tab S8 11" 8/128GB Wi-Fi Dark Grey (SM-X700NZAASEK)',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/9/7/971d223601bf85a8e008b9241bfef060.jpg',
    rating: 4.8,
    bestSeller: true,
    totalPrice: 680,
    discountedPrice: 620,
    shortSpecs: [
      ['Display', 'WQXGA'],
      ['Screen Size', '11 inch'],
      ['Processor', 'Qualcomm Snapdragon 8 Gen 1'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '128 GB'],
    ],
  },
  {
    id: 16,
    category: Category.tablets,
    model: 'Apple iPad Pro 12.9" 128GB M2 Wi-Fi Space Gray (MNXP3) 2022',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1666951077-ipad-pro-q123-cellular-5g-12-9-in-6th-generation-space-gray-pdp-image-position-1b-wwce.jpg',
    rating: 5,
    bestSeller: false,
    totalPrice: 1360,
    discountedPrice: 1280,
    shortSpecs: [
      ['Display', 'Liquid Retina XDR'],
      ['Screen Size', '12.9 inch'],
      ['Processor', 'Apple M2'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '128 GB'],
    ],
  },
  {
    id: 17,
    category: Category.tablets,
    model: 'Apple iPad mini 8.3" 64GB Wi-Fi Space Gray (MK7M3) 2021',
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/a/1/a140b205d86f22cd67f394c9e0ebbe3e.jpg',
    rating: 4.8,
    bestSeller: false,
    totalPrice: 670,
    discountedPrice: 610,
    shortSpecs: [
      ['Display', 'Liquid Retina'],
      ['Screen Size', '8.3 inch'],
      ['Processor', 'Apple A15'],
      ['CPU Cores', '6'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 18,
    category: Category.tablets,
    model: `Apple iPad Air 10.9'' 64GB Wi-Fi Space Grey (MM9C3) 2022`,
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/d/3/d39d62d734897fb9eb3732905fc02682.jpg',
    rating: 4.6,
    bestSeller: false,
    totalPrice: 780,
    discountedPrice: 720,
    shortSpecs: [
      ['Display', 'Liquid Retina'],
      ['Screen Size', '10.9 inch'],
      ['Processor', 'Apple M1'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 19,
    category: Category.tablets,
    model: `Xiaomi Redmi Pad 3/64GB Moonlight Silver (VHU4206EU)`,
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1665064073-tablet-silver-7.jpg',
    rating: 4.3,
    bestSeller: false,
    totalPrice: 250,
    discountedPrice: 250,
    shortSpecs: [
      ['Display', '2K'],
      ['Screen Size', '10.61 inch'],
      ['Processor', 'MediaTek Helio G99'],
      ['CPU Cores', '8'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
  {
    id: 20,
    category: Category.tablets,
    model: `Xiaomi Redmi Pad 3/64GB Moonlight Silver (VHU4206EU)`,
    mainPhoto:
      'https://i.citrus.world/imgcache/size_180/uploads/shop/1/6/1665064073-tablet-silver-7.jpg',
    rating: 4.5,
    bestSeller: false,
    totalPrice: 890,
    discountedPrice: 800,
    shortSpecs: [
      ['Display', 'Ratina'],
      ['Screen Size', '10.2 inch'],
      ['Processor', 'Apple A13 Bionic'],
      ['CPU Cores', '6'],
      ['Memory Storage Capacity', '64 GB'],
    ],
  },
] as CatalogItem[];
