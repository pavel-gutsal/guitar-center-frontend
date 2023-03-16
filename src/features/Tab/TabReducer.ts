import { createSlice } from '@reduxjs/toolkit';
import { Tab } from '../../constants';

interface InitialState {
  tab: Tab;
}

const initialState: InitialState = {
  tab: Tab.ABOUT,
};

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.tab = action.payload;
    },
    resetTab: (state) => {
      state.tab = Tab.ABOUT;
    },
  },
});

export const { changeTab, resetTab } = tabSlice.actions;

export default tabSlice.reducer;
