import { createSlice } from '@reduxjs/toolkit';
import { Limit, SortBy } from '../../types';

interface InitialState {
  sortBy: SortBy;
  page: number;
  limit: Limit;
}

const initialState: InitialState = {
  sortBy: SortBy.NEWEST,
  page: 1,
  limit: Limit.SIXTEEN,
};

export const catalogueQuerySlice = createSlice({
  name: 'catalogueQuery',
  initialState,
  reducers: {
    dispatchSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.page = 1;
    },
    dispatchPage: (state, action) => {
      state.page = action.payload;
    },
    dispatchLimit: (state, action) => {
      state.limit = action.payload;
      state.page = 1;
    },
    reset: (state) => {
      state.sortBy = SortBy.NEWEST;
      state.page = 1;
      state.limit = Limit.SIXTEEN;
    },
  },
});

export const { dispatchSortBy, dispatchPage, dispatchLimit, reset } =
  catalogueQuerySlice.actions;

export default catalogueQuerySlice.reducer;
