export interface Store {
  city: string;
  street: string;
  openHours: {
    from: string;
    till: string;
  };
}

export interface DeliveryOption {
  icon: string;
  how: string;
  when: string;
  price: string;
}

export interface DeliveryServiceInfo {
  title: string;
  icon: string;
  when: string;
  price: string;
}
