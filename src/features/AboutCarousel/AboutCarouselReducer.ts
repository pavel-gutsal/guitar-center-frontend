import { createSlice } from '@reduxjs/toolkit';
import { isNil } from 'lodash';
import { Carousel } from '../../modules/Product/types';

const initialState: Carousel = {
  position: {
    prev: null,
    current: null,
    next: null,
  },
  index: {
    prev: null,
    current: null,
    next: null,
  },
  length: null,
};

export const aboutCarouselSlice = createSlice({
  name: 'aboutCarousel',
  initialState,
  reducers: {
    initialise: (state, action) => {
      state.position = { prev: -1, current: 0, next: 1 };
      state.index = { prev: action.payload.length - 1, current: 0, next: 1 };
      state.length = action.payload.length;
    },
    erase: (state) => {
      state.position = { prev: null, current: null, next: null };
      state.index = { prev: null, current: null, next: null };
      state.length = null;
    },
    moveForwardStart: (state) => {
      state.position = { prev: -2, current: -1, next: 0 };
    },
    moveBackwardStart: (state) => {
      state.position = { prev: 0, current: 1, next: 2 };
    },
    moveForwardFinish: (state) => {
      state.position = { prev: -1, current: 0, next: 1 };

      if (
        !isNil(state.index.current) &&
        !isNil(state.index.next) &&
        !isNil(state.length)
      ) {
        state.index = {
          prev: state.index.current,
          current: state.index.next,
          next: state.index.next >= state.length - 1 ? 0 : state.index.next + 1,
        };
      }
    },
    moveBackwardFinish: (state) => {
      state.position = { prev: -1, current: 0, next: 1 };
      if (
        !isNil(state.index.prev) &&
        !isNil(state.index.current) &&
        !isNil(state.length)
      ) {
        state.index = {
          prev:
            state.index.prev - 1 < 0 ? state.length - 1 : state.index.prev - 1,
          current: state.index.prev,
          next: state.index.current,
        };
      }
    },
    selectStart: (state, action) => {
      state.position = { prev: -2, current: -1, next: 0 };
      state.index.next = action.payload.next;
    },
    selectFinish: (state) => {
      if (state.index.next === 0 && !isNil(state.length)) {
        state.index = {
          prev: state.length - 1,
          current: 0,
          next: 1,
        };
      } else if (
        !isNil(state.length) &&
        !isNil(state.index.next) &&
        state.index.next === state.length - 1
      ) {
        state.index = {
          prev: state.length - 2,
          current: state.length - 1,
          next: 0,
        };
      } else {
        state.index = {
          prev: (state.index.next ?? 0) - 1,
          current: state.index.next ?? 0,
          next: (state.index.next ?? 0) + 1,
        };
      }

      state.position = { prev: -1, current: 0, next: 1 };
    },
  },
});

export const {
  initialise,
  erase,
  moveForwardStart,
  moveBackwardStart,
  moveForwardFinish,
  moveBackwardFinish,
  selectStart,
  selectFinish,
} = aboutCarouselSlice.actions;

export default aboutCarouselSlice.reducer;
