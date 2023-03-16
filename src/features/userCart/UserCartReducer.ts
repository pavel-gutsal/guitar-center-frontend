import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '../../types';

interface InitialState {
  cartArray: Cart[] | null;
  likedArray: string[] | null;
  userCartExist: boolean;
}

const initialState: InitialState = {
  userCartExist: false,
  cartArray: null,
  likedArray: null,
};

export const userCartSlice = createSlice({
  name: 'userCart',
  initialState,
  reducers: {
    modifyCart: (state, action) => {
      const { exist, cart, liked } = action.payload;

      if (exist && cart && liked) {
        state.userCartExist = exist;
        state.cartArray = cart;
        state.likedArray = liked;
      }
    },
    toggleLike: (state, action) => {
      if (!state.likedArray || typeof action.payload !== 'string') return;
      const isLiked = state.likedArray.includes(action.payload);
      if (isLiked) {
        state.likedArray = state.likedArray.filter(
          (el) => el !== (action.payload as string)
        );
      } else {
        state.likedArray = [...state.likedArray, action.payload];
      }
    },
    toggleInCart: (state, action) => {
      if (!state.cartArray || typeof action.payload !== 'string') return;
      const inCart = state.cartArray.find((el) => el.model === action.payload);

      if (inCart) {
        state.cartArray = state.cartArray.filter(
          (el) => el.model !== (action.payload as string)
        );
      } else {
        state.cartArray = [
          ...state.cartArray,
          { model: action.payload, number: 1 },
        ];
      }
    },
    logoutCart: (state) => {
      state.userCartExist = false;
      state.cartArray = null;
      state.likedArray = null;
    },
  },
});

export const { modifyCart, logoutCart, toggleLike, toggleInCart } =
  userCartSlice.actions;

export default userCartSlice.reducer;
