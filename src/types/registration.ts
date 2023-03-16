export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface BearerToken {
  name: string;
  token: string;
}

export interface ServerError {
  response?: {
    data?: {
      statusCode?: number;
      message?: string;
    };
  };
}

// export interface CheckoutProduct {
//   model: string;
//   number: number;
// }

export interface Cart {
  model: string;
  number: number;
}

export interface UserCart {
  liked: string[];
  cart: Cart[];
}
