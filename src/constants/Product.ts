import { IMAGES } from '../assets';

export enum Tab {
  ABOUT = 'About',
  SPECIFICATION = 'Specifications',
  REVIEWS = 'Reviews',
}

export const SpecsBriefDescription: {
  [key: string]: { [key: string]: string };
} = {
  Laptop: {
    diagonal: 'Screen size',
    gpu: 'Graphics processing unit',
    os: 'Operating system',
    processor: 'Processor (CPU)',
    ram: 'RAM capacity',
    memory: 'storage capacity',
  },
  Phone: {
    battery: 'Battery capacity',
    camera: 'Rear cameras',
    core: ' Number processor cores',
    diagonal: 'Screen size',
    selfieCamera: 'Front camera',
    processor: 'Processor',
  },
  Tablet: {
    screenType: 'Screen type',
    os: 'Operating system',
    processor: 'Processor',
    diagonal: 'Screen size',
    memory: 'storage capacity',
    ram: 'RAM capacity',
  },
};

export const LOCAL_STORES = [
  {
    city: 'Warsow',
    street: 'Kinowa 4',
    openHours: {
      from: '10:00',
      till: '20:00',
    },
  },
  {
    city: 'Warsow',
    street: 'Marszałkowska 85',
    openHours: {
      from: '10:00',
      till: '21:00',
    },
  },
  {
    city: 'Warsow',
    street: 'Grzybowska 36',
    openHours: {
      from: '10:00',
      till: '20:45',
    },
  },
  {
    city: 'Warsow',
    street: 'aleja Solidarnosci 93',
    openHours: {
      from: '10:00',
      till: '20:45',
    },
  },
  {
    city: 'Warsow',
    street: 'Zacisze 24',
    openHours: {
      from: '09:30',
      till: '19:45',
    },
  },
  {
    city: 'Warsow',
    street: 'Brzeziny 77',
    openHours: {
      from: '10:00',
      till: '20:30',
    },
  },
  {
    city: 'Kraków',
    street: 'Smoleńsk 44',
    openHours: {
      from: '09:45',
      till: '20:45',
    },
  },
  {
    city: 'Kraków',
    street: 'Nowa Wieś 31',
    openHours: {
      from: '10:30',
      till: '20:30',
    },
  },
];

export const deliveryOption = [
  {
    icon: IMAGES.DELIVERY.STORE,
    how: 'Pick up in store',
    when: 'pick up today',
    price: 'free',
  },
  {
    icon: IMAGES.DELIVERY.LOCAL_SHIPPING,
    how: 'Local shipping',
    when: 'delivered tomorrow',
    price: 'from 1$',
  },
  {
    icon: IMAGES.DELIVERY.MAP,
    how: 'Fulfilment center',
    when: 'delivered tomorrow',
    price: 'from 1$',
  },
];

export const deliveryServiceInfo = [
  {
    title: 'Stores`s courier',
    icon: IMAGES.DELIVERY.LOCAL_SHIPPING,
    when: 'Tomorrow',
    price: 'from 1$',
  },
  {
    title: 'FedEx courier',
    icon: IMAGES.DELIVERY.FEDEX,
    when: 'Tomorrow',
    price: 'from 1$',
  },
  {
    title: 'Parcel shop',
    icon: IMAGES.DELIVERY.GLS,
    when: 'Tomorrow',
    price: 'from 1$',
  },
  {
    title: 'UPS store',
    icon: IMAGES.DELIVERY.UPS,
    when: 'Tomorrow',
    price: 'from 1$',
  },
];
